// Base de datos actualizada con estudiantes reales de FUDE UMAG
// Los datos se cargan dinámicamente desde alumnos.csv

// Configuración del establecimiento
export const schoolConfig = {
  name: "FUDE UMAG",
  rbd: "186455-0", 
  address: "Punta Arenas, Región de Magallanes",
  phone: "+56 61 2345678",
  email: "tesoreria@fudeumag.cl",
  academicYear: 2025,
  lastUpdate: new Date().toISOString()
};

// Estructura de cursos reales basada en alumnos.csv
export const courseStructure = {
  "Parvularia": {
    "NT1 A": { capacity: 25, monthlyFee: 85000, level: "Parvularia" },
    "NT1 B": { capacity: 25, monthlyFee: 85000, level: "Parvularia" },
    "NT2 A": { capacity: 30, monthlyFee: 95000, level: "Parvularia" },
    "NT2 B": { capacity: 30, monthlyFee: 95000, level: "Parvularia" }
  },
  "Básica": {
    "1° BÁSICO A": { capacity: 35, monthlyFee: 110000, level: "Básica" },
    "1° BÁSICO B": { capacity: 35, monthlyFee: 110000, level: "Básica" },
    "2° BÁSICO A": { capacity: 35, monthlyFee: 110000, level: "Básica" },
    "2° BÁSICO B": { capacity: 35, monthlyFee: 110000, level: "Básica" },
    "3° BÁSICO A": { capacity: 35, monthlyFee: 115000, level: "Básica" },
    "3° BÁSICO B": { capacity: 35, monthlyFee: 115000, level: "Básica" },
    "4° BÁSICO A": { capacity: 35, monthlyFee: 115000, level: "Básica" },
    "4° BÁSICO B": { capacity: 35, monthlyFee: 115000, level: "Básica" },
    "5° BÁSICO A": { capacity: 35, monthlyFee: 120000, level: "Básica" },
    "5° BÁSICO B": { capacity: 35, monthlyFee: 120000, level: "Básica" },
    "6° BÁSICO A": { capacity: 35, monthlyFee: 120000, level: "Básica" },
    "6° BÁSICO B": { capacity: 35, monthlyFee: 120000, level: "Básica" },
    "7° BÁSICO A": { capacity: 35, monthlyFee: 125000, level: "Básica" },
    "7° BÁSICO B": { capacity: 35, monthlyFee: 125000, level: "Básica" },
    "8° BÁSICO A": { capacity: 35, monthlyFee: 125000, level: "Básica" },
    "8° BÁSICO B": { capacity: 35, monthlyFee: 125000, level: "Básica" }
  },
  "Media": {
    "1° MEDIO A": { capacity: 40, monthlyFee: 145000, level: "Media" },
    "1° MEDIO B": { capacity: 40, monthlyFee: 145000, level: "Media" },
    "1° MEDIO C": { capacity: 40, monthlyFee: 145000, level: "Media" },
    "2° MEDIO A": { capacity: 40, monthlyFee: 150000, level: "Media" },
    "2° MEDIO B": { capacity: 40, monthlyFee: 150000, level: "Media" },
    "2° MEDIO C": { capacity: 40, monthlyFee: 150000, level: "Media" },
    "3° MEDIO A": { capacity: 40, monthlyFee: 155000, level: "Media" },
    "3° MEDIO B": { capacity: 40, monthlyFee: 155000, level: "Media" },
    "3° MEDIO C": { capacity: 40, monthlyFee: 155000, level: "Media" },
    "4° MEDIO A": { capacity: 40, monthlyFee: 160000, level: "Media" },
    "4° MEDIO B": { capacity: 40, monthlyFee: 160000, level: "Media" },
    "4° MEDIO C": { capacity: 40, monthlyFee: 160000, level: "Media" }
  }
};

// Base de datos de estudiantes - se llena dinámicamente desde CSV
export const studentsByGrade = {
  // Datos cargados automáticamente desde alumnos.csv
  // mediante rebuildFromAlumnosCSV() en dataService
};

