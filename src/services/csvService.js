import { parseCSVStudentData } from '../utils/csvParser';

export const csvService = {
  // Cargar datos desde el archivo CSV
  async loadCSVData() {
    try {
      // Intentar cargar el archivo Libro2.csv
      const response = await fetch('/Libro2.csv');
      if (!response.ok) {
        throw new Error('No se pudo cargar el archivo CSV');
      }
      
      const csvContent = await response.text();
      const students = parseCSVStudentData(csvContent);
      
      console.log(`Cargados ${students.length} estudiantes desde CSV`);
      return students;
    } catch (error) {
      console.error('Error cargando CSV:', error);
      return [];
    }
  },

  // Procesar archivo CSV desde input file
  processCSVFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        try {
          const csvContent = event.target.result;
          const students = parseCSVStudentData(csvContent);
          resolve(students);
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = () => reject(new Error('Error leyendo archivo'));
      reader.readAsText(file, 'UTF-8');
    });
  },

  // Obtener estadísticas de becas
  getScholarshipStats(students) {
    const scholarshipStudents = students.filter(s => s.hasFullScholarship);
    const totalSavings = scholarshipStudents.reduce((sum, student) => {
      return sum + (student.scholarshipAmount || student.totalAnnualFee || student.monthlyFee * 10);
    }, 0);

    const byGrade = {};
    scholarshipStudents.forEach(student => {
      const grade = student.grade;
      if (!byGrade[grade]) {
        byGrade[grade] = 0;
      }
      byGrade[grade]++;
    });

    return {
      total: scholarshipStudents.length,
      totalSavings,
      byGrade,
      percentage: students.length > 0 ? (scholarshipStudents.length / students.length * 100).toFixed(1) : 0
    };
  },

  // Obtener estadísticas de cuotas
  getPaymentStats(students) {
    const stats = {
      totalStudents: students.length,
      cuotasPagadas: {},
      totalRecaudado: 0,
      totalPendiente: 0
    };

    // Inicializar contadores de cuotas
    for (let i = 0; i <= 10; i++) {
      stats.cuotasPagadas[i] = 0;
    }

    students.forEach(student => {
      const cuotasPagadas = student.cuotasPagadas || 0;
      stats.cuotasPagadas[cuotasPagadas]++;
      
      stats.totalRecaudado += student.totalPagado || 0;
      stats.totalPendiente += student.balance || 0;
    });

    return stats;
  },

  // Validar datos del CSV
  validateCSVData(students) {
    const errors = [];
    const warnings = [];

    students.forEach((student, index) => {
      // Validaciones críticas
      if (!student.studentName || student.studentName.length < 3) {
        errors.push(`Fila ${index + 1}: Nombre de estudiante inválido`);
      }
      
      if (!student.rut || !/^\d{1,2}\.\d{3}\.\d{3}-[\dKk]$/.test(student.rut)) {
        errors.push(`Fila ${index + 1}: RUT inválido (${student.rut})`);
      }
      
      if (!student.grade) {
        errors.push(`Fila ${index + 1}: Curso no especificado`);
      }

      // Validaciones de advertencia
      if (!student.guardianPhone || student.guardianPhone === '+56 9 0000 0000') {
        warnings.push(`Fila ${index + 1}: Teléfono de apoderado no registrado`);
      }
      
      if (student.monthlyFee <= 0) {
        warnings.push(`Fila ${index + 1}: Mensualidad inválida`);
      }

      if (student.hasFullScholarship && student.balance > 0) {
        warnings.push(`Fila ${index + 1}: Estudiante con beca 100% tiene saldo pendiente`);
      }
    });

    return { errors, warnings };
  },

  // Generar reporte de estudiantes con beca
  generateScholarshipReport(students) {
    const scholarshipStudents = students.filter(s => s.hasFullScholarship);
    
    return scholarshipStudents.map(student => ({
      nombre: student.studentName,
      rut: student.rut,
      curso: student.grade,
      apoderado: student.guardianName,
      telefono: student.guardianPhone,
      tipoBeca: student.scholarshipType === 'VUL' ? 'Vulnerable' : student.scholarshipType,
      montoBeca: student.scholarshipAmount || student.totalAnnualFee || student.monthlyFee * 10,
      fechaIngreso: student.admissionDate
    }));
  }
};