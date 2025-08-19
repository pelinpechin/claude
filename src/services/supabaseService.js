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
      // Si supabase es null, no está configurado
      if (!supabase) {
        this.isConnected = false;
        return false;
      }

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

  async getStudents() {
    try {
      if (!supabase) {
        console.warn('Supabase no configurado, retornando array vacío');
        return [];
      }

      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('nombre');

      if (error) {
        console.error('Error fetching students from Supabase:', error);
        return [];
      }
      
      // Convertir formato de Supabase al formato esperado por la aplicación
      return data.map(student => ({
        id: student.id,
        rut: student.rut,
        studentName: student.nombre,
        guardianName: 'Apoderado', // Campo que se puede mejorar
        grade: student.curso,
        status: this.calculateStatus(student),
        totalPaid: student.total_pagado || 0,
        pendingAmount: student.saldo_pendiente || 0,
        monthlyFee: Math.round((student.arancel_anual - student.monto_beca) / 10),
        phone: student.telefono || '',
        email: student.email || ''
      }));
    } catch (error) {
      console.error('Error fetching students:', error);
      return [];
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

  async createPayment(paymentData) {
    try {
      if (!supabase) {
        throw new Error('Supabase no configurado');
      }

      const { data: payment, error: paymentError } = await supabase
        .from('payments')
        .insert([{
          student_rut: paymentData.studentRut,
          numero_cuota: paymentData.month || 1,
          monto: parseInt(paymentData.amount),
          fecha_pago: paymentData.paymentDate,
          concepto: paymentData.concept,
          metodo_pago: paymentData.method || 'Efectivo'
        }])
        .select()
        .single();

      if (paymentError) throw paymentError;

      // Actualizar totales del estudiante
      await this.updateStudentTotals(paymentData.studentRut);

      return payment;
    } catch (error) {
      console.error('Error creating payment:', error);
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

  async updateStudentTotals(studentRut) {
    try {
      // Calcular total pagado
      const { data: payments } = await supabase
        .from('payments')
        .select('monto')
        .eq('student_rut', studentRut);

      const totalPaid = payments?.reduce((sum, p) => sum + (p.monto || 0), 0) || 0;

      // Obtener datos del estudiante
      const { data: student } = await supabase
        .from('students')
        .select('arancel_anual, monto_beca')
        .eq('rut', studentRut)
        .single();

      if (student) {
        const totalDue = (student.arancel_anual || 0) - (student.monto_beca || 0);
        const balance = Math.max(0, totalDue - totalPaid);
        
        // Determinar estado
        let status = 'pendiente';
        if (student.monto_beca >= student.arancel_anual) {
          status = 'beca_completa';
        } else if (balance === 0) {
          status = 'al_dia';
        } else if (totalPaid > 0) {
          status = 'parcial';
        }

        // Actualizar estudiante
        await supabase
          .from('students')
          .update({
            total_pagado: totalPaid,
            saldo_pendiente: balance,
            estado_pago: status,
            updated_at: new Date().toISOString()
          })
          .eq('rut', studentRut);
      }
    } catch (error) {
      console.error('Error updating student totals:', error);
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

  calculateStatus(student) {
    if (!student) return 'pendiente';
    
    const arancel = student.arancel_anual || 0;
    const beca = student.monto_beca || 0;
    const pagado = student.total_pagado || 0;
    
    // Si tiene beca completa
    if (beca >= arancel) {
      return 'scholarship';
    }
    
    const totalDue = arancel - beca;
    const balance = totalDue - pagado;
    
    if (balance <= 0) {
      return 'paid';
    } else if (pagado > 0) {
      return 'pending';
    } else {
      return 'overdue';
    }
  }

  async updatePayment(studentRut, paymentData) {
    try {
      const result = await this.createPayment({
        studentRut,
        ...paymentData
      });
      return { success: true, payment: result };
    } catch (error) {
      console.error('Error updating payment:', error);
      return { success: false, error: error.message };
    }
  }

  async getPaymentHistory(studentRut) {
    try {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('student_rut', studentRut)
        .order('fecha_pago', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching payment history:', error);
      return [];
    }
  }
}

// Instancia singleton
export const supabaseService = new SupabaseService();