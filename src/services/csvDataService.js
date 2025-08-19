/**
 * Servicio para cargar y procesar datos desde CSV
 * Fallback robusto cuando Supabase no está disponible
 */

// Datos simulados basados en el CSV procesado
const generateStudentsFromCSV = () => {
  // Usar algunos datos de muestra reales del CSV procesado
  return [
    {
      id: 1,
      rut: "27.260.721-4",
      studentName: "AGUAYO LARA ISIDORA BELEN",
      guardianName: "Apoderado Aguayo",
      grade: "NT1 A",
      monthlyFee: 126500,
      totalAnnualFee: 1265000,
      scholarshipAmount: 0,
      totalPaid: 379500,
      pendingAmount: 885500,
      status: "pending",
      phone: "+56 9 87654321",
      email: "aguayo.familia@gmail.com",
      hasFullScholarship: false,
      paymentHistory: [
        {
          id: 1,
          amount: 126500,
          date: "2024-03-15",
          concept: "Cuota 1",
          method: "Transferencia",
          installmentNumber: 1
        },
        {
          id: 2,
          amount: 126500,
          date: "2024-04-15",
          concept: "Cuota 2",
          method: "Transferencia",
          installmentNumber: 2
        },
        {
          id: 3,
          amount: 126500,
          date: "2024-05-15",
          concept: "Cuota 3",
          method: "Transferencia",
          installmentNumber: 3
        }
      ]
    },
    {
      id: 2,
      rut: "27.332.182-9",
      studentName: "ALVARADO SANCHEZ MAITE SABRINA",
      guardianName: "Apoderado Alvarado",
      grade: "NT1 A",
      monthlyFee: 126500,
      totalAnnualFee: 1265000,
      scholarshipAmount: 0,
      totalPaid: 632500,
      pendingAmount: 632500,
      status: "pending",
      phone: "+56 9 12345678",
      email: "alvarado.familia@hotmail.com",
      hasFullScholarship: false,
      paymentHistory: [
        {
          id: 4,
          amount: 126500,
          date: "2024-03-15",
          concept: "Cuota 1",
          method: "Efectivo",
          installmentNumber: 1
        },
        {
          id: 5,
          amount: 126500,
          date: "2024-04-15",
          concept: "Cuota 2",
          method: "Efectivo",
          installmentNumber: 2
        },
        {
          id: 6,
          amount: 126500,
          date: "2024-05-15",
          concept: "Cuota 3",
          method: "Efectivo",
          installmentNumber: 3
        },
        {
          id: 7,
          amount: 126500,
          date: "2024-06-15",
          concept: "Cuota 4",
          method: "Efectivo",
          installmentNumber: 4
        },
        {
          id: 8,
          amount: 126500,
          date: "2024-07-15",
          concept: "Cuota 5",
          method: "Efectivo",
          installmentNumber: 5
        }
      ]
    },
    {
      id: 3,
      rut: "27.347.122-7",
      studentName: "LAGOS AGURTO ETHAN AGUSTIN XAVIER",
      guardianName: "Apoderado Lagos",
      grade: "NT1 A",
      monthlyFee: 0,
      totalAnnualFee: 1265000,
      scholarshipAmount: 1265000,
      totalPaid: 0,
      pendingAmount: 0,
      status: "scholarship",
      phone: "+56 9 99887766",
      email: "lagos.familia@yahoo.com",
      hasFullScholarship: true,
      paymentHistory: []
    },
    {
      id: 4,
      rut: "27.314.685-7",
      studentName: "ARANCIBIA ALVAREZ IGNACIO ANDRES",
      guardianName: "Apoderado Arancibia",
      grade: "NT1 A",
      monthlyFee: 126500,
      totalAnnualFee: 1265000,
      scholarshipAmount: 0,
      totalPaid: 759000,
      pendingAmount: 506000,
      status: "pending",
      phone: "+56 9 55443322",
      email: "arancibia.familia@gmail.com",
      hasFullScholarship: false,
      paymentHistory: [
        {
          id: 9,
          amount: 126741,
          date: "2024-03-15",
          concept: "Cuota 1",
          method: "Transferencia",
          installmentNumber: 1
        },
        {
          id: 10,
          amount: 126259,
          date: "2024-04-15",
          concept: "Cuota 2",
          method: "Transferencia",
          installmentNumber: 2
        },
        {
          id: 11,
          amount: 126500,
          date: "2024-05-15",
          concept: "Cuota 3",
          method: "Transferencia",
          installmentNumber: 3
        },
        {
          id: 12,
          amount: 126500,
          date: "2024-06-15",
          concept: "Cuota 4",
          method: "Transferencia",
          installmentNumber: 4
        },
        {
          id: 13,
          amount: 126500,
          date: "2024-07-15",
          concept: "Cuota 5",
          method: "Transferencia",
          installmentNumber: 5
        },
        {
          id: 14,
          amount: 126500,
          date: "2024-08-15",
          concept: "Cuota 6",
          method: "Transferencia",
          installmentNumber: 6
        }
      ]
    },
    {
      id: 5,
      rut: "27.289.800-6",
      studentName: "CANTO RUFATT ANNIA PASCAL",
      guardianName: "Apoderado Canto",
      grade: "NT1 A",
      monthlyFee: 126500,
      totalAnnualFee: 1265000,
      scholarshipAmount: 0,
      totalPaid: 632500,
      pendingAmount: 632500,
      status: "pending",
      phone: "+56 9 77889900",
      email: "canto.familia@hotmail.com",
      hasFullScholarship: false,
      paymentHistory: [
        {
          id: 15,
          amount: 126500,
          date: "2024-03-15",
          concept: "Cuota 1",
          method: "Efectivo",
          installmentNumber: 1
        },
        {
          id: 16,
          amount: 126500,
          date: "2024-04-15",
          concept: "Cuota 2",
          method: "Efectivo",
          installmentNumber: 2
        },
        {
          id: 17,
          amount: 126500,
          date: "2024-05-15",
          concept: "Cuota 3",
          method: "Efectivo",
          installmentNumber: 3
        },
        {
          id: 18,
          amount: 126500,
          date: "2024-06-15",
          concept: "Cuota 4",
          method: "Efectivo",
          installmentNumber: 4
        },
        {
          id: 19,
          amount: 126500,
          date: "2024-07-15",
          concept: "Cuota 5",
          method: "Efectivo",
          installmentNumber: 5
        }
      ]
    }
  ];
};

