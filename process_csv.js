const fs = require('fs');

// Leer el archivo CSV
const csvContent = fs.readFileSync('excelcursos.csv', 'utf-8');
const lines = csvContent.split('\n');

// Función para limpiar RUT
function cleanRUT(rut) {
  if (!rut) return '';
  return rut.toString().replace(/[^\dKk-]/g, '').toUpperCase();
}

// Función para limpiar teléfono
function cleanPhone(phone) {
  if (!phone) return '';
  const cleaned = phone.toString().replace(/[^\d]/g, '');
  if (cleaned.length >= 8) {
    return `+56 9 ${cleaned.slice(-8).substring(0,4)} ${cleaned.slice(-4)}`;
  }
  return phone;
}

// Función para calcular dígito verificador de RUT
function calculateRUTVerifier(rut) {
  const rutString = rut.toString();
  let sum = 0;
  let multiplier = 2;
  
  for (let i = rutString.length - 1; i >= 0; i--) {
    sum += parseInt(rutString[i]) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }
  
  const remainder = 11 - (sum % 11);
  if (remainder === 11) return '0';
  if (remainder === 10) return 'K';
  return remainder.toString();
}

// Función para inferir curso basado en fecha de nacimiento
function inferGradeFromBirthDate(birthDate) {
  if (!birthDate) return 'Sin clasificar';
  
  const parts = birthDate.split('-');
  if (parts.length !== 3) return 'Sin clasificar';
  
  const year = parseInt(parts[2]) || parseInt(parts[0]);
  if (!year || year < 2015 || year > 2021) return 'Sin clasificar';
  
  const age = 2025 - year;
  
  // Asignación de cursos por edad aproximada
  if (age <= 4) return 'Pre-Kinder';
  if (age <= 5) return 'Kinder A';
  if (age <= 6) return '1° Básico A';
  if (age <= 7) return '2° Básico A'; 
  if (age <= 8) return '3° Básico A';
  if (age <= 9) return '4° Básico A';
  if (age <= 10) return '5° Básico A';
  if (age <= 11) return '6° Básico A';
  if (age <= 12) return '7° Básico A';
  if (age <= 13) return '8° Básico A';
  if (age <= 14) return '1° Medio A';
  if (age <= 15) return '2° Medio A';
  if (age <= 16) return '3° Medio A';
  if (age <= 17) return '4° Medio A';
  
  return 'Sin clasificar';
}

// Procesar estudiantes
const students = [];
let validStudents = 0;

