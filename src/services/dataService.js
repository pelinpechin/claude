// Servicio para manejo de datos, actualizaciones y exportaciones
import { 
  getAllStudents, 
  getStudentsByGrade, 
  updatePaymentStatus, 
  addNewStudent,
  deleteStudent,
  exportUpdatedData,
  getAllCourses,
  getGradeStats,
  schoolConfig
} from '../data/realDatabase.js';
import { csvService } from './csvService.js';

class DataService {
  constructor() {
    this.listeners = [];
    this.lastUpdate = new Date();
  }

  // Suscribirse a cambios en los datos
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  // Notificar a todos los suscriptores sobre cambios
  notify(change) {
    this.lastUpdate = new Date();
    this.listeners.forEach(listener => listener(change));
  }

  // Obtener todos los estudiantes
  getAllStudents() {
    return getAllStudents();
  }

  // Obtener estudiantes por curso
  getStudentsByGrade(grade) {
    return getStudentsByGrade(grade);
  }

  // Obtener todos los cursos
  getAllCourses() {
    return getAllCourses();
  }

  // Obtener estadísticas por curso
  getGradeStats(grade) {
    return getGradeStats(grade);
  }

  // Registrar nuevo pago
  recordPayment(studentId, paymentData) {
    const success = updatePaymentStatus(studentId, paymentData);
    if (success) {
      this.notify({
        type: 'PAYMENT_RECORDED',
        studentId,
        payment: paymentData,
        timestamp: new Date().toISOString()
      });
    }
    return success;
  }

  // Agregar nuevo estudiante
  addStudent(grade, studentData) {
    try {
      const newStudent = addNewStudent(grade, studentData);
      this.notify({
        type: 'STUDENT_ADDED',
        student: newStudent,
        grade,
        timestamp: new Date().toISOString()
      });
      return newStudent;
    } catch (error) {
      console.error('Error adding student:', error);
      return null;
    }
  }

  // Eliminar estudiante
  deleteStudent(studentId) {
    try {
      const result = deleteStudent(studentId);
      if (result.success) {
        this.notify({
          type: 'STUDENT_DELETED',
          studentId,
          deletedStudent: result.deletedStudent,
          grade: result.grade,
          timestamp: new Date().toISOString()
        });
      }
      return result;
    } catch (error) {
      console.error('Error deleting student:', error);
      return {
        success: false,
        error: 'Error interno al eliminar estudiante'
      };
    }
  }

  // Buscar estudiantes
  searchStudents(searchTerm) {
    const allStudents = this.getAllStudents();
    const term = searchTerm.toLowerCase();
    
    return allStudents.filter(student => 
      student.studentName.toLowerCase().includes(term) ||
      student.guardianName.toLowerCase().includes(term) ||
      student.rut.includes(term) ||
      student.guardianRut.includes(term) ||
      student.grade.toLowerCase().includes(term)
    );
  }

  // Filtrar estudiantes por estado
  filterByStatus(status) {
    return this.getAllStudents().filter(student => student.status === status);
  }

  // Obtener estadísticas generales
  getGeneralStats() {
    const allStudents = this.getAllStudents();
    const totalStudents = allStudents.length;
    const paidStudents = allStudents.filter(s => s.status === 'paid').length;
    const pendingStudents = allStudents.filter(s => s.status === 'pending').length;
    const overdueStudents = allStudents.filter(s => s.status === 'overdue').length;
    const scholarshipStudents = allStudents.filter(s => s.status === 'scholarship' || s.hasFullScholarship).length;
    
    const totalRevenue = allStudents.reduce((sum, s) => sum + (s.totalPagado || (s.monthlyFee - s.balance)), 0);
    const totalPending = allStudents.reduce((sum, s) => sum + s.balance, 0);
    const totalPotentialRevenue = allStudents.reduce((sum, s) => sum + s.monthlyFee, 0);
    const totalScholarships = allStudents.reduce((sum, s) => sum + (s.scholarshipAmount || 0), 0);

    return {
      totalStudents,
      paidStudents,
      pendingStudents,
      overdueStudents,
      scholarshipStudents,
      totalRevenue,
      totalPending,
      totalPotentialRevenue,
      totalScholarships,
      collectionRate: totalPotentialRevenue > 0 ? Math.round((totalRevenue / totalPotentialRevenue) * 100) : 0,
      scholarshipRate: totalStudents > 0 ? Math.round((scholarshipStudents / totalStudents) * 100) : 0,
      lastUpdate: this.lastUpdate
    };
  }

  // Exportar datos en diferentes formatos
  exportData(format = 'json', filters = {}) {
    const exportData = exportUpdatedData();
    let filteredData = exportData.allStudents;

    // Aplicar filtros
    if (filters.grade) {
      filteredData = filteredData.filter(s => s.grade === filters.grade);
    }
    if (filters.status) {
      filteredData = filteredData.filter(s => s.status === filters.status);
    }
    if (filters.dateFrom) {
      filteredData = filteredData.filter(s => s.lastPayment >= filters.dateFrom);
    }
    if (filters.dateTo) {
      filteredData = filteredData.filter(s => s.lastPayment <= filters.dateTo);
    }

    switch (format.toLowerCase()) {
      case 'csv':
        return this.exportToCSV(filteredData, filters);
      case 'excel':
        return this.exportToExcel(filteredData, filters);
      case 'json':
        return {
          ...exportData,
          filteredStudents: filteredData,
          appliedFilters: filters
        };
      default:
        throw new Error(`Formato de exportación no soportado: ${format}`);
    }
  }