// Generar más estudiantes de ejemplo para completar la demo
const generateMoreStudents = () => {
  const baseStudents = generateStudentsFromCSV();
  const moreStudents = [];
  
  // Generar estudiantes adicionales para diferentes cursos
  const courses = ["NT1 B", "NT2 A", "NT2 B", "1° BÁSICO A", "1° BÁSICO B", "2° BÁSICO A"];
  const names = [
    "GONZALEZ TORRES MARIA JOSE", "HERNANDEZ LOPEZ PEDRO ANTONIO", "MARTINEZ SILVA SOFIA ISABEL",
    "RODRIGUEZ GOMEZ CARLOS ALBERTO", "LOPEZ FERNANDEZ ANA CRISTINA", "GARCIA RUIZ DIEGO ALEJANDRO",
    "SANCHEZ MORALES VALENTINA PAZ", "TORRES HERRERA MATIAS IGNACIO", "FLORES CASTRO ISABELLA BELEN",
    "MORALES VARGAS SEBASTIAN DAVID", "CASTRO JIMENEZ CATALINA MARIE", "JIMENEZ ROJAS FRANCISCO JAVIER",
    "ROJAS MENDOZA ANTONIA GABRIELA", "MENDOZA TORRES NICOLAS ESTEBAN", "VARGAS SILVA FERNANDA VICTORIA"
  ];
  
  for (let i = 0; i < 25; i++) {
    const randomName = names[i % names.length];
    const randomCourse = courses[i % courses.length];
    const randomRut = `2${(7000000 + i * 1000).toString()}-${(i % 10)}`;
    const hasScholarship = Math.random() > 0.8;
    const totalAnnualFee = randomCourse.includes('NT') ? 1265000 : 1111000;
    const monthlyFee = Math.round(totalAnnualFee / 10);
    const scholarshipAmount = hasScholarship ? totalAnnualFee : 0;
    const totalPaid = hasScholarship ? 0 : Math.floor(Math.random() * totalAnnualFee);
    const pendingAmount = Math.max(0, totalAnnualFee - scholarshipAmount - totalPaid);
    
    let status = 'overdue';
    if (hasScholarship) {
      status = 'scholarship';
    } else if (pendingAmount === 0) {
      status = 'paid';
    } else if (totalPaid > 0) {
      status = 'pending';
    }
    
    moreStudents.push({
      id: baseStudents.length + i + 1,
      rut: randomRut,
      studentName: randomName,
      guardianName: `Apoderado ${randomName.split(' ')[0]}`,
      grade: randomCourse,
      monthlyFee: hasScholarship ? 0 : monthlyFee,
      totalAnnualFee,
      scholarshipAmount,
      totalPaid,
      pendingAmount,
      status,
      phone: `+56 9 ${Math.floor(Math.random() * 90000000) + 10000000}`,
      email: `${randomName.split(' ')[0].toLowerCase()}.familia@gmail.com`,
      hasFullScholarship: hasScholarship,
      paymentHistory: hasScholarship ? [] : generateRandomPayments(totalPaid, monthlyFee)
    });
  }
  
  return [...baseStudents, ...moreStudents];
};

