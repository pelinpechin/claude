// Base de datos principal del Sistema de Tesorería FUDE UMAG
// Estructura organizada por cursos con funcionalidades de actualización y exportación

// Configuración del establecimiento
export const schoolConfig = {
  name: "FUDE UMAG",
  rbd: "186455-0",
  address: "Punta Arenas, Región de Magallanes",
  phone: "+56 61 2345678",
  email: "tesoreria@fudeumag.cl",
  academicYear: 2024,
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
    "1° Básico A": { capacity: 35, monthlyFee: 105000 },
    "1° Básico B": { capacity: 35, monthlyFee: 105000 },
    "2° Básico A": { capacity: 35, monthlyFee: 110000 },
    "2° Básico B": { capacity: 35, monthlyFee: 110000 },
    "3° Básico A": { capacity: 35, monthlyFee: 115000 },
    "3° Básico B": { capacity: 35, monthlyFee: 115000 },
    "4° Básico A": { capacity: 35, monthlyFee: 120000 },
    "4° Básico B": { capacity: 35, monthlyFee: 120000 },
    "5° Básico A": { capacity: 35, monthlyFee: 120000 },
    "5° Básico B": { capacity: 35, monthlyFee: 120000 },
    "6° Básico A": { capacity: 35, monthlyFee: 125000 },
    "6° Básico B": { capacity: 35, monthlyFee: 125000 },
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

// Base de datos principal de estudiantes organizada por curso
export const studentsByGrade = {
  "Kinder A": [
    {
      id: 1001,
      rut: "12.345.678-9",
      studentName: "Diego Fernández Castro",
      birthDate: "2019-03-15",
      guardianName: "Luis Fernández Rojas",
      guardianRut: "15.678.901-2",
      guardianPhone: "+56 9 3333 4444",
      guardianEmail: "luis.fernandez@email.com",
      guardianAddress: "Av. España 1234, Punta Arenas",
      enrollmentDate: "2024-03-01",
      monthlyFee: 95000,
      status: "paid",
      lastPayment: "2024-08-20",
      dueDate: "2024-09-05",
      balance: 0,
      scholarshipPercentage: 0,
      paymentHistory: [
        { date: "2024-08-20", amount: 95000, concept: "Mensualidad Agosto", method: "Transferencia" },
        { date: "2024-07-15", amount: 95000, concept: "Mensualidad Julio", method: "Efectivo" },
        { date: "2024-06-12", amount: 95000, concept: "Mensualidad Junio", method: "Transferencia" }
      ]
    }
  ],
  "3° Básico A": [
    {
      id: 1002,
      rut: "13.456.789-0",
      studentName: "Ana Martínez Contreras",
      birthDate: "2016-09-22",
      guardianName: "Rosa Contreras Vega",
      guardianRut: "16.789.012-3",
      guardianPhone: "+56 9 9876 5432",
      guardianEmail: "rosa.contreras@email.com",
      guardianAddress: "Calle Magallanes 567, Punta Arenas",
      enrollmentDate: "2024-03-01",
      monthlyFee: 115000,
      status: "overdue",
      lastPayment: "2024-06-15",
      dueDate: "2024-07-05",
      balance: 230000,
      scholarshipPercentage: 0,
      paymentHistory: [
        { date: "2024-06-15", amount: 115000, concept: "Mensualidad Junio", method: "Transferencia" },
        { date: "2024-05-12", amount: 115000, concept: "Mensualidad Mayo", method: "Efectivo" },
        { date: "2024-04-10", amount: 115000, concept: "Mensualidad Abril", method: "Transferencia" }
      ]
    }
  ],
  "5° Básico B": [
    {
      id: 1003,
      rut: "14.567.890-1",
      studentName: "Sofía Herrera Muñoz",
      birthDate: "2014-11-08",
      guardianName: "Patricia Muñoz Díaz",
      guardianRut: "17.890.123-4",
      guardianPhone: "+56 9 7777 8888",
      guardianEmail: "patricia.munoz@email.com",
      guardianAddress: "Pasaje Los Leones 890, Punta Arenas",
      enrollmentDate: "2024-03-01",
      monthlyFee: 120000,
      status: "pending",
      lastPayment: "2024-07-25",
      dueDate: "2024-08-10",
      balance: 120000,
      scholarshipPercentage: 10,
      paymentHistory: [
        { date: "2024-07-25", amount: 108000, concept: "Mensualidad Julio (10% beca)", method: "Transferencia" },
        { date: "2024-06-22", amount: 108000, concept: "Mensualidad Junio (10% beca)", method: "Efectivo" },
        { date: "2024-05-18", amount: 108000, concept: "Mensualidad Mayo (10% beca)", method: "Transferencia" }
      ]
    }
  ],
  "8° Básico A": [
    {
      id: 1004,
      rut: "15.678.901-2",
      studentName: "María González Pérez",
      birthDate: "2011-07-30",
      guardianName: "Carmen Pérez López",
      guardianRut: "18.901.234-5",
      guardianPhone: "+56 9 8765 4321",
      guardianEmail: "carmen.perez@email.com",
      guardianAddress: "Av. Colón 456, Punta Arenas",
      enrollmentDate: "2024-03-01",
      monthlyFee: 125000,
      status: "paid",
      lastPayment: "2024-08-15",
      dueDate: "2024-09-05",
      balance: 0,
      scholarshipPercentage: 0,
      paymentHistory: [
        { date: "2024-08-15", amount: 125000, concept: "Mensualidad Agosto", method: "Transferencia" },
        { date: "2024-07-12", amount: 125000, concept: "Mensualidad Julio", method: "Transferencia" },
        { date: "2024-06-14", amount: 125000, concept: "Mensualidad Junio", method: "Efectivo" }
      ]
    }
  ],
  "1° Medio B": [
    {
      id: 1005,
      rut: "16.789.012-3",
      studentName: "Carlos Rodríguez Silva",
      birthDate: "2009-12-03",
      guardianName: "Juan Rodríguez Morales",
      guardianRut: "19.012.345-6",
      guardianPhone: "+56 9 1234 5678",
      guardianEmail: "juan.rodriguez@email.com",
      guardianAddress: "Calle Bories 789, Punta Arenas",
      enrollmentDate: "2024-03-01",
      monthlyFee: 145000,
      status: "pending",
      lastPayment: "2024-07-20",
      dueDate: "2024-08-05",
      balance: 145000,
      scholarshipPercentage: 0,
      paymentHistory: [
        { date: "2024-07-20", amount: 145000, concept: "Mensualidad Julio", method: "Transferencia" },
        { date: "2024-06-18", amount: 145000, concept: "Mensualidad Junio", method: "Efectivo" },
        { date: "2024-05-16", amount: 145000, concept: "Mensualidad Mayo", method: "Transferencia" }
      ]
    }
  ],
  "2° Medio A": [
    {
      id: 1006,
      rut: "17.890.123-4",
      studentName: "Pedro Sánchez López",
      birthDate: "2008-04-18",
      guardianName: "Miguel Sánchez Torres",
      guardianRut: "20.123.456-7",
      guardianPhone: "+56 9 5555 6666",
      guardianEmail: "miguel.sanchez@email.com",
      guardianAddress: "Av. Manuel Bulnes 321, Punta Arenas",
      enrollmentDate: "2024-03-01",
      monthlyFee: 150000,
      status: "paid",
      lastPayment: "2024-08-10",
      dueDate: "2024-09-05",
      balance: 0,
      scholarshipPercentage: 0,
      paymentHistory: [
        { date: "2024-08-10", amount: 150000, concept: "Mensualidad Agosto", method: "Transferencia" },
        { date: "2024-07-08", amount: 150000, concept: "Mensualidad Julio", method: "Transferencia" },
        { date: "2024-06-06", amount: 150000, concept: "Mensualidad Junio", method: "Efectivo" }
      ]
    }
  ],
  "4° Medio A": [
    {
      id: 1007,
      rut: "18.901.234-5",
      studentName: "Valentina Torres Bravo",
      birthDate: "2006-01-25",
      guardianName: "Carolina Bravo Méndez",
      guardianRut: "21.234.567-8",
      guardianPhone: "+56 9 2222 3333",
      guardianEmail: "carolina.bravo@email.com",
      guardianAddress: "Pasaje O'Higgins 654, Punta Arenas",
      enrollmentDate: "2024-03-01",
      monthlyFee: 160000,
      status: "overdue",
      lastPayment: "2024-05-30",
      dueDate: "2024-07-05",
      balance: 480000,
      scholarshipPercentage: 0,
      paymentHistory: [
        { date: "2024-05-30", amount: 160000, concept: "Mensualidad Mayo", method: "Efectivo" },
        { date: "2024-04-28", amount: 160000, concept: "Mensualidad Abril", method: "Transferencia" },
        { date: "2024-03-26", amount: 160000, concept: "Mensualidad Marzo", method: "Efectivo" }
      ]
    }
  ]
};

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