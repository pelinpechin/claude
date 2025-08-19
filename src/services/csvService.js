import { parseCSVStudentData, parseAlumnosCSV } from '../utils/csvParser';
import { getEmbeddedCSVData } from '../data/csvData';

export const csvService = {
  // Cargar datos exclusivamente desde alumnos.csv
  async loadAlumnosCSV() {
    try {
      console.log('Cargando datos exclusivamente desde alumnos.csv...');
      const response = await fetch('/alumnos.csv');
      if (!response.ok) {
        throw new Error('No se encontró archivo alumnos.csv');
      }
      
      const csvContent = await response.text();
      const students = parseAlumnosCSV(csvContent);
      console.log(`Cargados ${students.length} estudiantes desde alumnos.csv`);
      return students;
    } catch (error) {
      console.error('Error cargando alumnos.csv:', error);
      throw error;
    }
  },

  // Cargar datos desde archivo alumnos.csv (estructura simplificada)
  async loadCSVData() {
    try {
      console.log('Cargando datos desde archivo alumnos.csv...');
      const response = await fetch('/alumnos.csv');
      if (!response.ok) {
        console.log('No se encontró alumnos.csv, intentando con Libro2.csv...');
        const libro2Response = await fetch('/Libro2.csv');
        if (!libro2Response.ok) {
          console.log('No se encontró archivo CSV, usando datos embebidos...');
          const embeddedCSV = getEmbeddedCSVData();
          const students = parseCSVStudentData(embeddedCSV);
          console.log(`Cargados ${students.length} estudiantes desde datos embebidos`);
          return students;
        }
        const csvContent = await libro2Response.text();
        const students = parseCSVStudentData(csvContent);
        console.log(`Cargados ${students.length} estudiantes desde Libro2.csv`);
        return students;
      }
      
      const csvContent = await response.text();
      const students = parseAlumnosCSV(csvContent);
      console.log(`Cargados ${students.length} estudiantes desde alumnos.csv`);
      return students;
    } catch (error) {
      console.error('Error procesando archivo CSV, usando datos embebidos:', error);
      const embeddedCSV = getEmbeddedCSVData();
      const students = parseCSVStudentData(embeddedCSV);
      console.log(`Cargados ${students.length} estudiantes desde datos embebidos (fallback)`);
      return students;
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