// Obtener cursos dinámicamente basado en estudiantes reales con acentos y símbolos correctos
export const getAllCourses = () => {
  const coursesWithStudents = Object.keys(studentsByGrade).filter(grade => 
    studentsByGrade[grade] && studentsByGrade[grade].length > 0
  );
  
  // Ordenar cursos por nivel y nombre con símbolos correctos
  return coursesWithStudents.sort((a, b) => {
    // Orden: Parvularia (NT) → Básica (1°-8°) → Media (1°-4°)
    const getLevel = (course) => {
      if (course.includes('NT')) return 0; // Parvularia
      if (course.includes('BÁSICO')) return 1; // Básica  
      if (course.includes('MEDIO')) return 2; // Media
      return 3;
    };
    
    const getNumber = (course) => {
      const match = course.match(/(\d+)°/);
      return match ? parseInt(match[1]) : 0;
    };
    
    const levelA = getLevel(a);
    const levelB = getLevel(b);
    
    if (levelA !== levelB) return levelA - levelB;
    
    const numA = getNumber(a);
    const numB = getNumber(b);
    
    if (numA !== numB) return numA - numB;
    
    return a.localeCompare(b); // Por último, orden alfabético
  });
};

// Obtener cursos agrupados por nivel con nombres correctos en español
export const getCoursesByLevel = () => {
  const allCourses = getAllCourses();
  const grouped = {
    'Parvularia': [],
    'Básica': [], 
    'Media': []
  };
  
  allCourses.forEach(course => {
    if (course.includes('NT')) {
      grouped.Parvularia.push(course);
    } else if (course.includes('BÁSICO')) {
      grouped.Básica.push(course);
    } else if (course.includes('MEDIO')) {
      grouped.Media.push(course);
    }
  });
  
  return grouped;
};

// Función para obtener todos los estudiantes en formato plano
export const getAllStudents = () => {
  return Object.keys(studentsByGrade).reduce((students, grade) => {
    return students.concat(
      studentsByGrade[grade].map(student => ({
        ...student,
        grade
      }))
    );
  }, []);
};

// Función para obtener estudiantes por curso
export const getStudentsByGrade = (grade) => {
  return studentsByGrade[grade] || [];
};

// Función para obtener estadísticas de un curso específico
export const getGradeStats = (grade) => {
  const students = getStudentsByGrade(grade);
  if (!students.length) return null;

  const stats = {
    totalStudents: students.length,
    paidStudents: students.filter(s => s.status === 'paid').length,
    pendingStudents: students.filter(s => s.status === 'pending').length,
    overdueStudents: students.filter(s => s.status === 'overdue').length,
    scholarshipStudents: students.filter(s => s.status === 'scholarship' || s.hasFullScholarship).length,
    totalRevenue: students.reduce((sum, s) => sum + (s.totalPagado || 0), 0),
    totalPending: students.reduce((sum, s) => sum + s.balance, 0),
    averageMonthlyFee: students.reduce((sum, s) => sum + s.monthlyFee, 0) / students.length
  };

  stats.collectionRate = stats.totalStudents > 0 ? 
    Math.round((stats.paidStudents / stats.totalStudents) * 100) : 0;

  return stats;
};

// Función para obtener información de un curso específico
export const getCourseInfo = (grade) => {
  // Buscar en courseStructure
  for (const level of Object.values(courseStructure)) {
    if (level[grade]) {
      return {
        ...level[grade],
        currentEnrollment: (studentsByGrade[grade] || []).length
      };
    }
  }
  
  // Si no se encuentra, devolver estructura básica
  return {
    capacity: 35,
    monthlyFee: 120000,
    currentEnrollment: (studentsByGrade[grade] || []).length
  };
};

