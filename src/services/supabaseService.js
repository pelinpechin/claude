import { supabase, dbConfig } from '../config/supabase.js';

/**
 * Servicio para interactuar con Supabase
 * Maneja toda la lógica de base de datos para el sistema de tesorería
 */
export class SupabaseService {
  constructor() {
    this.isConnected = false;
    this.lastSync = null;
  }

  // =====================================================
  // CONEXIÓN Y ESTADO
  // =====================================================
  
  async checkConnection() {
    try {
      const { data, error } = await supabase
        .from(dbConfig.tables.settings)
        .select('key')
        .limit(1);
      
      this.isConnected = !error;
      return !error;
    } catch (error) {
      console.error('Error checking Supabase connection:', error);
      this.isConnected = false;
      return false;
    }
  }

  // =====================================================
  // ESTUDIANTES
  // =====================================================

  async getAllStudents() {
    try {
      const { data, error } = await supabase
        .from(dbConfig.tables.students)
        .select(`
          *,
          courses (
            name,
            level,
            monthly_fee
          )
        `)
        .order('student_name');

      if (error) throw error;
      
      // Convertir formato para compatibilidad con el sistema actual
      return data.map(student => this.formatStudentFromDB(student));
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  }

  async getStudentsByGrade(grade) {
    try {
      const { data, error } = await supabase
        .from(dbConfig.tables.students)
        .select('*')
        .eq('grade', grade)
        .order('student_name');

      if (error) throw error;
      return data.map(student => this.formatStudentFromDB(student));
    } catch (error) {
      console.error('Error fetching students by grade:', error);
      throw error;
    }
  }

  async addStudent(studentData) {
    try {
      // Formatear datos para la base de datos
      const dbStudent = this.formatStudentForDB(studentData);
      
      const { data, error } = await supabase
        .from(dbConfig.tables.students)
        .insert([dbStudent])
        .select()
        .single();

      if (error) throw error;
      return this.formatStudentFromDB(data);
    } catch (error) {
      console.error('Error adding student:', error);
      throw error;
    }
  }

  async updateStudent(studentId, updates) {
    try {
      const dbUpdates = this.formatStudentForDB(updates);
      
      const { data, error } = await supabase
        .from(dbConfig.tables.students)
        .update(dbUpdates)
        .eq('id', studentId)
        .select()
        .single();

      if (error) throw error;
      return this.formatStudentFromDB(data);
    } catch (error) {
      console.error('Error updating student:', error);
      throw error;
    }
  }

  async deleteStudent(studentId) {
    try {
      const { error } = await supabase
        .from(dbConfig.tables.students)
        .delete()
        .eq('id', studentId);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error deleting student:', error);
      throw error;
    }
  }

  // =====================================================
  // PAGOS
  // =====================================================

  async recordPayment(studentId, paymentData) {
    try {
      // Registrar el pago
      const { data: payment, error: paymentError } = await supabase
        .from(dbConfig.tables.payments)
        .insert([{
          student_id: studentId,
          amount: paymentData.amount,
          payment_date: paymentData.date,
          concept: paymentData.concept,
          payment_method: paymentData.method,
          notes: paymentData.notes || null
        }])
        .select()
        .single();

      if (paymentError) throw paymentError;

      // Actualizar el balance del estudiante
      await this.updateStudentBalance(studentId);

      return payment;
    } catch (error) {
      console.error('Error recording payment:', error);
      throw error;
    }
  }

  async getPaymentHistory(studentId) {
    try {
      const { data, error } = await supabase
        .from(dbConfig.tables.payments)
        .select('*')
        .eq('student_id', studentId)
        .order('payment_date', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching payment history:', error);
      throw error;
    }
  }

  async updateStudentBalance(studentId) {
    try {
      // Calcular total pagado
      const { data: payments } = await supabase
        .from(dbConfig.tables.payments)
        .select('amount')
        .eq('student_id', studentId);

      const totalPaid = payments?.reduce((sum, p) => sum + p.amount, 0) || 0;

      // Obtener datos del estudiante
      const { data: student } = await supabase
        .from(dbConfig.tables.students)
        .select('total_annual_fee, scholarship_amount')
        .eq('id', studentId)
        .single();

      if (student) {
        const totalDue = (student.total_annual_fee || 0) - (student.scholarship_amount || 0);
        const balance = Math.max(0, totalDue - totalPaid);
        const installmentsPaid = Math.floor(totalPaid / (student.monthly_fee || 1));

        // Determinar estado
        let status = 'pending';
        if (student.has_full_scholarship) {
          status = 'scholarship';
        } else if (balance === 0) {
          status = 'paid';
        } else if (installmentsPaid < this.getExpectedInstallments()) {
          status = 'overdue';
        }

        // Actualizar estudiante
        await supabase
          .from(dbConfig.tables.students)
          .update({
            total_paid: totalPaid,
            balance: balance,
            installments_paid: installmentsPaid,
            status: status,
            last_payment_date: payments?.[0]?.payment_date || null
          })
          .eq('id', studentId);
      }
    } catch (error) {
      console.error('Error updating student balance:', error);
      throw error;
    }
  }

  // =====================================================
  // CURSOS
  // =====================================================

  async getAllCourses() {
    try {
      const { data, error } = await supabase
        .from(dbConfig.tables.courses)
        .select('*')
        .order('name');

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  }

  async createCourse(courseData) {
    try {
      const { data, error } = await supabase
        .from(dbConfig.tables.courses)
        .insert([courseData])
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating course:', error);
      throw error;
    }
  }

  // =====================================================
  // IMPORTACIÓN MASIVA
  // =====================================================

  async importStudentsBulk(studentsData) {
    try {
      console.log(`Importando ${studentsData.length} estudiantes a Supabase...`);

      // Limpiar datos existentes
      await this.clearAllStudents();

      // Preparar datos para inserción
      const dbStudents = studentsData.map(student => this.formatStudentForDB(student));

      // Insertar en lotes de 100 (límite de Supabase)
      const batchSize = 100;
      const results = [];

      for (let i = 0; i < dbStudents.length; i += batchSize) {
        const batch = dbStudents.slice(i, i + batchSize);
        
        const { data, error } = await supabase
          .from(dbConfig.tables.students)
          .insert(batch)
          .select();

        if (error) throw error;
        results.push(...data);
      }

      // Actualizar configuración de última importación
      await this.updateSetting('last_csv_import', new Date().toISOString());

      console.log(`✅ Importados ${results.length} estudiantes exitosamente`);
      return results;
    } catch (error) {
      console.error('Error in bulk import:', error);
      throw error;
    }
  }

  async clearAllStudents() {
    try {
      const { error } = await supabase
        .from(dbConfig.tables.students)
        .delete()
        .gte('id', 0); // Eliminar todos

      if (error) throw error;
      console.log('✅ Todos los estudiantes eliminados de Supabase');
    } catch (error) {
      console.error('Error clearing students:', error);
      throw error;
    }
  }

  // =====================================================
  // CONFIGURACIONES
  // =====================================================

  async getSetting(key) {
    try {
      const { data, error } = await supabase
        .from(dbConfig.tables.settings)
        .select('value')
        .eq('key', key)
        .single();

      if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows
      return data?.value || null;
    } catch (error) {
      console.error(`Error getting setting ${key}:`, error);
      return null;
    }
  }

  async updateSetting(key, value) {
    try {
      const { error } = await supabase
        .from(dbConfig.tables.settings)
        .upsert([{ key, value }]);

      if (error) throw error;
    } catch (error) {
      console.error(`Error updating setting ${key}:`, error);
      throw error;
    }
  }

  // =====================================================
  // UTILIDADES DE FORMATO
  // =====================================================

  formatStudentFromDB(dbStudent) {
    return {
      id: dbStudent.id,
      rut: dbStudent.rut,
      studentName: dbStudent.student_name,
      birthDate: dbStudent.birth_date,
      sex: dbStudent.sex,
      enrollmentDate: dbStudent.enrollment_date,
      guardianName: dbStudent.guardian_name,
      guardianRut: dbStudent.guardian_rut,
      guardianPhone: dbStudent.guardian_phone,
      guardianEmail: dbStudent.guardian_email,
      guardianAddress: dbStudent.guardian_address,
      grade: dbStudent.grade,
      monthlyFee: dbStudent.monthly_fee,
      totalAnnualFee: dbStudent.total_annual_fee,
      scholarshipAmount: dbStudent.scholarship_amount,
      scholarshipPercentage: dbStudent.scholarship_percentage,
      scholarshipType: dbStudent.scholarship_type,
      hasFullScholarship: dbStudent.has_full_scholarship,
      status: dbStudent.status,
      balance: dbStudent.balance,
      totalPaid: dbStudent.total_paid,
      cuotasPagadas: dbStudent.installments_paid,
      lastPayment: dbStudent.last_payment_date,
      dueDate: dbStudent.due_date,
      paymentHistory: [] // Se carga por separado si es necesario
    };
  }

  formatStudentForDB(student) {
    return {
      rut: student.rut,
      student_name: student.studentName,
      birth_date: student.birthDate,
      sex: student.sex,
      enrollment_date: student.enrollmentDate || student.admissionDate,
      guardian_name: student.guardianName,
      guardian_rut: student.guardianRut,
      guardian_phone: student.guardianPhone,
      guardian_email: student.guardianEmail,
      guardian_address: student.guardianAddress,
      grade: student.grade,
      monthly_fee: student.monthlyFee,
      total_annual_fee: student.totalAnnualFee,
      scholarship_amount: student.scholarshipAmount || 0,
      scholarship_percentage: student.scholarshipPercentage || 0,
      scholarship_type: student.scholarshipType || 'Sin beca',
      has_full_scholarship: student.hasFullScholarship || false,
      status: student.status || 'pending',
      balance: student.balance || 0,
      total_paid: student.totalPagado || 0,
      installments_paid: student.cuotasPagadas || 0,
      last_payment_date: student.lastPayment,
      due_date: student.dueDate
    };
  }

  getExpectedInstallments() {
    const now = new Date();
    const month = now.getMonth(); // 0-based
    // Marzo = 2, entonces cuotas esperadas = month - 1 (máximo 10)
    return Math.min(Math.max(0, month - 1), 10);
  }
}

// Instancia singleton
export const supabaseService = new SupabaseService();