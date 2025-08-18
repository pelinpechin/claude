// Servicio para manejo de datos, actualizaciones y exportaciones
import { 
  getAllStudents, 
  getStudentsByGrade, 
  updatePaymentStatus, 
  addNewStudent,
  exportUpdatedData,
  getAllCourses,
  getGradeStats,
  schoolConfig
} from '../data/database.js';

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
    
    const totalRevenue = allStudents.reduce((sum, s) => sum + (s.monthlyFee - s.balance), 0);
    const totalPending = allStudents.reduce((sum, s) => sum + s.balance, 0);
    const totalPotentialRevenue = allStudents.reduce((sum, s) => sum + s.monthlyFee, 0);

    return {
      totalStudents,
      paidStudents,
      pendingStudents,
      overdueStudents,
      totalRevenue,
      totalPending,
      totalPotentialRevenue,
      collectionRate: totalPotentialRevenue > 0 ? Math.round((totalRevenue / totalPotentialRevenue) * 100) : 0,
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
      'Fecha Vencimiento',
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
}

// Instancia singleton del servicio
export const dataService = new DataService();
export default dataService;