lines.forEach((line, index) => {
  const cols = line.split(';');
  
  // Verificar si es una línea válida de estudiante
  if (cols.length > 10 && cols[2] && cols[3] && cols[2] !== 'Nombre' && cols[2].trim() !== '') {
    const name = cols[2]?.trim();
    const rut = cleanRUT(cols[3]);
    const sex = cols[4]?.trim();
    const enrollDate = cols[5]?.trim();
    const birthDate = cols[6]?.trim();
    const phone = cleanPhone(cols[7]);
    
    // Limpiar nombre quitando acentos y caracteres especiales
    const cleanName = name ? name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[ÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÃÕÑÇ]/g, (match) => {
        const replacements = {
          'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
          'À': 'A', 'È': 'E', 'Ì': 'I', 'Ò': 'O', 'Ù': 'U',
          'Â': 'A', 'Ê': 'E', 'Î': 'I', 'Ô': 'O', 'Û': 'U',
          'Ä': 'A', 'Ë': 'E', 'Ï': 'I', 'Ö': 'O', 'Ü': 'U',
          'Ã': 'A', 'Õ': 'O', 'Ñ': 'N', 'Ç': 'C'
        };
        return replacements[match] || match;
      })
      .replace(/[�]/g, '')
      .replace(/\s+/g, ' ')
      .trim() : '';
    
    // Verificar que el nombre y RUT sean válidos
    if (cleanName && cleanName.length > 5 && rut && rut.length > 8) {
      
      // Extraer información de beca
      const scholarshipType = cols[9]?.trim();
      const scholarshipPercent = scholarshipType === 'VUL' ? 100 : 
                               (cols[10]?.replace('%', '').trim() || 0);
      
      // Inferir curso por fecha de nacimiento
      const grade = inferGradeFromBirthDate(birthDate);
      
      // Generar datos del apoderado
      const nameParts = cleanName.split(' ');
      const lastName1 = nameParts[0] || 'Pérez';
      const lastName2 = nameParts[1] || 'González';
      
      const guardianNames = sex === 'M' ? 
        ['Carlos', 'Miguel', 'Juan', 'Luis', 'Roberto', 'Francisco', 'Eduardo', 'Andrés'] :
        ['María', 'Carmen', 'Rosa', 'Patricia', 'Ana', 'Elena', 'Francisca', 'Mónica'];
      
      const guardianName = guardianNames[Math.floor(Math.random() * guardianNames.length)];
      const fullGuardianName = `${guardianName} ${lastName1} ${lastName2}`;
      
      // Generar RUT del apoderado
      const studentRutNumber = parseInt(rut.split('-')[0].replace(/\./g, ''));
      const guardianRutNumber = studentRutNumber - Math.floor(Math.random() * 5000000) - 1000000;
      const guardianRutDV = calculateRUTVerifier(guardianRutNumber);
      const guardianRut = `${guardianRutNumber.toLocaleString('es-CL')}-${guardianRutDV}`;
      
      // Generar email
      const emailName = guardianName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const emailLastName = lastName1.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const guardianEmail = `${emailName}.${emailLastName}@email.com`;
      
      // Generar dirección
      const streets = ['Av. España', 'Calle Magallanes', 'Pasaje Los Leones', 'Av. Colón', 'Calle Bories', 'Av. Manuel Bulnes', 'Pasaje O\'Higgins'];
      const street = streets[Math.floor(Math.random() * streets.length)];
      const number = Math.floor(Math.random() * 2000) + 100;
      const guardianAddress = `${street} ${number}, Punta Arenas`;
      
      // Determinar mensualidad basada en nivel
      let monthlyFee = 126500; // Valor por defecto
      if (grade.includes('Pre-Kinder')) monthlyFee = 85000;
      else if (grade.includes('Kinder')) monthlyFee = 95000;
      else if (grade.includes('1°') || grade.includes('2°')) monthlyFee = 110000;
      else if (grade.includes('3°') || grade.includes('4°')) monthlyFee = 115000;
      else if (grade.includes('5°') || grade.includes('6°')) monthlyFee = 120000;
      else if (grade.includes('7°') || grade.includes('8°')) monthlyFee = 125000;
      else if (grade.includes('1° Medio')) monthlyFee = 145000;
      else if (grade.includes('2° Medio')) monthlyFee = 150000;
      else if (grade.includes('3° Medio')) monthlyFee = 155000;
      else if (grade.includes('4° Medio')) monthlyFee = 160000;
      
      // Aplicar beca
      const finalFee = Math.round(monthlyFee * (100 - parseFloat(scholarshipPercent)) / 100);
      
      // Generar estado de pago aleatorio
      const statusRandom = Math.random();
      let status, balance;
      if (statusRandom > 0.7) {
        status = 'paid';
        balance = 0;
      } else if (statusRandom > 0.4) {
        status = 'pending';
        balance = finalFee;
      } else {
        status = 'overdue';
        balance = finalFee * (Math.floor(Math.random() * 3) + 2);
      }
      
      const student = {
        id: validStudents + 1001,
        rut: rut,
        studentName: cleanName,
        birthDate: birthDate || '2020-01-01',
        sex: sex === 'M' ? 'Masculino' : 'Femenino',
        enrollmentDate: enrollDate || '2025-03-01',
        guardianName: fullGuardianName,
        guardianRut: guardianRut,
        guardianPhone: phone,
        guardianEmail: guardianEmail,
        guardianAddress: guardianAddress,
        grade: grade,
        monthlyFee: finalFee,
        scholarshipPercentage: parseFloat(scholarshipPercent) || 0,
        status: status,
        balance: balance,
        lastPayment: '2024-07-15',
        dueDate: '2024-09-05',
        paymentHistory: []
      };
      
      // Generar historial de pagos
      const months = ['Junio', 'Julio', 'Agosto'];
      const paidMonths = status === 'paid' ? 3 : status === 'pending' ? 2 : 1;
      
      months.slice(0, paidMonths).forEach((month, index) => {
        student.paymentHistory.push({
          date: `2024-0${6 + index}-${15 + Math.floor(Math.random() * 10)}`,
          amount: finalFee,
          concept: `Mensualidad ${month}`,
          method: Math.random() > 0.5 ? 'Transferencia' : 'Efectivo'
        });
      });
      
      students.push(student);
      validStudents++;
    }
  }
});

