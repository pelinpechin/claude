import { supabase } from '../config/supabase.js';
import { csvDataService } from './csvDataService.js';

/**
 * Servicio que integra datos de múltiples fuentes
 * Prioriza Supabase, pero mantiene compatibilidad con datos CSV locales
 */
export class DataIntegrationService {
  constructor() {
    this.dataSource = 'checking';
    this.students = [];
    this.payments = [];
    this.isSupabaseConnected = false;
  }

  // Inicializar el servicio y determinar fuente de datos
  async initialize() {
    console.log('🔄 Inicializando servicio de datos...');
    
    // Intentar conectar con Supabase primero
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('students')
          .select('count(*)')
          .limit(1);
        
        if (!error && data) {
          this.isSupabaseConnected = true;
          this.dataSource = 'supabase';
          console.log('✅ Conectado a Supabase');
          await this.loadFromSupabase();
          return;
        }
      } catch (error) {
        console.log('⚠️ Supabase no disponible, usando datos locales');
      }
    }

    // Fallback a datos CSV locales
    this.dataSource = 'csv';
    console.log('📄 Usando datos CSV locales');
    await this.loadFromCSV();
  }

  // Cargar datos desde Supabase
  async loadFromSupabase() {
    try {
      // Cargar estudiantes con sus pagos
      const { data: studentsData, error: studentsError } = await supabase
        .from('students')
        .select('*')
        .order('nombre');

      if (studentsError) throw studentsError;

      // Cargar todos los pagos
      const { data: paymentsData, error: paymentsError } = await supabase
        .from('payments')
        .select('*')
        .order('fecha_pago');

      if (paymentsError) throw paymentsError;

      this.students = studentsData.map(student => this.formatStudentFromSupabase(student));
      this.payments = paymentsData || [];

      // Enriquecer estudiantes con historial de pagos
      this.enrichStudentsWithPayments();

      console.log(`✅ Cargados ${this.students.length} estudiantes y ${this.payments.length} pagos desde Supabase`);
    } catch (error) {
      console.error('Error cargando desde Supabase:', error);
      await this.loadFromCSV(); // Fallback
    }
  }

  // Cargar datos desde CSV local (fallback)
  async loadFromCSV() {
    try {
      await csvDataService.loadData();
      this.students = csvDataService.getStudents();
      this.payments = [];
      
      // Extraer todos los pagos de los estudiantes
      this.students.forEach(student => {
        if (student.paymentHistory) {
          student.paymentHistory.forEach(payment => {
            this.payments.push({
              ...payment,
              student_rut: student.rut
            });
          });
        }
      });
      
      console.log(`✅ Cargados ${this.students.length} estudiantes desde CSV local`);
    } catch (error) {
      console.error('Error cargando CSV:', error);
      this.students = [];
      this.payments = [];
    }
  }

  // Formatear estudiante desde Supabase
  formatStudentFromSupabase(dbStudent) {
    return {
      id: dbStudent.id,
      rut: dbStudent.rut,
      studentName: dbStudent.nombre,
      guardianName: 'Apoderado ' + dbStudent.nombre.split(' ')[0], // Generar nombre de apoderado
      grade: dbStudent.curso,
      monthlyFee: Math.round(dbStudent.arancel_anual / 10), // Arancel mensual
      totalAnnualFee: dbStudent.arancel_anual,
      scholarshipAmount: dbStudent.monto_beca || 0,
      totalPaid: dbStudent.total_pagado || 0,
      pendingAmount: dbStudent.saldo_pendiente || 0,
      status: this.calculateStatus(dbStudent),
      paymentHistory: [], // Se llenará después
      phone: this.generatePhone(), // Generar teléfono ficticio
      email: this.generateEmail(dbStudent.nombre),
      hasFullScholarship: (dbStudent.monto_beca || 0) >= (dbStudent.arancel_anual || 0)
    };
  }

  // Calcular estado basado en datos reales
  calculateStatus(student) {
    const arancel = student.arancel_anual || 0;
    const beca = student.monto_beca || 0;
    const pagado = student.total_pagado || 0;
    const saldoPendiente = student.saldo_pendiente || 0;

    // Si tiene beca completa
    if (beca >= arancel) {
      return 'scholarship';
    }

    // Si no debe nada
    if (saldoPendiente === 0 && pagado > 0) {
      return 'paid';
    }

    // Si ha pagado algo pero debe
    if (pagado > 0 && saldoPendiente > 0) {
      return 'pending';
    }

    // Si no ha pagado nada
    return 'overdue';
  }

  // Enriquecer estudiantes con historial de pagos
  enrichStudentsWithPayments() {
    this.students.forEach(student => {
      // Buscar pagos de este estudiante
      const studentPayments = this.payments.filter(
        payment => payment.student_rut === student.rut
      );

      // Formatear historial de pagos
      student.paymentHistory = studentPayments.map(payment => ({
        id: payment.id,
        amount: payment.monto,
        date: payment.fecha_pago,
        concept: payment.concepto || `Cuota ${payment.numero_cuota}`,
        method: payment.metodo_pago || 'Efectivo',
        installmentNumber: payment.numero_cuota
      })).sort((a, b) => new Date(b.date) - new Date(a.date));

      // Recalcular totales basado en pagos reales
      const realTotalPaid = student.paymentHistory.reduce(
        (sum, payment) => sum + payment.amount, 0
      );

      // Actualizar totales si hay discrepancia
      if (realTotalPaid !== student.totalPaid) {
        student.totalPaid = realTotalPaid;
        student.pendingAmount = Math.max(0, 
          (student.totalAnnualFee - student.scholarshipAmount) - realTotalPaid
        );
      }
    });
  }

  // Verificar si los datos están disponibles
  hasData() {
    return this.students && this.students.length > 0;
  }

  // Generar datos auxiliares
  generatePhone() {
    const prefixes = ['+56 9', '+56 2'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const number = Math.floor(Math.random() * 90000000) + 10000000;
    return `${prefix} ${number}`;
  }

  generateEmail(name) {
    const firstName = name.split(' ')[0].toLowerCase();
    const lastName = name.split(' ')[1]?.toLowerCase() || 'familia';
    const domains = ['gmail.com', 'hotmail.com', 'yahoo.com'];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${firstName}.${lastName}@${domain}`;
  }

  // API pública del servicio
  getStudents() {
    return this.students;
  }

  getPayments() {
    return this.payments;
  }

  getStudentByRut(rut) {
    return this.students.find(student => student.rut === rut);
  }

  getPaymentHistory(studentRut) {
    const student = this.getStudentByRut(studentRut);
    return student?.paymentHistory || [];
  }

  getDataSource() {
    return this.dataSource;
  }

  isConnectedToSupabase() {
    return this.isSupabaseConnected;
  }

  // Registrar nuevo pago
  async recordPayment(paymentData) {
    if (this.isSupabaseConnected) {
      try {
        const { data, error } = await supabase
          .from('payments')
          .insert([{
            student_rut: paymentData.studentRut,
            numero_cuota: paymentData.installmentNumber || null,
            monto: parseInt(paymentData.amount),
            fecha_pago: paymentData.date,
            concepto: paymentData.concept,
            metodo_pago: paymentData.method || 'Efectivo'
          }])
          .select()
          .single();

        if (error) throw error;

        // Actualizar datos locales
        await this.loadFromSupabase();
        return { success: true, payment: data };
      } catch (error) {
        console.error('Error registrando pago:', error);
        return { success: false, error: error.message };
      }
    } else {
      // Modo local - usar el servicio CSV
      const result = csvDataService.addPayment(paymentData.studentRut, {
        amount: paymentData.amount,
        date: paymentData.date,
        concept: paymentData.concept,
        method: paymentData.method,
        installmentNumber: paymentData.installmentNumber
      });

      if (result.success) {
        // Actualizar datos locales
        this.students = csvDataService.getStudents();
      }

      return result;
    }
  }

  // Estadísticas
  getStatistics() {
    if (this.isSupabaseConnected) {
      const totalStudents = this.students.length;
      const totalCollected = this.students.reduce(
        (sum, student) => sum + student.totalPaid, 0
      );
      const totalPending = this.students.reduce(
        (sum, student) => sum + student.pendingAmount, 0
      );
      
      const studentsUpToDate = this.students.filter(s => s.status === 'paid').length;
      const studentsPending = this.students.filter(s => s.status === 'pending').length;
      const studentsOverdue = this.students.filter(s => s.status === 'overdue').length;
      const studentsWithScholarship = this.students.filter(s => s.status === 'scholarship').length;

      return {
        totalStudents,
        totalCollected,
        totalPending,
        studentsUpToDate,
        studentsPending,
        studentsOverdue,
        studentsWithScholarship,
        dataSource: this.dataSource,
        isSupabaseConnected: this.isSupabaseConnected
      };
    } else {
      // Usar estadísticas del servicio CSV
      return csvDataService.getStatistics();
    }
  }
}

// Instancia singleton
export const dataIntegrationService = new DataIntegrationService();