  // Exportar a CSV
  exportToCSV(data, filters = {}) {
    const headers = [
      'RUT Estudiante',
      'Nombre Estudiante',
      'Fecha Nacimiento',
      'Curso',
      'RUT Apoderado',
      'Nombre Apoderado',
      'Teléfono',
      'Email',
      'Dirección',
      'Mensualidad',
      'Beca %',
      'Estado',
      'Saldo Pendiente',
      'Último Pago',
      'Método Último Pago'
    ];

    const csvContent = [
      headers.join(','),
      ...data.map(student => [
        student.rut,
        `"${student.studentName}"`,
        student.birthDate,
        `"${student.grade}"`,
        student.guardianRut,
        `"${student.guardianName}"`,
        student.guardianPhone,
        student.guardianEmail,
        `"${student.guardianAddress}"`,
        student.monthlyFee,
        student.scholarshipPercentage || 0,
        student.status === 'paid' ? 'Al Día' : 
        student.status === 'pending' ? 'Pendiente' : 'Vencido',
        student.balance,
        student.lastPayment,
        student.dueDate,
        student.paymentHistory.length > 0 ? student.paymentHistory[0].method : ''
      ].join(','))
    ].join('\n');

    return {
      content: csvContent,
      filename: `tesoreria_${schoolConfig.name.replace(/\s/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`,
      mimeType: 'text/csv;charset=utf-8;'
    };
  }

  // Exportar datos de curso específico
  exportGradeData(grade) {
    const students = this.getStudentsByGrade(grade);
    const stats = this.getGradeStats(grade);
    
    const csvData = this.exportToCSV(students.map(s => ({ ...s, grade })));
    
    return {
      grade,
      students,
      stats,
      csvExport: csvData
    };
  }

  // Generar reporte mensual
  generateMonthlyReport(year, month) {
    const allStudents = this.getAllStudents();
    const startDate = `${year}-${month.toString().padStart(2, '0')}-01`;
    const endDate = new Date(year, month, 0).toISOString().split('T')[0];

    const paymentsInMonth = allStudents.filter(student => 
      student.paymentHistory.some(payment => 
        payment.date >= startDate && payment.date <= endDate
      )
    );

    const totalCollected = allStudents.reduce((sum, student) => {
      const monthPayments = student.paymentHistory.filter(payment =>
        payment.date >= startDate && payment.date <= endDate
      );
      return sum + monthPayments.reduce((pSum, payment) => pSum + payment.amount, 0);
    }, 0);

    return {
      period: `${year}-${month.toString().padStart(2, '0')}`,
      totalStudents: allStudents.length,
      studentsWhoPaid: paymentsInMonth.length,
      totalCollected,
      collectionRate: Math.round((paymentsInMonth.length / allStudents.length) * 100),
      paymentsDetail: paymentsInMonth,
      generatedAt: new Date().toISOString()
    };
  }

  // Descargar archivo
  downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }

  // Cargar datos desde CSV e integrarlos en la base de datos
  async loadCSVData() {
    try {
      const csvStudents = await csvService.loadCSVData();
      
      if (csvStudents.length > 0) {
        // Organizar estudiantes por curso
        const studentsByGrade = {};
        csvStudents.forEach(student => {
          if (!studentsByGrade[student.grade]) {
            studentsByGrade[student.grade] = [];
          }
          studentsByGrade[student.grade].push(student);
        });
        
        // Importar directamente a la base de datos
        const { importCSVStudents } = await import('../data/realDatabase.js');
        if (importCSVStudents) {
          importCSVStudents(studentsByGrade);
        }
        
        this.notify({
          type: 'CSV_LOADED',
          studentsCount: csvStudents.length,
          coursesCount: Object.keys(studentsByGrade).length,
          timestamp: new Date().toISOString()
        });
        
        console.log(`Integrados ${csvStudents.length} estudiantes del CSV en ${Object.keys(studentsByGrade).length} cursos`);
      }
      return csvStudents;
    } catch (error) {
      console.error('Error cargando datos CSV:', error);
      return [];
    }
  }

  // Procesar archivo CSV subido por el usuario
  async processUploadedCSV(file) {
    try {
      const students = await csvService.processCSVFile(file);
      const validation = csvService.validateCSVData(students);
      
      this.notify({
        type: 'CSV_PROCESSED',
        studentsCount: students.length,
        errors: validation.errors,
        warnings: validation.warnings,
        timestamp: new Date().toISOString()
      });

      return {
        students,
        validation
      };
    } catch (error) {
      console.error('Error procesando archivo CSV:', error);
      throw error;
    }
  }

  // Obtener estadísticas de becas
  getScholarshipStats() {
    const allStudents = this.getAllStudents();
    return csvService.getScholarshipStats(allStudents);
  }

  // Obtener estadísticas de cuotas
  getPaymentStats() {
    const allStudents = this.getAllStudents();
    return csvService.getPaymentStats(allStudents);
  }

  // Generar reporte de becas
  generateScholarshipReport() {
    const allStudents = this.getAllStudents();
    return csvService.generateScholarshipReport(allStudents);
  }
}

// Instancia singleton del servicio
export const dataService = new DataService();
export default dataService;