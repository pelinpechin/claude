export const studentsData = [
  {
    id: 1,
    studentName: "María González Pérez",
    guardianName: "Carmen Pérez López",
    guardianPhone: "+56 9 8765 4321",
    guardianEmail: "carmen.perez@email.com",
    grade: "8° Básico A",
    monthlyFee: 125000,
    status: "paid",
    lastPayment: "2024-08-15",
    dueDate: "2024-09-05",
    balance: 0,
    paymentHistory: [
      { date: "2024-08-15", amount: 125000, concept: "Mensualidad Agosto" },
      { date: "2024-07-12", amount: 125000, concept: "Mensualidad Julio" }
    ]
  },
  {
    id: 2,
    studentName: "Carlos Rodríguez Silva",
    guardianName: "Juan Rodríguez Morales",
    guardianPhone: "+56 9 1234 5678",
    guardianEmail: "juan.rodriguez@email.com",
    grade: "1° Medio B",
    monthlyFee: 145000,
    status: "pending",
    lastPayment: "2024-07-20",
    dueDate: "2024-08-05",
    balance: 145000,
    paymentHistory: [
      { date: "2024-07-20", amount: 145000, concept: "Mensualidad Julio" },
      { date: "2024-06-18", amount: 145000, concept: "Mensualidad Junio" }
    ]
  },
  {
    id: 3,
    studentName: "Ana Martínez Contreras",
    guardianName: "Rosa Contreras Vega",
    guardianPhone: "+56 9 9876 5432",
    guardianEmail: "rosa.contreras@email.com",
    grade: "3° Básico A",
    monthlyFee: 115000,
    status: "overdue",
    lastPayment: "2024-06-15",
    dueDate: "2024-07-05",
    balance: 230000,
    paymentHistory: [
      { date: "2024-06-15", amount: 115000, concept: "Mensualidad Junio" },
      { date: "2024-05-12", amount: 115000, concept: "Mensualidad Mayo" }
    ]
  },
  {
    id: 4,
    studentName: "Pedro Sánchez López",
    guardianName: "Miguel Sánchez Torres",
    guardianPhone: "+56 9 5555 6666",
    guardianEmail: "miguel.sanchez@email.com",
    grade: "2° Medio A",
    monthlyFee: 150000,
    status: "paid",
    lastPayment: "2024-08-10",
    dueDate: "2024-09-05",
    balance: 0,
    paymentHistory: [
      { date: "2024-08-10", amount: 150000, concept: "Mensualidad Agosto" },
      { date: "2024-07-08", amount: 150000, concept: "Mensualidad Julio" }
    ]
  },
  {
    id: 5,
    studentName: "Sofía Herrera Muñoz",
    guardianName: "Patricia Muñoz Díaz",
    guardianPhone: "+56 9 7777 8888",
    guardianEmail: "patricia.munoz@email.com",
    grade: "5° Básico B",
    monthlyFee: 120000,
    status: "pending",
    lastPayment: "2024-07-25",
    dueDate: "2024-08-10",
    balance: 120000,
    paymentHistory: [
      { date: "2024-07-25", amount: 120000, concept: "Mensualidad Julio" },
      { date: "2024-06-22", amount: 120000, concept: "Mensualidad Junio" }
    ]
  },
  {
    id: 6,
    studentName: "Diego Fernández Castro",
    guardianName: "Luis Fernández Rojas",
    guardianPhone: "+56 9 3333 4444",
    guardianEmail: "luis.fernandez@email.com",
    grade: "Kinder A",
    monthlyFee: 95000,
    status: "paid",
    lastPayment: "2024-08-20",
    dueDate: "2024-09-05",
    balance: 0,
    paymentHistory: [
      { date: "2024-08-20", amount: 95000, concept: "Mensualidad Agosto" },
      { date: "2024-07-15", amount: 95000, concept: "Mensualidad Julio" }
    ]
  },
  {
    id: 7,
    studentName: "Valentina Torres Bravo",
    guardianName: "Carolina Bravo Mendez",
    guardianPhone: "+56 9 2222 3333",
    guardianEmail: "carolina.bravo@email.com",
    grade: "4° Medio A",
    monthlyFee: 160000,
    status: "overdue",
    lastPayment: "2024-05-30",
    dueDate: "2024-07-05",
    balance: 480000,
    paymentHistory: [
      { date: "2024-05-30", amount: 160000, concept: "Mensualidad Mayo" },
      { date: "2024-04-28", amount: 160000, concept: "Mensualidad Abril" }
    ]
  }
];

export const coursesData = [
  "Kinder A",
  "Kinder B", 
  "1° Básico A",
  "2° Básico A",
  "3° Básico A",
  "4° Básico A",
  "5° Básico A",
  "5° Básico B",
  "6° Básico A",
  "7° Básico A",
  "8° Básico A",
  "1° Medio A",
  "1° Medio B",
  "2° Medio A",
  "3° Medio A",
  "4° Medio A"
];

export const getPaymentStats = (data) => {
  const totalStudents = data.length;
  const paidStudents = data.filter(s => s.status === 'paid').length;
  const pendingStudents = data.filter(s => s.status === 'pending').length;
  const overdueStudents = data.filter(s => s.status === 'overdue').length;
  
  const totalRevenue = data.reduce((sum, s) => sum + (s.monthlyFee - s.balance), 0);
  const totalPending = data.reduce((sum, s) => sum + s.balance, 0);

  return {
    totalStudents,
    paidStudents,
    pendingStudents,
    overdueStudents,
    totalRevenue,
    totalPending
  };
};