// Función para actualizar el estado de pago de un estudiante
export const updatePaymentStatus = (studentId, newPayment) => {
  try {
    // Buscar el estudiante en todos los cursos
    for (const grade in studentsByGrade) {
      const studentIndex = studentsByGrade[grade].findIndex(s => s.id === studentId);
      if (studentIndex !== -1) {
        const student = studentsByGrade[grade][studentIndex];
        
        // Agregar el nuevo pago al historial
        if (!student.paymentHistory) student.paymentHistory = [];
        student.paymentHistory.unshift({
          date: newPayment.date,
          amount: newPayment.amount,
          concept: newPayment.concept,
          method: newPayment.method || 'Transferencia'
        });
        
        // Actualizar totales
        const totalPagado = student.paymentHistory.reduce((sum, payment) => sum + payment.amount, 0);
        student.totalPagado = totalPagado;
        student.balance = Math.max(0, student.monthlyFee - totalPagado);
        student.lastPayment = newPayment.date;
        
        // Actualizar estado
        if (student.hasFullScholarship) {
          student.status = 'scholarship';
        } else if (student.balance <= 0) {
          student.status = 'paid';
        } else {
          student.status = 'pending';
        }
        
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('Error updating payment status:', error);
    return false;
  }
};

// Función para agregar un nuevo estudiante
export const addNewStudent = (grade, studentData) => {
  if (!studentsByGrade[grade]) {
    studentsByGrade[grade] = [];
  }
  
  const newStudent = {
    id: Date.now(), // ID temporal basado en timestamp
    ...studentData,
    grade,
    paymentHistory: [],
    totalPagado: 0,
    balance: studentData.monthlyFee || 120000
  };
  
  studentsByGrade[grade].push(newStudent);
  return newStudent;
};

// Función para eliminar un estudiante
export const deleteStudent = (studentId) => {
  try {
    for (const grade in studentsByGrade) {
      const studentIndex = studentsByGrade[grade].findIndex(s => s.id === studentId);
      if (studentIndex !== -1) {
        const deletedStudent = studentsByGrade[grade].splice(studentIndex, 1)[0];
        return {
          success: true,
          deletedStudent,
          grade
        };
      }
    }
    return {
      success: false,
      error: 'Estudiante no encontrado'
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Función para exportar todos los datos actualizados
export const exportUpdatedData = () => {
  const timestamp = new Date().toISOString();
  
  return {
    exportInfo: {
      timestamp,
      schoolName: schoolConfig.name,
      rbd: schoolConfig.rbd,
      academicYear: schoolConfig.academicYear,
      totalStudents: getAllStudents().length,
      totalCourses: getAllCourses().length
    },
    schoolConfig,
    courseStructure,
    studentsByGrade,
    allStudents: getAllStudents(),
    courseStats: getAllCourses().map(grade => getGradeStats(grade)).filter(Boolean)
  };
};

// Función para limpiar completamente la base de datos
export const clearAllStudentData = () => {
  try {
    console.log('Limpiando toda la base de datos de estudiantes...');
    
    // Limpiar todas las claves existentes
    Object.keys(studentsByGrade).forEach(grade => {
      delete studentsByGrade[grade];
    });
    
    console.log('Base de datos limpiada completamente');
    return true;
  } catch (error) {
    console.error('Error limpiando la base de datos:', error);
    return false;
  }
};

// Función para importar estudiantes desde CSV
export const importCSVStudents = (csvStudentsByGrade) => {
  try {
    console.log('Importando estudiantes del CSV a la base de datos...');
    
    // Limpiar datos existentes y agregar los nuevos
    Object.keys(csvStudentsByGrade).forEach(grade => {
      // Crear el curso si no existe
      if (!studentsByGrade[grade]) {
        studentsByGrade[grade] = [];
      }
      
      // Reemplazar estudiantes existentes del curso con los del CSV
      studentsByGrade[grade] = [...csvStudentsByGrade[grade]];
      
      console.log(`Curso ${grade}: ${csvStudentsByGrade[grade].length} estudiantes importados`);
    });
    
    console.log(`Importación completada. Total de cursos: ${Object.keys(csvStudentsByGrade).length}`);
    return true;
  } catch (error) {
    console.error('Error importando estudiantes del CSV:', error);
    return false;
  }
};

// Función para reconstruir completamente desde alumnos.csv
export const rebuildFromAlumnosCSV = (csvStudentsByGrade) => {
  try {
    console.log('Reconstruyendo base de datos desde alumnos.csv...');
    
    // Paso 1: Limpiar completamente
    clearAllStudentData();
    
    // Paso 2: Importar nuevos datos
    const result = importCSVStudents(csvStudentsByGrade);
    
    if (result) {
      console.log(`Reconstrucción completada exitosamente. ${Object.keys(csvStudentsByGrade).length} cursos creados.`);
    }
    
    return result;
  } catch (error) {
    console.error('Error reconstruyendo la base de datos:', error);
    return false;
  }
};