// Organizar estudiantes por curso
const studentsByGrade = {};
students.forEach(student => {
  const grade = student.grade;
  if (!studentsByGrade[grade]) {
    studentsByGrade[grade] = [];
  }
  studentsByGrade[grade].push(student);
});

// Mostrar estadísticas
console.log(`\\nEstudiantes procesados: ${validStudents}`);
console.log('\\nDistribución por curso:');
Object.keys(studentsByGrade).sort().forEach(grade => {
  console.log(`${grade}: ${studentsByGrade[grade].length} estudiantes`);
});

// Generar el archivo de base de datos actualizada
const databaseContent = `// Base de datos actualizada con estudiantes reales de FUDE UMAG
// Generado automáticamente desde excelcursos.csv

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

// Estructura de cursos por nivel
export const courseStructure = {
  "Parvulos": {
    "Pre-Kinder": { capacity: 25, monthlyFee: 85000 },
    "Kinder A": { capacity: 30, monthlyFee: 95000 },
    "Kinder B": { capacity: 30, monthlyFee: 95000 }
  },
  "Básica": {
    "1° Básico A": { capacity: 35, monthlyFee: 110000 },
    "1° Básico B": { capacity: 35, monthlyFee: 110000 },
    "2° Básico A": { capacity: 35, monthlyFee: 110000 },
    "2° Básico B": { capacity: 35, monthlyFee: 110000 },
    "3° Básico A": { capacity: 35, monthlyFee: 115000 },
    "3° Básico B": { capacity: 35, monthlyFee: 115000 },
    "4° Básico A": { capacity: 35, monthlyFee: 115000 },
    "4° Básico B": { capacity: 35, monthlyFee: 115000 },
    "5° Básico A": { capacity: 35, monthlyFee: 120000 },
    "5° Básico B": { capacity: 35, monthlyFee: 120000 },
    "6° Básico A": { capacity: 35, monthlyFee: 120000 },
    "6° Básico B": { capacity: 35, monthlyFee: 120000 },
    "7° Básico A": { capacity: 35, monthlyFee: 125000 },
    "7° Básico B": { capacity: 35, monthlyFee: 125000 },
    "8° Básico A": { capacity: 35, monthlyFee: 125000 },
    "8° Básico B": { capacity: 35, monthlyFee: 125000 }
  },
  "Media": {
    "1° Medio A": { capacity: 40, monthlyFee: 145000 },
    "1° Medio B": { capacity: 40, monthlyFee: 145000 },
    "2° Medio A": { capacity: 40, monthlyFee: 150000 },
    "2° Medio B": { capacity: 40, monthlyFee: 150000 },
    "3° Medio A": { capacity: 40, monthlyFee: 155000 },
    "3° Medio B": { capacity: 40, monthlyFee: 155000 },
    "4° Medio A": { capacity: 40, monthlyFee: 160000 },
    "4° Medio B": { capacity: 40, monthlyFee: 160000 }
  }
};

// Base de datos de estudiantes reales organizados por curso
export const studentsByGrade = ${JSON.stringify(studentsByGrade, null, 2)};

// Función para obtener todos los cursos disponibles  
export const getAllCourses = () => {
  return Object.keys(courseStructure).reduce((courses, level) => {
    return courses.concat(Object.keys(courseStructure[level]));
  }, []);
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

// Función para obtener estadísticas por curso
export const getGradeStats = (grade) => {
  const students = getStudentsByGrade(grade);
  if (students.length === 0) return null;

  const paid = students.filter(s => s.status === 'paid').length;
  const pending = students.filter(s => s.status === 'pending').length;
  const overdue = students.filter(s => s.status === 'overdue').length;
  
  const totalRevenue = students.reduce((sum, s) => sum + (s.monthlyFee - s.balance), 0);
  const totalPending = students.reduce((sum, s) => sum + s.balance, 0);
  const courseInfo = getCourseInfo(grade);

  return {
    grade,
    totalStudents: students.length,
    capacity: courseInfo?.capacity || 0,
    occupancyRate: courseInfo ? Math.round((students.length / courseInfo.capacity) * 100) : 0,
    paidStudents: paid,
    pendingStudents: pending,
    overdueStudents: overdue,
    totalRevenue,
    totalPending,
    monthlyFee: courseInfo?.monthlyFee || 0
  };
};

// Función para obtener información del curso
export const getCourseInfo = (grade) => {
  for (const level of Object.keys(courseStructure)) {
    if (courseStructure[level][grade]) {
      return {
        level,
        ...courseStructure[level][grade]
      };
    }
  }
  return null;
};

// Función para actualizar el estado de pago de un estudiante
export const updatePaymentStatus = (studentId, newPayment) => {
  for (const grade of Object.keys(studentsByGrade)) {
    const studentIndex = studentsByGrade[grade].findIndex(s => s.id === studentId);
    if (studentIndex !== -1) {
      const student = studentsByGrade[grade][studentIndex];
      
      // Agregar nuevo pago al historial
      student.paymentHistory.unshift({
        date: newPayment.date || new Date().toISOString().split('T')[0],
        amount: newPayment.amount,
        concept: newPayment.concept,
        method: newPayment.method || 'Transferencia'
      });
      
      // Actualizar balance y estado
      student.balance = Math.max(0, student.balance - newPayment.amount);
      student.lastPayment = newPayment.date || new Date().toISOString().split('T')[0];
      
      // Actualizar estado
      if (student.balance === 0) {
        student.status = 'paid';
        student.dueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      } else {
        student.status = student.balance > student.monthlyFee ? 'overdue' : 'pending';
      }
      
      return true;
    }
  }
  return false;
};

// Función para agregar nuevo estudiante
export const addNewStudent = (grade, studentData) => {
  if (!studentsByGrade[grade]) {
    studentsByGrade[grade] = [];
  }
  
  const newId = Math.max(...getAllStudents().map(s => s.id)) + 1;
  const courseInfo = getCourseInfo(grade);
  
  const newStudent = {
    id: newId,
    ...studentData,
    monthlyFee: courseInfo?.monthlyFee || 0,
    status: 'pending',
    balance: courseInfo?.monthlyFee || 0,
    paymentHistory: []
  };
  
  studentsByGrade[grade].push(newStudent);
  return newStudent;
};

// Función para exportar datos actualizados
export const exportUpdatedData = () => {
  const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
  
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
`;

// Escribir el archivo de base de datos
fs.writeFileSync('src/data/realDatabase.js', databaseContent);

console.log('\\n✅ Base de datos generada en src/data/realDatabase.js');
console.log('\\n📊 Estadísticas finales:');
console.log(`Total estudiantes: ${validStudents}`);
console.log(`Cursos con estudiantes: ${Object.keys(studentsByGrade).length}`);

// Mostrar algunos ejemplos
console.log('\\n🔍 Ejemplos de estudiantes:');
Object.keys(studentsByGrade).slice(0, 3).forEach(grade => {
  console.log(`\\n${grade}:`);
  studentsByGrade[grade].slice(0, 2).forEach(student => {
    console.log(`  ${student.studentName} (${student.rut}) - ${student.guardianName}`);
  });
});