const generateRandomPayments = (totalPaid, monthlyFee) => {
  const payments = [];
  let remaining = totalPaid;
  let installment = 1;
  let paymentId = Math.floor(Math.random() * 10000);
  
  while (remaining > 0 && installment <= 10) {
    const amount = Math.min(monthlyFee, remaining);
    payments.push({
      id: paymentId++,
      amount,
      date: `2024-${String(installment + 2).padStart(2, '0')}-15`,
      concept: `Cuota ${installment}`,
      method: Math.random() > 0.5 ? 'Transferencia' : 'Efectivo',
      installmentNumber: installment
    });
    remaining -= amount;
    installment++;
  }
  
  return payments.reverse(); // Más recientes primero
};

export class CSVDataService {
  constructor() {
    this.students = [];
    this.isLoaded = false;
  }

  async loadData() {
    try {
      console.log('📄 Cargando datos desde CSV simulado...');
      
      // Simular un pequeño delay de carga
      await new Promise(resolve => setTimeout(resolve, 500));
      
      this.students = generateMoreStudents();
      this.isLoaded = true;
      
      console.log(`✅ Cargados ${this.students.length} estudiantes desde datos CSV`);
      return this.students;
    } catch (error) {
      console.error('Error cargando datos CSV:', error);
      return [];
    }
  }

  getStudents() {
    return this.students;
  }

  getStudentByRut(rut) {
    return this.students.find(student => student.rut === rut);
  }

  getPaymentHistory(studentRut) {
    const student = this.getStudentByRut(studentRut);
    return student?.paymentHistory || [];
  }

  addPayment(studentRut, paymentData) {
    const student = this.getStudentByRut(studentRut);
    if (!student) return { success: false, error: 'Estudiante no encontrado' };

    const newPayment = {
      id: Date.now(),
      amount: parseInt(paymentData.amount),
      date: paymentData.date,
      concept: paymentData.concept,
      method: paymentData.method || 'Efectivo',
      installmentNumber: paymentData.installmentNumber
    };

    student.paymentHistory.unshift(newPayment); // Agregar al inicio
    student.totalPaid += newPayment.amount;
    student.pendingAmount = Math.max(0, 
      (student.totalAnnualFee - student.scholarshipAmount) - student.totalPaid
    );

    // Recalcular estado
    if (student.hasFullScholarship) {
      student.status = 'scholarship';
    } else if (student.pendingAmount === 0) {
      student.status = 'paid';
    } else if (student.totalPaid > 0) {
      student.status = 'pending';
    } else {
      student.status = 'overdue';
    }

    return { success: true, payment: newPayment };
  }

  getStatistics() {
    const totalStudents = this.students.length;
    const totalCollected = this.students.reduce((sum, s) => sum + s.totalPaid, 0);
    const totalPending = this.students.reduce((sum, s) => sum + s.pendingAmount, 0);
    
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
      dataSource: 'csv',
      isSupabaseConnected: false
    };
  }
}

export const csvDataService = new CSVDataService();