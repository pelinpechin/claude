// Base de datos actualizada con estudiantes reales de FUDE UMAG
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

// Base de datos de estudiantes - inicializada vacía, se llena desde CSV
export const studentsByGrade = {
  // Datos cargados dinámicamente desde alumnos.csv
    {
      "id": 1001,
      "rut": "27260721-4",
      "studentName": "AGUAYO LARA ISIDORA BELEN",
      "birthDate": "16-04-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca AGUAYO LARA",
      "guardianRut": "24.353.331-7",
      "guardianPhone": "+56 9 9640 2165",
      "guardianEmail": "francisca.aguayo@email.com",
      "guardianAddress": "Pasaje O'Higgins 1884, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1002,
      "rut": "27332182-9",
      "studentName": "ALVARADO SANCHEZ MAITE SABRINA",
      "birthDate": "09-08-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana ALVARADO SANCHEZ",
      "guardianRut": "24.369.955-K",
      "guardianPhone": "0",
      "guardianEmail": "ana.alvarado@email.com",
      "guardianAddress": "Av. España 1769, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1003,
      "rut": "27314685-7",
      "studentName": "ARANCIBIA ALVAREZ IGNACIO ANDRES",
      "birthDate": "17-07-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ARANCIBIA ALVAREZ",
      "guardianRut": "22.258.167-2",
      "guardianPhone": "0",
      "guardianEmail": "eduardo.arancibia@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1810, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1004,
      "rut": "27289800-6",
      "studentName": "CANTO RUFATT ANNIA PASCAL",
      "birthDate": "05-06-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa CANTO RUFATT",
      "guardianRut": "23.293.049-7",
      "guardianPhone": "0",
      "guardianEmail": "rosa.canto@email.com",
      "guardianAddress": "Av. España 464, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 285000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1005,
      "rut": "27278056-0",
      "studentName": "GONZLEZ GALLARDO MIGUEL HERNN",
      "birthDate": "10-05-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto GONZLEZ GALLARDO",
      "guardianRut": "25.057.626-9",
      "guardianPhone": "+56 9 9431 3053",
      "guardianEmail": "roberto.gonzlez@email.com",
      "guardianAddress": "Calle Bories 947, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1006,
      "rut": "27429302-0",
      "studentName": "GONZLEZ TORRES CRISTOPHER EZEQUIEL",
      "birthDate": "15-12-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel GONZLEZ TORRES",
      "guardianRut": "24.848.023-8",
      "guardianPhone": "+56 9 6837 7229",
      "guardianEmail": "miguel.gonzlez@email.com",
      "guardianAddress": "Pasaje O'Higgins 1443, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1007,
      "rut": "27286732-1",
      "studentName": "HARO GATICA RENATA ISABELLA",
      "birthDate": "29-05-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana HARO GATICA",
      "guardianRut": "22.244.687-2",
      "guardianPhone": "0",
      "guardianEmail": "ana.haro@email.com",
      "guardianAddress": "Calle Bories 1348, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1008,
      "rut": "27288943-0",
      "studentName": "HERNANDEZ GUERRERO JOSE THOMAS",
      "birthDate": "30-05-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés HERNANDEZ GUERRERO",
      "guardianRut": "22.282.211-4",
      "guardianPhone": "+56 9 4194 6899",
      "guardianEmail": "andres.hernandez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 388, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1009,
      "rut": "27347122-7",
      "studentName": "LAGOS AGURTO ETHAN AGUSTIN XAVIER",
      "birthDate": "02-09-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés LAGOS AGURTO",
      "guardianRut": "25.958.691-7",
      "guardianPhone": "+56 9 8810 8346",
      "guardianEmail": "andres.lagos@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1003, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1010,
      "rut": "27347076-K",
      "studentName": "LEVILL GAETE EMILY ABIGAIL",
      "birthDate": "02-09-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen LEVILL GAETE",
      "guardianRut": "23.770.915-2",
      "guardianPhone": "+56 9 9493 9060",
      "guardianEmail": "carmen.levill@email.com",
      "guardianAddress": "Pasaje O'Higgins 1867, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 380000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1011,
      "rut": "27305237-2",
      "studentName": "MARIO MILLAPINDA LA ISIDORA",
      "birthDate": "03-07-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MARIO MILLAPINDA",
      "guardianRut": "22.678.143-9",
      "guardianPhone": "+56 9 4717 6168",
      "guardianEmail": "rosa.mario@email.com",
      "guardianAddress": "Av. Colón 1843, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1012,
      "rut": "27247443-5",
      "studentName": "MIRANDA CONEJEROS LUIS ALEJANDRO",
      "birthDate": "18-03-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos MIRANDA CONEJEROS",
      "guardianRut": "23.181.729-8",
      "guardianPhone": "0",
      "guardianEmail": "carlos.miranda@email.com",
      "guardianAddress": "Calle Bories 1755, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 380000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1013,
      "rut": "27319853-9",
      "studentName": "MORIS MANCILLA GASPAR IGNACIO",
      "birthDate": "25-05-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis MORIS MANCILLA",
      "guardianRut": "24.724.028-4",
      "guardianPhone": "+56 9 7991 7108",
      "guardianEmail": "luis.moris@email.com",
      "guardianAddress": "Pasaje Los Leones 2038, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1014,
      "rut": "27313866-8",
      "studentName": "PACHECO BILBAO DAVID ALEJANDRO",
      "birthDate": "16-07-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis PACHECO BILBAO",
      "guardianRut": "21.417.700-5",
      "guardianPhone": "+56 9 6309 3306",
      "guardianEmail": "luis.pacheco@email.com",
      "guardianAddress": "Pasaje O'Higgins 1575, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1015,
      "rut": "27289148-6",
      "studentName": "SANZANA GONZALEZ MATILDE IVONNE",
      "birthDate": "03-06-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María SANZANA GONZALEZ",
      "guardianRut": "25.313.544-1",
      "guardianPhone": "+56 9 4648 5502",
      "guardianEmail": "maria.sanzana@email.com",
      "guardianAddress": "Calle Bories 164, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1016,
      "rut": "27267992-4",
      "studentName": "SOTO MANCILLA AGUSTINA PAZ",
      "birthDate": "27-04-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen SOTO MANCILLA",
      "guardianRut": "23.809.327-9",
      "guardianPhone": "0",
      "guardianEmail": "carmen.soto@email.com",
      "guardianAddress": "Pasaje Los Leones 621, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 380000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1017,
      "rut": "27329889-4",
      "studentName": "TORRES ARRIZAGA JULIETA COLOMBA",
      "birthDate": "06-08-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana TORRES ARRIZAGA",
      "guardianRut": "25.328.765-9",
      "guardianPhone": "+56 9 3945 4312",
      "guardianEmail": "ana.torres@email.com",
      "guardianAddress": "Av. Manuel Bulnes 601, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1018,
      "rut": "27353954-9",
      "studentName": "VALENZUELA AMPUERO TABATHA AVRIL",
      "birthDate": "09-09-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana VALENZUELA AMPUERO",
      "guardianRut": "24.103.514-K",
      "guardianPhone": "+56 9 9963 8184",
      "guardianEmail": "ana.valenzuela@email.com",
      "guardianAddress": "Pasaje O'Higgins 233, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1022,
      "rut": "27373548-8",
      "studentName": "ALMONACID VERA FLORENCIA ISABELLA",
      "birthDate": "12-10-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen ALMONACID VERA",
      "guardianRut": "21.670.615-3",
      "guardianPhone": "+56 9 9291 3776",
      "guardianEmail": "carmen.almonacid@email.com",
      "guardianAddress": "Pasaje Los Leones 248, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1024,
      "rut": "27356921-9",
      "studentName": "CRDENAS VILLALOBOS LILIANA FRANCESCA",
      "birthDate": "21-09-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa CRDENAS VILLALOBOS",
      "guardianRut": "23.296.377-8",
      "guardianPhone": "+56 9 8461 7963",
      "guardianEmail": "rosa.crdenas@email.com",
      "guardianAddress": "Av. Colón 1137, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 190000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1025,
      "rut": "27376909-9",
      "studentName": "DAZ HERRERA ANAH ARANTZA",
      "birthDate": "13-10-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa DAZ HERRERA",
      "guardianRut": "23.973.898-2",
      "guardianPhone": "+56 9 7708 7781",
      "guardianEmail": "rosa.daz@email.com",
      "guardianAddress": "Av. España 868, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 285000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1026,
      "rut": "27294754-6",
      "studentName": "GARNICA HUENCHUMN MATEO ANDRS",
      "birthDate": "16-06-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel GARNICA HUENCHUMN",
      "guardianRut": "24.637.016-8",
      "guardianPhone": "+56 9 4749 4903",
      "guardianEmail": "miguel.garnica@email.com",
      "guardianAddress": "Calle Magallanes 1824, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1027,
      "rut": "27353675-2",
      "studentName": "GMEZ CONTRERAS EMILIANO ANTONIO",
      "birthDate": "12-09-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis GMEZ CONTRERAS",
      "guardianRut": "24.963.141-8",
      "guardianPhone": "+56 9 7133 1615",
      "guardianEmail": "luis.gmez@email.com",
      "guardianAddress": "Av. Colón 1643, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1028,
      "rut": "27429598-8",
      "studentName": "GONZALEZ TUBIEZ LUCAS DE JESS",
      "birthDate": "14-12-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis GONZALEZ TUBIEZ",
      "guardianRut": "23.221.426-0",
      "guardianPhone": "+56 9 9958 3946",
      "guardianEmail": "luis.gonzalez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 298, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 380000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1029,
      "rut": "27275852-2",
      "studentName": "MASLE CARRASCO BORJA NICOLS",
      "birthDate": "13-05-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel MASLE CARRASCO",
      "guardianRut": "24.853.734-5",
      "guardianPhone": "0",
      "guardianEmail": "miguel.masle@email.com",
      "guardianAddress": "Calle Bories 975, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 190000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1030,
      "rut": "27259695-6",
      "studentName": "OYARZO VEGA TRINIDAD ANTONIA",
      "birthDate": "02-04-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María OYARZO VEGA",
      "guardianRut": "21.752.075-4",
      "guardianPhone": "+56 9 8460 7912",
      "guardianEmail": "maria.oyarzo@email.com",
      "guardianAddress": "Pasaje O'Higgins 1781, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1031,
      "rut": "27292746-4",
      "studentName": "OYARZN VELSQUEZ NICOLS IGNACIO",
      "birthDate": "12-06-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo OYARZN VELSQUEZ",
      "guardianRut": "23.382.625-1",
      "guardianPhone": "+56 9 8351 7720",
      "guardianEmail": "eduardo.oyarzn@email.com",
      "guardianAddress": "Pasaje O'Higgins 1710, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1033,
      "rut": "27381844-8",
      "studentName": "ROGEL MUOZ LUCIANO AGUSTN",
      "birthDate": "22-10-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos ROGEL MUOZ",
      "guardianRut": "21.989.275-6",
      "guardianPhone": "+56 9 7372 2494",
      "guardianEmail": "carlos.rogel@email.com",
      "guardianAddress": "Av. España 247, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1035,
      "rut": "27353530-6",
      "studentName": "SALAZAR MORALES MAITE ANTONELLA",
      "birthDate": "11-09-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen SALAZAR MORALES",
      "guardianRut": "22.878.351-K",
      "guardianPhone": "0",
      "guardianEmail": "carmen.salazar@email.com",
      "guardianAddress": "Pasaje Los Leones 2058, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1036,
      "rut": "27291568-7",
      "studentName": "ULLOA VELSQUEZ AMARU ISAAC",
      "birthDate": "06-06-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel ULLOA VELSQUEZ",
      "guardianRut": "25.124.868-0",
      "guardianPhone": "+56 9 4280 8565",
      "guardianEmail": "miguel.ulloa@email.com",
      "guardianAddress": "Calle Magallanes 575, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 190000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1037,
      "rut": "27407688-7",
      "studentName": "VSQUEZ GONZLEZ IAN DANIEL",
      "birthDate": "24-11-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel VSQUEZ GONZLEZ",
      "guardianRut": "24.628.799-6",
      "guardianPhone": "+56 9 2729 4089",
      "guardianEmail": "miguel.vsquez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2076, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1047,
      "rut": "27214832-5",
      "studentName": "GLVEZ ESTRADA MONSERRAT VICTORIA",
      "birthDate": "19-02-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen GLVEZ ESTRADA",
      "guardianRut": "25.075.480-9",
      "guardianPhone": "+56 9 7691 5411",
      "guardianEmail": "carmen.glvez@email.com",
      "guardianAddress": "Pasaje O'Higgins 783, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 190000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1058,
      "rut": "27245745-K",
      "studentName": "PICHULMN ALVAREZ OLIVER PATRICIO",
      "birthDate": "17-03-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos PICHULMN ALVAREZ",
      "guardianRut": "22.222.981-2",
      "guardianPhone": "+56 9 6168 8256",
      "guardianEmail": "carlos.pichulmn@email.com",
      "guardianAddress": "Pasaje O'Higgins 1222, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": 95000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1059,
      "rut": "27161526-4",
      "studentName": "SANDOVAL CAMPOS RENATO BENJAMIN",
      "birthDate": "10-01-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco SANDOVAL CAMPOS",
      "guardianRut": "23.130.547-5",
      "guardianPhone": "+56 9 8603 1331",
      "guardianEmail": "francisco.sandoval@email.com",
      "guardianAddress": "Calle Magallanes 583, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 380000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1061,
      "rut": "27220551-5",
      "studentName": "TORRES BARRA CONSTANZA ANABELLA",
      "birthDate": "25-02-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Ana TORRES BARRA",
      "guardianRut": "24.873.580-5",
      "guardianPhone": "+56 9 7772 0320",
      "guardianEmail": "ana.torres@email.com",
      "guardianAddress": "Av. Colón 1547, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1063,
      "rut": "27212093-5",
      "studentName": "VEJAR HUILQUIRUCA ESTEBAN ABEL",
      "birthDate": "15-02-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Francisco VEJAR HUILQUIRUCA",
      "guardianRut": "23.780.136-9",
      "guardianPhone": "+56 9 9386 8965",
      "guardianEmail": "francisco.vejar@email.com",
      "guardianAddress": "Pasaje O'Higgins 421, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1064,
      "rut": "27195523-5",
      "studentName": "VENEGAS MANCILLA SAMANTHA ISABELLA",
      "birthDate": "07-02-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Rosa VENEGAS MANCILLA",
      "guardianRut": "25.074.544-3",
      "guardianPhone": "+56 9 5423 0149",
      "guardianEmail": "rosa.venegas@email.com",
      "guardianAddress": "Av. España 1763, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1066,
      "rut": "27249908-K",
      "studentName": "LVAREZ SAN MARTN AGUSTN GABRIEL",
      "birthDate": "30-03-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco LVAREZ SAN",
      "guardianRut": "24.909.419-6",
      "guardianPhone": "+56 9 4901 2608",
      "guardianEmail": "francisco.lvarez@email.com",
      "guardianAddress": "Pasaje O'Higgins 1149, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 95000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": 95000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1076,
      "rut": "27226860-6",
      "studentName": "MARICOY PREZ VALERIA ISABEL",
      "birthDate": "03-03-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca MARICOY PREZ",
      "guardianRut": "26.185.201-2",
      "guardianPhone": "+56 9 8172 8536",
      "guardianEmail": "francisca.maricoy@email.com",
      "guardianAddress": "Calle Magallanes 1756, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1079,
      "rut": "27220950-2",
      "studentName": "RAMREZ GODOY JAVIERA ANTONIA",
      "birthDate": "27-02-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica RAMREZ GODOY",
      "guardianRut": "21.650.384-8",
      "guardianPhone": "+56 9 9227 7850",
      "guardianEmail": "monica.ramrez@email.com",
      "guardianAddress": "Pasaje Los Leones 1678, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 380000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1082,
      "rut": "27155111-8",
      "studentName": "SILVA BENAVENTE TOMS VICENTE",
      "birthDate": "09-01-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés SILVA BENAVENTE",
      "guardianRut": "21.458.241-4",
      "guardianPhone": "+56 9 7858 9642",
      "guardianEmail": "andres.silva@email.com",
      "guardianAddress": "Av. Colón 1440, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 380000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1087,
      "rut": "27195557-K",
      "studentName": "VENEGAS MANCILLA GIULIANA ALEXANDRA",
      "birthDate": "07-02-2020",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica VENEGAS MANCILLA",
      "guardianRut": "23.472.414-2",
      "guardianPhone": "+56 9 5423 0149",
      "guardianEmail": "monica.venegas@email.com",
      "guardianAddress": "Av. Colón 1867, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": 95000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 380000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 95000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1089,
      "rut": "27175687-9",
      "studentName": "VERA NANCUANTE VCTOR ADRIN",
      "birthDate": "18-01-2020",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel VERA NANCUANTE",
      "guardianRut": "22.184.631-1",
      "guardianPhone": "+56 9 4804 1646",
      "guardianEmail": "miguel.vera@email.com",
      "guardianAddress": "Pasaje Los Leones 1408, Punta Arenas",
      "grade": "Kinder A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    }
  ],
  "Sin clasificar": [
    {
      "id": 1019,
      "rut": "27278291-1",
      "studentName": "MARIO CONTRERAS AYLEN",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carmen MARIO CONTRERAS",
      "guardianRut": "21.362.851-8",
      "guardianPhone": "",
      "guardianEmail": "carmen.mario@email.com",
      "guardianAddress": "Pasaje O'Higgins 1255, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1020,
      "rut": "27378454-3",
      "studentName": "PEREZ BARRIENTOS MATIAS",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Patricia PEREZ BARRIENTOS",
      "guardianRut": "22.950.031-7",
      "guardianPhone": "",
      "guardianEmail": "patricia.perez@email.com",
      "guardianAddress": "Calle Magallanes 1738, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1021,
      "rut": "27272774-0",
      "studentName": "HERRERA VIVAR TOMAS",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Patricia HERRERA VIVAR",
      "guardianRut": "25.820.219-8",
      "guardianPhone": "",
      "guardianEmail": "patricia.herrera@email.com",
      "guardianAddress": "Av. España 518, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1039,
      "rut": "27384754-5",
      "studentName": "TORRES GUERRERO ISIDORA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Mónica TORRES GUERRERO",
      "guardianRut": "24.407.765-K",
      "guardianPhone": "",
      "guardianEmail": "monica.torres@email.com",
      "guardianAddress": "Calle Magallanes 779, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1052,
      "rut": "27142651-8",
      "studentName": "HERNNDEZ ALARCN AMAYA TRINIDAD",
      "birthDate": "27/192/201",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia HERNNDEZ ALARCN",
      "guardianRut": "24.953.182-0",
      "guardianPhone": "+56 9 9781 6039",
      "guardianEmail": "patricia.hernndez@email.com",
      "guardianAddress": "Pasaje Los Leones 528, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1171,
      "rut": "25773789-6",
      "studentName": "FUENTEALBA SOTO MAYTE ALEJANDRA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Patricia FUENTEALBA SOTO",
      "guardianRut": "23.353.066-2",
      "guardianPhone": "+56 9 3012 7654",
      "guardianEmail": "patricia.fuentealba@email.com",
      "guardianAddress": "Pasaje Los Leones 241, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1172,
      "rut": "26014022-1",
      "studentName": "GALINDO BARRIENTOS LEANDRO EZEQUIEL",
      "birthDate": "2020-01-01",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carlos GALINDO BARRIENTOS",
      "guardianRut": "21.702.611-3",
      "guardianPhone": "+56 9 6874 3240",
      "guardianEmail": "carlos.galindo@email.com",
      "guardianAddress": "Av. Manuel Bulnes 594, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1187,
      "rut": "26054183-8",
      "studentName": "VLIZ MIRANDA CRISTBAL ALFREDO",
      "birthDate": "17/12/0271",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisco VLIZ MIRANDA",
      "guardianRut": "22.289.867-6",
      "guardianPhone": "+56 9 6697 0853",
      "guardianEmail": "francisco.vliz@email.com",
      "guardianAddress": "Av. Manuel Bulnes 961, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1239,
      "rut": "25649803-0",
      "studentName": "DUMUY PARANCAN ISABELLA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carmen DUMUY PARANCAN",
      "guardianRut": "23.691.293-0",
      "guardianPhone": "",
      "guardianEmail": "carmen.dumuy@email.com",
      "guardianAddress": "Av. Manuel Bulnes 911, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1289,
      "rut": "25256620-1",
      "studentName": "VLAJOVICH PAREDES MILA PASCALE",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena VLAJOVICH PAREDES",
      "guardianRut": "21.979.844-K",
      "guardianPhone": "",
      "guardianEmail": "elena.vlajovich@email.com",
      "guardianAddress": "Av. España 413, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1291,
      "rut": "24774615-3",
      "studentName": "ALARCN SILVA ROCIO LEONOR ANAS",
      "birthDate": "21-10-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María ALARCN SILVA",
      "guardianRut": "21.107.789-1",
      "guardianPhone": "+56 9 6394 8288",
      "guardianEmail": "maria.alarcn@email.com",
      "guardianAddress": "Calle Bories 698, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1292,
      "rut": "24679872-9",
      "studentName": "ANDRADE OJEDA FLORENCIA ABIGAIL",
      "birthDate": "09-07-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa ANDRADE OJEDA",
      "guardianRut": "19.087.224-6",
      "guardianPhone": "+56 9 5748 2350",
      "guardianEmail": "rosa.andrade@email.com",
      "guardianAddress": "Calle Magallanes 428, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1293,
      "rut": "24644563-K",
      "studentName": "ARAVENA TENEB FLORENCIA IGNACIA",
      "birthDate": "03-06-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa ARAVENA TENEB",
      "guardianRut": "22.965.883-2",
      "guardianPhone": "+56 9 6856 6397",
      "guardianEmail": "rosa.aravena@email.com",
      "guardianAddress": "Calle Bories 1155, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1295,
      "rut": "24684516-6",
      "studentName": "BARRA ESPINOZA JOSEFA IGNACIA",
      "birthDate": "17-07-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena BARRA ESPINOZA",
      "guardianRut": "23.022.041-7",
      "guardianPhone": "+56 9 9574 1685",
      "guardianEmail": "elena.barra@email.com",
      "guardianAddress": "Av. Manuel Bulnes 428, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1297,
      "rut": "24647346-3",
      "studentName": "BARRA VENEGAS MARTINA KASSANDRA",
      "birthDate": "07-06-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena BARRA VENEGAS",
      "guardianRut": "22.786.597-0",
      "guardianPhone": "+56 9 8318 3762",
      "guardianEmail": "elena.barra@email.com",
      "guardianAddress": "Av. Colón 1141, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1298,
      "rut": "26130564-K",
      "studentName": "CAMARGO RUBIO SEBASTIAN DAVID",
      "birthDate": "24-07-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos CAMARGO RUBIO",
      "guardianRut": "21.771.118-5",
      "guardianPhone": "+56 9 4580 5787",
      "guardianEmail": "carlos.camargo@email.com",
      "guardianAddress": "Calle Bories 944, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1299,
      "rut": "24701109-9",
      "studentName": "COYOPAE MUGA ISIDORA JULIETA",
      "birthDate": "29-07-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María COYOPAE MUGA",
      "guardianRut": "21.669.837-1",
      "guardianPhone": "+56 9 9810 2157",
      "guardianEmail": "maria.coyopae@email.com",
      "guardianAddress": "Av. Colón 1463, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1300,
      "rut": "24598499-5",
      "studentName": "DAZ BARRIENTOS EMILIA VICTORIA",
      "birthDate": "02-04-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen DAZ BARRIENTOS",
      "guardianRut": "21.206.718-0",
      "guardianPhone": "+56 9 8848 6624",
      "guardianEmail": "carmen.daz@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1434, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1301,
      "rut": "24665442-5",
      "studentName": "ESTRADA MRQUEZ DELIC VICENTE",
      "birthDate": "24-06-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos ESTRADA MRQUEZ",
      "guardianRut": "21.541.352-7",
      "guardianPhone": "+56 9 3430 1615",
      "guardianEmail": "carlos.estrada@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1606, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1302,
      "rut": "24622723-3",
      "studentName": "EYZAGUIRRE VERA LEANDRO JAVIER",
      "birthDate": "15-05-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos EYZAGUIRRE VERA",
      "guardianRut": "23.428.352-9",
      "guardianPhone": "+56 9 6334 2760",
      "guardianEmail": "carlos.eyzaguirre@email.com",
      "guardianAddress": "Av. Colón 1722, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1304,
      "rut": "24725036-0",
      "studentName": "GAETE GONZLEZ VICENTE DAVID",
      "birthDate": "25-08-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan GAETE GONZLEZ",
      "guardianRut": "22.832.099-4",
      "guardianPhone": "+56 9 7853 6041",
      "guardianEmail": "juan.gaete@email.com",
      "guardianAddress": "Av. España 1981, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1306,
      "rut": "24784388-4",
      "studentName": "GALLARDO JARA RENATO ANDRS",
      "birthDate": "31-10-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan GALLARDO JARA",
      "guardianRut": "19.587.582-0",
      "guardianPhone": "+56 9 3245 7411",
      "guardianEmail": "juan.gallardo@email.com",
      "guardianAddress": "Av. Manuel Bulnes 731, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1309,
      "rut": "24602319-0",
      "studentName": "IGOR QUINCHAMAN ANAHY AYELN",
      "birthDate": "24-04-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca IGOR QUINCHAMAN",
      "guardianRut": "19.844.695-5",
      "guardianPhone": "+56 9 8921 0832",
      "guardianEmail": "francisca.igor@email.com",
      "guardianAddress": "Calle Bories 934, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1310,
      "rut": "24773708-1",
      "studentName": "KALACICH SILVA PASCUALA SOFA",
      "birthDate": "15-10-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca KALACICH SILVA",
      "guardianRut": "19.884.183-8",
      "guardianPhone": "+56 9 1226 1830",
      "guardianEmail": "francisca.kalacich@email.com",
      "guardianAddress": "Av. Manuel Bulnes 372, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1311,
      "rut": "24708653-6",
      "studentName": "MEZA CASTILLO ALONSO",
      "birthDate": "08-07-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto MEZA CASTILLO",
      "guardianRut": "22.801.120-7",
      "guardianPhone": "+56 9 7426 6415",
      "guardianEmail": "roberto.meza@email.com",
      "guardianAddress": "Calle Magallanes 1015, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1312,
      "rut": "24712505-1",
      "studentName": "URIBE MIRANDA KEVIN GABRIEL",
      "birthDate": "12-08-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan URIBE MIRANDA",
      "guardianRut": "21.870.520-0",
      "guardianPhone": "+56 9 9622 2040",
      "guardianEmail": "juan.uribe@email.com",
      "guardianAddress": "Pasaje O'Higgins 1850, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1313,
      "rut": "24612168-0",
      "studentName": "VILLALONCO PAREDES TRINIDAD BELN",
      "birthDate": "02-05-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca VILLALONCO PAREDES",
      "guardianRut": "20.050.777-0",
      "guardianPhone": "+56 9 2258 2075",
      "guardianEmail": "francisca.villalonco@email.com",
      "guardianAddress": "Calle Magallanes 889, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1315,
      "rut": "24816254-6",
      "studentName": "SEGURA MANCILLA JULIETA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Patricia SEGURA MANCILLA",
      "guardianRut": "23.752.938-3",
      "guardianPhone": "",
      "guardianEmail": "patricia.segura@email.com",
      "guardianAddress": "Calle Magallanes 691, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1317,
      "rut": "24734320-2",
      "studentName": "BRAVO ESCOBAR AMPARO",
      "birthDate": "08-09-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena BRAVO ESCOBAR",
      "guardianRut": "21.539.747-5",
      "guardianPhone": "+56 9 8465 3080",
      "guardianEmail": "elena.bravo@email.com",
      "guardianAddress": "Pasaje Los Leones 353, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1319,
      "rut": "24691453-2",
      "studentName": "CRDENAS OJEDA KAYLA ISIDORA",
      "birthDate": "24-07-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena CRDENAS OJEDA",
      "guardianRut": "20.677.932-2",
      "guardianPhone": "+56 9 9266 9043",
      "guardianEmail": "elena.crdenas@email.com",
      "guardianAddress": "Pasaje O'Higgins 1845, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1321,
      "rut": "24732740-1",
      "studentName": "GONZALEZ OYARZO DYLAN BEJAMIN",
      "birthDate": "30-08-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos GONZALEZ OYARZO",
      "guardianRut": "21.172.369-6",
      "guardianPhone": "+56 9 9652 0809",
      "guardianEmail": "carlos.gonzalez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1740, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1323,
      "rut": "24742028-2",
      "studentName": "LIMARDO LARA CATALINA ANTONELLA",
      "birthDate": "13-09-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena LIMARDO LARA",
      "guardianRut": "22.552.576-5",
      "guardianPhone": "+56 9 4617 7781",
      "guardianEmail": "elena.limardo@email.com",
      "guardianAddress": "Av. Colón 1714, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1324,
      "rut": "24596707-1",
      "studentName": "LORCA MORALES ANAHI VICTORIA",
      "birthDate": "13-04-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia LORCA MORALES",
      "guardianRut": "22.140.421-1",
      "guardianPhone": "+56 9 3452 2554",
      "guardianEmail": "patricia.lorca@email.com",
      "guardianAddress": "Av. España 1233, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1327,
      "rut": "24746816-1",
      "studentName": "MAYORGA CANOBRA D`LER ANDRS",
      "birthDate": "23-09-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan MAYORGA CANOBRA",
      "guardianRut": "23.333.411-1",
      "guardianPhone": "+56 9 3622 5641",
      "guardianEmail": "juan.mayorga@email.com",
      "guardianAddress": "Av. Colón 1604, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1328,
      "rut": "24595481-6",
      "studentName": "MEZA BURGOS ISABELLA IGNACIA",
      "birthDate": "09-04-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica MEZA BURGOS",
      "guardianRut": "23.517.658-0",
      "guardianPhone": "+56 9 7461 4577",
      "guardianEmail": "monica.meza@email.com",
      "guardianAddress": "Av. Colón 1405, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1331,
      "rut": "24619225-1",
      "studentName": "MONTIEL VIDAL IKER GABRIEL",
      "birthDate": "13-05-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés MONTIEL VIDAL",
      "guardianRut": "22.457.946-2",
      "guardianPhone": "+56 9 9461 6257",
      "guardianEmail": "andres.montiel@email.com",
      "guardianAddress": "Pasaje O'Higgins 1615, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1332,
      "rut": "24681470-8",
      "studentName": "MUOZ BAHAMONDE JOAQUN IGNACIO",
      "birthDate": "14-07-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel MUOZ BAHAMONDE",
      "guardianRut": "19.876.234-2",
      "guardianPhone": "+56 9 7430 4461",
      "guardianEmail": "miguel.muoz@email.com",
      "guardianAddress": "Av. Colón 1345, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1333,
      "rut": "24702599-5",
      "studentName": "MUOZ CRDENAS ALAN DAVID",
      "birthDate": "29-07-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos MUOZ CRDENAS",
      "guardianRut": "19.353.887-8",
      "guardianPhone": "+56 9 8792 6817",
      "guardianEmail": "carlos.muoz@email.com",
      "guardianAddress": "Calle Magallanes 1626, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1334,
      "rut": "24670504-6",
      "studentName": "NORAMBUENA MALDONADO ISIDORA JOSEFA",
      "birthDate": "28-06-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa NORAMBUENA MALDONADO",
      "guardianRut": "20.742.753-5",
      "guardianPhone": "+56 9 3081 0246",
      "guardianEmail": "rosa.norambuena@email.com",
      "guardianAddress": "Pasaje Los Leones 150, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1335,
      "rut": "24610804-8",
      "studentName": "OLMEDO VILLAMN VICTORIA SOFA",
      "birthDate": "05-05-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa OLMEDO VILLAMN",
      "guardianRut": "19.944.396-8",
      "guardianPhone": "+56 9 4125 0019",
      "guardianEmail": "rosa.olmedo@email.com",
      "guardianAddress": "Pasaje Los Leones 753, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1338,
      "rut": "24589230-6",
      "studentName": "RUIZ DAZ JAVIERA ISABELLA",
      "birthDate": "04-04-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca RUIZ DAZ",
      "guardianRut": "20.352.314-9",
      "guardianPhone": "+56 9 6126 8844",
      "guardianEmail": "francisca.ruiz@email.com",
      "guardianAddress": "Av. Colón 320, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1339,
      "rut": "24806996-1",
      "studentName": "VILLALOBOS ANDRADE VICENTE ALONSO",
      "birthDate": "21-11-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco VILLALOBOS ANDRADE",
      "guardianRut": "19.919.997-8",
      "guardianPhone": "+56 9 7842 7431",
      "guardianEmail": "francisco.villalobos@email.com",
      "guardianAddress": "Calle Bories 2064, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1340,
      "rut": "24605891-1",
      "studentName": "GONZALEZ VERA MARIANA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "María GONZALEZ VERA",
      "guardianRut": "18.824.758-K",
      "guardianPhone": "",
      "guardianEmail": "maria.gonzalez@email.com",
      "guardianAddress": "Av. Colón 402, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1341,
      "rut": "24624019-1",
      "studentName": "FICA MANCILLA JAVIER",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Ana FICA MANCILLA",
      "guardianRut": "23.327.493-3",
      "guardianPhone": "",
      "guardianEmail": "ana.fica@email.com",
      "guardianAddress": "Pasaje O'Higgins 1458, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1342,
      "rut": "24579163-1",
      "studentName": "AHERN BARRA ALONSO ESTEBAN",
      "birthDate": "27-03-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés AHERN BARRA",
      "guardianRut": "22.549.450-9",
      "guardianPhone": "+56 9 8902 0938",
      "guardianEmail": "andres.ahern@email.com",
      "guardianAddress": "Av. España 834, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1343,
      "rut": "24315246-1",
      "studentName": "BARRA BARRA AGUSTINA IGNACIA",
      "birthDate": "17-06-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica BARRA BARRA",
      "guardianRut": "22.697.846-1",
      "guardianPhone": "+56 9 5373 8189",
      "guardianEmail": "monica.barra@email.com",
      "guardianAddress": "Av. Colón 1902, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1344,
      "rut": "24335994-5",
      "studentName": "BARRIENTOS DELGADO ISABELLA IGNACIA",
      "birthDate": "20-07-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana BARRIENTOS DELGADO",
      "guardianRut": "21.608.775-5",
      "guardianPhone": "+56 9 8579 8862",
      "guardianEmail": "ana.barrientos@email.com",
      "guardianAddress": "Pasaje Los Leones 1340, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1345,
      "rut": "24402421-1",
      "studentName": "CORRALES OJEDA JAVIERA FERNANDA",
      "birthDate": "30-09-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca CORRALES OJEDA",
      "guardianRut": "18.762.865-2",
      "guardianPhone": "+56 9 1232 1104",
      "guardianEmail": "francisca.corrales@email.com",
      "guardianAddress": "Av. Colón 581, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1346,
      "rut": "24515729-0",
      "studentName": "FERRADA VALDERRAMA MXIMO FRANCISCO",
      "birthDate": "20-01-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan FERRADA VALDERRAMA",
      "guardianRut": "20.408.192-1",
      "guardianPhone": "+56 9 5413 6293",
      "guardianEmail": "juan.ferrada@email.com",
      "guardianAddress": "Calle Bories 1263, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1347,
      "rut": "24241901-4",
      "studentName": "GONZLEZ BARRA SEBASTIN IGNACIO",
      "birthDate": "08-04-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GONZLEZ BARRA",
      "guardianRut": "22.158.745-6",
      "guardianPhone": "+56 9 6695 7839",
      "guardianEmail": "eduardo.gonzlez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1580, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1348,
      "rut": "24386061-K",
      "studentName": "HENRQUEZ GONZLEZ ANTONIA PASCAL",
      "birthDate": "28-09-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena HENRQUEZ GONZLEZ",
      "guardianRut": "20.342.584-8",
      "guardianPhone": "+56 9 4791 0421",
      "guardianEmail": "elena.henrquez@email.com",
      "guardianAddress": "Av. España 1489, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1349,
      "rut": "24507721-1",
      "studentName": "MENA RIQUELME VICTORIA CAROLINE",
      "birthDate": "10-01-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MENA RIQUELME",
      "guardianRut": "20.886.973-6",
      "guardianPhone": "+56 9 7607 3308",
      "guardianEmail": "rosa.mena@email.com",
      "guardianAddress": "Calle Magallanes 1393, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1350,
      "rut": "24319370-2",
      "studentName": "MORA MACHUCA MATAS ALEJANDRO",
      "birthDate": "26-06-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto MORA MACHUCA",
      "guardianRut": "19.729.368-3",
      "guardianPhone": "+56 9 5042 5386",
      "guardianEmail": "roberto.mora@email.com",
      "guardianAddress": "Calle Magallanes 1118, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1351,
      "rut": "24520794-8",
      "studentName": "MUOZ MANSILLA JOSEFA ANAH",
      "birthDate": "23-01-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena MUOZ MANSILLA",
      "guardianRut": "19.663.103-8",
      "guardianPhone": "+56 9 9527 7676",
      "guardianEmail": "elena.muoz@email.com",
      "guardianAddress": "Calle Bories 1858, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1352,
      "rut": "24364041-5",
      "studentName": "PAREDES CONTRERAS ALONSO TOMS",
      "birthDate": "14-08-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan PAREDES CONTRERAS",
      "guardianRut": "20.692.374-1",
      "guardianPhone": "+56 9 8228 3023",
      "guardianEmail": "juan.paredes@email.com",
      "guardianAddress": "Calle Bories 1735, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1353,
      "rut": "24123255-7",
      "studentName": "QUIEL ANDRADE LEONARDO MXIMO",
      "birthDate": "20-11-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco QUIEL ANDRADE",
      "guardianRut": "22.950.402-9",
      "guardianPhone": "+56 9 8275 5173",
      "guardianEmail": "francisco.quiel@email.com",
      "guardianAddress": "Av. Colón 583, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1354,
      "rut": "24465206-9",
      "studentName": "RIOSECO AYALA CRISTBAL ALONSO",
      "birthDate": "26-11-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto RIOSECO AYALA",
      "guardianRut": "21.608.001-7",
      "guardianPhone": "+56 9 8500 7609",
      "guardianEmail": "roberto.rioseco@email.com",
      "guardianAddress": "Av. Manuel Bulnes 586, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1355,
      "rut": "24248288-3",
      "studentName": "RUIZ BARRA JUAN ALEJANDRO ANDRS",
      "birthDate": "13-04-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo RUIZ BARRA",
      "guardianRut": "20.209.530-5",
      "guardianPhone": "+56 9 9554 3051",
      "guardianEmail": "eduardo.ruiz@email.com",
      "guardianAddress": "Pasaje O'Higgins 762, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1356,
      "rut": "24507563-4",
      "studentName": "RUIZ BELLO LEONARDO ALFREDO",
      "birthDate": "12-01-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis RUIZ BELLO",
      "guardianRut": "23.245.974-3",
      "guardianPhone": "+56 9 9638 7640",
      "guardianEmail": "luis.ruiz@email.com",
      "guardianAddress": "Pasaje O'Higgins 668, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1357,
      "rut": "24307532-7",
      "studentName": "RUIZ JORQUERA BENYORIE ABIGAIL",
      "birthDate": "13-06-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena RUIZ JORQUERA",
      "guardianRut": "20.356.149-0",
      "guardianPhone": "+56 9 1271 0360",
      "guardianEmail": "elena.ruiz@email.com",
      "guardianAddress": "Calle Magallanes 1506, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1358,
      "rut": "24399900-6",
      "studentName": "SNCHEZ NOVOA LAUTARO ANDRS",
      "birthDate": "06-10-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis SNCHEZ NOVOA",
      "guardianRut": "18.426.858-2",
      "guardianPhone": "+56 9 4793 0380",
      "guardianEmail": "luis.snchez@email.com",
      "guardianAddress": "Calle Magallanes 233, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1359,
      "rut": "24539450-0",
      "studentName": "SOTO VERA MATHILDE PASCAL",
      "birthDate": "13-02-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa SOTO VERA",
      "guardianRut": "21.796.075-4",
      "guardianPhone": "+56 9 6134 5748",
      "guardianEmail": "rosa.soto@email.com",
      "guardianAddress": "Calle Bories 495, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1360,
      "rut": "24531489-2",
      "studentName": "TECA VILLAMN NICOLS IGNACIO",
      "birthDate": "07-02-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo TECA VILLAMN",
      "guardianRut": "21.814.499-3",
      "guardianPhone": "+56 9 8966 2565",
      "guardianEmail": "eduardo.teca@email.com",
      "guardianAddress": "Calle Magallanes 1985, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1361,
      "rut": "24245745-5",
      "studentName": "URIBE MINTE CAMILA PAZ",
      "birthDate": "15-04-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana URIBE MINTE",
      "guardianRut": "20.540.307-8",
      "guardianPhone": "+56 9 1222 0503",
      "guardianEmail": "ana.uribe@email.com",
      "guardianAddress": "Calle Bories 1895, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1362,
      "rut": "24392987-3",
      "studentName": "VARGAS SANTANA AGUSTINA ANDREA",
      "birthDate": "28-09-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana VARGAS SANTANA",
      "guardianRut": "19.606.148-7",
      "guardianPhone": "+56 9 9015 8608",
      "guardianEmail": "ana.vargas@email.com",
      "guardianAddress": "Pasaje Los Leones 1747, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1363,
      "rut": "24263290-7",
      "studentName": "VEGA GAJARDO ESTEBAN SEBASTIN",
      "birthDate": "27-04-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan VEGA GAJARDO",
      "guardianRut": "22.669.779-9",
      "guardianPhone": "+56 9 6855 9891",
      "guardianEmail": "juan.vega@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1626, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1364,
      "rut": "24488166-1",
      "studentName": "VERA NEZ MATILDE FLORENCIA",
      "birthDate": "17-12-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen VERA NEZ",
      "guardianRut": "19.445.728-6",
      "guardianPhone": "+56 9 7511 7441",
      "guardianEmail": "carmen.vera@email.com",
      "guardianAddress": "Av. España 275, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1365,
      "rut": "24366204-4",
      "studentName": "VILLEGAS GONZLEZ ROCO EMILIA",
      "birthDate": "20-08-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana VILLEGAS GONZLEZ",
      "guardianRut": "19.617.471-0",
      "guardianPhone": "+56 9 8959 6801",
      "guardianEmail": "ana.villegas@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1876, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1366,
      "rut": "24502738-9",
      "studentName": "ZIGA TOLEDO ALONSO IGNACIO",
      "birthDate": "05-01-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco ZIGA TOLEDO",
      "guardianRut": "18.847.767-4",
      "guardianPhone": "+56 9 5647 2146",
      "guardianEmail": "francisco.ziga@email.com",
      "guardianAddress": "Pasaje Los Leones 329, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1367,
      "rut": "24264071-3",
      "studentName": "CATALAN REYES ANTONELLA",
      "birthDate": "05-01-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco CATALAN REYES",
      "guardianRut": "21.634.056-6",
      "guardianPhone": "+56 9 5647 2146",
      "guardianEmail": "francisco.catalan@email.com",
      "guardianAddress": "Av. Manuel Bulnes 996, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1368,
      "rut": "24372259-4",
      "studentName": "ABURTO PINCHEIRA JULIN MATEO",
      "birthDate": "21-08-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis ABURTO PINCHEIRA",
      "guardianRut": "21.228.060-7",
      "guardianPhone": "+56 9 4521 1730",
      "guardianEmail": "luis.aburto@email.com",
      "guardianAddress": "Av. Colón 1194, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1369,
      "rut": "24581086-5",
      "studentName": "AGUILAR VLIZ JOAQUN IGNACIO",
      "birthDate": "28-03-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo AGUILAR VLIZ",
      "guardianRut": "20.943.280-3",
      "guardianPhone": "+56 9 9537 3488",
      "guardianEmail": "eduardo.aguilar@email.com",
      "guardianAddress": "Pasaje Los Leones 1057, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1370,
      "rut": "24558829-1",
      "studentName": "AGUIRRE SOTO SEBASTIN MATAS",
      "birthDate": "08-03-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto AGUIRRE SOTO",
      "guardianRut": "21.794.212-8",
      "guardianPhone": "+56 9 8760 5368",
      "guardianEmail": "roberto.aguirre@email.com",
      "guardianAddress": "Av. Manuel Bulnes 528, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1371,
      "rut": "24331845-9",
      "studentName": "ALMONACID PIFFAUT JULIETA VALENTINA",
      "birthDate": "15-07-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa ALMONACID PIFFAUT",
      "guardianRut": "21.302.387-K",
      "guardianPhone": "+56 9 7960 4794",
      "guardianEmail": "rosa.almonacid@email.com",
      "guardianAddress": "Pasaje Los Leones 1629, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1372,
      "rut": "24509245-8",
      "studentName": "BARRA CRDENAS CAMILA ISABEL",
      "birthDate": "16-01-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa BARRA CRDENAS",
      "guardianRut": "20.833.048-9",
      "guardianPhone": "+56 9 7473 9887",
      "guardianEmail": "rosa.barra@email.com",
      "guardianAddress": "Pasaje Los Leones 676, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1373,
      "rut": "24400058-4",
      "studentName": "BARRIGA ARISMENDI IGNACIA BELN",
      "birthDate": "14-10-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica BARRIGA ARISMENDI",
      "guardianRut": "22.624.972-9",
      "guardianPhone": "+56 9 5802 6321",
      "guardianEmail": "monica.barriga@email.com",
      "guardianAddress": "Av. España 981, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1374,
      "rut": "24544725-6",
      "studentName": "DAZ NAGUELQUN ANTONELLA SOFA",
      "birthDate": "21-02-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María DAZ NAGUELQUN",
      "guardianRut": "18.849.485-4",
      "guardianPhone": "+56 9 5025 4976",
      "guardianEmail": "maria.daz@email.com",
      "guardianAddress": "Av. Colón 698, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1375,
      "rut": "24474089-8",
      "studentName": "GALLEGOS GALLARDO NICOLS FELIPE",
      "birthDate": "03-12-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos GALLEGOS GALLARDO",
      "guardianRut": "19.778.688-4",
      "guardianPhone": "+56 9 6149 7110",
      "guardianEmail": "carlos.gallegos@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1378, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1376,
      "rut": "24274732-1",
      "studentName": "GMEZ ORTEGA VICENTE ESTEBAN",
      "birthDate": "14-05-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos GMEZ ORTEGA",
      "guardianRut": "19.152.938-3",
      "guardianPhone": "+56 9 8921 6013",
      "guardianEmail": "carlos.gmez@email.com",
      "guardianAddress": "Pasaje Los Leones 1414, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1377,
      "rut": "24499625-6",
      "studentName": "HERNNDEZ ALARCN AMANDA ARACELI",
      "birthDate": "05-01-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena HERNNDEZ ALARCN",
      "guardianRut": "18.586.740-4",
      "guardianPhone": "+56 9 9781 6039",
      "guardianEmail": "elena.hernndez@email.com",
      "guardianAddress": "Pasaje O'Higgins 2072, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1378,
      "rut": "24578653-0",
      "studentName": "JARA SANDOVAL AMANDA VALENTINA",
      "birthDate": "28-03-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia JARA SANDOVAL",
      "guardianRut": "18.742.334-1",
      "guardianPhone": "+56 9 9448 1786",
      "guardianEmail": "patricia.jara@email.com",
      "guardianAddress": "Av. Colón 1442, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1379,
      "rut": "24458923-5",
      "studentName": "LAGO MANSILLA ANTONIA BELN",
      "birthDate": "13-11-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa LAGO MANSILLA",
      "guardianRut": "22.558.791-4",
      "guardianPhone": "+56 9 4774 0652",
      "guardianEmail": "rosa.lago@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1628, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1380,
      "rut": "24569529-2",
      "studentName": "MANCILLA HERNNDEZ JULIAN IGNACIO",
      "birthDate": "17-03-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo MANCILLA HERNNDEZ",
      "guardianRut": "22.376.054-6",
      "guardianPhone": "+56 9 8501 6554",
      "guardianEmail": "eduardo.mancilla@email.com",
      "guardianAddress": "Pasaje O'Higgins 487, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1381,
      "rut": "24515953-6",
      "studentName": "MARILICN VERA AMANDA ROCO",
      "birthDate": "22-01-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana MARILICN VERA",
      "guardianRut": "22.015.259-6",
      "guardianPhone": "+56 9 6908 7750",
      "guardianEmail": "ana.marilicn@email.com",
      "guardianAddress": "Pasaje O'Higgins 1128, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1382,
      "rut": "24581117-9",
      "studentName": "MASLE CARRASCO JAVIERA EMILIA",
      "birthDate": "24-03-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana MASLE CARRASCO",
      "guardianRut": "22.421.788-9",
      "guardianPhone": "+56 9 7431 8564",
      "guardianEmail": "ana.masle@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1824, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1383,
      "rut": "24551391-7",
      "studentName": "OJEDA SALDIVIA JAVIERA IGNACIA",
      "birthDate": "08-02-2014",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen OJEDA SALDIVIA",
      "guardianRut": "22.143.964-3",
      "guardianPhone": "+56 9 6595 2547",
      "guardianEmail": "carmen.ojeda@email.com",
      "guardianAddress": "Calle Magallanes 1661, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1384,
      "rut": "24264203-1",
      "studentName": "PAREDES OYARZO SOFA JAVIERA",
      "birthDate": "29-04-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana PAREDES OYARZO",
      "guardianRut": "18.523.869-5",
      "guardianPhone": "+56 9 9424 1602",
      "guardianEmail": "ana.paredes@email.com",
      "guardianAddress": "Av. España 1221, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1385,
      "rut": "24557592-0",
      "studentName": "PREZ MUOZ NICOLS CONSTANTINO",
      "birthDate": "05-03-2014",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel PREZ MUOZ",
      "guardianRut": "23.366.443-K",
      "guardianPhone": "+56 9 7409 3314",
      "guardianEmail": "miguel.prez@email.com",
      "guardianAddress": "Calle Magallanes 276, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1386,
      "rut": "24473757-9",
      "studentName": "QUINTANA BAHAMONDE CATALINA IGNACIA",
      "birthDate": "05-12-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia QUINTANA BAHAMONDE",
      "guardianRut": "22.076.774-4",
      "guardianPhone": "+56 9 6171 5412",
      "guardianEmail": "patricia.quintana@email.com",
      "guardianAddress": "Av. Manuel Bulnes 176, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1387,
      "rut": "24235070-7",
      "studentName": "SALDIVIA GMEZ EMILIANO GAEL",
      "birthDate": "03-04-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan SALDIVIA GMEZ",
      "guardianRut": "18.954.642-4",
      "guardianPhone": "+56 9 6195 2520",
      "guardianEmail": "juan.saldivia@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2090, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1388,
      "rut": "24388262-1",
      "studentName": "SNCHEZ ARAVENA FACUNDO VALENTN",
      "birthDate": "24-08-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan SNCHEZ ARAVENA",
      "guardianRut": "20.113.777-2",
      "guardianPhone": "+56 9 7432 8016",
      "guardianEmail": "juan.snchez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 764, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1389,
      "rut": "24450405-1",
      "studentName": "SERPA HORNIG EMILIO FACUNDO",
      "birthDate": "11-11-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan SERPA HORNIG",
      "guardianRut": "21.403.732-7",
      "guardianPhone": "+56 9 8178 0426",
      "guardianEmail": "juan.serpa@email.com",
      "guardianAddress": "Pasaje O'Higgins 541, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1390,
      "rut": "24392931-8",
      "studentName": "VARGAS SANTANA SOFA PAZ",
      "birthDate": "28-09-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia VARGAS SANTANA",
      "guardianRut": "22.221.054-2",
      "guardianPhone": "+56 9 9015 8608",
      "guardianEmail": "patricia.vargas@email.com",
      "guardianAddress": "Av. Colón 1986, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1391,
      "rut": "24290126-6",
      "studentName": "VELQUN RIVAS BENJAMN ALONSO",
      "birthDate": "02-06-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo VELQUN RIVAS",
      "guardianRut": "19.262.715-K",
      "guardianPhone": "+56 9 5756 9751",
      "guardianEmail": "eduardo.velqun@email.com",
      "guardianAddress": "Av. Colón 586, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1392,
      "rut": "24354117-4",
      "studentName": "VERA GMEZ ANKATU",
      "birthDate": "04-08-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo VERA GMEZ",
      "guardianRut": "20.038.458-K",
      "guardianPhone": "+56 9 5030 3222",
      "guardianEmail": "eduardo.vera@email.com",
      "guardianAddress": "Av. Colón 1204, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1393,
      "rut": "24353300-7",
      "studentName": "VIDAL VIVANCO ALEX ISAIAS",
      "birthDate": "01-08-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés VIDAL VIVANCO",
      "guardianRut": "22.197.156-6",
      "guardianPhone": "+56 9 8253 6102",
      "guardianEmail": "andres.vidal@email.com",
      "guardianAddress": "Calle Bories 1732, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1394,
      "rut": "24053367-7",
      "studentName": "AGUILAR VLIZ BASTIN ALEJANDRO",
      "birthDate": "30-09-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel AGUILAR VLIZ",
      "guardianRut": "18.669.974-2",
      "guardianPhone": "+56 9 9537 3488",
      "guardianEmail": "miguel.aguilar@email.com",
      "guardianAddress": "Calle Magallanes 1546, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1395,
      "rut": "24009316-2",
      "studentName": "ALARCN FERNNDEZ BASTIN ANTONIO",
      "birthDate": "15-07-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan ALARCN FERNNDEZ",
      "guardianRut": "19.214.009-9",
      "guardianPhone": "+56 9 1229 1788",
      "guardianEmail": "juan.alarcn@email.com",
      "guardianAddress": "Calle Bories 1593, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1396,
      "rut": "23913792-K",
      "studentName": "ALDERETE CRCAMO JORGE PEDRO BELARMINO",
      "birthDate": "06-03-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ALDERETE CRCAMO",
      "guardianRut": "18.754.117-4",
      "guardianPhone": "+56 9 7156 3550",
      "guardianEmail": "eduardo.alderete@email.com",
      "guardianAddress": "Pasaje Los Leones 295, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1397,
      "rut": "28021851-0",
      "studentName": "AVENDAO MOLINA TIARE NAHARA",
      "birthDate": "27-03-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María AVENDAO MOLINA",
      "guardianRut": "26.671.904-3",
      "guardianPhone": "+56 9 5384 3979",
      "guardianEmail": "maria.avendao@email.com",
      "guardianAddress": "Calle Bories 2099, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1398,
      "rut": "23961550-3",
      "studentName": "BADILLA PREZ CONSUELO AMPARO",
      "birthDate": "23-05-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica BADILLA PREZ",
      "guardianRut": "18.145.020-7",
      "guardianPhone": "+56 9 8260 3225",
      "guardianEmail": "monica.badilla@email.com",
      "guardianAddress": "Pasaje O'Higgins 639, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1399,
      "rut": "24211251-2",
      "studentName": "FUENTES MARTNEZ IGNACIA ALMENDRA",
      "birthDate": "02-03-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena FUENTES MARTNEZ",
      "guardianRut": "20.565.574-3",
      "guardianPhone": "+56 9 9798 1111",
      "guardianEmail": "elena.fuentes@email.com",
      "guardianAddress": "Calle Bories 1155, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1400,
      "rut": "24077315-5",
      "studentName": "GALINDO BARRIENTOS CATALINA AYLEEN",
      "birthDate": "28-09-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena GALINDO BARRIENTOS",
      "guardianRut": "22.106.722-3",
      "guardianPhone": "+56 9 6874 3240",
      "guardianEmail": "elena.galindo@email.com",
      "guardianAddress": "Calle Magallanes 332, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1401,
      "rut": "24040485-0",
      "studentName": "GALLARDO ARAVENA PAULINA IGNACIA",
      "birthDate": "20-08-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica GALLARDO ARAVENA",
      "guardianRut": "21.428.545-2",
      "guardianPhone": "+56 9 9443 1575",
      "guardianEmail": "monica.gallardo@email.com",
      "guardianAddress": "Calle Magallanes 859, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1402,
      "rut": "24120273-9",
      "studentName": "GUERRERO GONZLEZ RENATA ANTONIA",
      "birthDate": "19-11-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica GUERRERO GONZLEZ",
      "guardianRut": "21.804.761-0",
      "guardianPhone": "+56 9 9444 8395",
      "guardianEmail": "monica.guerrero@email.com",
      "guardianAddress": "Calle Bories 1397, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1403,
      "rut": "24021550-0",
      "studentName": "HERNNDEZ MRQUEZ AGUSTINA IGNACIA",
      "birthDate": "28-07-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana HERNNDEZ MRQUEZ",
      "guardianRut": "20.382.874-8",
      "guardianPhone": "+56 9 8783 6782",
      "guardianEmail": "ana.hernndez@email.com",
      "guardianAddress": "Calle Magallanes 301, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1404,
      "rut": "23961167-2",
      "studentName": "JAA CALDERON MARTN ALONSO",
      "birthDate": "28-05-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos JAA CALDERON",
      "guardianRut": "21.152.207-0",
      "guardianPhone": "+56 9 9191 7503",
      "guardianEmail": "carlos.jaa@email.com",
      "guardianAddress": "Pasaje Los Leones 619, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1405,
      "rut": "24150857-9",
      "studentName": "LEVILL PAREDES ALONSO FERNANDO",
      "birthDate": "26-12-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco LEVILL PAREDES",
      "guardianRut": "19.576.564-2",
      "guardianPhone": "+56 9 8662 9141",
      "guardianEmail": "francisco.levill@email.com",
      "guardianAddress": "Pasaje Los Leones 875, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1406,
      "rut": "24112597-1",
      "studentName": "MACAS BURGOS FRANCO ALEJANDRO",
      "birthDate": "23-09-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco MACAS BURGOS",
      "guardianRut": "19.873.698-8",
      "guardianPhone": "+56 9 8207 7116",
      "guardianEmail": "francisco.macas@email.com",
      "guardianAddress": "Calle Magallanes 825, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1407,
      "rut": "24005465-5",
      "studentName": "MARAIS SAAVEDRA PASCALE IGNACIA",
      "birthDate": "12-07-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia MARAIS SAAVEDRA",
      "guardianRut": "18.251.674-0",
      "guardianPhone": "+56 9 4208 2515",
      "guardianEmail": "patricia.marais@email.com",
      "guardianAddress": "Pasaje Los Leones 1447, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1408,
      "rut": "23958200-1",
      "studentName": "MELLADO ALMONACID FLORENCIA ANTONELLA",
      "birthDate": "22-05-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena MELLADO ALMONACID",
      "guardianRut": "18.206.678-8",
      "guardianPhone": "+56 9 5989 3438",
      "guardianEmail": "elena.mellado@email.com",
      "guardianAddress": "Calle Bories 1876, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1409,
      "rut": "24087001-0",
      "studentName": "MORAGA MORAGA MARTN ALONSO",
      "birthDate": "05-10-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos MORAGA MORAGA",
      "guardianRut": "18.246.521-6",
      "guardianPhone": "+56 9 6303 6870",
      "guardianEmail": "carlos.moraga@email.com",
      "guardianAddress": "Pasaje Los Leones 160, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1410,
      "rut": "24091025-K",
      "studentName": "OJEDA BARRIENTOS AGUSTN FELIPE",
      "birthDate": "17-10-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco OJEDA BARRIENTOS",
      "guardianRut": "22.603.586-9",
      "guardianPhone": "+56 9 5748 9153",
      "guardianEmail": "francisco.ojeda@email.com",
      "guardianAddress": "Av. Colón 742, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1411,
      "rut": "24038680-1",
      "studentName": "OLMEDO VILLAMN VICENTE AGUSTN",
      "birthDate": "18-08-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto OLMEDO VILLAMN",
      "guardianRut": "18.155.163-1",
      "guardianPhone": "+56 9 4125 0019",
      "guardianEmail": "roberto.olmedo@email.com",
      "guardianAddress": "Av. Colón 1749, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1412,
      "rut": "24098257-9",
      "studentName": "ORTEGA ALVAREZ AMELIA ANDREA",
      "birthDate": "22-10-2024",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen ORTEGA ALVAREZ",
      "guardianRut": "20.924.721-6",
      "guardianPhone": "+56 9 9039 1117",
      "guardianEmail": "carmen.ortega@email.com",
      "guardianAddress": "Pasaje O'Higgins 1714, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1413,
      "rut": "24140081-6",
      "studentName": "PITTET RUBIO EMILIO GABRIEL",
      "birthDate": "14-12-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis PITTET RUBIO",
      "guardianRut": "21.677.533-3",
      "guardianPhone": "+56 9 5068 7295",
      "guardianEmail": "luis.pittet@email.com",
      "guardianAddress": "Calle Magallanes 1434, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1414,
      "rut": "24023203-0",
      "studentName": "SCHULZ BARRIENTOS ALEN AGUSTINA",
      "birthDate": "25-07-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena SCHULZ BARRIENTOS",
      "guardianRut": "21.354.923-5",
      "guardianPhone": "+56 9 9977 2532",
      "guardianEmail": "elena.schulz@email.com",
      "guardianAddress": "Av. Colón 1359, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1415,
      "rut": "24001213-8",
      "studentName": "SERRANO FERNNDEZ MATAS RAFAEL",
      "birthDate": "05-07-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis SERRANO FERNNDEZ",
      "guardianRut": "19.110.370-K",
      "guardianPhone": "+56 9 5411 1121",
      "guardianEmail": "luis.serrano@email.com",
      "guardianAddress": "Pasaje Los Leones 1284, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1416,
      "rut": "24227674-4",
      "studentName": "MARTINEZ MORA SOFIA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Patricia MARTINEZ MORA",
      "guardianRut": "19.798.941-6",
      "guardianPhone": "",
      "guardianEmail": "patricia.martinez@email.com",
      "guardianAddress": "Pasaje O'Higgins 797, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1417,
      "rut": "24231989-3",
      "studentName": "LEYTON LEIVA EMILY",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Rosa LEYTON LEIVA",
      "guardianRut": "22.936.642-4",
      "guardianPhone": "",
      "guardianEmail": "rosa.leyton@email.com",
      "guardianAddress": "Av. España 511, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1418,
      "rut": "24191032-6",
      "studentName": "AGUILAR HERNNDEZ CRISTBAL EMIR",
      "birthDate": "10-02-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan AGUILAR HERNNDEZ",
      "guardianRut": "23.007.314-7",
      "guardianPhone": "+56 9 5371 1014",
      "guardianEmail": "juan.aguilar@email.com",
      "guardianAddress": "Calle Magallanes 1643, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1419,
      "rut": "24244735-2",
      "studentName": "AMPUERO DONICKE JULIAN PAOLO",
      "birthDate": "15-04-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel AMPUERO DONICKE",
      "guardianRut": "22.420.640-2",
      "guardianPhone": "+56 9 3104 1967",
      "guardianEmail": "miguel.ampuero@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1495, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1420,
      "rut": "24136971-4",
      "studentName": "ARTEAGA TALMA GUSTAVO ALEXIS",
      "birthDate": "11-12-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ARTEAGA TALMA",
      "guardianRut": "18.191.307-K",
      "guardianPhone": "+56 9 9250 2319",
      "guardianEmail": "eduardo.arteaga@email.com",
      "guardianAddress": "Pasaje Los Leones 1514, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1421,
      "rut": "24048147-2",
      "studentName": "BARRA AMPUERO EMILIA ANTONIA",
      "birthDate": "25-08-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen BARRA AMPUERO",
      "guardianRut": "20.113.162-6",
      "guardianPhone": "+56 9 9423 2209",
      "guardianEmail": "carmen.barra@email.com",
      "guardianAddress": "Pasaje Los Leones 1102, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1422,
      "rut": "23975424-4",
      "studentName": "CRDENAS VEGAS CONSTANZA ISIDORA",
      "birthDate": "01-06-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María CRDENAS VEGAS",
      "guardianRut": "22.767.542-K",
      "guardianPhone": "+56 9 4226 5040",
      "guardianEmail": "maria.crdenas@email.com",
      "guardianAddress": "Av. Colón 360, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1423,
      "rut": "24288834-0",
      "studentName": "CHAURA PALMA MA ISABELLA PASCAL",
      "birthDate": "25-05-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen CHAURA PALMA",
      "guardianRut": "23.059.328-0",
      "guardianPhone": "+56 9 9295 4324",
      "guardianEmail": "carmen.chaura@email.com",
      "guardianAddress": "Calle Magallanes 110, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1424,
      "rut": "24212909-1",
      "studentName": "DAZ COLIVORO SAMANTHA IGNACIA",
      "birthDate": "04-03-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena DAZ COLIVORO",
      "guardianRut": "18.357.778-6",
      "guardianPhone": "+56 9 8524 4043",
      "guardianEmail": "elena.daz@email.com",
      "guardianAddress": "Calle Bories 1965, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1425,
      "rut": "24118669-5",
      "studentName": "DAZ MALDONADO GONZALO IGNACIO",
      "birthDate": "15-11-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos DAZ MALDONADO",
      "guardianRut": "18.235.285-3",
      "guardianPhone": "+56 9 5909 9731",
      "guardianEmail": "carlos.daz@email.com",
      "guardianAddress": "Av. España 1526, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1426,
      "rut": "23995839-7",
      "studentName": "FIGUEROA BARRIENTOS BASTIN EMILIO",
      "birthDate": "28-06-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos FIGUEROA BARRIENTOS",
      "guardianRut": "20.781.117-3",
      "guardianPhone": "+56 9 7633 0537",
      "guardianEmail": "carlos.figueroa@email.com",
      "guardianAddress": "Av. Colón 1070, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1427,
      "rut": "24071295-4",
      "studentName": "KALACICH SILVA RAFAEL ANTONIO",
      "birthDate": "20-09-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto KALACICH SILVA",
      "guardianRut": "19.884.216-8",
      "guardianPhone": "+56 9 1226 1830",
      "guardianEmail": "roberto.kalacich@email.com",
      "guardianAddress": "Av. Colón 655, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1428,
      "rut": "24226517-3",
      "studentName": "MARIMN MONTESINOS RENATO LEN",
      "birthDate": "21-03-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés MARIMN MONTESINOS",
      "guardianRut": "21.187.114-8",
      "guardianPhone": "+56 9 3716 9019",
      "guardianEmail": "andres.marimn@email.com",
      "guardianAddress": "Calle Bories 1970, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1429,
      "rut": "23990023-2",
      "studentName": "MARIAN ANDRADE CATALINA PAZ",
      "birthDate": "23-06-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca MARIAN ANDRADE",
      "guardianRut": "18.130.736-6",
      "guardianPhone": "+56 9 5418 6301",
      "guardianEmail": "francisca.marian@email.com",
      "guardianAddress": "Calle Magallanes 1666, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1430,
      "rut": "24039111-2",
      "studentName": "MELLA MAASS MARCO ANTONIO",
      "birthDate": "14-08-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel MELLA MAASS",
      "guardianRut": "20.409.616-3",
      "guardianPhone": "+56 9 8545 6825",
      "guardianEmail": "miguel.mella@email.com",
      "guardianAddress": "Av. Colón 781, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1431,
      "rut": "24124570-5",
      "studentName": "MELO FERRADA ALONSO RICARDO",
      "birthDate": "25-11-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés MELO FERRADA",
      "guardianRut": "22.875.592-3",
      "guardianPhone": "+56 9 4268 2822",
      "guardianEmail": "andres.melo@email.com",
      "guardianAddress": "Calle Bories 1264, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1432,
      "rut": "24100882-7",
      "studentName": "MIRANDA MANCILLA EMILIA ANTONIA",
      "birthDate": "04-05-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca MIRANDA MANCILLA",
      "guardianRut": "22.959.676-4",
      "guardianPhone": "+56 9 5973 9043",
      "guardianEmail": "francisca.miranda@email.com",
      "guardianAddress": "Calle Magallanes 1600, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1433,
      "rut": "23954611-0",
      "studentName": "NAVARRO PAREDES FRANCISCA EMILIA",
      "birthDate": "20-05-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica NAVARRO PAREDES",
      "guardianRut": "21.503.509-3",
      "guardianPhone": "+56 9 3396 1031",
      "guardianEmail": "monica.navarro@email.com",
      "guardianAddress": "Pasaje O'Higgins 161, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1434,
      "rut": "24233010-2",
      "studentName": "OJEDA GONZLEZ LEONOR ISABELLA",
      "birthDate": "26-03-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica OJEDA GONZLEZ",
      "guardianRut": "21.913.799-0",
      "guardianPhone": "+56 9 8805 1982",
      "guardianEmail": "monica.ojeda@email.com",
      "guardianAddress": "Av. Colón 1172, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1435,
      "rut": "24103798-3",
      "studentName": "PEA SILVA IVN IGNACIO",
      "birthDate": "30-10-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés PEA SILVA",
      "guardianRut": "20.815.387-0",
      "guardianPhone": "+56 9 9998 1716",
      "guardianEmail": "andres.pea@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1054, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1436,
      "rut": "23876343-6",
      "studentName": "REYES ALMONACID LUCAS LEN",
      "birthDate": "17-02-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis REYES ALMONACID",
      "guardianRut": "21.581.197-2",
      "guardianPhone": "+56 9 8454 1548",
      "guardianEmail": "luis.reyes@email.com",
      "guardianAddress": "Calle Bories 1873, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1437,
      "rut": "24205242-0",
      "studentName": "SALAZAR PINCHEIRA AMANDA ISABELLA",
      "birthDate": "27-02-2013",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena SALAZAR PINCHEIRA",
      "guardianRut": "20.159.982-2",
      "guardianPhone": "+56 9 5401 6522",
      "guardianEmail": "elena.salazar@email.com",
      "guardianAddress": "Pasaje O'Higgins 355, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1438,
      "rut": "24127988-K",
      "studentName": "SEGURA ROMN SANTIAGO VALENTN",
      "birthDate": "30-11-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco SEGURA ROMN",
      "guardianRut": "22.995.041-K",
      "guardianPhone": "+56 9 9219 7570",
      "guardianEmail": "francisco.segura@email.com",
      "guardianAddress": "Av. Manuel Bulnes 282, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1439,
      "rut": "24194003-9",
      "studentName": "SEPLVEDA SOTO BENJAMN ANTONIO",
      "birthDate": "14-02-2013",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto SEPLVEDA SOTO",
      "guardianRut": "22.919.421-6",
      "guardianPhone": "+56 9 9169 3560",
      "guardianEmail": "roberto.seplveda@email.com",
      "guardianAddress": "Av. Colón 1118, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1440,
      "rut": "24131369-7",
      "studentName": "SIRON MANCILLA LUCAS JESS",
      "birthDate": "01-12-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés SIRON MANCILLA",
      "guardianRut": "21.379.755-7",
      "guardianPhone": "+56 9 9430 1971",
      "guardianEmail": "andres.siron@email.com",
      "guardianAddress": "Pasaje Los Leones 160, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1441,
      "rut": "24093610-0",
      "studentName": "VASCO BARRA MATEO ANDRS",
      "birthDate": "19-10-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos VASCO BARRA",
      "guardianRut": "22.892.171-8",
      "guardianPhone": "+56 9 6165 1733",
      "guardianEmail": "carlos.vasco@email.com",
      "guardianAddress": "Pasaje Los Leones 573, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1442,
      "rut": "23951240-2",
      "studentName": "WIGSTROM CARRILLO ISABELLA INS",
      "birthDate": "14-05-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen WIGSTROM CARRILLO",
      "guardianRut": "18.142.119-3",
      "guardianPhone": "+56 9 8940 7528",
      "guardianEmail": "carmen.wigstrom@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2033, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1443,
      "rut": "23915078-0",
      "studentName": "BELTRAN OYARZO ARANTZA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena BELTRAN OYARZO",
      "guardianRut": "22.033.571-2",
      "guardianPhone": "",
      "guardianEmail": "elena.beltran@email.com",
      "guardianAddress": "Calle Magallanes 1463, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1444,
      "rut": "23770704-4",
      "studentName": "ARAYA OSORES AYALEN ANTONIA",
      "birthDate": "14-10-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica ARAYA OSORES",
      "guardianRut": "19.865.411-6",
      "guardianPhone": "+56 9 7120 7649",
      "guardianEmail": "monica.araya@email.com",
      "guardianAddress": "Av. España 441, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1445,
      "rut": "23920006-0",
      "studentName": "ARCOS BARRIENTOS AMAIA ISABELLA",
      "birthDate": "09-04-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia ARCOS BARRIENTOS",
      "guardianRut": "18.142.939-9",
      "guardianPhone": "+56 9 9578 8476",
      "guardianEmail": "patricia.arcos@email.com",
      "guardianAddress": "Calle Bories 644, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1446,
      "rut": "23764057-8",
      "studentName": "BACON MACHADO RENATO ALFREDO",
      "birthDate": "06-10-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel BACON MACHADO",
      "guardianRut": "21.017.452-4",
      "guardianPhone": "+56 9 9473 0935",
      "guardianEmail": "miguel.bacon@email.com",
      "guardianAddress": "Calle Magallanes 405, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1447,
      "rut": "23753915-K",
      "studentName": "BARRIA AGUERO DAENERYS BELN",
      "birthDate": "20-09-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca BARRIA AGUERO",
      "guardianRut": "22.023.117-8",
      "guardianPhone": "+56 9 2396 5979",
      "guardianEmail": "francisca.barria@email.com",
      "guardianAddress": "Av. Manuel Bulnes 756, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1448,
      "rut": "23887723-7",
      "studentName": "BARRA MIRANDA MARTN IGNACIO",
      "birthDate": "04-03-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis BARRA MIRANDA",
      "guardianRut": "20.238.466-8",
      "guardianPhone": "+56 9 9652 5891",
      "guardianEmail": "luis.barra@email.com",
      "guardianAddress": "Calle Bories 755, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1449,
      "rut": "23780155-5",
      "studentName": "BARRIENTOS CANOBRA CSAR BANJAMN",
      "birthDate": "25-10-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos BARRIENTOS CANOBRA",
      "guardianRut": "19.764.730-2",
      "guardianPhone": "+56 9 9093 1393",
      "guardianEmail": "carlos.barrientos@email.com",
      "guardianAddress": "Av. Manuel Bulnes 332, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1450,
      "rut": "23854181-6",
      "studentName": "BARROS GONZLEZ KARLA SOFA",
      "birthDate": "23-01-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia BARROS GONZLEZ",
      "guardianRut": "18.341.192-6",
      "guardianPhone": "+56 9 8173 2389",
      "guardianEmail": "patricia.barros@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1331, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1451,
      "rut": "23854984-1",
      "studentName": "GONZALEZ TRONCOSO MAITE FRANCISCA AYLIN",
      "birthDate": "26-01-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana GONZALEZ TRONCOSO",
      "guardianRut": "22.392.091-8",
      "guardianPhone": "+56 9 8372 7327",
      "guardianEmail": "ana.gonzalez@email.com",
      "guardianAddress": "Calle Magallanes 597, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1452,
      "rut": "23732178-2",
      "studentName": "MANSILLA CELIS CONSTANZA AGUSTINA",
      "birthDate": "01-09-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena MANSILLA CELIS",
      "guardianRut": "20.123.024-1",
      "guardianPhone": "+56 9 7720 2218",
      "guardianEmail": "elena.mansilla@email.com",
      "guardianAddress": "Calle Magallanes 1744, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1453,
      "rut": "23810118-2",
      "studentName": "MELIPILLN FOOS BORJA",
      "birthDate": "02-12-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto MELIPILLN FOOS",
      "guardianRut": "18.076.268-K",
      "guardianPhone": "+56 9 9658 1826",
      "guardianEmail": "roberto.melipilln@email.com",
      "guardianAddress": "Av. España 2096, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1454,
      "rut": "23810277-4",
      "studentName": "MERCADO GUERRERO DIEGO IGNACIO",
      "birthDate": "05-12-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés MERCADO GUERRERO",
      "guardianRut": "19.634.909-K",
      "guardianPhone": "+56 9 8724 2914",
      "guardianEmail": "andres.mercado@email.com",
      "guardianAddress": "Av. Manuel Bulnes 126, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1455,
      "rut": "23709622-3",
      "studentName": "MILLALONCO SALDIVIA JOSEFA ANDREA",
      "birthDate": "04-08-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena MILLALONCO SALDIVIA",
      "guardianRut": "19.303.078-5",
      "guardianPhone": "+56 9 6759 9067",
      "guardianEmail": "elena.millalonco@email.com",
      "guardianAddress": "Calle Bories 1994, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1456,
      "rut": "23677155-5",
      "studentName": "MIRANDA TENORIO EMILIANA ISABEL",
      "birthDate": "25-06-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MIRANDA TENORIO",
      "guardianRut": "21.045.109-9",
      "guardianPhone": "+56 9 9429 1597",
      "guardianEmail": "rosa.miranda@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1991, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1457,
      "rut": "23680457-7",
      "studentName": "NEGRN GMEZ BENJAMN EMMANUEL",
      "birthDate": "21-06-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis NEGRN GMEZ",
      "guardianRut": "18.059.610-0",
      "guardianPhone": "+56 9 1222 2412",
      "guardianEmail": "luis.negrn@email.com",
      "guardianAddress": "Pasaje O'Higgins 1371, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1458,
      "rut": "23712881-8",
      "studentName": "PARRA DAZ ANTONELLA PAZ ANAH",
      "birthDate": "03-08-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa PARRA DAZ",
      "guardianRut": "22.181.297-2",
      "guardianPhone": "+56 9 3375 4978",
      "guardianEmail": "rosa.parra@email.com",
      "guardianAddress": "Pasaje O'Higgins 277, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1459,
      "rut": "23620326-3",
      "studentName": "PREZ UGARTE MATAS AGUSTN",
      "birthDate": "15-04-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan PREZ UGARTE",
      "guardianRut": "18.020.230-7",
      "guardianPhone": "+56 9 5824 8588",
      "guardianEmail": "juan.prez@email.com",
      "guardianAddress": "Calle Bories 1370, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1460,
      "rut": "23866849-2",
      "studentName": "RAMOS DOUGLAS JHON ANDRS",
      "birthDate": "09-02-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés RAMOS DOUGLAS",
      "guardianRut": "21.243.663-1",
      "guardianPhone": "+56 9 5773 1814",
      "guardianEmail": "andres.ramos@email.com",
      "guardianAddress": "Pasaje O'Higgins 1794, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1461,
      "rut": "23680939-0",
      "studentName": "SALDIVIA RIQUELME GABRIEL AGUSTN",
      "birthDate": "25-06-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis SALDIVIA RIQUELME",
      "guardianRut": "18.543.043-K",
      "guardianPhone": "+56 9 7716 5057",
      "guardianEmail": "luis.saldivia@email.com",
      "guardianAddress": "Calle Magallanes 667, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1462,
      "rut": "23802806-K",
      "studentName": "SNCHEZ MUOZ MAITE EIMY",
      "birthDate": "23-11-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena SNCHEZ MUOZ",
      "guardianRut": "19.561.517-9",
      "guardianPhone": "+56 9 9702 7118",
      "guardianEmail": "elena.snchez@email.com",
      "guardianAddress": "Calle Bories 317, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1463,
      "rut": "23759755-9",
      "studentName": "SILVA COLN EMILY YARITZA",
      "birthDate": "30-09-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen SILVA COLN",
      "guardianRut": "22.320.413-9",
      "guardianPhone": "+56 9 6686 0282",
      "guardianEmail": "carmen.silva@email.com",
      "guardianAddress": "Calle Bories 1956, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1464,
      "rut": "23728514-K",
      "studentName": "URIBE SILVA ALONSO ALEJANDRO",
      "birthDate": "25-08-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto URIBE SILVA",
      "guardianRut": "19.681.110-9",
      "guardianPhone": "+56 9 9545 9042",
      "guardianEmail": "roberto.uribe@email.com",
      "guardianAddress": "Calle Bories 1792, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1465,
      "rut": "23690812-7",
      "studentName": "VALENZUELA FONTEALBA SCARLETT ANTONELLA",
      "birthDate": "13-07-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen VALENZUELA FONTEALBA",
      "guardianRut": "20.656.110-6",
      "guardianPhone": "+56 9 7995 8654",
      "guardianEmail": "carmen.valenzuela@email.com",
      "guardianAddress": "Pasaje Los Leones 1392, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1466,
      "rut": "23616500-0",
      "studentName": "VERA ZIGA FRANCO IGNACIO",
      "birthDate": "11-04-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco VERA ZIGA",
      "guardianRut": "21.234.719-1",
      "guardianPhone": "+56 9 1241 7794",
      "guardianEmail": "francisco.vera@email.com",
      "guardianAddress": "Pasaje O'Higgins 1306, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1467,
      "rut": "23907340-9",
      "studentName": "VIDAL OYARZO LUCIANA VALENTINA",
      "birthDate": "23-03-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca VIDAL OYARZO",
      "guardianRut": "21.423.233-2",
      "guardianPhone": "+56 9 2258 2075",
      "guardianEmail": "francisca.vidal@email.com",
      "guardianAddress": "Av. Colón 306, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1468,
      "rut": "23698583-0",
      "studentName": "VILLALONCO PAREDES RENATO EZEQUIEL",
      "birthDate": "18-07-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés VILLALONCO PAREDES",
      "guardianRut": "20.483.515-2",
      "guardianPhone": "+56 9 8424 0301",
      "guardianEmail": "andres.villalonco@email.com",
      "guardianAddress": "Pasaje Los Leones 877, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1469,
      "rut": "23838246-7",
      "studentName": "ALTAMIRANO GONZLEZ JOS MIGUEL",
      "birthDate": "03-01-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto ALTAMIRANO GONZLEZ",
      "guardianRut": "20.025.429-5",
      "guardianPhone": "+56 9 1226 4229",
      "guardianEmail": "roberto.altamirano@email.com",
      "guardianAddress": "Av. Manuel Bulnes 777, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1470,
      "rut": "23860012-K",
      "studentName": "ALVARADO CRDENAS MAITE ANAS",
      "birthDate": "01-02-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen ALVARADO CRDENAS",
      "guardianRut": "21.450.797-8",
      "guardianPhone": "+56 9 7120 7649",
      "guardianEmail": "carmen.alvarado@email.com",
      "guardianAddress": "Calle Bories 811, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1471,
      "rut": "23906904-5",
      "studentName": "BARRIENTOS CRCAMO BENJAMN ALEJANDRO",
      "birthDate": "14-03-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés BARRIENTOS CRCAMO",
      "guardianRut": "18.824.206-5",
      "guardianPhone": "+56 9 7707 5826",
      "guardianEmail": "andres.barrientos@email.com",
      "guardianAddress": "Pasaje Los Leones 1744, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1472,
      "rut": "23854193-K",
      "studentName": "BARROS GONZLEZ MARTINA ANTONIA",
      "birthDate": "23-01-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana BARROS GONZLEZ",
      "guardianRut": "19.623.182-K",
      "guardianPhone": "+56 9 8173 2389",
      "guardianEmail": "ana.barros@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1398, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1473,
      "rut": "23670855-1",
      "studentName": "CRCAMO FIGUEROA IGNACIO ANDRS",
      "birthDate": "17-06-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco CRCAMO FIGUEROA",
      "guardianRut": "19.442.958-4",
      "guardianPhone": "+56 9 8720 8197",
      "guardianEmail": "francisco.crcamo@email.com",
      "guardianAddress": "Av. Colón 587, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1474,
      "rut": "23491263-1",
      "studentName": "CRDENAS DAZ MILENA CAROLINA",
      "birthDate": "28-11-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca CRDENAS DAZ",
      "guardianRut": "21.411.209-4",
      "guardianPhone": "+56 9 5829 5465",
      "guardianEmail": "francisca.crdenas@email.com",
      "guardianAddress": "Calle Magallanes 727, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1475,
      "rut": "23653710-2",
      "studentName": "CORTEZ BARRIENTOS IGNACIO MANUEL",
      "birthDate": "22-05-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos CORTEZ BARRIENTOS",
      "guardianRut": "18.940.164-7",
      "guardianPhone": "+56 9 6633 1696",
      "guardianEmail": "carlos.cortez@email.com",
      "guardianAddress": "Pasaje O'Higgins 189, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1476,
      "rut": "23765455-2",
      "studentName": "COYOPAE MUGA AMANDA SAYEN",
      "birthDate": "08-10-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana COYOPAE MUGA",
      "guardianRut": "20.303.875-5",
      "guardianPhone": "+56 9 9810 2157",
      "guardianEmail": "ana.coyopae@email.com",
      "guardianAddress": "Av. Colón 1571, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1477,
      "rut": "23612635-8",
      "studentName": "DAZ VEGA CAMILO EDUARDO",
      "birthDate": "07-04-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos DAZ VEGA",
      "guardianRut": "17.649.834-K",
      "guardianPhone": "+56 9 7996 7618",
      "guardianEmail": "carlos.daz@email.com",
      "guardianAddress": "Calle Magallanes 393, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1478,
      "rut": "23799278-4",
      "studentName": "GALLARDO JARA ALONSO RODRIGO",
      "birthDate": "17-11-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GALLARDO JARA",
      "guardianRut": "18.132.122-9",
      "guardianPhone": "+56 9 9625 3789",
      "guardianEmail": "eduardo.gallardo@email.com",
      "guardianAddress": "Av. Colón 390, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1479,
      "rut": "23918466-9",
      "studentName": "GAMBOA BASCUAN JAVIERA DENISSE",
      "birthDate": "08-04-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen GAMBOA BASCUAN",
      "guardianRut": "19.788.755-9",
      "guardianPhone": "+56 9 9865 2196",
      "guardianEmail": "carmen.gamboa@email.com",
      "guardianAddress": "Pasaje O'Higgins 1343, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1480,
      "rut": "23804387-5",
      "studentName": "GODOY BRAVO FABIN GUSTAVO",
      "birthDate": "25-11-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis GODOY BRAVO",
      "guardianRut": "17.868.577-5",
      "guardianPhone": "+56 9 9865 2196",
      "guardianEmail": "luis.godoy@email.com",
      "guardianAddress": "Av. Manuel Bulnes 667, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1481,
      "rut": "23668192-0",
      "studentName": "GMEZ NAVARRO FERNANDA CATALINA",
      "birthDate": "12-06-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica GMEZ NAVARRO",
      "guardianRut": "22.322.450-4",
      "guardianPhone": "+56 9 5839 7501",
      "guardianEmail": "monica.gmez@email.com",
      "guardianAddress": "Pasaje Los Leones 1956, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1482,
      "rut": "23683387-9",
      "studentName": "KRAMER PARRA MARTN ALONSO",
      "birthDate": "17-06-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco KRAMER PARRA",
      "guardianRut": "18.626.490-8",
      "guardianPhone": "+56 9 8144 4875",
      "guardianEmail": "francisco.kramer@email.com",
      "guardianAddress": "Av. Manuel Bulnes 121, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1483,
      "rut": "23905911-2",
      "studentName": "MALDONADO PEALOZA AYLINE GRISELL",
      "birthDate": "14-03-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica MALDONADO PEALOZA",
      "guardianRut": "19.506.631-0",
      "guardianPhone": "+56 9 4070 9235",
      "guardianEmail": "monica.maldonado@email.com",
      "guardianAddress": "Calle Magallanes 2046, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1484,
      "rut": "23780961-0",
      "studentName": "MUOZ MUOZ CAMILA SOLEDAD",
      "birthDate": "27-10-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena MUOZ MUOZ",
      "guardianRut": "22.200.355-5",
      "guardianPhone": "+56 9 7761 5130",
      "guardianEmail": "elena.muoz@email.com",
      "guardianAddress": "Pasaje O'Higgins 1136, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1485,
      "rut": "23907921-0",
      "studentName": "NAVARRO VERA NICOLE PAULA",
      "birthDate": "19-03-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen NAVARRO VERA",
      "guardianRut": "19.755.095-3",
      "guardianPhone": "+56 9 9126 7418",
      "guardianEmail": "carmen.navarro@email.com",
      "guardianAddress": "Calle Magallanes 927, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1486,
      "rut": "23686171-6",
      "studentName": "OYARZO CANOBRA SUYAY ISIDORA",
      "birthDate": "01-07-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca OYARZO CANOBRA",
      "guardianRut": "22.357.862-4",
      "guardianPhone": "+56 9 7484 9674",
      "guardianEmail": "francisca.oyarzo@email.com",
      "guardianAddress": "Av. Colón 222, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1487,
      "rut": "23848638-6",
      "studentName": "OYARZN HARO ALISON ANTONELA",
      "birthDate": "19-01-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa OYARZN HARO",
      "guardianRut": "21.424.181-1",
      "guardianPhone": "+56 9 9055 1543",
      "guardianEmail": "rosa.oyarzn@email.com",
      "guardianAddress": "Calle Bories 532, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1488,
      "rut": "23904963-K",
      "studentName": "QUINCHN ALVARADO MATAS GABRIEL",
      "birthDate": "15-03-2012",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis QUINCHN ALVARADO",
      "guardianRut": "20.538.047-7",
      "guardianPhone": "+56 9 8551 8038",
      "guardianEmail": "luis.quinchn@email.com",
      "guardianAddress": "Pasaje O'Higgins 1693, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1489,
      "rut": "23649353-9",
      "studentName": "RALIL HENRQUEZ MATAS ALEJANDRO",
      "birthDate": "20-05-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis RALIL HENRQUEZ",
      "guardianRut": "19.091.690-1",
      "guardianPhone": "+56 9 5733 6656",
      "guardianEmail": "luis.ralil@email.com",
      "guardianAddress": "Av. Manuel Bulnes 631, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1490,
      "rut": "23790800-7",
      "studentName": "RUIZ BARRA IGNACIO BENJAMN",
      "birthDate": "03-11-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco RUIZ BARRA",
      "guardianRut": "19.979.547-3",
      "guardianPhone": "+56 9 9544 9124",
      "guardianEmail": "francisco.ruiz@email.com",
      "guardianAddress": "Av. Colón 1244, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1491,
      "rut": "23776548-6",
      "studentName": "SOTO HERRERA BELN IGNACIA",
      "birthDate": "17-10-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca SOTO HERRERA",
      "guardianRut": "18.228.145-K",
      "guardianPhone": "+56 9 5413 4426",
      "guardianEmail": "francisca.soto@email.com",
      "guardianAddress": "Av. Colón 1205, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1492,
      "rut": "23777568-6",
      "studentName": "TRABA MAICHIL PALOMA PASCAL",
      "birthDate": "20-10-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María TRABA MAICHIL",
      "guardianRut": "18.320.756-3",
      "guardianPhone": "+56 9 8530 0626",
      "guardianEmail": "maria.traba@email.com",
      "guardianAddress": "Av. España 1463, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1493,
      "rut": "23952859-7",
      "studentName": "YUSEFF SALAS EMILIA PASCALE",
      "birthDate": "16-05-2012",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia YUSEFF SALAS",
      "guardianRut": "21.495.632-2",
      "guardianPhone": "+56 9 6139 3375",
      "guardianEmail": "patricia.yuseff@email.com",
      "guardianAddress": "Calle Magallanes 813, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1494,
      "rut": "23304124-6",
      "studentName": "AGUAYO RODRIGUEZ MONTSERRAT ALEJANDRA",
      "birthDate": "26-04-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia AGUAYO RODRIGUEZ",
      "guardianRut": "20.631.607-1",
      "guardianPhone": "",
      "guardianEmail": "patricia.aguayo@email.com",
      "guardianAddress": "Calle Magallanes 949, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1495,
      "rut": "23444095-0",
      "studentName": "AGUILA BORQUEZ MAITE IGNACIA",
      "birthDate": "06-10-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen AGUILA BORQUEZ",
      "guardianRut": "22.057.805-4",
      "guardianPhone": "",
      "guardianEmail": "carmen.aguila@email.com",
      "guardianAddress": "Calle Magallanes 1952, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1496,
      "rut": "23508102-4",
      "studentName": "ALMONACID CONTRERAS MAXIMO SEBASTIAN",
      "birthDate": "18-12-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan ALMONACID CONTRERAS",
      "guardianRut": "18.583.707-6",
      "guardianPhone": "",
      "guardianEmail": "juan.almonacid@email.com",
      "guardianAddress": "Calle Magallanes 320, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1497,
      "rut": "23424181-8",
      "studentName": "AMPUERO OATE CRISTOBAL JOAQUIN",
      "birthDate": "15-09-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés AMPUERO OATE",
      "guardianRut": "21.245.672-1",
      "guardianPhone": "",
      "guardianEmail": "andres.ampuero@email.com",
      "guardianAddress": "Pasaje Los Leones 127, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1498,
      "rut": "23491014-0",
      "studentName": "ARIAS NAVARRO VALENTINA IGNACIA",
      "birthDate": "30-11-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen ARIAS NAVARRO",
      "guardianRut": "19.348.905-2",
      "guardianPhone": "",
      "guardianEmail": "carmen.arias@email.com",
      "guardianAddress": "Calle Magallanes 1347, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": 0,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1499,
      "rut": "23575732-K",
      "studentName": "CAIPILLAN CALBUN ROCO AMARA",
      "birthDate": "25-02-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa CAIPILLAN CALBUN",
      "guardianRut": "18.178.364-8",
      "guardianPhone": "",
      "guardianEmail": "rosa.caipillan@email.com",
      "guardianAddress": "Pasaje Los Leones 701, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1500,
      "rut": "23609784-6",
      "studentName": "CARCAMO HERNANDEZ MARTINA SOFIA",
      "birthDate": "04-04-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María CARCAMO HERNANDEZ",
      "guardianRut": "22.564.620-1",
      "guardianPhone": "",
      "guardianEmail": "maria.carcamo@email.com",
      "guardianAddress": "Calle Bories 1775, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1501,
      "rut": "23472511-4",
      "studentName": "CARCAMO VIDAL BENJAMIN ESTEBAN",
      "birthDate": "04-11-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos CARCAMO VIDAL",
      "guardianRut": "22.470.470-4",
      "guardianPhone": "",
      "guardianEmail": "carlos.carcamo@email.com",
      "guardianAddress": "Av. España 1734, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1502,
      "rut": "23534385-1",
      "studentName": "CARDENAS DURAN CRISTOBAL ALONSO",
      "birthDate": "18-01-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco CARDENAS DURAN",
      "guardianRut": "19.959.797-3",
      "guardianPhone": "",
      "guardianEmail": "francisco.cardenas@email.com",
      "guardianAddress": "Calle Bories 1173, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1503,
      "rut": "23595631-4",
      "studentName": "ELGUETA BARCENA CONSTANZA GRACE",
      "birthDate": "19-03-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica ELGUETA BARCENA",
      "guardianRut": "21.697.715-7",
      "guardianPhone": "",
      "guardianEmail": "monica.elgueta@email.com",
      "guardianAddress": "Av. España 1513, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1504,
      "rut": "23296906-7",
      "studentName": "GALLARDO ALVAREZ MAURICIO LEON",
      "birthDate": "13-04-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto GALLARDO ALVAREZ",
      "guardianRut": "17.993.064-1",
      "guardianPhone": "",
      "guardianEmail": "roberto.gallardo@email.com",
      "guardianAddress": "Calle Magallanes 882, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1505,
      "rut": "23481863-5",
      "studentName": "GALLEGOS TOLEDO ISABELLA PASCAL",
      "birthDate": "19-11-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena GALLEGOS TOLEDO",
      "guardianRut": "21.346.075-7",
      "guardianPhone": "",
      "guardianEmail": "elena.gallegos@email.com",
      "guardianAddress": "Calle Magallanes 911, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1506,
      "rut": "23456531-1",
      "studentName": "GOMEZ CAICHEO TOMAS RODRIGO",
      "birthDate": "20-10-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan GOMEZ CAICHEO",
      "guardianRut": "20.298.185-2",
      "guardianPhone": "",
      "guardianEmail": "juan.gomez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1701, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1507,
      "rut": "23365739-5",
      "studentName": "GONZLEZ MERCADO JAIME GUILLERMO",
      "birthDate": "05-07-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis GONZLEZ MERCADO",
      "guardianRut": "17.852.845-9",
      "guardianPhone": "",
      "guardianEmail": "luis.gonzlez@email.com",
      "guardianAddress": "Pasaje Los Leones 878, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1508,
      "rut": "23456281-9",
      "studentName": "KUKOLJ HINOJOSA DANTE ESTEBAN",
      "birthDate": "18-10-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto KUKOLJ HINOJOSA",
      "guardianRut": "20.860.029-K",
      "guardianPhone": "",
      "guardianEmail": "roberto.kukolj@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1493, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1509,
      "rut": "23399966-0",
      "studentName": "LOPEZ MUOZ SOFIA YARELA-PAZ",
      "birthDate": "18-08-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia LOPEZ MUOZ",
      "guardianRut": "21.720.023-7",
      "guardianPhone": "",
      "guardianEmail": "patricia.lopez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1545, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "overdue",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1510,
      "rut": "23397028-K",
      "studentName": "MANSILLA VARGAS MARTINA NAOMI",
      "birthDate": "12-08-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MANSILLA VARGAS",
      "guardianRut": "17.739.501-3",
      "guardianPhone": "",
      "guardianEmail": "rosa.mansilla@email.com",
      "guardianAddress": "Calle Bories 493, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1511,
      "rut": "23541060-5",
      "studentName": "MNDEZ CORNEJO FELIPE ANDRS",
      "birthDate": "19-01-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos MNDEZ CORNEJO",
      "guardianRut": "20.903.844-7",
      "guardianPhone": "",
      "guardianEmail": "carlos.mndez@email.com",
      "guardianAddress": "Pasaje O'Higgins 906, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "overdue",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1512,
      "rut": "23485948-K",
      "studentName": "MUOZ MOYA KIARA ODETTE",
      "birthDate": "22-11-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MUOZ MOYA",
      "guardianRut": "21.513.108-4",
      "guardianPhone": "",
      "guardianEmail": "rosa.muoz@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2003, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "pending",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1513,
      "rut": "23289238-2",
      "studentName": "PILLANCHIN NAVARRO VALENTINA LORETO",
      "birthDate": "01-04-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen PILLANCHIN NAVARRO",
      "guardianRut": "17.876.820-4",
      "guardianPhone": "",
      "guardianEmail": "carmen.pillanchin@email.com",
      "guardianAddress": "Av. España 991, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": 0,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1514,
      "rut": "23580779-3",
      "studentName": "REYES FERNNDEZ MARTINA IGNACIA",
      "birthDate": "01-03-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen REYES FERNNDEZ",
      "guardianRut": "19.971.747-2",
      "guardianPhone": "",
      "guardianEmail": "carmen.reyes@email.com",
      "guardianAddress": "Calle Magallanes 2006, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1515,
      "rut": "23581524-9",
      "studentName": "RUIZ DIAZ MAITE SOFIA",
      "birthDate": "08-03-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena RUIZ DIAZ",
      "guardianRut": "19.156.125-2",
      "guardianPhone": "",
      "guardianEmail": "elena.ruiz@email.com",
      "guardianAddress": "Pasaje O'Higgins 1070, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "pending",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1516,
      "rut": "23395745-3",
      "studentName": "SCHULTHEISS NAVARRO IGNACIA TRINIDAD",
      "birthDate": "10-08-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena SCHULTHEISS NAVARRO",
      "guardianRut": "21.419.915-7",
      "guardianPhone": "",
      "guardianEmail": "elena.schultheiss@email.com",
      "guardianAddress": "Calle Magallanes 104, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1517,
      "rut": "23372563-3",
      "studentName": "SEPLVEDA VARGAS MAXIMILIANO ANDRES",
      "birthDate": "14-07-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto SEPLVEDA VARGAS",
      "guardianRut": "17.392.463-1",
      "guardianPhone": "",
      "guardianEmail": "roberto.seplveda@email.com",
      "guardianAddress": "Calle Bories 1510, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1518,
      "rut": "23550915-6",
      "studentName": "SUBIABRE MAYORGA PIA FRANCHESKA",
      "birthDate": "04-02-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca SUBIABRE MAYORGA",
      "guardianRut": "18.151.643-7",
      "guardianPhone": "",
      "guardianEmail": "francisca.subiabre@email.com",
      "guardianAddress": "Pasaje O'Higgins 517, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "overdue",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1519,
      "rut": "23365170-2",
      "studentName": "TAPIA ALVAREZ AYNARA LUNA",
      "birthDate": "30-06-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa TAPIA ALVAREZ",
      "guardianRut": "20.097.181-7",
      "guardianPhone": "",
      "guardianEmail": "rosa.tapia@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2078, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1520,
      "rut": "23431765-2",
      "studentName": "TOLEDO SOTO ANAELLE ROCIO",
      "birthDate": "21-09-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia TOLEDO SOTO",
      "guardianRut": "18.505.284-2",
      "guardianPhone": "",
      "guardianEmail": "patricia.toledo@email.com",
      "guardianAddress": "Calle Bories 2092, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1521,
      "rut": "23578546-3",
      "studentName": "VELASQUEZ PAZ JAVIERA CATALINA",
      "birthDate": "01-03-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen VELASQUEZ PAZ",
      "guardianRut": "22.010.595-4",
      "guardianPhone": "",
      "guardianEmail": "carmen.velasquez@email.com",
      "guardianAddress": "Pasaje Los Leones 950, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1522,
      "rut": "23584691-8",
      "studentName": "VERA VARGAS LUCAS LEONARDO",
      "birthDate": "14-03-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo VERA VARGAS",
      "guardianRut": "22.232.665-6",
      "guardianPhone": "",
      "guardianEmail": "eduardo.vera@email.com",
      "guardianAddress": "Av. Colón 217, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "pending",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1523,
      "rut": "23235264-7",
      "studentName": "VILLEGAS ARANCIBIA JAVIERA ANDREA",
      "birthDate": "28-01-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa VILLEGAS ARANCIBIA",
      "guardianRut": "19.523.559-7",
      "guardianPhone": "",
      "guardianEmail": "rosa.villegas@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1513, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1524,
      "rut": "23437771-K",
      "studentName": "TRIVIO OJEDA FRANCISCA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena TRIVIO OJEDA",
      "guardianRut": "19.201.132-9",
      "guardianPhone": "",
      "guardianEmail": "elena.trivio@email.com",
      "guardianAddress": "Av. España 1458, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1525,
      "rut": "23392828-3",
      "studentName": "NORAMBUENA BAHAMONDE ANGELINA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Rosa NORAMBUENA BAHAMONDE",
      "guardianRut": "20.113.713-6",
      "guardianPhone": "",
      "guardianEmail": "rosa.norambuena@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1435, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1526,
      "rut": "23627923-5",
      "studentName": "ALVARADO DIAZ IGNACIA ANTONIA",
      "birthDate": "27-04-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María ALVARADO DIAZ",
      "guardianRut": "22.384.782-K",
      "guardianPhone": "",
      "guardianEmail": "maria.alvarado@email.com",
      "guardianAddress": "Calle Bories 976, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1527,
      "rut": "23338542-5",
      "studentName": "ARAVENA RAIN AGUSTIN MATEO",
      "birthDate": "29-05-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco ARAVENA RAIN",
      "guardianRut": "21.092.489-2",
      "guardianPhone": "",
      "guardianEmail": "francisco.aravena@email.com",
      "guardianAddress": "Pasaje Los Leones 492, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1528,
      "rut": "23564786-9",
      "studentName": "ARAYA GARRIDO CRISTIAN ANTONIO",
      "birthDate": "18-02-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ARAYA GARRIDO",
      "guardianRut": "22.453.779-4",
      "guardianPhone": "",
      "guardianEmail": "eduardo.araya@email.com",
      "guardianAddress": "Av. Manuel Bulnes 110, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1529,
      "rut": "23521410-5",
      "studentName": "ARISMENDIS ALVAREZ BENJAMIN MATEO",
      "birthDate": "07-01-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos ARISMENDIS ALVAREZ",
      "guardianRut": "22.323.499-2",
      "guardianPhone": "",
      "guardianEmail": "carlos.arismendis@email.com",
      "guardianAddress": "Av. España 985, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "pending",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1530,
      "rut": "23573410-9",
      "studentName": "BORQUEZ AINOL ANTONELLA DANAE",
      "birthDate": "19-02-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa BORQUEZ AINOL",
      "guardianRut": "21.447.603-7",
      "guardianPhone": "",
      "guardianEmail": "rosa.borquez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2057, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1531,
      "rut": "23402262-8",
      "studentName": "CANIPANE CEA FELIPE JORDAN",
      "birthDate": "19-08-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco CANIPANE CEA",
      "guardianRut": "21.748.480-4",
      "guardianPhone": "",
      "guardianEmail": "francisco.canipane@email.com",
      "guardianAddress": "Av. Manuel Bulnes 357, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1532,
      "rut": "23433620-7",
      "studentName": "CARDENAS AMPUERO MARTIN EMILIANO",
      "birthDate": "22-09-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés CARDENAS AMPUERO",
      "guardianRut": "17.957.820-4",
      "guardianPhone": "",
      "guardianEmail": "andres.cardenas@email.com",
      "guardianAddress": "Pasaje Los Leones 1652, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "overdue",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1533,
      "rut": "23259314-8",
      "studentName": "CHACON SCHOENIG VICTORIA YORJEN",
      "birthDate": "27-02-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica CHACON SCHOENIG",
      "guardianRut": "22.017.586-3",
      "guardianPhone": "",
      "guardianEmail": "monica.chacon@email.com",
      "guardianAddress": "Av. España 737, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 0,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1534,
      "rut": "23532554-3",
      "studentName": "CHAURA SANCHEZ SOFIA ALEJANDRA",
      "birthDate": "15-01-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen CHAURA SANCHEZ",
      "guardianRut": "18.396.692-8",
      "guardianPhone": "",
      "guardianEmail": "carmen.chaura@email.com",
      "guardianAddress": "Av. Colón 1389, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1535,
      "rut": "23624043-6",
      "studentName": "CORTES JELDES DANIEL IGNACIO",
      "birthDate": "21-04-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan CORTES JELDES",
      "guardianRut": "22.030.937-1",
      "guardianPhone": "",
      "guardianEmail": "juan.cortes@email.com",
      "guardianAddress": "Av. Manuel Bulnes 546, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1536,
      "rut": "23539446-4",
      "studentName": "GARNICA ROJAS IGNACIO ALEJANDRO",
      "birthDate": "23-01-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos GARNICA ROJAS",
      "guardianRut": "22.036.871-8",
      "guardianPhone": "",
      "guardianEmail": "carlos.garnica@email.com",
      "guardianAddress": "Pasaje Los Leones 682, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1537,
      "rut": "23544993-5",
      "studentName": "GODOY TALMA STEPHANY MELISSA",
      "birthDate": "26-01-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca GODOY TALMA",
      "guardianRut": "21.536.625-1",
      "guardianPhone": "",
      "guardianEmail": "francisca.godoy@email.com",
      "guardianAddress": "Pasaje Los Leones 1209, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": 0,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1538,
      "rut": "23437021-9",
      "studentName": "GMEZ PREZ ROCIO PAZ",
      "birthDate": "30-09-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca GMEZ PREZ",
      "guardianRut": "18.430.623-9",
      "guardianPhone": "",
      "guardianEmail": "francisca.gmez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 934, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1539,
      "rut": "23558657-6",
      "studentName": "GMEZ ULLOA EMILIA IGNACIA",
      "birthDate": "14-02-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María GMEZ ULLOA",
      "guardianRut": "19.864.626-1",
      "guardianPhone": "",
      "guardianEmail": "maria.gmez@email.com",
      "guardianAddress": "Av. Colón 1218, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1540,
      "rut": "23405162-8",
      "studentName": "GONZLEZ VERA SAMUEL AGUSTIN",
      "birthDate": "22-08-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GONZLEZ VERA",
      "guardianRut": "17.452.869-1",
      "guardianPhone": "",
      "guardianEmail": "eduardo.gonzlez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1935, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1541,
      "rut": "23384385-7",
      "studentName": "GOTTA VELASQUEZ DANTE ESTEBAN",
      "birthDate": "31-07-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés GOTTA VELASQUEZ",
      "guardianRut": "19.546.024-8",
      "guardianPhone": "",
      "guardianEmail": "andres.gotta@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1525, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1542,
      "rut": "23531517-3",
      "studentName": "GUZMAN CARREO DENISSE JULIANNA PASCAL",
      "birthDate": "11-01-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena GUZMAN CARREO",
      "guardianRut": "17.556.243-5",
      "guardianPhone": "",
      "guardianEmail": "elena.guzman@email.com",
      "guardianAddress": "Pasaje O'Higgins 1784, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 0,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1543,
      "rut": "23558544-8",
      "studentName": "MARTNEZ BARRA AINARA BETSAB",
      "birthDate": "11-02-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia MARTNEZ BARRA",
      "guardianRut": "21.284.985-5",
      "guardianPhone": "",
      "guardianEmail": "patricia.martnez@email.com",
      "guardianAddress": "Av. España 288, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "pending",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1544,
      "rut": "23567438-6",
      "studentName": "MENDOZA GOMEZ MARIA JOSE",
      "birthDate": "23-02-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MENDOZA GOMEZ",
      "guardianRut": "19.000.578-K",
      "guardianPhone": "",
      "guardianEmail": "rosa.mendoza@email.com",
      "guardianAddress": "Av. España 1172, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1545,
      "rut": "23482123-7",
      "studentName": "MONTIEL ILNAO LUCIA GALI",
      "birthDate": "21-11-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca MONTIEL ILNAO",
      "guardianRut": "20.392.659-6",
      "guardianPhone": "",
      "guardianEmail": "francisca.montiel@email.com",
      "guardianAddress": "Calle Magallanes 1217, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1546,
      "rut": "23450802-4",
      "studentName": "OYARZUN NAVARRETE FLORENCIA ISABEL",
      "birthDate": "15-10-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa OYARZUN NAVARRETE",
      "guardianRut": "18.722.009-2",
      "guardianPhone": "",
      "guardianEmail": "rosa.oyarzun@email.com",
      "guardianAddress": "Av. España 1085, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1547,
      "rut": "23400613-4",
      "studentName": "PALACIOS VERGARA JOSE ANGEL",
      "birthDate": "12-08-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco PALACIOS VERGARA",
      "guardianRut": "21.590.272-2",
      "guardianPhone": "",
      "guardianEmail": "francisco.palacios@email.com",
      "guardianAddress": "Av. Manuel Bulnes 760, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1548,
      "rut": "23337685-K",
      "studentName": "PREZ CARDENAS MAITE AGUSTINA LORENZA",
      "birthDate": "28-05-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa PREZ CARDENAS",
      "guardianRut": "19.529.549-2",
      "guardianPhone": "",
      "guardianEmail": "rosa.prez@email.com",
      "guardianAddress": "Av. Colón 1895, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1549,
      "rut": "23348952-2",
      "studentName": "REYES MARN LUCIANO GABRIEL",
      "birthDate": "12-06-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos REYES MARN",
      "guardianRut": "19.595.867-K",
      "guardianPhone": "",
      "guardianEmail": "carlos.reyes@email.com",
      "guardianAddress": "Av. Colón 1024, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1550,
      "rut": "23557389-K",
      "studentName": "ROJAS OVANDO MARIA JOSE",
      "birthDate": "09-02-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica ROJAS OVANDO",
      "guardianRut": "19.497.403-5",
      "guardianPhone": "",
      "guardianEmail": "monica.rojas@email.com",
      "guardianAddress": "Av. España 460, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1551,
      "rut": "23445022-0",
      "studentName": "ROMO LETELIER ISIDORA FERNANDA",
      "birthDate": "08-10-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica ROMO LETELIER",
      "guardianRut": "18.845.667-7",
      "guardianPhone": "",
      "guardianEmail": "monica.romo@email.com",
      "guardianAddress": "Pasaje Los Leones 2074, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1552,
      "rut": "23396209-0",
      "studentName": "SOTOMAYOR CARDENAS MARTINA ANTONIA",
      "birthDate": "11-08-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María SOTOMAYOR CARDENAS",
      "guardianRut": "21.922.037-5",
      "guardianPhone": "",
      "guardianEmail": "maria.sotomayor@email.com",
      "guardianAddress": "Calle Bories 1816, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1553,
      "rut": "23398303-9",
      "studentName": "URZUA BUSTAMANTE PAZ",
      "birthDate": "13-08-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen URZUA BUSTAMANTE",
      "guardianRut": "17.673.630-5",
      "guardianPhone": "",
      "guardianEmail": "carmen.urzua@email.com",
      "guardianAddress": "Calle Bories 831, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1554,
      "rut": "23549838-3",
      "studentName": "VARGAS GOMEZ DILAN ALEJANDRO",
      "birthDate": "28-01-2011",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto VARGAS GOMEZ",
      "guardianRut": "19.997.599-4",
      "guardianPhone": "",
      "guardianEmail": "roberto.vargas@email.com",
      "guardianAddress": "Pasaje O'Higgins 587, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1555,
      "rut": "23445080-8",
      "studentName": "VELASQUEZ HOFFMANN ANTONELLA IGNACIA",
      "birthDate": "11-10-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena VELASQUEZ HOFFMANN",
      "guardianRut": "19.411.432-K",
      "guardianPhone": "",
      "guardianEmail": "elena.velasquez@email.com",
      "guardianAddress": "Pasaje Los Leones 874, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1556,
      "rut": "23347062-7",
      "studentName": "ACUA VIDAL MARTN IGNACIO",
      "birthDate": "13-06-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis ACUA VIDAL",
      "guardianRut": "20.304.999-4",
      "guardianPhone": "",
      "guardianEmail": "luis.acua@email.com",
      "guardianAddress": "Av. Colón 990, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1557,
      "rut": "23549745-K",
      "studentName": "ALVAREZ MORA FRANCISCA DANIELA",
      "birthDate": "01-02-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen ALVAREZ MORA",
      "guardianRut": "21.512.806-7",
      "guardianPhone": "",
      "guardianEmail": "carmen.alvarez@email.com",
      "guardianAddress": "Calle Magallanes 692, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1558,
      "rut": "23498107-2",
      "studentName": "ARZOLA MIRANDA ALEXANDRA CONSTANA",
      "birthDate": "07-12-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana ARZOLA MIRANDA",
      "guardianRut": "20.497.499-3",
      "guardianPhone": "",
      "guardianEmail": "ana.arzola@email.com",
      "guardianAddress": "Pasaje O'Higgins 211, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1559,
      "rut": "23560043-9",
      "studentName": "AZOCAR JOFRE MIA BELN",
      "birthDate": "09-02-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa AZOCAR JOFRE",
      "guardianRut": "21.884.690-4",
      "guardianPhone": "",
      "guardianEmail": "rosa.azocar@email.com",
      "guardianAddress": "Calle Bories 1844, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1560,
      "rut": "23294881-7",
      "studentName": "BARRIA RUIZ DAVID ANDRES",
      "birthDate": "05-04-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan BARRIA RUIZ",
      "guardianRut": "21.292.843-7",
      "guardianPhone": "",
      "guardianEmail": "juan.barria@email.com",
      "guardianAddress": "Pasaje Los Leones 970, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1561,
      "rut": "23329770-4",
      "studentName": "CALDERON GARCIA AILYN COLOMBA",
      "birthDate": "20-05-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca CALDERON GARCIA",
      "guardianRut": "18.122.777-K",
      "guardianPhone": "",
      "guardianEmail": "francisca.calderon@email.com",
      "guardianAddress": "Pasaje O'Higgins 846, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1562,
      "rut": "23518346-3",
      "studentName": "CARRILLO MIRANDA AGUSTINA",
      "birthDate": "02-01-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia CARRILLO MIRANDA",
      "guardianRut": "21.795.699-4",
      "guardianPhone": "",
      "guardianEmail": "patricia.carrillo@email.com",
      "guardianAddress": "Calle Magallanes 1752, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1563,
      "rut": "23448445-1",
      "studentName": "CATALAN OSSES VALENTINA ANDREA",
      "birthDate": "13-10-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia CATALAN OSSES",
      "guardianRut": "17.783.615-K",
      "guardianPhone": "",
      "guardianEmail": "patricia.catalan@email.com",
      "guardianAddress": "Av. Manuel Bulnes 427, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1564,
      "rut": "23367398-6",
      "studentName": "CHAVEZ LA PAZ DANNAE AYNARA BELEN",
      "birthDate": "15-06-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen CHAVEZ LA",
      "guardianRut": "19.301.143-8",
      "guardianPhone": "",
      "guardianEmail": "carmen.chavez@email.com",
      "guardianAddress": "Av. Colón 358, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1565,
      "rut": "23624015-0",
      "studentName": "CORREA CIFUENTES ISABELLA ANDREA",
      "birthDate": "21-04-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María CORREA CIFUENTES",
      "guardianRut": "20.437.763-4",
      "guardianPhone": "",
      "guardianEmail": "maria.correa@email.com",
      "guardianAddress": "Pasaje Los Leones 217, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1566,
      "rut": "23344415-4",
      "studentName": "FLORES VERGARA BENJAMN ALEXANDER",
      "birthDate": "02-06-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto FLORES VERGARA",
      "guardianRut": "19.270.852-4",
      "guardianPhone": "",
      "guardianEmail": "roberto.flores@email.com",
      "guardianAddress": "Pasaje O'Higgins 619, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "overdue",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1567,
      "rut": "23544910-2",
      "studentName": "GAMIN TOLEDO SOFIA VALENTINA",
      "birthDate": "26-01-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María GAMIN TOLEDO",
      "guardianRut": "17.765.953-3",
      "guardianPhone": "",
      "guardianEmail": "maria.gamin@email.com",
      "guardianAddress": "Pasaje O'Higgins 1270, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1568,
      "rut": "23212037-1",
      "studentName": "GONZLEZ RUBIO MAXIMILIANO ANDRS",
      "birthDate": "30-12-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto GONZLEZ RUBIO",
      "guardianRut": "17.464.194-3",
      "guardianPhone": "",
      "guardianEmail": "roberto.gonzlez@email.com",
      "guardianAddress": "Calle Magallanes 349, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1569,
      "rut": "23611857-6",
      "studentName": "GRANICH IRRIBARRA MARTINA ISIDORA",
      "birthDate": "05-04-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María GRANICH IRRIBARRA",
      "guardianRut": "19.800.022-1",
      "guardianPhone": "",
      "guardianEmail": "maria.granich@email.com",
      "guardianAddress": "Pasaje O'Higgins 858, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1570,
      "rut": "23333558-4",
      "studentName": "GUTIERREZ URIBE ANTONELLA IGNACIA",
      "birthDate": "23-05-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica GUTIERREZ URIBE",
      "guardianRut": "18.068.254-6",
      "guardianPhone": "",
      "guardianEmail": "monica.gutierrez@email.com",
      "guardianAddress": "Pasaje O'Higgins 1966, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1571,
      "rut": "23419782-7",
      "studentName": "HUEICHACOE MUOZ ANTONELLA AYELEN",
      "birthDate": "31-08-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca HUEICHACOE MUOZ",
      "guardianRut": "18.922.359-5",
      "guardianPhone": "",
      "guardianEmail": "francisca.hueichacoe@email.com",
      "guardianAddress": "Calle Magallanes 1335, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-15",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1572,
      "rut": "23194541-5",
      "studentName": "MANCILLA SLABOSZ SEBASTIN JOS IGNACIO",
      "birthDate": "07/00/2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis MANCILLA SLABOSZ",
      "guardianRut": "21.976.727-7",
      "guardianPhone": "",
      "guardianEmail": "luis.mancilla@email.com",
      "guardianAddress": "Pasaje O'Higgins 1981, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1573,
      "rut": "23526827-2",
      "studentName": "MANSILLA SIRON MAITE ARANZA",
      "birthDate": "01-01-2011",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen MANSILLA SIRON",
      "guardianRut": "20.864.340-1",
      "guardianPhone": "",
      "guardianEmail": "carmen.mansilla@email.com",
      "guardianAddress": "Calle Bories 1118, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1574,
      "rut": "23392776-7",
      "studentName": "MARTNEZ MALDONADO NICOLS ALEJANDRO",
      "birthDate": "09-08-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel MARTNEZ MALDONADO",
      "guardianRut": "22.166.384-5",
      "guardianPhone": "",
      "guardianEmail": "miguel.martnez@email.com",
      "guardianAddress": "Pasaje O'Higgins 807, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "pending",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 0,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1575,
      "rut": "23484810-0",
      "studentName": "MAYORGA JIMENEZ FELIPE ALONSO",
      "birthDate": "22-11-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel MAYORGA JIMENEZ",
      "guardianRut": "22.329.089-2",
      "guardianPhone": "",
      "guardianEmail": "miguel.mayorga@email.com",
      "guardianAddress": "Av. Manuel Bulnes 612, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1576,
      "rut": "26423582-0",
      "studentName": "MEDINA RODRIGUEZ ELIAS JOSE",
      "birthDate": "28-12-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel MEDINA RODRIGUEZ",
      "guardianRut": "24.570.689-8",
      "guardianPhone": "",
      "guardianEmail": "miguel.medina@email.com",
      "guardianAddress": "Av. España 114, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1577,
      "rut": "23296456-1",
      "studentName": "MILLANDO SOTO CATALINA ALEJANDRA",
      "birthDate": "08-04-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca MILLANDO SOTO",
      "guardianRut": "20.796.995-8",
      "guardianPhone": "",
      "guardianEmail": "francisca.millando@email.com",
      "guardianAddress": "Av. Manuel Bulnes 409, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1578,
      "rut": "23312361-7",
      "studentName": "OYARZUN CASTRO MARIO ABRAHAM",
      "birthDate": "02-05-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto OYARZUN CASTRO",
      "guardianRut": "21.554.144-4",
      "guardianPhone": "",
      "guardianEmail": "roberto.oyarzun@email.com",
      "guardianAddress": "Pasaje O'Higgins 1778, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 0,
      "scholarshipPercentage": 100,
      "status": "overdue",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 0,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1579,
      "rut": "23358954-3",
      "studentName": "OYARZUN NAHUELHUAL ANTONELLA ALEJANDRA",
      "birthDate": "23-06-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen OYARZUN NAHUELHUAL",
      "guardianRut": "20.257.565-K",
      "guardianPhone": "",
      "guardianEmail": "carmen.oyarzun@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1677, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1580,
      "rut": "23391946-2",
      "studentName": "PEREZ LEGUES ANTONELLA FERNANDA",
      "birthDate": "09-08-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María PEREZ LEGUES",
      "guardianRut": "19.206.006-0",
      "guardianPhone": "",
      "guardianEmail": "maria.perez@email.com",
      "guardianAddress": "Calle Bories 1911, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1581,
      "rut": "23432485-3",
      "studentName": "QUEZADA VERGARA AMANDA EMILIA",
      "birthDate": "24-09-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana QUEZADA VERGARA",
      "guardianRut": "20.598.982-K",
      "guardianPhone": "",
      "guardianEmail": "ana.quezada@email.com",
      "guardianAddress": "Pasaje Los Leones 704, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1582,
      "rut": "23392266-8",
      "studentName": "RAMIREZ RAUQUE JULIAN ALFONSO",
      "birthDate": "02-08-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés RAMIREZ RAUQUE",
      "guardianRut": "19.926.371-4",
      "guardianPhone": "",
      "guardianEmail": "andres.ramirez@email.com",
      "guardianAddress": "Pasaje Los Leones 1329, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1583,
      "rut": "23391991-8",
      "studentName": "SANHUEZA RODRIGUEZ DAVID ALEJANDRO",
      "birthDate": "08-09-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel SANHUEZA RODRIGUEZ",
      "guardianRut": "20.267.125-K",
      "guardianPhone": "",
      "guardianEmail": "miguel.sanhueza@email.com",
      "guardianAddress": "Calle Magallanes 1952, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1584,
      "rut": "23420474-2",
      "studentName": "VARGAS LUCI FLORENCIA MONSERRAT",
      "birthDate": "10-09-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa VARGAS LUCI",
      "guardianRut": "18.512.923-3",
      "guardianPhone": "",
      "guardianEmail": "rosa.vargas@email.com",
      "guardianAddress": "Pasaje O'Higgins 1455, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1585,
      "rut": "23513647-0",
      "studentName": "LIVACIC SAEZ ISABEL",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carmen LIVACIC SAEZ",
      "guardianRut": "19.175.492-1",
      "guardianPhone": "",
      "guardianEmail": "carmen.livacic@email.com",
      "guardianAddress": "Pasaje O'Higgins 863, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1586,
      "rut": "23392828-3",
      "studentName": "NORAMBUENA BAHAMONDE ANGELINA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carmen NORAMBUENA BAHAMONDE",
      "guardianRut": "18.179.728-2",
      "guardianPhone": "",
      "guardianEmail": "carmen.norambuena@email.com",
      "guardianAddress": "Calle Magallanes 1992, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1587,
      "rut": "23448034-0",
      "studentName": "URIARTE AGUILAR JAVIERA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisca URIARTE AGUILAR",
      "guardianRut": "18.918.632-0",
      "guardianPhone": "",
      "guardianEmail": "francisca.uriarte@email.com",
      "guardianAddress": "Av. España 541, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1588,
      "rut": "23033999-6",
      "studentName": "ACOSTA LOYOLA CRISTOBAL ALONSO",
      "birthDate": "02-06-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ACOSTA LOYOLA",
      "guardianRut": "18.580.112-8",
      "guardianPhone": "",
      "guardianEmail": "eduardo.acosta@email.com",
      "guardianAddress": "Av. Manuel Bulnes 847, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1589,
      "rut": "23236456-4",
      "studentName": "ALARCN MENNDEZ OWEN KAYECO",
      "birthDate": "28-01-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel ALARCN MENNDEZ",
      "guardianRut": "18.236.134-8",
      "guardianPhone": "+56 9 9415 7076",
      "guardianEmail": "miguel.alarcn@email.com",
      "guardianAddress": "Av. España 2011, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1590,
      "rut": "23135778-5",
      "studentName": "ALARCN VLIZ SEBASTIN AGUSTN",
      "birthDate": "26-09-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ALARCN VLIZ",
      "guardianRut": "21.549.744-5",
      "guardianPhone": "+56 9 8977 7990",
      "guardianEmail": "eduardo.alarcn@email.com",
      "guardianAddress": "Calle Bories 1879, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1591,
      "rut": "23354282-2",
      "studentName": "ALFARO ORTEGA LISSETTE AYLINE",
      "birthDate": "11-06-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen ALFARO ORTEGA",
      "guardianRut": "18.654.022-0",
      "guardianPhone": "+56 9 5135 6056",
      "guardianEmail": "carmen.alfaro@email.com",
      "guardianAddress": "Av. España 1211, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1592,
      "rut": "23221167-9",
      "studentName": "ALMONACID PARADA BENJAMN IGNACIO",
      "birthDate": "11-01-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis ALMONACID PARADA",
      "guardianRut": "19.930.885-8",
      "guardianPhone": "+56 9 5848 1152",
      "guardianEmail": "luis.almonacid@email.com",
      "guardianAddress": "Av. Colón 380, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1593,
      "rut": "23200327-8",
      "studentName": "VALOS BASCUAN FELIPE PATRICIO",
      "birthDate": "15-12-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco VALOS BASCUAN",
      "guardianRut": "17.327.224-3",
      "guardianPhone": "+56 9 9884 4397",
      "guardianEmail": "francisco.valos@email.com",
      "guardianAddress": "Calle Magallanes 153, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1594,
      "rut": "23251437-K",
      "studentName": "BARRIENTOS CANOBRA ANDREA NICOLE",
      "birthDate": "17-02-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa BARRIENTOS CANOBRA",
      "guardianRut": "20.758.606-4",
      "guardianPhone": "+56 9 4286 4741",
      "guardianEmail": "rosa.barrientos@email.com",
      "guardianAddress": "Pasaje Los Leones 1459, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1595,
      "rut": "23119494-0",
      "studentName": "CARRERO GALLARDO GABRIEL ALEXIS",
      "birthDate": "08-09-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan CARRERO GALLARDO",
      "guardianRut": "18.072.401-K",
      "guardianPhone": "+56 9 7211 4866",
      "guardianEmail": "juan.carrero@email.com",
      "guardianAddress": "Av. España 918, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1596,
      "rut": "23250440-4",
      "studentName": "CASTRO TORRES SOFFA MILLARAY",
      "birthDate": "16-02-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa CASTRO TORRES",
      "guardianRut": "20.900.537-9",
      "guardianPhone": "+56 9 7392 4810",
      "guardianEmail": "rosa.castro@email.com",
      "guardianAddress": "Av. Colón 1354, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1597,
      "rut": "23064724-0",
      "studentName": "COLIVORO MANCILLA VALENTINA PAOLA",
      "birthDate": "01-07-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca COLIVORO MANCILLA",
      "guardianRut": "18.349.484-8",
      "guardianPhone": "+56 9 7440 8792",
      "guardianEmail": "francisca.colivoro@email.com",
      "guardianAddress": "Calle Bories 880, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1598,
      "rut": "26419995-6",
      "studentName": "DIAZ RODRIGUEZ NATHALY",
      "birthDate": "16-12-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena DIAZ RODRIGUEZ",
      "guardianRut": "21.645.803-6",
      "guardianPhone": "+56 9 3675 8610",
      "guardianEmail": "elena.diaz@email.com",
      "guardianAddress": "Calle Bories 1259, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1599,
      "rut": "23057015-9",
      "studentName": "ESPINOZA REYES GONZALO BASTIN",
      "birthDate": "23-06-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto ESPINOZA REYES",
      "guardianRut": "19.748.285-0",
      "guardianPhone": "+56 9 6405 9449",
      "guardianEmail": "roberto.espinoza@email.com",
      "guardianAddress": "Av. España 1610, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1600,
      "rut": "23213790-8",
      "studentName": "FERNNDEZ SOTO RICARDO BASTIN",
      "birthDate": "02-01-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto FERNNDEZ SOTO",
      "guardianRut": "19.160.227-7",
      "guardianPhone": "+56 9 7700 4560",
      "guardianEmail": "roberto.fernndez@email.com",
      "guardianAddress": "Av. Colón 1234, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1601,
      "rut": "23240595-3",
      "studentName": "GUERRA AGERO ALEXIS FERNANDO",
      "birthDate": "26-01-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés GUERRA AGERO",
      "guardianRut": "18.569.988-9",
      "guardianPhone": "+56 9 8341 8849",
      "guardianEmail": "andres.guerra@email.com",
      "guardianAddress": "Pasaje O'Higgins 1729, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1602,
      "rut": "23130663-3",
      "studentName": "HERNNDEZ ALARCN MAIRA AILEEN",
      "birthDate": "24-09-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca HERNNDEZ ALARCN",
      "guardianRut": "19.872.134-4",
      "guardianPhone": "+56 9 9974 8352",
      "guardianEmail": "francisca.hernndez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1613, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1603,
      "rut": "23159276-8",
      "studentName": "MAYORGA JIMNEZ ALLISON FERNANDA",
      "birthDate": "31-10-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MAYORGA JIMNEZ",
      "guardianRut": "20.761.518-8",
      "guardianPhone": "+56 9 6192 6039",
      "guardianEmail": "rosa.mayorga@email.com",
      "guardianAddress": "Av. España 2032, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1604,
      "rut": "23156619-8",
      "studentName": "MELO FERRADA CATALINA ROCIO",
      "birthDate": "25-10-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia MELO FERRADA",
      "guardianRut": "21.346.397-7",
      "guardianPhone": "",
      "guardianEmail": "patricia.melo@email.com",
      "guardianAddress": "Pasaje Los Leones 596, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1605,
      "rut": "23179277-5",
      "studentName": "MIRANDA BURGOS PRISCILA PAZ",
      "birthDate": "22-11-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia MIRANDA BURGOS",
      "guardianRut": "19.204.471-5",
      "guardianPhone": "+56 9 6494 8342",
      "guardianEmail": "patricia.miranda@email.com",
      "guardianAddress": "Calle Magallanes 838, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1606,
      "rut": "23082240-4",
      "studentName": "MIRANDA OJEDA GABRIELA ANDREA",
      "birthDate": "25-05-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MIRANDA OJEDA",
      "guardianRut": "20.105.512-1",
      "guardianPhone": "+56 9 8320 4742",
      "guardianEmail": "rosa.miranda@email.com",
      "guardianAddress": "Calle Magallanes 1586, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1607,
      "rut": "23034991-6",
      "studentName": "MUOZ SANCHEZ ESPERANZA CECILIA",
      "birthDate": "23-05-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena MUOZ SANCHEZ",
      "guardianRut": "18.036.277-0",
      "guardianPhone": "+56 9 7491 6835",
      "guardianEmail": "elena.muoz@email.com",
      "guardianAddress": "Av. España 856, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1608,
      "rut": "23078099-4",
      "studentName": "NAVARRO PEREZ FERNANDA PAZ",
      "birthDate": "21-07-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María NAVARRO PEREZ",
      "guardianRut": "21.338.600-K",
      "guardianPhone": "",
      "guardianEmail": "maria.navarro@email.com",
      "guardianAddress": "Calle Bories 1350, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1609,
      "rut": "23212936-0",
      "studentName": "OJEDA REHEL LUCAS FELIPE",
      "birthDate": "03-01-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan OJEDA REHEL",
      "guardianRut": "22.165.406-4",
      "guardianPhone": "+56 9 5061 6234",
      "guardianEmail": "juan.ojeda@email.com",
      "guardianAddress": "Calle Magallanes 550, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1610,
      "rut": "23270052-1",
      "studentName": "ORREGO BARRIENTOS VICENTE IGNACIO",
      "birthDate": "15-03-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés ORREGO BARRIENTOS",
      "guardianRut": "19.564.671-6",
      "guardianPhone": "+56 9 9588 2366",
      "guardianEmail": "andres.orrego@email.com",
      "guardianAddress": "Av. Colón 959, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1611,
      "rut": "23174036-8",
      "studentName": "QUINTANA BAHAMONDE LETIZIA DANIELA",
      "birthDate": "19-11-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen QUINTANA BAHAMONDE",
      "guardianRut": "18.834.826-2",
      "guardianPhone": "+56 9 7489 0383",
      "guardianEmail": "carmen.quintana@email.com",
      "guardianAddress": "Calle Magallanes 1928, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1612,
      "rut": "23216521-9",
      "studentName": "RIVERA ALMONACID IGNACIA MONSERRAT",
      "birthDate": "02-01-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena RIVERA ALMONACID",
      "guardianRut": "20.396.014-K",
      "guardianPhone": "+56 9 8883 1141",
      "guardianEmail": "elena.rivera@email.com",
      "guardianAddress": "Av. España 399, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1613,
      "rut": "23221633-6",
      "studentName": "SALAZAR CARVAJAL KAMILA ANDREA",
      "birthDate": "06-01-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen SALAZAR CARVAJAL",
      "guardianRut": "20.135.552-4",
      "guardianPhone": "+56 9 8964 7396",
      "guardianEmail": "carmen.salazar@email.com",
      "guardianAddress": "Av. España 1586, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1614,
      "rut": "23085487-4",
      "studentName": "SALDIVIA BARRIA JUAN CARLOS ALEXIS",
      "birthDate": "02-08-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés SALDIVIA BARRIA",
      "guardianRut": "20.973.047-2",
      "guardianPhone": "+56 9 5952 6640",
      "guardianEmail": "andres.saldivia@email.com",
      "guardianAddress": "Pasaje Los Leones 774, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1615,
      "rut": "23195767-7",
      "studentName": "SANTANA CARRILLO ANTHONELA ANDREA",
      "birthDate": "08-12-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa SANTANA CARRILLO",
      "guardianRut": "19.032.731-0",
      "guardianPhone": "+56 9 8453 6553",
      "guardianEmail": "rosa.santana@email.com",
      "guardianAddress": "Pasaje O'Higgins 1305, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1616,
      "rut": "23258591-9",
      "studentName": "SANTANA MORA ANTONELLA NICOLE",
      "birthDate": "23-02-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia SANTANA MORA",
      "guardianRut": "17.887.678-3",
      "guardianPhone": "+56 9 8581 7527",
      "guardianEmail": "patricia.santana@email.com",
      "guardianAddress": "Pasaje Los Leones 1169, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1617,
      "rut": "23202067-9",
      "studentName": "VARGAS HERMOSILLA SKARLETH DANAHE",
      "birthDate": "10-12-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen VARGAS HERMOSILLA",
      "guardianRut": "18.183.649-0",
      "guardianPhone": "+56 9 7715 7293",
      "guardianEmail": "carmen.vargas@email.com",
      "guardianAddress": "Av. España 753, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1618,
      "rut": "23028846-1",
      "studentName": "ALMONACID CARCAMO IVAN IGNACIO",
      "birthDate": "25-05-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ALMONACID CARCAMO",
      "guardianRut": "18.860.363-7",
      "guardianPhone": "+56 9 8227 2675",
      "guardianEmail": "eduardo.almonacid@email.com",
      "guardianAddress": "Pasaje Los Leones 756, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1619,
      "rut": "23357937-8",
      "studentName": "ALVARADO HERNNDEZ ASCHLY PASKAL",
      "birthDate": "20-06-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana ALVARADO HERNNDEZ",
      "guardianRut": "21.440.413-3",
      "guardianPhone": "+56 9 7133 4209",
      "guardianEmail": "ana.alvarado@email.com",
      "guardianAddress": "Pasaje Los Leones 1788, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1620,
      "rut": "23082790-7",
      "studentName": "LVAREZ ANDRADE VICENTE AMARO",
      "birthDate": "20-07-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto LVAREZ ANDRADE",
      "guardianRut": "17.744.643-2",
      "guardianPhone": "+56 9 4014 6824",
      "guardianEmail": "roberto.lvarez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 941, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1621,
      "rut": "23034048-K",
      "studentName": "AMPUERO PREZ BENJAMN YUSEF",
      "birthDate": "04-06-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis AMPUERO PREZ",
      "guardianRut": "21.178.156-4",
      "guardianPhone": "",
      "guardianEmail": "luis.ampuero@email.com",
      "guardianAddress": "Calle Magallanes 1750, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1622,
      "rut": "23267581-0",
      "studentName": "ARTEAGA TALMA MIGUEL ANGEL",
      "birthDate": "09-03-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan ARTEAGA TALMA",
      "guardianRut": "21.984.641-K",
      "guardianPhone": "+56 9 8368 5082",
      "guardianEmail": "juan.arteaga@email.com",
      "guardianAddress": "Calle Magallanes 1361, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1623,
      "rut": "23105104-K",
      "studentName": "BARRA MACAS TRINIDAD IGNACIA",
      "birthDate": "24-08-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena BARRA MACAS",
      "guardianRut": "20.898.670-8",
      "guardianPhone": "+56 9 5764 8920",
      "guardianEmail": "elena.barra@email.com",
      "guardianAddress": "Av. Colón 620, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1624,
      "rut": "23076446-8",
      "studentName": "BARRIENTOS CARDENAS JOS LUIS RICARDO",
      "birthDate": "27-06-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos BARRIENTOS CARDENAS",
      "guardianRut": "21.937.338-4",
      "guardianPhone": "+56 9 8384 2480",
      "guardianEmail": "carlos.barrientos@email.com",
      "guardianAddress": "Pasaje Los Leones 1952, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1625,
      "rut": "23223548-9",
      "studentName": "CAIHUN CATELICAN BENJAMIN IGNACIO",
      "birthDate": "14-01-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto CAIHUN CATELICAN",
      "guardianRut": "19.261.797-9",
      "guardianPhone": "+56 9 3410 5705",
      "guardianEmail": "roberto.caihun@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2094, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1626,
      "rut": "23067689-5",
      "studentName": "CANTO MERCADO SOFA PAZ",
      "birthDate": "07-07-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena CANTO MERCADO",
      "guardianRut": "17.214.952-9",
      "guardianPhone": "+56 9 5096 6911",
      "guardianEmail": "elena.canto@email.com",
      "guardianAddress": "Pasaje O'Higgins 1249, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1627,
      "rut": "23166292-8",
      "studentName": "CRCAMO BARRIENTOS SOFA FERNANDA TAS",
      "birthDate": "06-11-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana CRCAMO BARRIENTOS",
      "guardianRut": "21.991.403-2",
      "guardianPhone": "+56 9 6851 3950",
      "guardianEmail": "ana.crcamo@email.com",
      "guardianAddress": "Pasaje O'Higgins 1881, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1628,
      "rut": "23023319-5",
      "studentName": "DAZ AGUILA DYLAN IGNACIO",
      "birthDate": "20-05-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis DAZ AGUILA",
      "guardianRut": "21.118.893-6",
      "guardianPhone": "+56 9 7645 1977",
      "guardianEmail": "luis.daz@email.com",
      "guardianAddress": "Av. España 2009, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1629,
      "rut": "23286376-5",
      "studentName": "DAZ CRCAMO CONSTANZA BELEN",
      "birthDate": "29-03-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena DAZ CRCAMO",
      "guardianRut": "19.303.190-0",
      "guardianPhone": "+56 9 3239 6659",
      "guardianEmail": "elena.daz@email.com",
      "guardianAddress": "Av. España 1324, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1630,
      "rut": "23029868-8",
      "studentName": "GMEZ BAHAMONDE CAMILO IGNACIO",
      "birthDate": "30-05-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GMEZ BAHAMONDE",
      "guardianRut": "20.106.123-7",
      "guardianPhone": "+56 9 7307 6099",
      "guardianEmail": "eduardo.gmez@email.com",
      "guardianAddress": "Pasaje O'Higgins 1852, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1631,
      "rut": "23027268-9",
      "studentName": "GONZLEZ MONTALBAN ANTONIA BELEN",
      "birthDate": "23-05-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica GONZLEZ MONTALBAN",
      "guardianRut": "20.666.060-0",
      "guardianPhone": "+56 9 7492 4215",
      "guardianEmail": "monica.gonzlez@email.com",
      "guardianAddress": "Calle Bories 2075, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1632,
      "rut": "23066895-7",
      "studentName": "GUZMN MIRANDA ANTONELLA MONSERRATT",
      "birthDate": "07-07-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen GUZMN MIRANDA",
      "guardianRut": "19.882.934-K",
      "guardianPhone": "+56 9 4927 6876",
      "guardianEmail": "carmen.guzmn@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1984, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1633,
      "rut": "23102734-3",
      "studentName": "MALDONADO OYARZO IGNACIA BELN",
      "birthDate": "19-08-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María MALDONADO OYARZO",
      "guardianRut": "21.013.774-2",
      "guardianPhone": "+56 9 6146 3107",
      "guardianEmail": "maria.maldonado@email.com",
      "guardianAddress": "Calle Bories 796, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1634,
      "rut": "23118434-1",
      "studentName": "MARIMN MONTESINOS LUCAS IGNACIO",
      "birthDate": "08-09-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo MARIMN MONTESINOS",
      "guardianRut": "17.351.554-5",
      "guardianPhone": "+56 9 8534 1842",
      "guardianEmail": "eduardo.marimn@email.com",
      "guardianAddress": "Pasaje O'Higgins 1779, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1635,
      "rut": "23106310-2",
      "studentName": "MARI OJEDA MAYDA AYLEN",
      "birthDate": "24-08-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen MARI OJEDA",
      "guardianRut": "19.986.645-1",
      "guardianPhone": "+56 9 8772 0357",
      "guardianEmail": "carmen.mari@email.com",
      "guardianAddress": "Calle Magallanes 743, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1636,
      "rut": "23234399-0",
      "studentName": "MNDEZ LVAREZ AGUSTN IGNACIO",
      "birthDate": "26-01-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis MNDEZ LVAREZ",
      "guardianRut": "20.433.572-9",
      "guardianPhone": "+56 9 5357 9629",
      "guardianEmail": "luis.mndez@email.com",
      "guardianAddress": "Pasaje Los Leones 1628, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1637,
      "rut": "23224327-9",
      "studentName": "MENDICUTE AGUILERA BENJAMN IGNACIO",
      "birthDate": "15-01-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos MENDICUTE AGUILERA",
      "guardianRut": "21.203.623-4",
      "guardianPhone": "+56 9 4014 0651",
      "guardianEmail": "carlos.mendicute@email.com",
      "guardianAddress": "Pasaje Los Leones 1779, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1638,
      "rut": "23173678-6",
      "studentName": "MERINO ZUIGA FELIPE ANDRS",
      "birthDate": "18-11-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel MERINO ZUIGA",
      "guardianRut": "21.835.532-3",
      "guardianPhone": "+56 9 8220 1144",
      "guardianEmail": "miguel.merino@email.com",
      "guardianAddress": "Pasaje Los Leones 248, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1639,
      "rut": "23059031-1",
      "studentName": "MIRANDA ARISMENDI VANIA BELN",
      "birthDate": "30-06-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María MIRANDA ARISMENDI",
      "guardianRut": "21.977.159-2",
      "guardianPhone": "+56 9 8299 6316",
      "guardianEmail": "maria.miranda@email.com",
      "guardianAddress": "Av. Manuel Bulnes 833, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1640,
      "rut": "23151987-4",
      "studentName": "OVALLE MIRANDA CRISTBAL ALEXIS",
      "birthDate": "22-10-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo OVALLE MIRANDA",
      "guardianRut": "19.792.438-1",
      "guardianPhone": "+56 9 6189 4366",
      "guardianEmail": "eduardo.ovalle@email.com",
      "guardianAddress": "Pasaje Los Leones 1214, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1641,
      "rut": "23205773-4",
      "studentName": "OYARZO PUMARINO EMILIA FERNANDA",
      "birthDate": "20-12-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María OYARZO PUMARINO",
      "guardianRut": "20.078.194-5",
      "guardianPhone": "+56 9 6653 8853",
      "guardianEmail": "maria.oyarzo@email.com",
      "guardianAddress": "Calle Bories 1390, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1642,
      "rut": "23261533-8",
      "studentName": "PALMA IBARRA ANTONIA ANDREA",
      "birthDate": "04-03-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana PALMA IBARRA",
      "guardianRut": "20.947.555-3",
      "guardianPhone": "+56 9 7563 8920",
      "guardianEmail": "ana.palma@email.com",
      "guardianAddress": "Calle Magallanes 1431, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1643,
      "rut": "23049581-5",
      "studentName": "SNCHEZ FIDELI FRANCESCA ANTONIA",
      "birthDate": "05-06-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica SNCHEZ FIDELI",
      "guardianRut": "19.492.289-2",
      "guardianPhone": "+56 9 9251 2360",
      "guardianEmail": "monica.snchez@email.com",
      "guardianAddress": "Calle Magallanes 1218, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1644,
      "rut": "23172709-4",
      "studentName": "SOTO MENDOZA MATILDA LEONORA",
      "birthDate": "17-11-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia SOTO MENDOZA",
      "guardianRut": "20.950.111-2",
      "guardianPhone": "+56 9 9918 0920",
      "guardianEmail": "patricia.soto@email.com",
      "guardianAddress": "Pasaje Los Leones 1799, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1645,
      "rut": "23081579-8",
      "studentName": "ULLOA CASTRO ANTONNELLA ALMENDRA",
      "birthDate": "26-07-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena ULLOA CASTRO",
      "guardianRut": "19.442.638-0",
      "guardianPhone": "+56 9 5925 1463",
      "guardianEmail": "elena.ulloa@email.com",
      "guardianAddress": "Calle Magallanes 1465, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1646,
      "rut": "23112202-8",
      "studentName": "VARGAS GARAY JAVIERA CATALINA",
      "birthDate": "23-08-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica VARGAS GARAY",
      "guardianRut": "18.106.444-7",
      "guardianPhone": "+56 9 5799 5055",
      "guardianEmail": "monica.vargas@email.com",
      "guardianAddress": "Av. Colón 137, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1647,
      "rut": "23283468-4",
      "studentName": "VERA DAZ ROQUE ALBERTO DARO",
      "birthDate": "23-03-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco VERA DAZ",
      "guardianRut": "20.650.240-1",
      "guardianPhone": "+56 9 9595 6495",
      "guardianEmail": "francisco.vera@email.com",
      "guardianAddress": "Calle Magallanes 1898, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1648,
      "rut": "23045353-5",
      "studentName": "YAEZ MIRANDA CONSTANZA JAVIERA",
      "birthDate": "10-06-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia YAEZ MIRANDA",
      "guardianRut": "21.618.537-4",
      "guardianPhone": "+56 9 8541 7611",
      "guardianEmail": "patricia.yaez@email.com",
      "guardianAddress": "Av. Colón 1835, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1649,
      "rut": "23170598-8",
      "studentName": "ZAPATA VILA BENJAMN ALEXANDER",
      "birthDate": "16-11-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ZAPATA VILA",
      "guardianRut": "19.885.517-0",
      "guardianPhone": "+56 9 9209 3356",
      "guardianEmail": "eduardo.zapata@email.com",
      "guardianAddress": "Av. Colón 407, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1650,
      "rut": "23238081-0",
      "studentName": "GUILA GARCA ANTYEL ENOC",
      "birthDate": "29-01-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés GUILA GARCA",
      "guardianRut": "21.897.318-3",
      "guardianPhone": "+56 9 6305 8656",
      "guardianEmail": "andres.guila@email.com",
      "guardianAddress": "Av. Colón 644, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1651,
      "rut": "23269233-2",
      "studentName": "ALARCN SILVA ANTONIA AMPARO DE JESS",
      "birthDate": "11-03-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María ALARCN SILVA",
      "guardianRut": "18.102.051-2",
      "guardianPhone": "+56 9 6245 6276",
      "guardianEmail": "maria.alarcn@email.com",
      "guardianAddress": "Av. España 190, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1652,
      "rut": "23266799-0",
      "studentName": "CARRILLO ANCULEF IGNACIO ANDRS",
      "birthDate": "10-03-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos CARRILLO ANCULEF",
      "guardianRut": "20.134.088-8",
      "guardianPhone": "+56 9 9552 0875",
      "guardianEmail": "carlos.carrillo@email.com",
      "guardianAddress": "Pasaje O'Higgins 580, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1653,
      "rut": "23288081-3",
      "studentName": "DAZ MONTAA CONSTANZA BELN",
      "birthDate": "14-03-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen DAZ MONTAA",
      "guardianRut": "21.261.109-3",
      "guardianPhone": "+56 9 8345 8162",
      "guardianEmail": "carmen.daz@email.com",
      "guardianAddress": "Av. Manuel Bulnes 638, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1654,
      "rut": "23206659-8",
      "studentName": "GMEZ DAZ MONSERRAT NAYARA",
      "birthDate": "16-12-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca GMEZ DAZ",
      "guardianRut": "20.871.381-7",
      "guardianPhone": "+56 9 4856 1349",
      "guardianEmail": "francisca.gmez@email.com",
      "guardianAddress": "Calle Magallanes 1221, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1655,
      "rut": "23096128-K",
      "studentName": "HERMIDA MARTINEZ MARTINA ARIEN VICTORIA",
      "birthDate": "13-08-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca HERMIDA MARTINEZ",
      "guardianRut": "21.761.136-9",
      "guardianPhone": "+56 9 6513 9393",
      "guardianEmail": "francisca.hermida@email.com",
      "guardianAddress": "Calle Magallanes 904, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1656,
      "rut": "23108540-8",
      "studentName": "HERRERA SOTO AGUSTN MANUEL",
      "birthDate": "30-08-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan HERRERA SOTO",
      "guardianRut": "19.193.491-1",
      "guardianPhone": "+56 9 9534 7324",
      "guardianEmail": "juan.herrera@email.com",
      "guardianAddress": "Av. España 362, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1657,
      "rut": "23032013-6",
      "studentName": "JIMNEZ AGUAYO LAURA AMANDA",
      "birthDate": "28-05-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica JIMNEZ AGUAYO",
      "guardianRut": "19.820.980-5",
      "guardianPhone": "+56 9 9514 5924",
      "guardianEmail": "monica.jimnez@email.com",
      "guardianAddress": "Av. Colón 786, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1658,
      "rut": "23023612-7",
      "studentName": "LEGUE LEVN EMILIA IGNACIA",
      "birthDate": "22-05-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana LEGUE LEVN",
      "guardianRut": "21.010.491-7",
      "guardianPhone": "+56 9 7558 6414",
      "guardianEmail": "ana.legue@email.com",
      "guardianAddress": "Pasaje Los Leones 1061, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1659,
      "rut": "23274245-3",
      "studentName": "LEYTON CHICUI RAQUEL ELIZABETH",
      "birthDate": "13-03-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica LEYTON CHICUI",
      "guardianRut": "18.534.218-2",
      "guardianPhone": "+56 9 3228 0893",
      "guardianEmail": "monica.leyton@email.com",
      "guardianAddress": "Pasaje O'Higgins 1058, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1660,
      "rut": "23085945-0",
      "studentName": "LIZONDO MENENDEZ CATALINA ISIDORA",
      "birthDate": "23-07-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María LIZONDO MENENDEZ",
      "guardianRut": "18.993.949-3",
      "guardianPhone": "+56 9 9863 4396",
      "guardianEmail": "maria.lizondo@email.com",
      "guardianAddress": "Av. España 465, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1661,
      "rut": "23051436-4",
      "studentName": "MADARIAGA SALDIVIA ALONSO ANTONIO",
      "birthDate": "19-06-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco MADARIAGA SALDIVIA",
      "guardianRut": "19.081.230-8",
      "guardianPhone": "+56 9 9217 1775",
      "guardianEmail": "francisco.madariaga@email.com",
      "guardianAddress": "Calle Bories 281, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1662,
      "rut": "23119660-9",
      "studentName": "MOLINA SANTANA ARANTZAZU",
      "birthDate": "10-09-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca MOLINA SANTANA",
      "guardianRut": "18.640.437-8",
      "guardianPhone": "+56 9 3873 9226",
      "guardianEmail": "francisca.molina@email.com",
      "guardianAddress": "Pasaje Los Leones 1375, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1663,
      "rut": "25780924-2",
      "studentName": "MUIZ PLANA JONATHAN",
      "birthDate": "21-11-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto MUIZ PLANA",
      "guardianRut": "22.241.613-2",
      "guardianPhone": "+56 9 5494 3349",
      "guardianEmail": "roberto.muiz@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1916, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1664,
      "rut": "23072678-7",
      "studentName": "NUEZ SALAS MONTSERRAT ANAS DEL CARMEN",
      "birthDate": "16-07-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca NUEZ SALAS",
      "guardianRut": "19.075.653-K",
      "guardianPhone": "+56 9 9926 0074",
      "guardianEmail": "francisca.nuez@email.com",
      "guardianAddress": "Av. Colón 1144, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1665,
      "rut": "23267888-7",
      "studentName": "ORTEGA ALVAREZ MATILDE ANTONIA",
      "birthDate": "08-03-2010",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen ORTEGA ALVAREZ",
      "guardianRut": "19.894.010-0",
      "guardianPhone": "+56 9 9039 1117",
      "guardianEmail": "carmen.ortega@email.com",
      "guardianAddress": "Av. España 1865, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1666,
      "rut": "23190055-1",
      "studentName": "PARRA CHEUQUE ANTONELLA ALEJANDRA",
      "birthDate": "30-11-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia PARRA CHEUQUE",
      "guardianRut": "20.702.402-3",
      "guardianPhone": "+56 9 5537 6740",
      "guardianEmail": "patricia.parra@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1856, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1667,
      "rut": "23048302-7",
      "studentName": "REYES MEDINA SORAYA NATACHA DENISSE",
      "birthDate": "12-06-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena REYES MEDINA",
      "guardianRut": "21.574.371-3",
      "guardianPhone": "+56 9 5312 5314",
      "guardianEmail": "elena.reyes@email.com",
      "guardianAddress": "Pasaje Los Leones 586, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1668,
      "rut": "23096092-5",
      "studentName": "RIOSECO AYALA VICENTE JESS",
      "birthDate": "12-08-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos RIOSECO AYALA",
      "guardianRut": "19.350.474-4",
      "guardianPhone": "+56 9 8500 7609",
      "guardianEmail": "carlos.rioseco@email.com",
      "guardianAddress": "Av. Colón 647, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1669,
      "rut": "23138059-0",
      "studentName": "SOTO DELGADO MA BELN",
      "birthDate": "01-10-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena SOTO DELGADO",
      "guardianRut": "17.172.023-0",
      "guardianPhone": "+56 9 5008 2065",
      "guardianEmail": "elena.soto@email.com",
      "guardianAddress": "Av. España 1049, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1670,
      "rut": "23026406-6",
      "studentName": "TORO MLLER ANAIS ALMENDRA ANASTASIA",
      "birthDate": "25-05-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena TORO MLLER",
      "guardianRut": "17.522.892-6",
      "guardianPhone": "+56 9 4057 3851",
      "guardianEmail": "elena.toro@email.com",
      "guardianAddress": "Calle Magallanes 1443, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1671,
      "rut": "23197082-7",
      "studentName": "VALENZUELA FUENTES MATAS ISMAEL",
      "birthDate": "08-12-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos VALENZUELA FUENTES",
      "guardianRut": "17.967.738-5",
      "guardianPhone": "+56 9 7186 4490",
      "guardianEmail": "carlos.valenzuela@email.com",
      "guardianAddress": "Pasaje Los Leones 902, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1672,
      "rut": "23253717-5",
      "studentName": "VALENZUELA PIA AGUSTN IGNACIO",
      "birthDate": "19-02-2010",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel VALENZUELA PIA",
      "guardianRut": "17.861.006-6",
      "guardianPhone": "+56 9 2390 9633",
      "guardianEmail": "miguel.valenzuela@email.com",
      "guardianAddress": "Av. Manuel Bulnes 170, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1673,
      "rut": "23038014-7",
      "studentName": "VENEGAS VASQUEZ ENZO MILAN",
      "birthDate": "03-06-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos VENEGAS VASQUEZ",
      "guardianRut": "18.833.516-0",
      "guardianPhone": "+56 9 5922 6545",
      "guardianEmail": "carlos.venegas@email.com",
      "guardianAddress": "Pasaje O'Higgins 669, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1674,
      "rut": "23171042-6",
      "studentName": "VILLEGAS GONZLEZ ELAS LEONARDO",
      "birthDate": "16-11-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo VILLEGAS GONZLEZ",
      "guardianRut": "19.674.383-9",
      "guardianPhone": "+56 9 8959 6801",
      "guardianEmail": "eduardo.villegas@email.com",
      "guardianAddress": "Pasaje Los Leones 1361, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1675,
      "rut": "23142794-5",
      "studentName": "WHUITT IBARRA CONSTANZA AMIRA",
      "birthDate": "05-10-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena WHUITT IBARRA",
      "guardianRut": "19.532.632-0",
      "guardianPhone": "+56 9 5639 2746",
      "guardianEmail": "elena.whuitt@email.com",
      "guardianAddress": "Pasaje O'Higgins 2076, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1676,
      "rut": "23-201-264-1",
      "studentName": "SEPULVEDA MONTERO VICENTE",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "María SEPULVEDA MONTERO",
      "guardianRut": "-3.069.236-NaN",
      "guardianPhone": "",
      "guardianEmail": "maria.sepulveda@email.com",
      "guardianAddress": "Av. Manuel Bulnes 917, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1677,
      "rut": "23143551-4",
      "studentName": "GUZMAN ESPINOZA GABRIEL",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisca GUZMAN ESPINOZA",
      "guardianRut": "21.155.447-9",
      "guardianPhone": "",
      "guardianEmail": "francisca.guzman@email.com",
      "guardianAddress": "Calle Magallanes 529, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1678,
      "rut": "23241661-3",
      "studentName": "QUINTUL FUENTEALBA FLORENCIA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Mónica QUINTUL FUENTEALBA",
      "guardianRut": "21.230.820-K",
      "guardianPhone": "",
      "guardianEmail": "monica.quintul@email.com",
      "guardianAddress": "Av. España 1475, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1679,
      "rut": "23162578-K",
      "studentName": "HERNANDEZ BERMUDEZ MARTINA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "María HERNANDEZ BERMUDEZ",
      "guardianRut": "18.728.214-4",
      "guardianPhone": "",
      "guardianEmail": "maria.hernandez@email.com",
      "guardianAddress": "Pasaje Los Leones 499, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1680,
      "rut": "23158932-5",
      "studentName": "GUTIERREZ ROMERO FRANCISCA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Mónica GUTIERREZ ROMERO",
      "guardianRut": "20.231.980-7",
      "guardianPhone": "",
      "guardianEmail": "monica.gutierrez@email.com",
      "guardianAddress": "Calle Bories 888, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1681,
      "rut": "23272643-1",
      "studentName": "PINILLA NAHUELQUIN TIARA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "María PINILLA NAHUELQUIN",
      "guardianRut": "21.831.589-5",
      "guardianPhone": "",
      "guardianEmail": "maria.pinilla@email.com",
      "guardianAddress": "Calle Bories 1025, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1682,
      "rut": "22996056-3",
      "studentName": "AGUILA BARRIENTOS MAYDELINE CRISTINA",
      "birthDate": "15-04-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca AGUILA BARRIENTOS",
      "guardianRut": "17.388.615-2",
      "guardianPhone": "+56 9 9890 1239",
      "guardianEmail": "francisca.aguila@email.com",
      "guardianAddress": "Pasaje Los Leones 773, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1683,
      "rut": "22938000-1",
      "studentName": "ALARCNURRUTIAVALENTINA NOEM",
      "birthDate": "04-02-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana ALARCNURRUTIAVALENTINA NOEM",
      "guardianRut": "19.301.695-2",
      "guardianPhone": "+56 9 5901 4712",
      "guardianEmail": "ana.alarcnurrutiavalentina@email.com",
      "guardianAddress": "Calle Magallanes 105, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1684,
      "rut": "22891451-7",
      "studentName": "ALVARADO VILLARROEL GIULIANA INESSA",
      "birthDate": "03-12-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María ALVARADO VILLARROEL",
      "guardianRut": "19.351.567-3",
      "guardianPhone": "+56 9 5902 1690",
      "guardianEmail": "maria.alvarado@email.com",
      "guardianAddress": "Av. Colón 1638, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1685,
      "rut": "22409412-4",
      "studentName": "AMPUEROMIRANDAFRANCISCO JAVIER",
      "birthDate": "29-05-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel AMPUEROMIRANDAFRANCISCO JAVIER",
      "guardianRut": "19.970.144-4",
      "guardianPhone": "+56 9 9640 1494",
      "guardianEmail": "miguel.ampueromirandafrancisco@email.com",
      "guardianAddress": "Pasaje Los Leones 1880, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1686,
      "rut": "22907995-6",
      "studentName": "CANALESPIZARROANAH MILLARAY",
      "birthDate": "28-12-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa CANALESPIZARROANAH MILLARAY",
      "guardianRut": "17.115.338-7",
      "guardianPhone": "+56 9 6312 8358",
      "guardianEmail": "rosa.canalespizarroanah@email.com",
      "guardianAddress": "Calle Magallanes 244, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1687,
      "rut": "22940001-0",
      "studentName": "CEBALLOS ESPAA PEDRO JAVIER",
      "birthDate": "06-02-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis CEBALLOS ESPAA",
      "guardianRut": "19.368.102-6",
      "guardianPhone": "+56 9 9434 2498",
      "guardianEmail": "luis.ceballos@email.com",
      "guardianAddress": "Av. Colón 564, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1688,
      "rut": "22984711-2",
      "studentName": "CORDOVA VARGAS MONSERRAT GABRIELA",
      "birthDate": "27-03-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa CORDOVA VARGAS",
      "guardianRut": "21.538.263-K",
      "guardianPhone": "+56 9 3052 0721",
      "guardianEmail": "rosa.cordova@email.com",
      "guardianAddress": "Pasaje O'Higgins 1882, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1689,
      "rut": "22789958-1",
      "studentName": "DAZNAGUELQUNLISSETTE DENISSE",
      "birthDate": "07-08-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena DAZNAGUELQUNLISSETTE DENISSE",
      "guardianRut": "16.959.053-2",
      "guardianPhone": "+56 9 6137 5029",
      "guardianEmail": "elena.daznaguelqunlissette@email.com",
      "guardianAddress": "Pasaje O'Higgins 295, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1690,
      "rut": "22773719-0",
      "studentName": "DIAZ OLIVARES DIEGO IVAN",
      "birthDate": "21-07-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés DIAZ OLIVARES",
      "guardianRut": "19.437.242-6",
      "guardianPhone": "+56 9 9495 5824",
      "guardianEmail": "andres.diaz@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1045, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1691,
      "rut": "22964266-9",
      "studentName": "ESPINOZA OYARZUN ISIDORA BELEN",
      "birthDate": "09-03-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa ESPINOZA OYARZUN",
      "guardianRut": "17.756.166-5",
      "guardianPhone": "+56 9 4247 3363",
      "guardianEmail": "rosa.espinoza@email.com",
      "guardianAddress": "Pasaje Los Leones 1582, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1692,
      "rut": "22962145-9",
      "studentName": "FERNANDEZ HERNANDEZ MARA DE LOS ANGELES",
      "birthDate": "26-02-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica FERNANDEZ HERNANDEZ",
      "guardianRut": "18.753.097-0",
      "guardianPhone": "+56 9 9541 5622",
      "guardianEmail": "monica.fernandez@email.com",
      "guardianAddress": "Calle Bories 1796, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1693,
      "rut": "22654925-0",
      "studentName": "FLORES VILLEGAS BLAS ARIEL",
      "birthDate": "25-01-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana FLORES VILLEGAS",
      "guardianRut": "21.012.538-8",
      "guardianPhone": "",
      "guardianEmail": "ana.flores@email.com",
      "guardianAddress": "Calle Magallanes 1315, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1694,
      "rut": "22889153-3",
      "studentName": "FUENTES TAPIA PASCALE",
      "birthDate": "29-11-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca FUENTES TAPIA",
      "guardianRut": "19.395.798-6",
      "guardianPhone": "+56 9 6224 9797",
      "guardianEmail": "francisca.fuentes@email.com",
      "guardianAddress": "Av. Manuel Bulnes 496, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1695,
      "rut": "22960859-2",
      "studentName": "GALARCE GALINDO VALENTINA ANTONELLA",
      "birthDate": "01-03-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen GALARCE GALINDO",
      "guardianRut": "18.363.630-8",
      "guardianPhone": "+56 9 4220 6784",
      "guardianEmail": "carmen.galarce@email.com",
      "guardianAddress": "Calle Magallanes 571, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1696,
      "rut": "22756944-1",
      "studentName": "GARNICA MARIN TOMAS FELIPE",
      "birthDate": "28-06-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GARNICA MARIN",
      "guardianRut": "21.225.055-4",
      "guardianPhone": "+56 9 7690 4691",
      "guardianEmail": "eduardo.garnica@email.com",
      "guardianAddress": "Av. España 679, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1697,
      "rut": "22589849-9",
      "studentName": "GONZALEZ AGUILAR ALONSO PATRICIO",
      "birthDate": "29-12-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GONZALEZ AGUILAR",
      "guardianRut": "19.450.619-8",
      "guardianPhone": "+56 9 6415 0198",
      "guardianEmail": "eduardo.gonzalez@email.com",
      "guardianAddress": "Av. España 818, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1698,
      "rut": "22750636-9",
      "studentName": "GOYACK LA PAZ BENJAMIN CRISTOBAL ALEXANDER",
      "birthDate": "13-06-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GOYACK LA",
      "guardianRut": "18.726.659-9",
      "guardianPhone": "+56 9 3243 9723",
      "guardianEmail": "eduardo.goyack@email.com",
      "guardianAddress": "Pasaje O'Higgins 2082, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1699,
      "rut": "22722625-0",
      "studentName": "GUENTELICAN MARTINEZ IVANIA EMILIA YANAICE",
      "birthDate": "16-05-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica GUENTELICAN MARTINEZ",
      "guardianRut": "19.145.990-3",
      "guardianPhone": "+56 9 9781 2605",
      "guardianEmail": "monica.guentelican@email.com",
      "guardianAddress": "Pasaje Los Leones 730, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1700,
      "rut": "22837039-8",
      "studentName": "MANSILLA SALDIVIA MARTINA ANTONIA",
      "birthDate": "10-10-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen MANSILLA SALDIVIA",
      "guardianRut": "21.483.540-1",
      "guardianPhone": "",
      "guardianEmail": "carmen.mansilla@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1643, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1701,
      "rut": "22985026-1",
      "studentName": "MAYORGA CASTILLO MIA ALEXANDRA GERALDINE",
      "birthDate": "27-03-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena MAYORGA CASTILLO",
      "guardianRut": "18.409.075-9",
      "guardianPhone": "+56 9 8842 9192",
      "guardianEmail": "elena.mayorga@email.com",
      "guardianAddress": "Av. Manuel Bulnes 525, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1702,
      "rut": "22746733-9",
      "studentName": "MENDEZ VASQUEZ LUCIANO ARMANDO",
      "birthDate": "08-06-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan MENDEZ VASQUEZ",
      "guardianRut": "21.311.018-7",
      "guardianPhone": "+56 9 7257 5187",
      "guardianEmail": "juan.mendez@email.com",
      "guardianAddress": "Pasaje O'Higgins 1877, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1703,
      "rut": "26868618-5",
      "studentName": "MORRISON CARCAMO MIGUEL ALEJANDRO",
      "birthDate": "29-09-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés MORRISON CARCAMO",
      "guardianRut": "23.694.554-5",
      "guardianPhone": "+56 9 5607 8524",
      "guardianEmail": "andres.morrison@email.com",
      "guardianAddress": "Av. España 793, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1704,
      "rut": "22877563-0",
      "studentName": "OJEDA CHIGUAY DAIRA RAYEN",
      "birthDate": "24-11-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen OJEDA CHIGUAY",
      "guardianRut": "21.769.691-7",
      "guardianPhone": "+56 9 5415 1494",
      "guardianEmail": "carmen.ojeda@email.com",
      "guardianAddress": "Pasaje O'Higgins 1532, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1705,
      "rut": "22855623-8",
      "studentName": "PARDO VARGAS JOSE MATIAS",
      "birthDate": "29-10-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel PARDO VARGAS",
      "guardianRut": "18.969.188-2",
      "guardianPhone": "+56 9 9690 9280",
      "guardianEmail": "miguel.pardo@email.com",
      "guardianAddress": "Av. España 1089, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1706,
      "rut": "22685746-K",
      "studentName": "PLACENCIARAMREZFELIPE ANTONIO",
      "birthDate": "02-04-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés PLACENCIARAMREZFELIPE ANTONIO",
      "guardianRut": "20.545.789-5",
      "guardianPhone": "+56 9 7432 4100",
      "guardianEmail": "andres.placenciaramrezfelipe@email.com",
      "guardianAddress": "Calle Magallanes 370, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1707,
      "rut": "22817770-9",
      "studentName": "RUIZGMEZNSTOR DANIEL",
      "birthDate": "08-09-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés RUIZGMEZNSTOR DANIEL",
      "guardianRut": "19.103.429-5",
      "guardianPhone": "+56 9 5010 8709",
      "guardianEmail": "andres.ruizgmeznstor@email.com",
      "guardianAddress": "Pasaje O'Higgins 1545, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1708,
      "rut": "22839992-2",
      "studentName": "SANDOVALVELOSOFERNANDA CATALINA",
      "birthDate": "10-10-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica SANDOVALVELOSOFERNANDA CATALINA",
      "guardianRut": "21.276.861-8",
      "guardianPhone": "+56 9 9751 0804",
      "guardianEmail": "monica.sandovalvelosofernanda@email.com",
      "guardianAddress": "Calle Magallanes 1168, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1709,
      "rut": "22771678-9",
      "studentName": "TAPIA SOTO KANELA DAFNE NICOLE",
      "birthDate": "08-07-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa TAPIA SOTO",
      "guardianRut": "17.156.516-2",
      "guardianPhone": "+56 9 9067 3935",
      "guardianEmail": "rosa.tapia@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1653, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1710,
      "rut": "22693049-3",
      "studentName": "VLIZ MIRANDA CARLA ALEJANDRA",
      "birthDate": "10-04-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena VLIZ MIRANDA",
      "guardianRut": "20.672.201-0",
      "guardianPhone": "+56 9 6697 0853",
      "guardianEmail": "elena.vliz@email.com",
      "guardianAddress": "Av. Manuel Bulnes 868, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1711,
      "rut": "22693068-K",
      "studentName": "VLIZMIRANDAKARINA ANDREA",
      "birthDate": "10-04-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena VLIZMIRANDAKARINA ANDREA",
      "guardianRut": "20.816.333-7",
      "guardianPhone": "+56 9 6697 0853",
      "guardianEmail": "elena.vlizmirandakarina@email.com",
      "guardianAddress": "Av. España 1263, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1712,
      "rut": "22976518-3",
      "studentName": "ABRIGO CARRASCO DANIELA BELN",
      "birthDate": "20/032009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca ABRIGO CARRASCO",
      "guardianRut": "18.511.047-8",
      "guardianPhone": "+56 9 9482 4513",
      "guardianEmail": "francisca.abrigo@email.com",
      "guardianAddress": "Pasaje O'Higgins 1990, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1713,
      "rut": "22918255-2",
      "studentName": "AGERO GOMEZ MARIA JOSE",
      "birthDate": "10-01-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena AGERO GOMEZ",
      "guardianRut": "17.993.931-2",
      "guardianPhone": "+56 9 1221 6829",
      "guardianEmail": "elena.agero@email.com",
      "guardianAddress": "Calle Magallanes 131, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1714,
      "rut": "22785956-3",
      "studentName": "ALESSANDRI DIAZ ANDRES IGNACIO",
      "birthDate": "31-07-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ALESSANDRI DIAZ",
      "guardianRut": "20.621.811-8",
      "guardianPhone": "+56 9 7343 4204",
      "guardianEmail": "eduardo.alessandri@email.com",
      "guardianAddress": "Pasaje Los Leones 1944, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1715,
      "rut": "22827933-1",
      "studentName": "ALVARADOMORAGAVICENTE JOAQUN",
      "birthDate": "06-10-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel ALVARADOMORAGAVICENTE JOAQUN",
      "guardianRut": "20.810.173-0",
      "guardianPhone": "+56 9 4745 8343",
      "guardianEmail": "miguel.alvaradomoragavicente@email.com",
      "guardianAddress": "Calle Bories 992, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1716,
      "rut": "22848869-0",
      "studentName": "ANDRADE YAEZ IAN CRISTOBAL",
      "birthDate": "17-10-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ANDRADE YAEZ",
      "guardianRut": "20.341.214-2",
      "guardianPhone": "+56 9 4251 1250",
      "guardianEmail": "eduardo.andrade@email.com",
      "guardianAddress": "Pasaje Los Leones 1721, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1717,
      "rut": "22943321-0",
      "studentName": "ANGULO NEGUEL PEDRO PABLO",
      "birthDate": "09-02-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco ANGULO NEGUEL",
      "guardianRut": "18.396.098-9",
      "guardianPhone": "+56 9 9087 5241",
      "guardianEmail": "francisco.angulo@email.com",
      "guardianAddress": "Calle Bories 1380, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1718,
      "rut": "22718798-0",
      "studentName": "ARIASRUIZJAVIERA ALEXANDRA",
      "birthDate": "13-05-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica ARIASRUIZJAVIERA ALEXANDRA",
      "guardianRut": "20.778.195-9",
      "guardianPhone": "+56 9 8792 9155",
      "guardianEmail": "monica.ariasruizjaviera@email.com",
      "guardianAddress": "Av. Colón 201, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1719,
      "rut": "22980929-6",
      "studentName": "BARRIENTOS AMPUERO CESAR ALFONSO",
      "birthDate": "26-03-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto BARRIENTOS AMPUERO",
      "guardianRut": "18.074.748-6",
      "guardianPhone": "+56 9 8972 8153",
      "guardianEmail": "roberto.barrientos@email.com",
      "guardianAddress": "Av. España 545, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1720,
      "rut": "22908332-5",
      "studentName": "CASANOVA GUICHAPANI CATALINA BELEN",
      "birthDate": "26-12-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena CASANOVA GUICHAPANI",
      "guardianRut": "19.649.972-5",
      "guardianPhone": "+56 9 9362 9103",
      "guardianEmail": "elena.casanova@email.com",
      "guardianAddress": "Av. Colón 2025, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1721,
      "rut": "22777153-4",
      "studentName": "COFIN DUAMANTE GENEL ELAS PATRICIO",
      "birthDate": "28-07-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos COFIN DUAMANTE",
      "guardianRut": "18.554.792-2",
      "guardianPhone": "+56 9 6495 4552",
      "guardianEmail": "carlos.cofin@email.com",
      "guardianAddress": "Calle Magallanes 501, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1722,
      "rut": "22892676-0",
      "studentName": "CONTRERAS DIAZ EMMA MARTINA",
      "birthDate": "03-12-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena CONTRERAS DIAZ",
      "guardianRut": "19.848.807-0",
      "guardianPhone": "+56 9 9210 2738",
      "guardianEmail": "elena.contreras@email.com",
      "guardianAddress": "Calle Bories 425, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1723,
      "rut": "22958521-5",
      "studentName": "DIAZ CORONADO FELIPE MAXIMILIANO",
      "birthDate": "03-03-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos DIAZ CORONADO",
      "guardianRut": "17.830.611-1",
      "guardianPhone": "+56 9 3119 4743",
      "guardianEmail": "carlos.diaz@email.com",
      "guardianAddress": "Calle Bories 807, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1724,
      "rut": "22490217-4",
      "studentName": "ESPINOZA AGERO VICENTE ANTONIO",
      "birthDate": "23-08-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés ESPINOZA AGERO",
      "guardianRut": "21.411.784-3",
      "guardianPhone": "+56 9 5510 9225",
      "guardianEmail": "andres.espinoza@email.com",
      "guardianAddress": "Pasaje Los Leones 1109, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1725,
      "rut": "22739321-1",
      "studentName": "GODOI TORRES IAN ARIEL",
      "birthDate": "07-06-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos GODOI TORRES",
      "guardianRut": "20.204.182-5",
      "guardianPhone": "+56 9 8793 3934",
      "guardianEmail": "carlos.godoi@email.com",
      "guardianAddress": "Calle Magallanes 797, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1726,
      "rut": "22841160-4",
      "studentName": "HERMOSILLA CASTILLO BENJAMIN ANDRES",
      "birthDate": "07-10-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis HERMOSILLA CASTILLO",
      "guardianRut": "18.729.216-6",
      "guardianPhone": "+56 9 9638 8648",
      "guardianEmail": "luis.hermosilla@email.com",
      "guardianAddress": "Pasaje Los Leones 1871, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1727,
      "rut": "22942851-9",
      "studentName": "LEAL ESPINOZA AGUSTINA ANTONELLA",
      "birthDate": "10-02-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María LEAL ESPINOZA",
      "guardianRut": "19.204.166-K",
      "guardianPhone": "+56 9 5892 7799",
      "guardianEmail": "maria.leal@email.com",
      "guardianAddress": "Pasaje O'Higgins 211, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1728,
      "rut": "23022034-4",
      "studentName": "LILLO HERRERA FLORENCIA ANTONIA",
      "birthDate": "20-05-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa LILLO HERRERA",
      "guardianRut": "17.701.999-2",
      "guardianPhone": "+56 9 6686 1827",
      "guardianEmail": "rosa.lillo@email.com",
      "guardianAddress": "Pasaje O'Higgins 830, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1729,
      "rut": "22944327-5",
      "studentName": "MANSILLA SANCHEZ PATRICIA EVOLET",
      "birthDate": "11-02-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana MANSILLA SANCHEZ",
      "guardianRut": "18.927.359-2",
      "guardianPhone": "+56 9 6313 2764",
      "guardianEmail": "ana.mansilla@email.com",
      "guardianAddress": "Pasaje O'Higgins 2051, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1730,
      "rut": "22404364-3",
      "studentName": "NEZ VERA NATALIA ISIDORA",
      "birthDate": "25-05-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María NEZ VERA",
      "guardianRut": "21.037.555-4",
      "guardianPhone": "",
      "guardianEmail": "maria.nez@email.com",
      "guardianAddress": "Av. Colón 605, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1731,
      "rut": "22775848-1",
      "studentName": "PACHECO GARRIDO GUILLERMO JAVIER",
      "birthDate": "23-07-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan PACHECO GARRIDO",
      "guardianRut": "17.378.988-2",
      "guardianPhone": "",
      "guardianEmail": "juan.pacheco@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1096, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1732,
      "rut": "22944857-9",
      "studentName": "PIZARRO SILVA CELESTE",
      "birthDate": "15-02-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María PIZARRO SILVA",
      "guardianRut": "20.276.008-2",
      "guardianPhone": "+56 9 9221 7735",
      "guardianEmail": "maria.pizarro@email.com",
      "guardianAddress": "Av. España 972, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1733,
      "rut": "22893819-K",
      "studentName": "SALAZAR CAMPOS ANGEL IGNACIO",
      "birthDate": "11-12-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés SALAZAR CAMPOS",
      "guardianRut": "20.840.059-2",
      "guardianPhone": "+56 9 8929 7186",
      "guardianEmail": "andres.salazar@email.com",
      "guardianAddress": "Calle Magallanes 2072, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1734,
      "rut": "22788823-7",
      "studentName": "SANTANA GUTIRREZ BASTIN IGNACIO",
      "birthDate": "02-08-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco SANTANA GUTIRREZ",
      "guardianRut": "19.934.763-2",
      "guardianPhone": "+56 9 8509 5782",
      "guardianEmail": "francisco.santana@email.com",
      "guardianAddress": "Calle Bories 718, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1735,
      "rut": "22956026-3",
      "studentName": "SEPLVEDA SUBIABRE JAVIERA IGNACIA",
      "birthDate": "26-02-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María SEPLVEDA SUBIABRE",
      "guardianRut": "21.760.557-1",
      "guardianPhone": "+56 9 4170 3200",
      "guardianEmail": "maria.seplveda@email.com",
      "guardianAddress": "Av. Colón 681, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1736,
      "rut": "22851005-K",
      "studentName": "VALENZUELA FONTEALBA SYNTHIA ESTEFANA",
      "birthDate": "23-10-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana VALENZUELA FONTEALBA",
      "guardianRut": "21.514.974-9",
      "guardianPhone": "+56 9 7995 8654",
      "guardianEmail": "ana.valenzuela@email.com",
      "guardianAddress": "Av. España 373, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1737,
      "rut": "22916237-3",
      "studentName": "VARGAS VIDAL FERNANDA CATALINA",
      "birthDate": "07-01-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María VARGAS VIDAL",
      "guardianRut": "19.624.408-5",
      "guardianPhone": "+56 9 3561 8451",
      "guardianEmail": "maria.vargas@email.com",
      "guardianAddress": "Av. Colón 1024, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1738,
      "rut": "22914565-7",
      "studentName": "VEGA HARO ANTONELLA BELEN",
      "birthDate": "07-01-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa VEGA HARO",
      "guardianRut": "17.890.059-5",
      "guardianPhone": "+56 9 7463 1010",
      "guardianEmail": "rosa.vega@email.com",
      "guardianAddress": "Av. Manuel Bulnes 393, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1739,
      "rut": "22842891-4",
      "studentName": "VELSQUEZPAZSOFA ISABEL",
      "birthDate": "29-09-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia VELSQUEZPAZSOFA ISABEL",
      "guardianRut": "21.270.168-8",
      "guardianPhone": "+56 9 9573 2613",
      "guardianEmail": "patricia.velsquezpazsofa@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1625, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1740,
      "rut": "22676543-3",
      "studentName": "VILLEGAS NAVEA LAURA BELN",
      "birthDate": "25-03-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana VILLEGAS NAVEA",
      "guardianRut": "18.116.925-7",
      "guardianPhone": "+56 9 9644 6645",
      "guardianEmail": "ana.villegas@email.com",
      "guardianAddress": "Calle Magallanes 697, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1741,
      "rut": "22676529-8",
      "studentName": "VILLEGAS NAVEA LUCA BELN",
      "birthDate": "25-03-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María VILLEGAS NAVEA",
      "guardianRut": "17.767.190-8",
      "guardianPhone": "+56 9 9644 6645",
      "guardianEmail": "maria.villegas@email.com",
      "guardianAddress": "Pasaje O'Higgins 1864, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1742,
      "rut": "22365161-5",
      "studentName": "AMBIADO ASTUDILLO IGNACIO ALONSO",
      "birthDate": "01-04-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel AMBIADO ASTUDILLO",
      "guardianRut": "19.058.145-4",
      "guardianPhone": "",
      "guardianEmail": "miguel.ambiado@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1223, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1743,
      "rut": "22962305-2",
      "studentName": "ARAYA RAMOS PABLO GABRIEL",
      "birthDate": "06-03-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco ARAYA RAMOS",
      "guardianRut": "18.270.261-7",
      "guardianPhone": "+56 9 5630 7071",
      "guardianEmail": "francisco.araya@email.com",
      "guardianAddress": "Av. España 967, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1744,
      "rut": "22925340-9",
      "studentName": "BACON MACHADO SIMN ALBERTO",
      "birthDate": "20-01-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis BACON MACHADO",
      "guardianRut": "17.867.105-7",
      "guardianPhone": "+56 9 8361 4086",
      "guardianEmail": "luis.bacon@email.com",
      "guardianAddress": "Av. España 825, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1745,
      "rut": "22772642-3",
      "studentName": "BAEZA BRQUEZ BENJAMN ALONSO",
      "birthDate": "21-07-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos BAEZA BRQUEZ",
      "guardianRut": "16.862.805-6",
      "guardianPhone": "+56 9 1221 3359",
      "guardianEmail": "carlos.baeza@email.com",
      "guardianAddress": "Pasaje Los Leones 2062, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1746,
      "rut": "22751597-K",
      "studentName": "BAHAMONDE INZULZA NAYEN OMAIRA",
      "birthDate": "19-06-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María BAHAMONDE INZULZA",
      "guardianRut": "20.712.261-0",
      "guardianPhone": "+56 9 1226 2890",
      "guardianEmail": "maria.bahamonde@email.com",
      "guardianAddress": "Calle Magallanes 1235, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1747,
      "rut": "22951726-0",
      "studentName": "CALDERON URIBE CATALINA SCARLETT",
      "birthDate": "19-02-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María CALDERON URIBE",
      "guardianRut": "21.345.549-4",
      "guardianPhone": "+56 9 8385 8420",
      "guardianEmail": "maria.calderon@email.com",
      "guardianAddress": "Av. Manuel Bulnes 541, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1748,
      "rut": "22749001-2",
      "studentName": "CANCINO MUOZ SOFA MONSERRAT",
      "birthDate": "19-06-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María CANCINO MUOZ",
      "guardianRut": "18.841.951-8",
      "guardianPhone": "+56 9 5427 1832",
      "guardianEmail": "maria.cancino@email.com",
      "guardianAddress": "Av. España 468, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1749,
      "rut": "22771285-6",
      "studentName": "CANDIA CRCAMO ERICK ANDRS",
      "birthDate": "21-07-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto CANDIA CRCAMO",
      "guardianRut": "17.383.606-6",
      "guardianPhone": "+56 9 5634 6722",
      "guardianEmail": "roberto.candia@email.com",
      "guardianAddress": "Av. España 1168, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1750,
      "rut": "22735235-3",
      "studentName": "CARRASCO NEIRA CONSTANZA ISIDORA",
      "birthDate": "04-06-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa CARRASCO NEIRA",
      "guardianRut": "16.891.357-5",
      "guardianPhone": "+56 9 6663 0015",
      "guardianEmail": "rosa.carrasco@email.com",
      "guardianAddress": "Pasaje Los Leones 513, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1751,
      "rut": "22732592-5",
      "studentName": "FERNNDEZ MUOZ EMILIO RAFAEL",
      "birthDate": "31-05-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis FERNNDEZ MUOZ",
      "guardianRut": "19.545.476-0",
      "guardianPhone": "+56 9 9575 1452",
      "guardianEmail": "luis.fernndez@email.com",
      "guardianAddress": "Calle Magallanes 1730, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1752,
      "rut": "22716886-2",
      "studentName": "GOTTA VELSQUEZ ANTONELA ROCO",
      "birthDate": "10-05-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia GOTTA VELSQUEZ",
      "guardianRut": "17.086.255-4",
      "guardianPhone": "+56 9 7139 8495",
      "guardianEmail": "patricia.gotta@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1205, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1753,
      "rut": "22957763-8",
      "studentName": "HERNANDEZ ANDRADE VALENTINA PAZ",
      "birthDate": "28-02-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María HERNANDEZ ANDRADE",
      "guardianRut": "19.277.315-6",
      "guardianPhone": "+56 9 8136 6460",
      "guardianEmail": "maria.hernandez@email.com",
      "guardianAddress": "Calle Bories 1719, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1754,
      "rut": "22814917-9",
      "studentName": "MARTINEZ PASTENE ANGELA MAKARENA",
      "birthDate": "08-09-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica MARTINEZ PASTENE",
      "guardianRut": "20.979.038-6",
      "guardianPhone": "+56 9 5770 8186",
      "guardianEmail": "monica.martinez@email.com",
      "guardianAddress": "Av. Colón 1831, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1755,
      "rut": "22800230-5",
      "studentName": "MORASALDIVIABASTIN ALONSO",
      "birthDate": "25-08-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel MORASALDIVIABASTIN ALONSO",
      "guardianRut": "18.877.800-3",
      "guardianPhone": "+56 9 9729 4540",
      "guardianEmail": "miguel.morasaldiviabastin@email.com",
      "guardianAddress": "Av. Manuel Bulnes 359, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1756,
      "rut": "22980609-2",
      "studentName": "MORALES GOMEZ ANAHI VICTORIA",
      "birthDate": "25-03-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana MORALES GOMEZ",
      "guardianRut": "18.823.846-7",
      "guardianPhone": "+56 9 7497 6829",
      "guardianEmail": "ana.morales@email.com",
      "guardianAddress": "Av. España 1138, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1757,
      "rut": "22908737-1",
      "studentName": "OJEDA OYARZO ANTONIA ANDREA",
      "birthDate": "29-12-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia OJEDA OYARZO",
      "guardianRut": "20.337.196-9",
      "guardianPhone": "+56 9 8501 4121",
      "guardianEmail": "patricia.ojeda@email.com",
      "guardianAddress": "Av. Colón 282, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1758,
      "rut": "22903343-3",
      "studentName": "PAINEANCO SOTO MAXIMO JAVIER",
      "birthDate": "19-12-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo PAINEANCO SOTO",
      "guardianRut": "18.445.162-K",
      "guardianPhone": "+56 9 9241 4878",
      "guardianEmail": "eduardo.paineanco@email.com",
      "guardianAddress": "Av. España 669, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1759,
      "rut": "22983335-9",
      "studentName": "QUIEL ANDRADE VALENTINA FRANCISCA",
      "birthDate": "28-03-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana QUIEL ANDRADE",
      "guardianRut": "18.647.881-9",
      "guardianPhone": "+56 9 5437 8793",
      "guardianEmail": "ana.quiel@email.com",
      "guardianAddress": "Pasaje Los Leones 1974, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1760,
      "rut": "22748957-K",
      "studentName": "QUINTULLANCA SOTO CONSTANZA JAVIERA",
      "birthDate": "22-06-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen QUINTULLANCA SOTO",
      "guardianRut": "17.088.677-1",
      "guardianPhone": "+56 9 7618 2451",
      "guardianEmail": "carmen.quintullanca@email.com",
      "guardianAddress": "Calle Bories 1939, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1761,
      "rut": "23027401-0",
      "studentName": "RIADI MARNELL SIMONETTE PATRICIA",
      "birthDate": "27-05-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana RIADI MARNELL",
      "guardianRut": "18.332.870-0",
      "guardianPhone": "+56 9 8806 8716",
      "guardianEmail": "ana.riadi@email.com",
      "guardianAddress": "Av. España 1972, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1762,
      "rut": "22904970-4",
      "studentName": "SANDOVAL VIDAL CONSTANZA ELENA",
      "birthDate": "26-12-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana SANDOVAL VIDAL",
      "guardianRut": "19.788.271-9",
      "guardianPhone": "+56 9 5804 5255",
      "guardianEmail": "ana.sandoval@email.com",
      "guardianAddress": "Pasaje Los Leones 1113, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1763,
      "rut": "22771011-K",
      "studentName": "TIZNADO JIMNEZ SEBASTIN ANTONIO",
      "birthDate": "19-07-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés TIZNADO JIMNEZ",
      "guardianRut": "19.382.231-2",
      "guardianPhone": "+56 9 7715 5915",
      "guardianEmail": "andres.tiznado@email.com",
      "guardianAddress": "Calle Bories 1314, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1764,
      "rut": "22761954-6",
      "studentName": "TOBAR CASTILLO IAN ALONSO",
      "birthDate": "04-07-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo TOBAR CASTILLO",
      "guardianRut": "17.610.773-1",
      "guardianPhone": "+56 9 8878 9843",
      "guardianEmail": "eduardo.tobar@email.com",
      "guardianAddress": "Calle Magallanes 1493, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1765,
      "rut": "23012174-5",
      "studentName": "TRONCOSO ALVAREZ ANASTASIA JAZMIN DANAE",
      "birthDate": "04-05-2009",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena TRONCOSO ALVAREZ",
      "guardianRut": "18.456.736-9",
      "guardianPhone": "+56 9 3563 4587",
      "guardianEmail": "elena.troncoso@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2076, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1766,
      "rut": "22850171-9",
      "studentName": "VALDS GALDAMES FLORENCIA MARTINA",
      "birthDate": "20-10-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia VALDS GALDAMES",
      "guardianRut": "21.460.652-6",
      "guardianPhone": "+56 9 4497 4626",
      "guardianEmail": "patricia.valds@email.com",
      "guardianAddress": "Pasaje Los Leones 1275, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1767,
      "rut": "22929881-K",
      "studentName": "VASQUEZ TAPIA VICENTE IGNACIO",
      "birthDate": "24-01-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto VASQUEZ TAPIA",
      "guardianRut": "20.097.233-3",
      "guardianPhone": "+56 9 9306 9911",
      "guardianEmail": "roberto.vasquez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 359, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1768,
      "rut": "22818099-8",
      "studentName": "VERA BARRIA NATALIA JOSEFA",
      "birthDate": "09-09-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica VERA BARRIA",
      "guardianRut": "17.881.665-9",
      "guardianPhone": "+56 9 8921 9311",
      "guardianEmail": "monica.vera@email.com",
      "guardianAddress": "Calle Bories 1979, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1769,
      "rut": "22974934-K",
      "studentName": "VILLARROEL LEMUS YABIN MARTN ALEJANDRO",
      "birthDate": "19-03-2009",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto VILLARROEL LEMUS",
      "guardianRut": "19.958.518-5",
      "guardianPhone": "+56 9 9996 4992",
      "guardianEmail": "roberto.villarroel@email.com",
      "guardianAddress": "Calle Magallanes 724, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1770,
      "rut": "22715456-K",
      "studentName": "BORQUEZ CONSTANZO FELIPE",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Patricia BORQUEZ CONSTANZO",
      "guardianRut": "21.010.014-8",
      "guardianPhone": "",
      "guardianEmail": "patricia.borquez@email.com",
      "guardianAddress": "Pasaje O'Higgins 971, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1771,
      "rut": "22833969-5",
      "studentName": "OLIVOS GUZMAN MARTINA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena OLIVOS GUZMAN",
      "guardianRut": "19.011.445-7",
      "guardianPhone": "",
      "guardianEmail": "elena.olivos@email.com",
      "guardianAddress": "Av. Colón 1605, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1772,
      "rut": "22771208-2",
      "studentName": "GUEICHA SOTO ANTONIA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Rosa GUEICHA SOTO",
      "guardianRut": "20.950.260-7",
      "guardianPhone": "",
      "guardianEmail": "rosa.gueicha@email.com",
      "guardianAddress": "Pasaje O'Higgins 1710, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1773,
      "rut": "22655709-1",
      "studentName": "PEREZ AVENDAO SEBASTIAN",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Patricia PEREZ AVENDAO",
      "guardianRut": "19.443.550-9",
      "guardianPhone": "",
      "guardianEmail": "patricia.perez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 738, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1774,
      "rut": "22813981-5",
      "studentName": "YAEZ CARCAMO CATALINA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena YAEZ CARCAMO",
      "guardianRut": "18.667.083-3",
      "guardianPhone": "",
      "guardianEmail": "elena.yaez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 374, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1775,
      "rut": "22419640-7",
      "studentName": "AGULLO RIVERA JOAQUN ANTONIO",
      "birthDate": "13-06-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco AGULLO RIVERA",
      "guardianRut": "17.737.945-K",
      "guardianPhone": "+56 9 9160 9399",
      "guardianEmail": "francisco.agullo@email.com",
      "guardianAddress": "Calle Bories 1142, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1776,
      "rut": "22444549-0",
      "studentName": "LVAREZ GONZLEZ FERNANDO GABRIEL",
      "birthDate": "12-07-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos LVAREZ GONZLEZ",
      "guardianRut": "19.711.214-K",
      "guardianPhone": "+56 9 7618 7070",
      "guardianEmail": "carlos.lvarez@email.com",
      "guardianAddress": "Calle Bories 160, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1777,
      "rut": "22614706-3",
      "studentName": "ANDRADE ANDRADE CYNTHIA ANAH",
      "birthDate": "18-01-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa ANDRADE ANDRADE",
      "guardianRut": "21.087.754-1",
      "guardianPhone": "+56 9 8591 3014",
      "guardianEmail": "rosa.andrade@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1563, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1778,
      "rut": "22709817-1",
      "studentName": "ARISMENDI ALDERETE FRANCISCA BELN",
      "birthDate": "30-04-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana ARISMENDI ALDERETE",
      "guardianRut": "17.597.866-6",
      "guardianPhone": "+56 9 9679 2462",
      "guardianEmail": "ana.arismendi@email.com",
      "guardianAddress": "Pasaje Los Leones 2022, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1779,
      "rut": "22560703-6",
      "studentName": "CHEUQUEPN SALDIVIA BELN MERCEDES DEL PILAR",
      "birthDate": "20-11-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia CHEUQUEPN SALDIVIA",
      "guardianRut": "21.219.749-1",
      "guardianPhone": "+56 9 6855 3111",
      "guardianEmail": "patricia.cheuquepn@email.com",
      "guardianAddress": "Av. Manuel Bulnes 774, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1780,
      "rut": "22656039-4",
      "studentName": "CUADRA CRDENAS JOSEFA TRINIDAD",
      "birthDate": "01-03-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana CUADRA CRDENAS",
      "guardianRut": "20.504.852-9",
      "guardianPhone": "+56 9 6734 6979",
      "guardianEmail": "ana.cuadra@email.com",
      "guardianAddress": "Pasaje Los Leones 1703, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1781,
      "rut": "22523368-3",
      "studentName": "DAZ BARRIENTOS MATHAS JOEL",
      "birthDate": "04-10-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos DAZ BARRIENTOS",
      "guardianRut": "18.635.483-4",
      "guardianPhone": "+56 9 7249 3603",
      "guardianEmail": "carlos.daz@email.com",
      "guardianAddress": "Av. Colón 464, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1782,
      "rut": "22541528-5",
      "studentName": "ESPINOZA RUIZ ROCO ANTONIA",
      "birthDate": "02-11-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca ESPINOZA RUIZ",
      "guardianRut": "16.701.052-0",
      "guardianPhone": "+56 9 6609 5774",
      "guardianEmail": "francisca.espinoza@email.com",
      "guardianAddress": "Calle Magallanes 728, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1783,
      "rut": "22496984-8",
      "studentName": "FUENTES CRDENAS MATAS SERGIO",
      "birthDate": "06-09-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos FUENTES CRDENAS",
      "guardianRut": "17.725.463-0",
      "guardianPhone": "+56 9 9238 9205",
      "guardianEmail": "carlos.fuentes@email.com",
      "guardianAddress": "Calle Magallanes 921, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1784,
      "rut": "22436038-K",
      "studentName": "GALLARDO SOTOMAYOR NICOLS SEBASTIN",
      "birthDate": "06-07-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GALLARDO SOTOMAYOR",
      "guardianRut": "20.201.732-0",
      "guardianPhone": "+56 9 8817 3623",
      "guardianEmail": "eduardo.gallardo@email.com",
      "guardianAddress": "Av. España 698, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1785,
      "rut": "22752405-7",
      "studentName": "GALLEGOS LEGAZA GABRIEL DAMIN",
      "birthDate": "19-06-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco GALLEGOS LEGAZA",
      "guardianRut": "18.006.848-1",
      "guardianPhone": "+56 9 6162 3255",
      "guardianEmail": "francisco.gallegos@email.com",
      "guardianAddress": "Calle Bories 2046, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1786,
      "rut": "22572357-5",
      "studentName": "GMEZ SOTO MATAS BENJAMN",
      "birthDate": "05-12-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GMEZ SOTO",
      "guardianRut": "18.597.064-7",
      "guardianPhone": "+56 9 6185 9723",
      "guardianEmail": "eduardo.gmez@email.com",
      "guardianAddress": "Calle Magallanes 221, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1787,
      "rut": "22715123-4",
      "studentName": "GUERRERO GONZLEZ MARA PA",
      "birthDate": "08-05-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María GUERRERO GONZLEZ",
      "guardianRut": "17.344.444-3",
      "guardianPhone": "+56 9 9444 8395",
      "guardianEmail": "maria.guerrero@email.com",
      "guardianAddress": "Av. Colón 302, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1788,
      "rut": "22421973-3",
      "studentName": "LABB ROJAS ADN LARIC",
      "birthDate": "16-06-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos LABB ROJAS",
      "guardianRut": "21.232.373-K",
      "guardianPhone": "+56 9 8668 0962",
      "guardianEmail": "carlos.labb@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1469, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1789,
      "rut": "22543024-1",
      "studentName": "LUCERO VILA SOFA BELEN",
      "birthDate": "06-11-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana LUCERO VILA",
      "guardianRut": "16.631.640-5",
      "guardianPhone": "",
      "guardianEmail": "ana.lucero@email.com",
      "guardianAddress": "Av. Colón 949, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 379500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1790,
      "rut": "22415338-4",
      "studentName": "MAYORGA NAVARRO JAZMN ETHEL",
      "birthDate": "05-06-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen MAYORGA NAVARRO",
      "guardianRut": "17.868.666-6",
      "guardianPhone": "+56 9 7913 9750",
      "guardianEmail": "carmen.mayorga@email.com",
      "guardianAddress": "Av. Colón 1914, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1791,
      "rut": "22614932-5",
      "studentName": "MIRANDA SOTO ABDIEL ABRAHAM",
      "birthDate": "17-01-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés MIRANDA SOTO",
      "guardianRut": "20.856.665-2",
      "guardianPhone": "+56 9 6808 9855",
      "guardianEmail": "andres.miranda@email.com",
      "guardianAddress": "Calle Magallanes 1884, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1792,
      "rut": "22573629-4",
      "studentName": "MONTIEL ILNAO ALICIA ROCO",
      "birthDate": "11-12-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MONTIEL ILNAO",
      "guardianRut": "18.235.411-2",
      "guardianPhone": "+56 9 9666 8669",
      "guardianEmail": "rosa.montiel@email.com",
      "guardianAddress": "Pasaje Los Leones 377, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1793,
      "rut": "22595963-3",
      "studentName": "MORENO ZIGA MATAS IGNACIO",
      "birthDate": "03-01-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo MORENO ZIGA",
      "guardianRut": "20.783.713-K",
      "guardianPhone": "+56 9 5974 5896",
      "guardianEmail": "eduardo.moreno@email.com",
      "guardianAddress": "Pasaje Los Leones 1873, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1794,
      "rut": "22634664-3",
      "studentName": "MOYA CARTES MARIN ANTONIA DEL CARMEN",
      "birthDate": "04-02-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana MOYA CARTES",
      "guardianRut": "16.789.180-2",
      "guardianPhone": "+56 9 9938 1716",
      "guardianEmail": "ana.moya@email.com",
      "guardianAddress": "Calle Magallanes 656, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1795,
      "rut": "22544875-2",
      "studentName": "NAVARRO GONZLEZ RODRIGO NICOLS",
      "birthDate": "07-11-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos NAVARRO GONZLEZ",
      "guardianRut": "19.539.645-0",
      "guardianPhone": "+56 9 9934 1575",
      "guardianEmail": "carlos.navarro@email.com",
      "guardianAddress": "Calle Bories 1547, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1796,
      "rut": "22467931-9",
      "studentName": "OJEDA CATIPILLAN ANTONIA FRANCISCA",
      "birthDate": "04-08-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa OJEDA CATIPILLAN",
      "guardianRut": "17.060.530-6",
      "guardianPhone": "",
      "guardianEmail": "rosa.ojeda@email.com",
      "guardianAddress": "Av. Manuel Bulnes 505, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 253000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1797,
      "rut": "22649625-4",
      "studentName": "OLIVARES OJEDA ALISON FRANCISCA",
      "birthDate": "23-02-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen OLIVARES OJEDA",
      "guardianRut": "17.168.574-5",
      "guardianPhone": "+56 9 6175 4045",
      "guardianEmail": "carmen.olivares@email.com",
      "guardianAddress": "Calle Magallanes 344, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1798,
      "rut": "22654469-0",
      "studentName": "OYARZN PACHECO FRANCISCA BELN",
      "birthDate": "28-02-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa OYARZN PACHECO",
      "guardianRut": "17.556.877-8",
      "guardianPhone": "+56 9 5341 6866",
      "guardianEmail": "rosa.oyarzn@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1926, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1799,
      "rut": "28553215-9",
      "studentName": "RAMOS JENIFER MILAGROS",
      "birthDate": "20-02-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca RAMOS JENIFER",
      "guardianRut": "23.677.351-5",
      "guardianPhone": "+56 9 4718 4862",
      "guardianEmail": "francisca.ramos@email.com",
      "guardianAddress": "Pasaje O'Higgins 1641, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1800,
      "rut": "22419924-4",
      "studentName": "ROJAS MANSILLA IGNACIO FABIN",
      "birthDate": "08-06-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis ROJAS MANSILLA",
      "guardianRut": "19.997.971-K",
      "guardianPhone": "+56 9 4219 6603",
      "guardianEmail": "luis.rojas@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1808, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1801,
      "rut": "22388466-0",
      "studentName": "SALAZAR TAPIA ANTONIA IGNACIA",
      "birthDate": "02-05-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María SALAZAR TAPIA",
      "guardianRut": "18.317.727-3",
      "guardianPhone": "+56 9 6895 6325",
      "guardianEmail": "maria.salazar@email.com",
      "guardianAddress": "Av. Colón 1199, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1802,
      "rut": "22471209-K",
      "studentName": "SALDIVIA RIQUELME ANTONELLA PAULLETTE",
      "birthDate": "05-08-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca SALDIVIA RIQUELME",
      "guardianRut": "18.556.697-8",
      "guardianPhone": "+56 9 6895 6325",
      "guardianEmail": "francisca.saldivia@email.com",
      "guardianAddress": "Pasaje Los Leones 325, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1803,
      "rut": "22580780-9",
      "studentName": "SERPA HORNIG TABATHA BELN",
      "birthDate": "19-12-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana SERPA HORNIG",
      "guardianRut": "20.199.714-3",
      "guardianPhone": "+56 9 8178 0426",
      "guardianEmail": "ana.serpa@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1002, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1804,
      "rut": "22674-784-2",
      "studentName": "VALENZUELA SALAZAR VICENTE JOAQUN OCTAVIO",
      "birthDate": "20-03-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis VALENZUELA SALAZAR",
      "guardianRut": "-5.521.232-NaN",
      "guardianPhone": "+56 9 8920 6380",
      "guardianEmail": "luis.valenzuela@email.com",
      "guardianAddress": "Pasaje O'Higgins 345, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1805,
      "rut": "22523915-0",
      "studentName": "AGUILA PREZ BENJAMN ALONSO",
      "birthDate": "05-10-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel AGUILA PREZ",
      "guardianRut": "18.037.779-4",
      "guardianPhone": "+56 9 3356 9115",
      "guardianEmail": "miguel.aguila@email.com",
      "guardianAddress": "Av. Colón 358, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1806,
      "rut": "22474312-2",
      "studentName": "AMPUERO OATE DANA BELN",
      "birthDate": "18-08-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica AMPUERO OATE",
      "guardianRut": "18.650.370-8",
      "guardianPhone": "+56 9 9640 0101",
      "guardianEmail": "monica.ampuero@email.com",
      "guardianAddress": "Calle Magallanes 1961, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1807,
      "rut": "22596644-3",
      "studentName": "ANTIQUERA DAZ SOFA TRINIDAD",
      "birthDate": "02-01-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María ANTIQUERA DAZ",
      "guardianRut": "18.991.189-0",
      "guardianPhone": "+56 9 7676 9926",
      "guardianEmail": "maria.antiquera@email.com",
      "guardianAddress": "Calle Bories 626, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1808,
      "rut": "22473332-1",
      "studentName": "ARZOLA TRUJILLO PRISCILA JAEL",
      "birthDate": "08-08-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena ARZOLA TRUJILLO",
      "guardianRut": "20.791.655-2",
      "guardianPhone": "+56 9 3191 1597",
      "guardianEmail": "elena.arzola@email.com",
      "guardianAddress": "Pasaje O'Higgins 785, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1809,
      "rut": "22670851-0",
      "studentName": "BARRIENTOS AGUILAR BENJAMN PATRICIO",
      "birthDate": "17-03-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel BARRIENTOS AGUILAR",
      "guardianRut": "16.672.603-4",
      "guardianPhone": "+56 9 7456 1015",
      "guardianEmail": "miguel.barrientos@email.com",
      "guardianAddress": "Pasaje Los Leones 796, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1810,
      "rut": "22569878-3",
      "studentName": "CRDENAS LLANOS MATAS BENJAMN",
      "birthDate": "05-12-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis CRDENAS LLANOS",
      "guardianRut": "16.624.533-8",
      "guardianPhone": "+56 9 6785 3491",
      "guardianEmail": "luis.crdenas@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1786, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1811,
      "rut": "22476818-4",
      "studentName": "CHVEZ ANDRADE ANASOL BELN",
      "birthDate": "17-08-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia CHVEZ ANDRADE",
      "guardianRut": "17.008.284-2",
      "guardianPhone": "+56 9 5881 5153",
      "guardianEmail": "patricia.chvez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 257, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1812,
      "rut": "22718856-1",
      "studentName": "CHIPLE BURGOS KATHERINE SARAY",
      "birthDate": "14-06-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica CHIPLE BURGOS",
      "guardianRut": "20.909.179-8",
      "guardianPhone": "+56 9 5401 2236",
      "guardianEmail": "monica.chiple@email.com",
      "guardianAddress": "Av. España 1320, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1813,
      "rut": "22401017-6",
      "studentName": "CONTRERAS DELGADO MILLARAY ELUNEY",
      "birthDate": "19-05-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena CONTRERAS DELGADO",
      "guardianRut": "17.434.435-3",
      "guardianPhone": "+56 9 8595 8847",
      "guardianEmail": "elena.contreras@email.com",
      "guardianAddress": "Pasaje O'Higgins 1317, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1814,
      "rut": "22675306-0",
      "studentName": "DAZ SOTO TOMS IGNACIO",
      "birthDate": "21/032008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos DAZ SOTO",
      "guardianRut": "21.013.875-7",
      "guardianPhone": "+56 9 5877 6126",
      "guardianEmail": "carlos.daz@email.com",
      "guardianAddress": "Pasaje O'Higgins 973, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1815,
      "rut": "22618379-5",
      "studentName": "GIGLIO GONZLEZ ANTONELLA PAZ",
      "birthDate": "18-01-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica GIGLIO GONZLEZ",
      "guardianRut": "19.242.195-0",
      "guardianPhone": "+56 9 7400 3701",
      "guardianEmail": "monica.giglio@email.com",
      "guardianAddress": "Av. Manuel Bulnes 801, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1816,
      "rut": "22588900-7",
      "studentName": "GONZLEZ PREZ VALENTINA LISSETE",
      "birthDate": "26-12-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa GONZLEZ PREZ",
      "guardianRut": "17.117.070-2",
      "guardianPhone": "+56 9 9466 3403",
      "guardianEmail": "rosa.gonzlez@email.com",
      "guardianAddress": "Av. España 469, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1817,
      "rut": "22516890-3",
      "studentName": "IMARAI MILLALONCO JAVIERA FERNANDA",
      "birthDate": "02-10-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia IMARAI MILLALONCO",
      "guardianRut": "19.506.275-7",
      "guardianPhone": "+56 9 4121 3931",
      "guardianEmail": "patricia.imarai@email.com",
      "guardianAddress": "Calle Bories 177, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1818,
      "rut": "22719286-0",
      "studentName": "LEAL ORTIZ ANTONIA IGNACIA",
      "birthDate": "13-05-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana LEAL ORTIZ",
      "guardianRut": "19.244.814-K",
      "guardianPhone": "+56 9 8882 8731",
      "guardianEmail": "ana.leal@email.com",
      "guardianAddress": "Av. Colón 1220, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1819,
      "rut": "22680422-6",
      "studentName": "LEVIO ARAVENA VICENTE JESS IGNACIO",
      "birthDate": "28-03-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel LEVIO ARAVENA",
      "guardianRut": "17.996.533-K",
      "guardianPhone": "+56 9 7774 3476",
      "guardianEmail": "miguel.levio@email.com",
      "guardianAddress": "Calle Magallanes 1542, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1820,
      "rut": "22618871-1",
      "studentName": "LOYOLA OLIVA CAMILI BELN",
      "birthDate": "21-01-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena LOYOLA OLIVA",
      "guardianRut": "20.294.680-1",
      "guardianPhone": "+56 9 7356 0545",
      "guardianEmail": "elena.loyola@email.com",
      "guardianAddress": "Pasaje Los Leones 1322, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1821,
      "rut": "22536494-K",
      "studentName": "MANCILLA CUEVAS NICOLS DANIEL",
      "birthDate": "26-10-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan MANCILLA CUEVAS",
      "guardianRut": "21.389.081-6",
      "guardianPhone": "+56 9 9359 4302",
      "guardianEmail": "juan.mancilla@email.com",
      "guardianAddress": "Pasaje O'Higgins 120, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1822,
      "rut": "26130504-6",
      "studentName": "MARTNEZ RUBIO DANIELA SANYELITH",
      "birthDate": "05-08-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María MARTNEZ RUBIO",
      "guardianRut": "22.320.826-6",
      "guardianPhone": "+56 9 4860 1312",
      "guardianEmail": "maria.martnez@email.com",
      "guardianAddress": "Pasaje O'Higgins 879, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1823,
      "rut": "22475227-K",
      "studentName": "MONSALVE GONZLEZ NICOLS FERNANDO",
      "birthDate": "15-08-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel MONSALVE GONZLEZ",
      "guardianRut": "19.195.557-9",
      "guardianPhone": "+56 9 5951 7668",
      "guardianEmail": "miguel.monsalve@email.com",
      "guardianAddress": "Av. Colón 314, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1824,
      "rut": "22729761-1",
      "studentName": "NUEZ AGUILAR MACARENA ARACELI",
      "birthDate": "20-05-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana NUEZ AGUILAR",
      "guardianRut": "18.984.770-K",
      "guardianPhone": "+56 9 3378 3205",
      "guardianEmail": "ana.nuez@email.com",
      "guardianAddress": "Calle Magallanes 1630, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1825,
      "rut": "22462982-6",
      "studentName": "ORELLANA ALARCN CATALINA ISABEL SOFA",
      "birthDate": "30-07-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa ORELLANA ALARCN",
      "guardianRut": "20.436.417-6",
      "guardianPhone": " ",
      "guardianEmail": "rosa.orellana@email.com",
      "guardianAddress": "Pasaje Los Leones 184, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": 126500,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1826,
      "rut": "22559600-K",
      "studentName": "RAMREZ VOISIER SADOC ANDRS",
      "birthDate": "27-11-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos RAMREZ VOISIER",
      "guardianRut": "18.089.766-6",
      "guardianPhone": "+56 9 6121 3595",
      "guardianEmail": "carlos.ramrez@email.com",
      "guardianAddress": "Pasaje O'Higgins 1768, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1827,
      "rut": "22632038-5",
      "studentName": "RIQUELME SOTO MATEO ENRIQUE IGNACIO",
      "birthDate": "30-01-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto RIQUELME SOTO",
      "guardianRut": "20.215.192-2",
      "guardianPhone": "+56 9 9520 4940",
      "guardianEmail": "roberto.riquelme@email.com",
      "guardianAddress": "Pasaje Los Leones 1131, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1828,
      "rut": "22570115-6",
      "studentName": "RIVERA VERA IGNACIO ANDRS",
      "birthDate": "07-12-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis RIVERA VERA",
      "guardianRut": "17.712.801-5",
      "guardianPhone": "+56 9 5045 7988",
      "guardianEmail": "luis.rivera@email.com",
      "guardianAddress": "Av. España 618, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1829,
      "rut": "22406627-9",
      "studentName": "ROJO VALDERRAMA DANIELA MAGDALENA",
      "birthDate": "26-05-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana ROJO VALDERRAMA",
      "guardianRut": "21.100.471-1",
      "guardianPhone": "+56 9 9949 0528",
      "guardianEmail": "ana.rojo@email.com",
      "guardianAddress": "Av. Colón 688, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1830,
      "rut": "22453054-4",
      "studentName": "SALDIVIA MELLADO SAID NICOLS ALEXANDRE",
      "birthDate": "23-07-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto SALDIVIA MELLADO",
      "guardianRut": "20.469.253-K",
      "guardianPhone": "+56 9 8169 0698",
      "guardianEmail": "roberto.saldivia@email.com",
      "guardianAddress": "Av. España 713, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1831,
      "rut": "22515048-6",
      "studentName": "SNCHEZ REYES CONSTANZA BELN CRISTINA",
      "birthDate": "26-09-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa SNCHEZ REYES",
      "guardianRut": "19.215.464-2",
      "guardianPhone": "+56 9 4805 9148",
      "guardianEmail": "rosa.snchez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1351, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1832,
      "rut": "22388711-2",
      "studentName": "VELSQUEZ PAZ MIA BELN",
      "birthDate": "01-05-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica VELSQUEZ PAZ",
      "guardianRut": "17.369.308-7",
      "guardianPhone": "+56 9 9573 2613",
      "guardianEmail": "monica.velsquez@email.com",
      "guardianAddress": "Calle Bories 992, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1833,
      "rut": "22274045-2",
      "studentName": "CASTRO CALCUTTA ANTONELLA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisca CASTRO CALCUTTA",
      "guardianRut": "19.586.544-2",
      "guardianPhone": "",
      "guardianEmail": "francisca.castro@email.com",
      "guardianAddress": "Pasaje Los Leones 2025, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 506000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1834,
      "rut": "22507574-3",
      "studentName": "LVAREZ ANDRADE BENJAMN ALONSO",
      "birthDate": "22-09-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco LVAREZ ANDRADE",
      "guardianRut": "17.568.336-4",
      "guardianPhone": "+56 9 9267 1205",
      "guardianEmail": "francisco.lvarez@email.com",
      "guardianAddress": "Calle Bories 1680, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1835,
      "rut": "22468841-5",
      "studentName": "BARRIA NUEZ MARTINA IGNACIA",
      "birthDate": "03-08-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana BARRIA NUEZ",
      "guardianRut": "21.103.020-8",
      "guardianPhone": "+56 9 6375 1865",
      "guardianEmail": "ana.barria@email.com",
      "guardianAddress": "Calle Magallanes 603, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1836,
      "rut": "22607485-6",
      "studentName": "CRDENAS MUOZ CATALINA BELN",
      "birthDate": "07-01-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María CRDENAS MUOZ",
      "guardianRut": "20.477.692-K",
      "guardianPhone": "+56 9 8801 5751",
      "guardianEmail": "maria.crdenas@email.com",
      "guardianAddress": "Av. Colón 1120, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1837,
      "rut": "22544975-9",
      "studentName": "CASTRO MORALES NICOLS DANILO",
      "birthDate": "09-11-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis CASTRO MORALES",
      "guardianRut": "16.973.801-7",
      "guardianPhone": "+56 9 6879 2556",
      "guardianEmail": "luis.castro@email.com",
      "guardianAddress": "Pasaje Los Leones 1183, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1838,
      "rut": "22535695-5",
      "studentName": "CHIRINO VALDIVIA MARTINA ANTONELLA",
      "birthDate": "25-10-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica CHIRINO VALDIVIA",
      "guardianRut": "20.789.094-4",
      "guardianPhone": "+56 9 6814 1443",
      "guardianEmail": "monica.chirino@email.com",
      "guardianAddress": "Av. Manuel Bulnes 616, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1839,
      "rut": "22676752-5",
      "studentName": "DELGADO SALAS MAXIMILIANO BENJAMN",
      "birthDate": "24-03-2008",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis DELGADO SALAS",
      "guardianRut": "20.820.737-7",
      "guardianPhone": "+56 9 8129 8665",
      "guardianEmail": "luis.delgado@email.com",
      "guardianAddress": "Calle Bories 2013, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1840,
      "rut": "26193530-9",
      "studentName": "ESCOBAR VALLECILLA JUAN PABLO",
      "birthDate": "03-02-2006",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés ESCOBAR VALLECILLA",
      "guardianRut": "21.137.245-1",
      "guardianPhone": "+56 9 1777 6121",
      "guardianEmail": "andres.escobar@email.com",
      "guardianAddress": "Calle Bories 854, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1841,
      "rut": "22257940-6",
      "studentName": "FERNNDEZ NANCUANTE MONTSERRAT AYELEN",
      "birthDate": "09-11-2006",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana FERNNDEZ NANCUANTE",
      "guardianRut": "20.433.246-0",
      "guardianPhone": "+56 9 5032 9704",
      "guardianEmail": "ana.fernndez@email.com",
      "guardianAddress": "Av. Colón 256, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1842,
      "rut": "22487994-6",
      "studentName": "GALLARDO MONTIEL CRISTOPHER MATAS",
      "birthDate": "29-08-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel GALLARDO MONTIEL",
      "guardianRut": "21.167.265-K",
      "guardianPhone": "+56 9 7654 3977",
      "guardianEmail": "miguel.gallardo@email.com",
      "guardianAddress": "Calle Bories 1277, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1843,
      "rut": "22512990-8",
      "studentName": "GANGAS JMENEZ AGUSTIN FERNANDO",
      "birthDate": "29-09-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GANGAS JMENEZ",
      "guardianRut": "20.236.468-3",
      "guardianPhone": "+56 9 3576 5568",
      "guardianEmail": "eduardo.gangas@email.com",
      "guardianAddress": "Pasaje O'Higgins 2046, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1844,
      "rut": "22587659-2",
      "studentName": "GATICA SILVA BENJAMIN JAVIER",
      "birthDate": "12-12-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés GATICA SILVA",
      "guardianRut": "19.039.637-1",
      "guardianPhone": "+56 9 5950 1547",
      "guardianEmail": "andres.gatica@email.com",
      "guardianAddress": "Calle Magallanes 445, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1845,
      "rut": "22399417-2",
      "studentName": "ITURRIAGA NAVARRO CRISTINA VICTORIA PAZ",
      "birthDate": "17-05-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María ITURRIAGA NAVARRO",
      "guardianRut": "20.214.634-1",
      "guardianPhone": "+56 9 3227 1806",
      "guardianEmail": "maria.iturriaga@email.com",
      "guardianAddress": "Calle Bories 1789, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1846,
      "rut": "22461347-4",
      "studentName": "JAKSIC JOSSEAU DAFNE MILENA",
      "birthDate": "28-07-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica JAKSIC JOSSEAU",
      "guardianRut": "18.739.069-9",
      "guardianPhone": "+56 9 6587 8249",
      "guardianEmail": "monica.jaksic@email.com",
      "guardianAddress": "Av. Colón 1678, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1847,
      "rut": "22647440-4",
      "studentName": "MARI MILLAPINDA BELN ANDREA",
      "birthDate": "18-02-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen MARI MILLAPINDA",
      "guardianRut": "17.958.088-8",
      "guardianPhone": "+56 9 4717 6168",
      "guardianEmail": "carmen.mari@email.com",
      "guardianAddress": "Calle Magallanes 1236, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1848,
      "rut": "22447281-1",
      "studentName": "MILLAN LOPEZ CAMILA MARTINA",
      "birthDate": "18-07-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica MILLAN LOPEZ",
      "guardianRut": "20.487.951-6",
      "guardianPhone": "+56 9 3700 5790",
      "guardianEmail": "monica.millan@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1206, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1849,
      "rut": "22459033-4",
      "studentName": "MIRANDA VSQUEZ BENJAMN NICOLS",
      "birthDate": "16-07-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés MIRANDA VSQUEZ",
      "guardianRut": "20.477.967-8",
      "guardianPhone": "+56 9 8125 6295",
      "guardianEmail": "andres.miranda@email.com",
      "guardianAddress": "Calle Magallanes 716, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1850,
      "rut": "22492060-1",
      "studentName": "MONTAA PREZ EMILIO ALEJANDRO",
      "birthDate": "04-09-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan MONTAA PREZ",
      "guardianRut": "17.866.171-K",
      "guardianPhone": "+56 9 9592 7957",
      "guardianEmail": "juan.montaa@email.com",
      "guardianAddress": "Av. España 1205, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1851,
      "rut": "22637778-6",
      "studentName": "NAGUELQUIN MERCADO GABRIELA TRINIDAD",
      "birthDate": "09-02-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena NAGUELQUIN MERCADO",
      "guardianRut": "19.946.730-1",
      "guardianPhone": "+56 9 8915 3183",
      "guardianEmail": "elena.naguelquin@email.com",
      "guardianAddress": "Calle Magallanes 1542, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1852,
      "rut": "22479357-K",
      "studentName": "NAVARRO PEDRERO YASMIN MONSERRAT",
      "birthDate": "15-08-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica NAVARRO PEDRERO",
      "guardianRut": "21.110.199-7",
      "guardianPhone": "+56 9 3213 1618",
      "guardianEmail": "monica.navarro@email.com",
      "guardianAddress": "Av. Manuel Bulnes 615, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1853,
      "rut": "22460425-4",
      "studentName": "OYARZO VALDEAVELLANO CATALINA FRANCISCA",
      "birthDate": "23-07-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica OYARZO VALDEAVELLANO",
      "guardianRut": "21.074.217-4",
      "guardianPhone": "+56 9 7469 8269",
      "guardianEmail": "monica.oyarzo@email.com",
      "guardianAddress": "Av. Colón 2066, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1854,
      "rut": "22433774-4",
      "studentName": "PAIRO GONZLEZ EMILIA ALEJANDRA",
      "birthDate": "27-06-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia PAIRO GONZLEZ",
      "guardianRut": "20.360.222-7",
      "guardianPhone": "+56 9 6624 8040",
      "guardianEmail": "patricia.pairo@email.com",
      "guardianAddress": "Pasaje O'Higgins 1543, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1855,
      "rut": "22473805-6",
      "studentName": "PAREDES SALDIVIA PA IGNACIA",
      "birthDate": "12-08-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen PAREDES SALDIVIA",
      "guardianRut": "18.611.431-0",
      "guardianPhone": "+56 9 9964 8607",
      "guardianEmail": "carmen.paredes@email.com",
      "guardianAddress": "Av. Colón 197, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1856,
      "rut": "22421718-8",
      "studentName": "PREZ CHVEZ CONSTANZA BELN",
      "birthDate": "08-06-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen PREZ CHVEZ",
      "guardianRut": "20.359.408-9",
      "guardianPhone": "+56 9 8749 4414",
      "guardianEmail": "carmen.prez@email.com",
      "guardianAddress": "Calle Magallanes 1929, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1857,
      "rut": "22425782-1",
      "studentName": "PINO VALDEBENITO NAYARET ELENA",
      "birthDate": "21-06-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena PINO VALDEBENITO",
      "guardianRut": "19.281.337-9",
      "guardianPhone": "+56 9 9093 9221",
      "guardianEmail": "elena.pino@email.com",
      "guardianAddress": "Calle Bories 1263, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1858,
      "rut": "22593184-4",
      "studentName": "CARCAMO DE ARMAS MARTINA BELEN",
      "birthDate": "30-12-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica CARCAMO DE",
      "guardianRut": "16.604.840-0",
      "guardianPhone": "+56 9 9693 0742",
      "guardianEmail": "monica.carcamo@email.com",
      "guardianAddress": "Calle Magallanes 1154, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1859,
      "rut": "22394362-4",
      "studentName": "TALMA OYARZN CONSTANZA JAVIERA",
      "birthDate": "14-05-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca TALMA OYARZN",
      "guardianRut": "17.336.076-2",
      "guardianPhone": "+56 9 4779 6472",
      "guardianEmail": "francisca.talma@email.com",
      "guardianAddress": "Av. España 1221, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1860,
      "rut": "22414534-9",
      "studentName": "TRIVIO OJEDA IGNACIO ALEJANDRO",
      "birthDate": "09-06-2007",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés TRIVIO OJEDA",
      "guardianRut": "18.382.463-5",
      "guardianPhone": "+56 9 9246 8033",
      "guardianEmail": "andres.trivio@email.com",
      "guardianAddress": "Pasaje O'Higgins 1145, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1861,
      "rut": "22672849-K",
      "studentName": "VARELA MANRQUEZ ALEXANDRA ANTONIA",
      "birthDate": "17-03-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia VARELA MANRQUEZ",
      "guardianRut": "18.030.571-8",
      "guardianPhone": "+56 9 6492 0072",
      "guardianEmail": "patricia.varela@email.com",
      "guardianAddress": "Av. España 939, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1862,
      "rut": "22647709-8",
      "studentName": "VARGAS CASTRO VALENTINA LORENA",
      "birthDate": "15-02-2008",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa VARGAS CASTRO",
      "guardianRut": "19.903.740-4",
      "guardianPhone": "+56 9 5798 9776",
      "guardianEmail": "rosa.vargas@email.com",
      "guardianAddress": "Pasaje Los Leones 644, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1863,
      "rut": "22495363-1",
      "studentName": "ZAMORA RODRGUEZ GABRIELA PAZ",
      "birthDate": "07-09-2007",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen ZAMORA RODRGUEZ",
      "guardianRut": "17.148.538-K",
      "guardianPhone": "+56 9 8389 4192",
      "guardianEmail": "carmen.zamora@email.com",
      "guardianAddress": "Av. Colón 1972, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1864,
      "rut": "22653906-9",
      "studentName": "RICHARD SAEZ SOPHIA",
      "birthDate": "2020-01-01",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Rosa RICHARD SAEZ",
      "guardianRut": "17.859.862-7",
      "guardianPhone": "",
      "guardianEmail": "rosa.richard@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1541, Punta Arenas",
      "grade": "Sin clasificar",
      "monthlyFee": 126500,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 126500,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 126500,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": 126500,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    }
  ],
  "Pre-Kinder": [
    {
      "id": 1023,
      "rut": "27490874-2",
      "studentName": "CABRERA REYES EMILIA AMANDA",
      "birthDate": "10-03-2021",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia CABRERA REYES",
      "guardianRut": "23.500.586-7",
      "guardianPhone": "+56 9 2179 2295",
      "guardianEmail": "patricia.cabrera@email.com",
      "guardianAddress": "Av. Colón 1137, Punta Arenas",
      "grade": "Pre-Kinder",
      "monthlyFee": 85000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 85000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 85000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": 85000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1032,
      "rut": "27459144-7",
      "studentName": "RAIN BARRA ANTONIA SOPHIA",
      "birthDate": "28-01-2021",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa RAIN BARRA",
      "guardianRut": "26.193.292-K",
      "guardianPhone": "+56 9 5193 5426",
      "guardianEmail": "rosa.rain@email.com",
      "guardianAddress": "Av. España 1826, Punta Arenas",
      "grade": "Pre-Kinder",
      "monthlyFee": 85000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 255000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 85000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1034,
      "rut": "27477603-K",
      "studentName": "SALAS NEIRA BRUNO FERNANDO",
      "birthDate": "21-02-2021",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco SALAS NEIRA",
      "guardianRut": "22.610.727-4",
      "guardianPhone": "+56 9 5413 8791",
      "guardianEmail": "francisco.salas@email.com",
      "guardianAddress": "Av. Colón 1647, Punta Arenas",
      "grade": "Pre-Kinder",
      "monthlyFee": 85000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 85000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 85000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": 85000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1038,
      "rut": "27476794-4",
      "studentName": "VENEGAS PARDO DIANA BELN",
      "birthDate": "16-02-2021",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica VENEGAS PARDO",
      "guardianRut": "21.731.194-2",
      "guardianPhone": "+56 9 7207 6648",
      "guardianEmail": "monica.venegas@email.com",
      "guardianAddress": "Pasaje Los Leones 1643, Punta Arenas",
      "grade": "Pre-Kinder",
      "monthlyFee": 85000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 340000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 85000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    }
  ],
  "1° Básico A": [
    {
      "id": 1040,
      "rut": "27097052-4",
      "studentName": "ALVARADO GMEZ AMELIA SOFA",
      "birthDate": "21-11-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena ALVARADO GMEZ",
      "guardianRut": "25.628.369-7",
      "guardianPhone": "+56 9 7179 4815",
      "guardianEmail": "elena.alvarado@email.com",
      "guardianAddress": "Av. Colón 573, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 440000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1041,
      "rut": "26845016-5",
      "studentName": "LVAREZ CABELLO MAXIMILIANO LEN",
      "birthDate": "26-05-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto LVAREZ CABELLO",
      "guardianRut": "22.064.869-9",
      "guardianPhone": "+56 9 6658 2486",
      "guardianEmail": "roberto.lvarez@email.com",
      "guardianAddress": "Calle Bories 1642, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1042,
      "rut": "27065282-4",
      "studentName": "ASTORGA ARAVENA JAVIER ALEJANDRO",
      "birthDate": "29-10-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel ASTORGA ARAVENA",
      "guardianRut": "24.341.728-7",
      "guardianPhone": "+56 9 6399 7288",
      "guardianEmail": "miguel.astorga@email.com",
      "guardianAddress": "Calle Bories 336, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 220000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1043,
      "rut": "27007219-4",
      "studentName": "BARJA PLANA ABIGAIL",
      "birthDate": "07-09-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena BARJA PLANA",
      "guardianRut": "25.854.971-6",
      "guardianPhone": "+56 9 6973 3998",
      "guardianEmail": "elena.barja@email.com",
      "guardianAddress": "Av. España 1802, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1044,
      "rut": "26797130-7",
      "studentName": "BARRA LEUQUN ELIAN ARMANDO",
      "birthDate": "17-04-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo BARRA LEUQUN",
      "guardianRut": "25.387.922-K",
      "guardianPhone": "+56 9 8444 4555",
      "guardianEmail": "eduardo.barra@email.com",
      "guardianAddress": "Av. Manuel Bulnes 597, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1045,
      "rut": "26940946-0",
      "studentName": "BARRA PUMARINO FIDEL",
      "birthDate": "26-07-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis BARRA PUMARINO",
      "guardianRut": "24.578.796-0",
      "guardianPhone": "+56 9 8444 4555",
      "guardianEmail": "luis.barra@email.com",
      "guardianAddress": "Pasaje O'Higgins 1689, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1046,
      "rut": "27061476-0",
      "studentName": "FLORES CANALES GABRIELA ALEJANDRA",
      "birthDate": "25-10-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena FLORES CANALES",
      "guardianRut": "24.791.501-K",
      "guardianPhone": "+56 9 9404 0891",
      "guardianEmail": "elena.flores@email.com",
      "guardianAddress": "Av. Manuel Bulnes 878, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 220000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1048,
      "rut": "26816354-9",
      "studentName": "GARRIDO URIBE GASPAR EMILIANO",
      "birthDate": "04-05-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés GARRIDO URIBE",
      "guardianRut": "23.584.272-6",
      "guardianPhone": "+56 9 8278 0957",
      "guardianEmail": "andres.garrido@email.com",
      "guardianAddress": "Av. España 1478, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 330000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1049,
      "rut": "26758183-5",
      "studentName": "GUTIRREZ AVENDAO ALONSO IVN",
      "birthDate": "21-03-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GUTIRREZ AVENDAO",
      "guardianRut": "21.679.614-4",
      "guardianPhone": "+56 9 6469 3047",
      "guardianEmail": "eduardo.gutirrez@email.com",
      "guardianAddress": "Av. Colón 985, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1050,
      "rut": "27145731-6",
      "studentName": "GUTIRREZ MUOZ JOAQUN EMILIANO",
      "birthDate": "30-12-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan GUTIRREZ MUOZ",
      "guardianRut": "25.001.883-5",
      "guardianPhone": "+56 9 5874 5295",
      "guardianEmail": "juan.gutirrez@email.com",
      "guardianAddress": "Av. Colón 725, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 220000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1051,
      "rut": "26868886-2",
      "studentName": "HERMOSILLA ASENCIO PASCUALA ALMENDRA",
      "birthDate": "07-06-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa HERMOSILLA ASENCIO",
      "guardianRut": "21.298.447-7",
      "guardianPhone": "+56 9 5222 5478",
      "guardianEmail": "rosa.hermosilla@email.com",
      "guardianAddress": "Calle Bories 538, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1053,
      "rut": "26919000-0",
      "studentName": "JIN FANG TANG TANG",
      "birthDate": "08-07-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena JIN FANG",
      "guardianRut": "25.746.529-2",
      "guardianPhone": "+56 9 7738 0460",
      "guardianEmail": "elena.jin@email.com",
      "guardianAddress": "Pasaje O'Higgins 2080, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1054,
      "rut": "26835359-3",
      "studentName": "KLEIN HAUSDORF MARTINA BELN",
      "birthDate": "17-05-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa KLEIN HAUSDORF",
      "guardianRut": "21.870.430-1",
      "guardianPhone": "+56 9 5000 4391",
      "guardianEmail": "rosa.klein@email.com",
      "guardianAddress": "Calle Bories 2073, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 330000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1055,
      "rut": "26952531-2",
      "studentName": "LORCA MORALES SANTIAGO ALONSO",
      "birthDate": "01-08-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo LORCA MORALES",
      "guardianRut": "23.667.358-8",
      "guardianPhone": "+56 9 3452 2554",
      "guardianEmail": "eduardo.lorca@email.com",
      "guardianAddress": "Av. España 1370, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-15",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1056,
      "rut": "26947897-7",
      "studentName": "NAVARRO SOTO LORENZO TOMS",
      "birthDate": "02-08-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto NAVARRO SOTO",
      "guardianRut": "25.337.222-2",
      "guardianPhone": "+56 9 4401 1468",
      "guardianEmail": "roberto.navarro@email.com",
      "guardianAddress": "Calle Bories 1990, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1057,
      "rut": "26830314-6",
      "studentName": "ORELLA ALARCN ZAMIRA ANTONIA AYLEN",
      "birthDate": "11-05-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María ORELLA ALARCN",
      "guardianRut": "20.971.851-0",
      "guardianPhone": "+56 9 8306 7732",
      "guardianEmail": "maria.orella@email.com",
      "guardianAddress": "Pasaje Los Leones 1734, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1060,
      "rut": "27088019-3",
      "studentName": "SOTO ANEL MARTIN JEREMIAS",
      "birthDate": "18-11-2019",
      "sex": "Masculino",
      "enrollmentDate": "29-05-2024",
      "guardianName": "Roberto SOTO ANEL",
      "guardianRut": "24.184.850-7",
      "guardianPhone": "+56 9 6284 7302",
      "guardianEmail": "roberto.soto@email.com",
      "guardianAddress": "Av. Colón 469, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1062,
      "rut": "26794905-0",
      "studentName": "VARGAS MARIN MARIANA",
      "birthDate": "14-04-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "María VARGAS MARIN",
      "guardianRut": "24.819.911-3",
      "guardianPhone": "+56 9 7005 3960",
      "guardianEmail": "maria.vargas@email.com",
      "guardianAddress": "Pasaje Los Leones 995, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1065,
      "rut": "26980021-6",
      "studentName": "ACEVEDO ALBA BENJAMIN ISRAEL",
      "birthDate": "26-08-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco ACEVEDO ALBA",
      "guardianRut": "25.280.376-9",
      "guardianPhone": "+56 9 7437 5961",
      "guardianEmail": "francisco.acevedo@email.com",
      "guardianAddress": "Calle Bories 980, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1067,
      "rut": "26906987-2",
      "studentName": "AYALA CATALN TRINIDAD BELN",
      "birthDate": "02-07-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica AYALA CATALN",
      "guardianRut": "23.903.289-3",
      "guardianPhone": "+56 9 7825 0340",
      "guardianEmail": "monica.ayala@email.com",
      "guardianAddress": "Av. España 1370, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1068,
      "rut": "26997695-0",
      "studentName": "BAHAMONDE REYES JULIN LEN",
      "birthDate": "29-08-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel BAHAMONDE REYES",
      "guardianRut": "23.811.064-5",
      "guardianPhone": "+56 9 9435 9766",
      "guardianEmail": "miguel.bahamonde@email.com",
      "guardianAddress": "Av. Manuel Bulnes 754, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1069,
      "rut": "26785033-K",
      "studentName": "CASTRO MANCILLA MAGDALENA PASCALE",
      "birthDate": "08-04-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia CASTRO MANCILLA",
      "guardianRut": "23.763.813-1",
      "guardianPhone": "+56 9 2229 6462",
      "guardianEmail": "patricia.castro@email.com",
      "guardianAddress": "Pasaje O'Higgins 1986, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1070,
      "rut": "26892855-3",
      "studentName": "DELGADO SOTO MARTINA ANAS",
      "birthDate": "25-06-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia DELGADO SOTO",
      "guardianRut": "21.850.771-9",
      "guardianPhone": "+56 9 8847 7329",
      "guardianEmail": "patricia.delgado@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1931, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 220000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1071,
      "rut": "27118968-0",
      "studentName": "ESPINOZA GUERRERO AMARU LEN",
      "birthDate": "07-12-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto ESPINOZA GUERRERO",
      "guardianRut": "25.546.582-1",
      "guardianPhone": "",
      "guardianEmail": "roberto.espinoza@email.com",
      "guardianAddress": "Av. Colón 843, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 330000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1072,
      "rut": "26906623-7",
      "studentName": "FUENTES MARTNEZ CONSTANZA ISABELLA",
      "birthDate": "05-07-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia FUENTES MARTNEZ",
      "guardianRut": "21.955.424-9",
      "guardianPhone": "+56 9 8966 6360",
      "guardianEmail": "patricia.fuentes@email.com",
      "guardianAddress": "Pasaje O'Higgins 1043, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1073,
      "rut": "26942244-0",
      "studentName": "GONZLEZ IBARRA AMANDA IBIS",
      "birthDate": "25-07-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen GONZLEZ IBARRA",
      "guardianRut": "22.231.300-7",
      "guardianPhone": "+56 9 8680 2059",
      "guardianEmail": "carmen.gonzlez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2093, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1074,
      "rut": "27047707-0",
      "studentName": "HERNNDEZ ANDRADE HELENA PAZ",
      "birthDate": "11-10-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen HERNNDEZ ANDRADE",
      "guardianRut": "23.519.293-4",
      "guardianPhone": "+56 9 3264 5161",
      "guardianEmail": "carmen.hernndez@email.com",
      "guardianAddress": "Pasaje O'Higgins 1879, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 440000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1075,
      "rut": "27094811-1",
      "studentName": "MANCILLA HERNNDEZ ALONSO IVAN",
      "birthDate": "21-11-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo MANCILLA HERNNDEZ",
      "guardianRut": "23.287.407-4",
      "guardianPhone": "+56 9 9010 7711",
      "guardianEmail": "eduardo.mancilla@email.com",
      "guardianAddress": "Pasaje Los Leones 1970, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1077,
      "rut": "27018713-7",
      "studentName": "MARILICN SANTANA MATILDE DANAE",
      "birthDate": "19-09-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena MARILICN SANTANA",
      "guardianRut": "25.700.732-4",
      "guardianPhone": "+56 9 7553 6340",
      "guardianEmail": "elena.marilicn@email.com",
      "guardianAddress": "Pasaje O'Higgins 662, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1078,
      "rut": "26820057-6",
      "studentName": "MUOZ FERNNDEZ EMILY ARLETTE",
      "birthDate": "28-04-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana MUOZ FERNNDEZ",
      "guardianRut": "22.989.896-5",
      "guardianPhone": "+56 9 7724 0777",
      "guardianEmail": "ana.muoz@email.com",
      "guardianAddress": "Av. Colón 842, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 330000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1080,
      "rut": "27015540-5",
      "studentName": "SANHUEZA MARTNEZ JOSEFA IGNACIA",
      "birthDate": "15-09-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María SANHUEZA MARTNEZ",
      "guardianRut": "25.051.931-1",
      "guardianPhone": "+56 9 5685 7863",
      "guardianEmail": "maria.sanhueza@email.com",
      "guardianAddress": "Calle Magallanes 568, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1081,
      "rut": "27122429-K",
      "studentName": "SANTANA MORAGA CATALINA TRINIDAD",
      "birthDate": "11-12-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena SANTANA MORAGA",
      "guardianRut": "21.910.000-0",
      "guardianPhone": "+56 9 4616 1062",
      "guardianEmail": "elena.santana@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1373, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 440000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1083,
      "rut": "27069114-5",
      "studentName": "URIBE SCHNABEL BENJAMN ANDRS",
      "birthDate": "02-11-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan URIBE SCHNABEL",
      "guardianRut": "24.647.283-1",
      "guardianPhone": "",
      "guardianEmail": "juan.uribe@email.com",
      "guardianAddress": "Pasaje O'Higgins 1951, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1084,
      "rut": "26957732-0",
      "studentName": "VALENZUELA ALMONACID AMARIS EILEEN",
      "birthDate": "05-08-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia VALENZUELA ALMONACID",
      "guardianRut": "24.862.743-3",
      "guardianPhone": "+56 9 7630 9895",
      "guardianEmail": "patricia.valenzuela@email.com",
      "guardianAddress": "Pasaje Los Leones 770, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1085,
      "rut": "27127007-0",
      "studentName": "VARELA MANRQUEZ ANAS FRANCISCA",
      "birthDate": "10-12-2019",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana VARELA MANRQUEZ",
      "guardianRut": "23.282.015-2",
      "guardianPhone": "+56 9 6492 0072",
      "guardianEmail": "ana.varela@email.com",
      "guardianAddress": "Av. Colón 283, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 330000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1086,
      "rut": "27121176-7",
      "studentName": "VARGAS MRQUEZ AGUSTN ALONSO",
      "birthDate": "09-12-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés VARGAS MRQUEZ",
      "guardianRut": "23.115.643-7",
      "guardianPhone": "+56 9 8323 0593",
      "guardianEmail": "andres.vargas@email.com",
      "guardianAddress": "Av. España 2005, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 220000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1088,
      "rut": "26793717-6",
      "studentName": "VERA MUNCHMEYER FACUNDO ANT",
      "birthDate": "16-04-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos VERA MUNCHMEYER",
      "guardianRut": "24.190.617-5",
      "guardianPhone": "+56 9 5805 1488",
      "guardianEmail": "carlos.vera@email.com",
      "guardianAddress": "Pasaje Los Leones 569, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1103,
      "rut": "26648991-9",
      "studentName": "MUOZ VERA SIMON ANDRES",
      "birthDate": "06-01-2019",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Miguel MUOZ VERA",
      "guardianRut": "21.327.858-4",
      "guardianPhone": "0",
      "guardianEmail": "miguel.muoz@email.com",
      "guardianAddress": "Pasaje Los Leones 123, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1115,
      "rut": "26671911-6",
      "studentName": "AGUIRRE SOTO MIKEL LEONARDO",
      "birthDate": "21-01-2019",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan AGUIRRE SOTO",
      "guardianRut": "20.747.546-7",
      "guardianPhone": "+56 9 9514 4960",
      "guardianEmail": "juan.aguirre@email.com",
      "guardianAddress": "Calle Magallanes 975, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1116,
      "rut": "26665070-1",
      "studentName": "ARCOS MORALES ALICE GABRIELA",
      "birthDate": "17-01-2019",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Mónica ARCOS MORALES",
      "guardianRut": "23.681.503-K",
      "guardianPhone": "+56 9 9443 7394",
      "guardianEmail": "monica.arcos@email.com",
      "guardianAddress": "Av. Colón 874, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1117,
      "rut": "26708695-8",
      "studentName": "ARGEL ARJEL ANNKEN",
      "birthDate": "12-02-2019",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Luis ARGEL ARJEL",
      "guardianRut": "21.692.064-3",
      "guardianPhone": "+56 9 8985 6107",
      "guardianEmail": "luis.argel@email.com",
      "guardianAddress": "Av. Colón 861, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 440000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1121,
      "rut": "26637805-K",
      "studentName": "CARDENAS SILVA JOSEFA MARTINA",
      "birthDate": "01-02-2019",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Mónica CARDENAS SILVA",
      "guardianRut": "22.409.525-2",
      "guardianPhone": "+56 9 9286 0190",
      "guardianEmail": "monica.cardenas@email.com",
      "guardianAddress": "Pasaje O'Higgins 266, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1125,
      "rut": "26664982-7",
      "studentName": "GONZALEZ CABERO LETICIA AMPARO",
      "birthDate": "16-01-2019",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena GONZALEZ CABERO",
      "guardianRut": "23.215.335-0",
      "guardianPhone": "+56 9 4239 6064",
      "guardianEmail": "elena.gonzalez@email.com",
      "guardianAddress": "Av. España 1690, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 440000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1129,
      "rut": "26691661-2",
      "studentName": "OLAVARRIA AMPUERO AMANDA GUADALUPE",
      "birthDate": "31-01-2019",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Mónica OLAVARRIA AMPUERO",
      "guardianRut": "25.162.441-0",
      "guardianPhone": "+56 9 8120 4476",
      "guardianEmail": "monica.olavarria@email.com",
      "guardianAddress": "Pasaje O'Higgins 1940, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1133,
      "rut": "26709658-9",
      "studentName": "PEREZ VIVANCO JULIAN ESTEBAN",
      "birthDate": "11-02-2019",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Juan PEREZ VIVANCO",
      "guardianRut": "24.012.564-1",
      "guardianPhone": "+56 9 9583 5983",
      "guardianEmail": "juan.perez@email.com",
      "guardianAddress": "Calle Magallanes 495, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1139,
      "rut": "26682681-8",
      "studentName": "VELQUEN RIVAS TOMAS DARIEL",
      "birthDate": "29-01-2019",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carlos VELQUEN RIVAS",
      "guardianRut": "21.794.350-7",
      "guardianPhone": "+56 9 5756 9751",
      "guardianEmail": "carlos.velquen@email.com",
      "guardianAddress": "Pasaje O'Higgins 1898, Punta Arenas",
      "grade": "1° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-22",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    }
  ],
  "2° Básico A": [
    {
      "id": 1090,
      "rut": "26326621-8",
      "studentName": "ARAYA HERNANDEZ PALOMA AGUSTINA",
      "birthDate": "08-06-2018",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen ARAYA HERNANDEZ",
      "guardianRut": "20.381.796-7",
      "guardianPhone": "+56 9 6528 7123",
      "guardianEmail": "carmen.araya@email.com",
      "guardianAddress": "Av. Colón 611, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1091,
      "rut": "26338756-2",
      "studentName": "BAEZA BUSTOS NATALIA ISABEL",
      "birthDate": "21-06-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena BAEZA BUSTOS",
      "guardianRut": "22.664.456-3",
      "guardianPhone": "+56 9 4269 0571",
      "guardianEmail": "elena.baeza@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1145, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1092,
      "rut": "26401930-3",
      "studentName": "BARRIA ANDRADE AGUSTINA LEONOR",
      "birthDate": "02-08-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "María BARRIA ANDRADE",
      "guardianRut": "24.761.701-9",
      "guardianPhone": "0",
      "guardianEmail": "maria.barria@email.com",
      "guardianAddress": "Calle Bories 2024, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1093,
      "rut": "26359203-4",
      "studentName": "CRCAMO REHEL GUSTAVO NICOLS",
      "birthDate": "06-07-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Miguel CRCAMO REHEL",
      "guardianRut": "22.795.035-8",
      "guardianPhone": "+56 9 7556 7150",
      "guardianEmail": "miguel.crcamo@email.com",
      "guardianAddress": "Pasaje O'Higgins 958, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1094,
      "rut": "26229941-4",
      "studentName": "CHIPLE FREIRE LEANDRO ANDRES",
      "birthDate": "14-04-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Andrés CHIPLE FREIRE",
      "guardianRut": "20.519.595-5",
      "guardianPhone": "0",
      "guardianEmail": "andres.chiple@email.com",
      "guardianAddress": "Calle Bories 1358, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1095,
      "rut": "26342882-K",
      "studentName": "CIFUENTES AGUILAR SOFIA IGNACIA",
      "birthDate": "25-06-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Ana CIFUENTES AGUILAR",
      "guardianRut": "22.955.951-6",
      "guardianPhone": "+56 9 8718 3611",
      "guardianEmail": "ana.cifuentes@email.com",
      "guardianAddress": "Pasaje Los Leones 779, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1096,
      "rut": "26229663-6",
      "studentName": "DIZ BERROS BENJAMN ALEXANDER",
      "birthDate": "18-04-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Miguel DIZ BERROS",
      "guardianRut": "20.710.090-0",
      "guardianPhone": "+56 9 9785 6489",
      "guardianEmail": "miguel.diz@email.com",
      "guardianAddress": "Pasaje O'Higgins 1951, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1097,
      "rut": "26467178-7",
      "studentName": "DOMINGUEZ MANSILLA ISIDORA ESPERANZA",
      "birthDate": "08-09-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Mónica DOMINGUEZ MANSILLA",
      "guardianRut": "21.764.678-2",
      "guardianPhone": "+56 9 8888 1991",
      "guardianEmail": "monica.dominguez@email.com",
      "guardianAddress": "Calle Magallanes 1907, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 440000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1098,
      "rut": "26409522-0",
      "studentName": "EPULEO ANDRADE ALONSO LEON",
      "birthDate": "05-08-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carlos EPULEO ANDRADE",
      "guardianRut": "24.271.454-7",
      "guardianPhone": "+56 9 8907 1857",
      "guardianEmail": "carlos.epuleo@email.com",
      "guardianAddress": "Pasaje Los Leones 1945, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1099,
      "rut": "26398476-5",
      "studentName": "FURNIER MALDONADO BARBARA IGNACIA",
      "birthDate": "31-07-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena FURNIER MALDONADO",
      "guardianRut": "24.246.171-1",
      "guardianPhone": "+56 9 6732 3117",
      "guardianEmail": "elena.furnier@email.com",
      "guardianAddress": "Av. España 903, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1100,
      "rut": "26379827-9",
      "studentName": "MARIO OJEDA AGUSTINA NAIHARA",
      "birthDate": "17-07-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisca MARIO OJEDA",
      "guardianRut": "22.124.194-0",
      "guardianPhone": "+56 9 8772 0357",
      "guardianEmail": "francisca.mario@email.com",
      "guardianAddress": "Pasaje O'Higgins 1608, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1101,
      "rut": "26445555-3",
      "studentName": "MELLA ESCOBAR LUCAS VICENTE",
      "birthDate": "28-08-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carlos MELLA ESCOBAR",
      "guardianRut": "23.078.965-7",
      "guardianPhone": "+56 9 5538 0914",
      "guardianEmail": "carlos.mella@email.com",
      "guardianAddress": "Calle Magallanes 1835, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1102,
      "rut": "26394513-1",
      "studentName": "MORAGA AGUERO MARTIN ARATH",
      "birthDate": "19-07-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carlos MORAGA AGUERO",
      "guardianRut": "20.595.845-2",
      "guardianPhone": "0",
      "guardianEmail": "carlos.moraga@email.com",
      "guardianAddress": "Pasaje O'Higgins 944, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1104,
      "rut": "26564757-K",
      "studentName": "NEGRON OJEDA AGUSTINA ISABEL",
      "birthDate": "11-11-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "María NEGRON OJEDA",
      "guardianRut": "24.251.482-3",
      "guardianPhone": "+56 9 9633 5121",
      "guardianEmail": "maria.negron@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1487, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1105,
      "rut": "26523653-7",
      "studentName": "PEREZ MALDONADO BRIANNA PATRICIA",
      "birthDate": "13-10-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena PEREZ MALDONADO",
      "guardianRut": "23.459.313-7",
      "guardianPhone": "+56 9 5718 3975",
      "guardianEmail": "elena.perez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1162, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1106,
      "rut": "26566422-9",
      "studentName": "QUIEL ANDRADE ANTONIA TRINIDAD",
      "birthDate": "08-11-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisca QUIEL ANDRADE",
      "guardianRut": "21.689.011-6",
      "guardianPhone": "+56 9 7911 5886",
      "guardianEmail": "francisca.quiel@email.com",
      "guardianAddress": "Pasaje Los Leones 1923, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1107,
      "rut": "26371290-0",
      "studentName": "RAMIREZ VOISIER MATEO CALEB",
      "birthDate": "11-07-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisco RAMIREZ VOISIER",
      "guardianRut": "24.232.565-6",
      "guardianPhone": "+56 9 3175 6589",
      "guardianEmail": "francisco.ramirez@email.com",
      "guardianAddress": "Av. Colón 1431, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 330000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1108,
      "rut": "26293572-8",
      "studentName": "RODRIGUEZ MIRANDA LORENZA",
      "birthDate": "24-05-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisca RODRIGUEZ MIRANDA",
      "guardianRut": "20.320.811-1",
      "guardianPhone": "0",
      "guardianEmail": "francisca.rodriguez@email.com",
      "guardianAddress": "Av. Colón 534, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1109,
      "rut": "26624572-6",
      "studentName": "RODRIGUEZ MOREIRA ELIZABETH AMELIA",
      "birthDate": "17-12-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carmen RODRIGUEZ MOREIRA",
      "guardianRut": "24.605.594-7",
      "guardianPhone": "+56 9 9223 0485",
      "guardianEmail": "carmen.rodriguez@email.com",
      "guardianAddress": "Av. España 1849, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1110,
      "rut": "26311617-8",
      "studentName": "SEPULVEDA SOTO ESTEBAN MATEO",
      "birthDate": "01-06-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisco SEPULVEDA SOTO",
      "guardianRut": "24.605.390-1",
      "guardianPhone": "+56 9 5188 3664",
      "guardianEmail": "francisco.sepulveda@email.com",
      "guardianAddress": "Av. Colón 984, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-15",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1111,
      "rut": "26603071-1",
      "studentName": "SOLLNER HARO BENJAMIN ALONSO",
      "birthDate": "05-12-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Eduardo SOLLNER HARO",
      "guardianRut": "24.895.656-9",
      "guardianPhone": "+56 9 4733 4680",
      "guardianEmail": "eduardo.sollner@email.com",
      "guardianAddress": "Calle Bories 1711, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1112,
      "rut": "26509225-K",
      "studentName": "SOUCI SOTO DIEGO ALONSO",
      "birthDate": "06-10-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Luis SOUCI SOTO",
      "guardianRut": "20.763.874-9",
      "guardianPhone": "+56 9 8340 9114",
      "guardianEmail": "luis.souci@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1626, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1113,
      "rut": "26388719-0",
      "studentName": "TORRES GOMEZ FACUNDO LEON",
      "birthDate": "21-07-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Eduardo TORRES GOMEZ",
      "guardianRut": "21.138.217-1",
      "guardianPhone": "+56 9 4778 5012",
      "guardianEmail": "eduardo.torres@email.com",
      "guardianAddress": "Av. España 927, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1114,
      "rut": "26349704-K",
      "studentName": "VILLEGAS ARANCIBIA MATEO GASPAR",
      "birthDate": "29-06-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisco VILLEGAS ARANCIBIA",
      "guardianRut": "24.747.248-7",
      "guardianPhone": "+56 9 4900 7054",
      "guardianEmail": "francisco.villegas@email.com",
      "guardianAddress": "Pasaje Los Leones 553, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1118,
      "rut": "26589712-6",
      "studentName": "BARRERA OYARZUN IVAN AGUSTIN",
      "birthDate": "21-11-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Miguel BARRERA OYARZUN",
      "guardianRut": "20.625.819-5",
      "guardianPhone": "+56 9 7579 7360",
      "guardianEmail": "miguel.barrera@email.com",
      "guardianAddress": "Av. España 1186, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1119,
      "rut": "26321478-1",
      "studentName": "CARDENAS AGUILAR LUCAS ALBERTO",
      "birthDate": "12-06-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Luis CARDENAS AGUILAR",
      "guardianRut": "20.431.340-7",
      "guardianPhone": "+56 9 6637 4149",
      "guardianEmail": "luis.cardenas@email.com",
      "guardianAddress": "Pasaje Los Leones 1744, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1120,
      "rut": "26539340-3",
      "studentName": "CARDENAS DIAZ ALONSO SAMUEL",
      "birthDate": "23-10-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Roberto CARDENAS DIAZ",
      "guardianRut": "25.016.806-3",
      "guardianPhone": "+56 9 9436 6867",
      "guardianEmail": "roberto.cardenas@email.com",
      "guardianAddress": "Calle Magallanes 179, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 220000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1122,
      "rut": "26245210-7",
      "studentName": "CHACON SCHOENIG ETHAN ALEXANDER",
      "birthDate": "25-04-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carlos CHACON SCHOENIG",
      "guardianRut": "23.221.114-8",
      "guardianPhone": "+56 9 1234 3771",
      "guardianEmail": "carlos.chacon@email.com",
      "guardianAddress": "Av. Colón 1663, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 440000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1123,
      "rut": "26398093-K",
      "studentName": "ESTRADA MARQUEZ AARON LUCAS",
      "birthDate": "24-07-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisco ESTRADA MARQUEZ",
      "guardianRut": "24.514.612-4",
      "guardianPhone": "+56 9 4025 9252",
      "guardianEmail": "francisco.estrada@email.com",
      "guardianAddress": "Av. Colón 840, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1124,
      "rut": "26398144-8",
      "studentName": "ESTRADA MARQUEZ CAROLINE AMANDA",
      "birthDate": "24-07-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena ESTRADA MARQUEZ",
      "guardianRut": "22.449.558-7",
      "guardianPhone": "+56 9 4025 9252",
      "guardianEmail": "elena.estrada@email.com",
      "guardianAddress": "Av. España 126, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1127,
      "rut": "26525745-3",
      "studentName": "MARSAN SANCHEZ PAZ ISABEL",
      "birthDate": "27-08-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carmen MARSAN SANCHEZ",
      "guardianRut": "21.692.607-2",
      "guardianPhone": "263886",
      "guardianEmail": "carmen.marsan@email.com",
      "guardianAddress": "Calle Bories 1682, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1128,
      "rut": "26586950-5",
      "studentName": "OJEDA SALDIVIA VICENTE JAVIER ANDRES",
      "birthDate": "23-11-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Luis OJEDA SALDIVIA",
      "guardianRut": "23.966.430-K",
      "guardianPhone": "+56 9 9778 8532",
      "guardianEmail": "luis.ojeda@email.com",
      "guardianAddress": "Av. España 577, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1130,
      "rut": "26454394-0",
      "studentName": "ORTEGA SANCHEZ JOSEFA ANAHIS",
      "birthDate": "04-09-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carmen ORTEGA SANCHEZ",
      "guardianRut": "23.193.180-5",
      "guardianPhone": "+56 9 9030 8898",
      "guardianEmail": "carmen.ortega@email.com",
      "guardianAddress": "Av. España 228, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1131,
      "rut": "26326836-9",
      "studentName": "OYARZO CANOBRA GABRIEL ABAYOMI",
      "birthDate": "11-06-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Juan OYARZO CANOBRA",
      "guardianRut": "22.188.582-1",
      "guardianPhone": "+56 9 8875 8219",
      "guardianEmail": "juan.oyarzo@email.com",
      "guardianAddress": "Av. Colón 1083, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 330000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1132,
      "rut": "26288731-6",
      "studentName": "OYARZUN HERNANDEZ ANGELICA ATENEA",
      "birthDate": "26-05-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "María OYARZUN HERNANDEZ",
      "guardianRut": "21.109.567-9",
      "guardianPhone": "+56 9 9934 6745",
      "guardianEmail": "maria.oyarzun@email.com",
      "guardianAddress": "Av. Manuel Bulnes 815, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 440000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1134,
      "rut": "26533175-0",
      "studentName": "RAMIREZ GODOY MATIAS ALONSO",
      "birthDate": "18-10-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Andrés RAMIREZ GODOY",
      "guardianRut": "22.009.820-6",
      "guardianPhone": "+56 9 9227 7850",
      "guardianEmail": "andres.ramirez@email.com",
      "guardianAddress": "Av. España 792, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 220000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1135,
      "rut": "26466682-1",
      "studentName": "RUIZ FIGUEROA EMMA ELIF",
      "birthDate": "09-09-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Rosa RUIZ FIGUEROA",
      "guardianRut": "21.590.610-8",
      "guardianPhone": "+56 9 5371 8628",
      "guardianEmail": "rosa.ruiz@email.com",
      "guardianAddress": "Pasaje Los Leones 1378, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 330000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1136,
      "rut": "26590864-0",
      "studentName": "SOTO CATRILEO MARENA AIDA",
      "birthDate": "25-11-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisca SOTO CATRILEO",
      "guardianRut": "23.672.888-9",
      "guardianPhone": "+56 9 6528 0669",
      "guardianEmail": "francisca.soto@email.com",
      "guardianAddress": "Av. Colón 1233, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1137,
      "rut": "26237148-4",
      "studentName": "SOTO VILLABLANCA FABIAN ALEJANDRO",
      "birthDate": "24-04-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Andrés SOTO VILLABLANCA",
      "guardianRut": "20.290.432-7",
      "guardianPhone": "9745257",
      "guardianEmail": "andres.soto@email.com",
      "guardianAddress": "Av. Colón 585, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1138,
      "rut": "26499641-4",
      "studentName": "VEGA GAJARDO VALENTINA ANTONELLA",
      "birthDate": "02-10-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Mónica VEGA GAJARDO",
      "guardianRut": "23.614.809-2",
      "guardianPhone": "+56 9 6855 9891",
      "guardianEmail": "monica.vega@email.com",
      "guardianAddress": "Pasaje Los Leones 1588, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 330000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1165,
      "rut": "26105699-2",
      "studentName": "ABURTO PINCHEIRA SANTIAGO JESS",
      "birthDate": "02-02-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Miguel ABURTO PINCHEIRA",
      "guardianRut": "22.197.673-8",
      "guardianPhone": "+56 9 4521 1730",
      "guardianEmail": "miguel.aburto@email.com",
      "guardianAddress": "Calle Bories 1204, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 220000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1167,
      "rut": "26164792-3",
      "studentName": "BARRA PERANCHIGUAY ARLETTE ANAH",
      "birthDate": "06-03-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "María BARRA PERANCHIGUAY",
      "guardianRut": "24.591.681-7",
      "guardianPhone": "+56 9 3103 3163",
      "guardianEmail": "maria.barra@email.com",
      "guardianAddress": "Av. Colón 333, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-17",
          "amount": 110000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1173,
      "rut": "26144888-2",
      "studentName": "GALLARDO CRDENAS BENJAMN IVAN",
      "birthDate": "26-02-2018",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Luis GALLARDO CRDENAS",
      "guardianRut": "21.105.937-0",
      "guardianPhone": "+56 9 4204 6844",
      "guardianEmail": "luis.gallardo@email.com",
      "guardianAddress": "Av. España 1014, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1189,
      "rut": "26087874-3",
      "studentName": "ZIGA TOLEDO AMANDA VICTORIA",
      "birthDate": "23-01-2018",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena ZIGA TOLEDO",
      "guardianRut": "22.404.073-3",
      "guardianPhone": "+56 9 5609 9008",
      "guardianEmail": "elena.ziga@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1237, Punta Arenas",
      "grade": "2° Básico A",
      "monthlyFee": 110000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 110000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 110000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": 110000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    }
  ],
  "3° Básico A": [
    {
      "id": 1126,
      "rut": "26643800-1",
      "studentName": "GUZMAN GUENANTE JOSEFA ALMENDRA",
      "birthDate": "07-01-2017",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Carmen GUZMAN GUENANTE",
      "guardianRut": "23.449.324-8",
      "guardianPhone": "+56 9 5809 4669",
      "guardianEmail": "carmen.guzman@email.com",
      "guardianAddress": "Pasaje O'Higgins 610, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1140,
      "rut": "25904798-6",
      "studentName": "LVAREZ GARCS JOSEFA TRINIDAD",
      "birthDate": "12-09-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Mónica LVAREZ GARCS",
      "guardianRut": "20.165.076-3",
      "guardianPhone": "+56 9 8554 3869",
      "guardianEmail": "monica.lvarez@email.com",
      "guardianAddress": "Pasaje Los Leones 1270, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1141,
      "rut": "25825644-1",
      "studentName": "ARRIAGADA URRA ALONSO ENRIQUE",
      "birthDate": "04-07-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Francisco ARRIAGADA URRA",
      "guardianRut": "20.033.906-1",
      "guardianPhone": "+56 9 9457 5647",
      "guardianEmail": "francisco.arriagada@email.com",
      "guardianAddress": "Av. Colón 1263, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1142,
      "rut": "26060843-6",
      "studentName": "BAHAMONDE OJEDA TOMS ALEJANDRO",
      "birthDate": "25-11-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Andrés BAHAMONDE OJEDA",
      "guardianRut": "24.032.348-6",
      "guardianPhone": "+56 9 5705 3118",
      "guardianEmail": "andres.bahamonde@email.com",
      "guardianAddress": "Calle Magallanes 573, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1143,
      "rut": "26018217-K",
      "studentName": "CRCAMO ANTIMN CRISTBAL SAMUEL",
      "birthDate": "01-12-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Andrés CRCAMO ANTIMN",
      "guardianRut": "22.533.593-1",
      "guardianPhone": "+56 9 4228 6638",
      "guardianEmail": "andres.crcamo@email.com",
      "guardianAddress": "Pasaje O'Higgins 1749, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1144,
      "rut": "25769460-7",
      "studentName": "CRCAMO MUOZ AMANDA BELN",
      "birthDate": "19-05-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Mónica CRCAMO MUOZ",
      "guardianRut": "20.571.004-3",
      "guardianPhone": "+56 9 6393 7815",
      "guardianEmail": "monica.crcamo@email.com",
      "guardianAddress": "Av. Colón 1469, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1145,
      "rut": "25903131-1",
      "studentName": "CARDENAS SOTO FERNANDA NICOLE",
      "birthDate": "09-09-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Mónica CARDENAS SOTO",
      "guardianRut": "23.592.952-K",
      "guardianPhone": "+56 9 9960 2757",
      "guardianEmail": "monica.cardenas@email.com",
      "guardianAddress": "Av. Colón 1476, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1146,
      "rut": "25789463-0",
      "studentName": "CATALN MRQUEZ MATIAS ANDRS",
      "birthDate": "05-06-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Miguel CATALN MRQUEZ",
      "guardianRut": "23.389.078-2",
      "guardianPhone": "+56 9 7814 2529",
      "guardianEmail": "miguel.cataln@email.com",
      "guardianAddress": "Av. España 1252, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1147,
      "rut": "25799087-7",
      "studentName": "CHACN BARRIENTOS MILEY ANAH",
      "birthDate": "12-06-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Elena CHACN BARRIENTOS",
      "guardianRut": "21.389.774-8",
      "guardianPhone": "+56 9 5049 1832",
      "guardianEmail": "elena.chacn@email.com",
      "guardianAddress": "Av. Colón 1982, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1148,
      "rut": "25944437-3",
      "studentName": "DELGADO BUSTAMANTE AARON IGNACIO",
      "birthDate": "13-10-2017",
      "sex": "Masculino",
      "enrollmentDate": "07-03-2024",
      "guardianName": "Luis DELGADO BUSTAMANTE",
      "guardianRut": "20.756.337-4",
      "guardianPhone": "+56 9 4953 4120",
      "guardianEmail": "luis.delgado@email.com",
      "guardianAddress": "Av. España 1174, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-17",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1149,
      "rut": "25928783-9",
      "studentName": "DAZ CRCAMO PASCUAL",
      "birthDate": "02-10-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Luis DAZ CRCAMO",
      "guardianRut": "22.631.720-1",
      "guardianPhone": "+56 9 6298 8193",
      "guardianEmail": "luis.daz@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1562, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1150,
      "rut": "25781394-0",
      "studentName": "ESTAY CONTRERAS RAFAELA IGNACIA",
      "birthDate": "24-05-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Elena ESTAY CONTRERAS",
      "guardianRut": "23.689.713-3",
      "guardianPhone": "+56 9 8535 2811",
      "guardianEmail": "elena.estay@email.com",
      "guardianAddress": "Av. España 1418, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1151,
      "rut": "25763539-2",
      "studentName": "GLVEZ ESTRADA ALEXI IGNACIO",
      "birthDate": "15-05-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Juan GLVEZ ESTRADA",
      "guardianRut": "21.550.718-1",
      "guardianPhone": "+56 9 6436 0439",
      "guardianEmail": "juan.glvez@email.com",
      "guardianAddress": "Pasaje O'Higgins 286, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1152,
      "rut": "25755280-2",
      "studentName": "GARCA VILLARROEL AMANDA ISABELLA",
      "birthDate": "04-05-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Mónica GARCA VILLARROEL",
      "guardianRut": "21.162.407-8",
      "guardianPhone": "+56 9 7159 0325",
      "guardianEmail": "monica.garca@email.com",
      "guardianAddress": "Av. España 1873, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1153,
      "rut": "25924976-7",
      "studentName": "GMEZ ORTEGA MATAS RAFAEL",
      "birthDate": "28-09-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Andrés GMEZ ORTEGA",
      "guardianRut": "20.004.777-K",
      "guardianPhone": "+56 9 9447 1584",
      "guardianEmail": "andres.gmez@email.com",
      "guardianAddress": "Pasaje O'Higgins 250, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1154,
      "rut": "25781308-8",
      "studentName": "GONZLEZ GALLARDO RENATA ISABEL",
      "birthDate": "26-05-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Mónica GONZLEZ GALLARDO",
      "guardianRut": "23.556.023-2",
      "guardianPhone": "+56 9 6303 4473",
      "guardianEmail": "monica.gonzlez@email.com",
      "guardianAddress": "Pasaje O'Higgins 863, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 230000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1155,
      "rut": "25902362-9",
      "studentName": "LILLO TORRES ARLETH SAMIRA",
      "birthDate": "06-09-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "María LILLO TORRES",
      "guardianRut": "24.134.420-7",
      "guardianPhone": "+56 9 3553 1894",
      "guardianEmail": "maria.lillo@email.com",
      "guardianAddress": "Av. España 777, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 230000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1156,
      "rut": "25807043-7",
      "studentName": "MANCILLA GUILA AMPARO ISABELLA",
      "birthDate": "19-06-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Ana MANCILLA GUILA",
      "guardianRut": "22.026.727-K",
      "guardianPhone": "+56 9 6712 3419",
      "guardianEmail": "ana.mancilla@email.com",
      "guardianAddress": "Pasaje O'Higgins 1817, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1157,
      "rut": "25754150-9",
      "studentName": "MATURANA BUSTOS MONSERRATH IGNACIA",
      "birthDate": "05-05-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Carmen MATURANA BUSTOS",
      "guardianRut": "20.632.972-6",
      "guardianPhone": "+56 9 6559 6740",
      "guardianEmail": "carmen.maturana@email.com",
      "guardianAddress": "Calle Bories 1367, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1158,
      "rut": "26015972-0",
      "studentName": "MERCADO GUERRERO ISABELLA BELN",
      "birthDate": "05-12-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Francisca MERCADO GUERRERO",
      "guardianRut": "24.111.667-0",
      "guardianPhone": "+56 9 8724 2914",
      "guardianEmail": "francisca.mercado@email.com",
      "guardianAddress": "Calle Bories 658, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1159,
      "rut": "25824133-9",
      "studentName": "MONTIEL VIDAL BORJA ANDRS",
      "birthDate": "06-07-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Carlos MONTIEL VIDAL",
      "guardianRut": "21.707.994-2",
      "guardianPhone": "+56 9 5149 8405",
      "guardianEmail": "carlos.montiel@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1372, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1160,
      "rut": "25730999-1",
      "studentName": "MORENO ALMONACID MILAN ESTEBAN",
      "birthDate": "06-04-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Luis MORENO ALMONACID",
      "guardianRut": "21.573.812-4",
      "guardianPhone": "+56 9 5826 1005",
      "guardianEmail": "luis.moreno@email.com",
      "guardianAddress": "Av. España 305, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1161,
      "rut": "25952468-7",
      "studentName": "PIZARRO VASQUEZ ISABEL MONSERRAT",
      "birthDate": "22-10-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Carmen PIZARRO VASQUEZ",
      "guardianRut": "23.688.897-5",
      "guardianPhone": "+56 9 6637 1726",
      "guardianEmail": "carmen.pizarro@email.com",
      "guardianAddress": "Av. España 1331, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1162,
      "rut": "25936746-8",
      "studentName": "RUIZ TLLEZ ANTONELLA LUCIANA",
      "birthDate": "10-10-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Carmen RUIZ TLLEZ",
      "guardianRut": "23.135.052-7",
      "guardianPhone": "+56 9 9166 2576",
      "guardianEmail": "carmen.ruiz@email.com",
      "guardianAddress": "Pasaje Los Leones 1094, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 230000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1163,
      "rut": "25861416-K",
      "studentName": "VILLABLANCA SOTO MARTINA FERNANDA",
      "birthDate": "05-08-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Mónica VILLABLANCA SOTO",
      "guardianRut": "21.181.220-6",
      "guardianPhone": "+56 9 7947 2761",
      "guardianEmail": "monica.villablanca@email.com",
      "guardianAddress": "Av. España 1617, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1164,
      "rut": "25737903-5",
      "studentName": "YAEZ LOYOLA EMILIA PAZ",
      "birthDate": "18-04-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2024",
      "guardianName": "Carmen YAEZ LOYOLA",
      "guardianRut": "20.908.052-4",
      "guardianPhone": "+56 9 9807 0531",
      "guardianEmail": "carmen.yaez@email.com",
      "guardianAddress": "Calle Bories 559, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1166,
      "rut": "25960969-0",
      "studentName": "LVAREZ CABELLO ANTONELLA IGNACIA",
      "birthDate": "26-10-2017",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena LVAREZ CABELLO",
      "guardianRut": "21.783.788-K",
      "guardianPhone": "+56 9 9680 3697",
      "guardianEmail": "elena.lvarez@email.com",
      "guardianAddress": "Av. Colón 1916, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1168,
      "rut": "25794280-5",
      "studentName": "BRAVO ESCOBAR VICENTE",
      "birthDate": "06-06-2017",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisco BRAVO ESCOBAR",
      "guardianRut": "22.702.241-8",
      "guardianPhone": "+56 9 3888 0860",
      "guardianEmail": "francisco.bravo@email.com",
      "guardianAddress": "Calle Bories 433, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1169,
      "rut": "25979660-1",
      "studentName": "CASILLA COLIVORO MAITE ESPERANZA",
      "birthDate": "12-11-2017",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena CASILLA COLIVORO",
      "guardianRut": "22.817.928-0",
      "guardianPhone": "+56 9 3205 1877",
      "guardianEmail": "elena.casilla@email.com",
      "guardianAddress": "Av. Manuel Bulnes 980, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1170,
      "rut": "25747681-2",
      "studentName": "FORETICH MANCILLA ISABELLA ANALIA",
      "birthDate": "20-04-2017",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisca FORETICH MANCILLA",
      "guardianRut": "21.996.214-2",
      "guardianPhone": "+56 9 9387 5025",
      "guardianEmail": "francisca.foretich@email.com",
      "guardianAddress": "Calle Magallanes 1886, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1174,
      "rut": "25750765-3",
      "studentName": "GALLARDO VERA ANTONIA TRINIDAD",
      "birthDate": "02-05-2017",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena GALLARDO VERA",
      "guardianRut": "23.515.633-4",
      "guardianPhone": "+56 9 9728 0318",
      "guardianEmail": "elena.gallardo@email.com",
      "guardianAddress": "Av. Colón 1914, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 230000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1175,
      "rut": "25960505-9",
      "studentName": "IGOR QUINCHAMN EMILY ANASTASIA",
      "birthDate": "25-10-2017",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Rosa IGOR QUINCHAMN",
      "guardianRut": "20.720.913-9",
      "guardianPhone": "+56 9 8921 0832",
      "guardianEmail": "rosa.igor@email.com",
      "guardianAddress": "Pasaje O'Higgins 1059, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1176,
      "rut": "25859425-8",
      "studentName": "LUENGO OYARZN RENATO ANTONIO",
      "birthDate": "04-08-2017",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Eduardo LUENGO OYARZN",
      "guardianRut": "23.831.546-8",
      "guardianPhone": "+56 9 4815 9020",
      "guardianEmail": "eduardo.luengo@email.com",
      "guardianAddress": "Av. Colón 129, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1177,
      "rut": "25803518-6",
      "studentName": "MANCILLA RUBILAR FELIPE AGUSTIN",
      "birthDate": "14-06-2017",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Roberto MANCILLA RUBILAR",
      "guardianRut": "23.708.214-1",
      "guardianPhone": "+56 9 5980 8902",
      "guardianEmail": "roberto.mancilla@email.com",
      "guardianAddress": "Pasaje Los Leones 573, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-15",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1178,
      "rut": "25890372-2",
      "studentName": "MNDEZ LVAREZ FACUNDO DAMIN",
      "birthDate": "31-08-2017",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Roberto MNDEZ LVAREZ",
      "guardianRut": "20.616.845-5",
      "guardianPhone": "+56 9 5357 9629",
      "guardianEmail": "roberto.mndez@email.com",
      "guardianAddress": "Pasaje O'Higgins 443, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 230000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1179,
      "rut": "25870147-K",
      "studentName": "OJEDA GOMZ SAMANTHA",
      "birthDate": "11-08-2017",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Patricia OJEDA GOMZ",
      "guardianRut": "22.468.336-7",
      "guardianPhone": "+56 9 8970 2574",
      "guardianEmail": "patricia.ojeda@email.com",
      "guardianAddress": "Av. Colón 245, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1180,
      "rut": "26033913-3",
      "studentName": "PRECIADO AGUILAR AINHARA ISABELLA",
      "birthDate": "12-12-2017",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Mónica PRECIADO AGUILAR",
      "guardianRut": "20.043.852-3",
      "guardianPhone": "+56 9 7420 5694",
      "guardianEmail": "monica.preciado@email.com",
      "guardianAddress": "Pasaje O'Higgins 1981, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1181,
      "rut": "25826208-5",
      "studentName": "RIOSECO AYALA BRUNO MATEO",
      "birthDate": "06-07-2017",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Andrés RIOSECO AYALA",
      "guardianRut": "23.118.599-2",
      "guardianPhone": "+56 9 8500 7609",
      "guardianEmail": "andres.rioseco@email.com",
      "guardianAddress": "Av. Colón 2077, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1182,
      "rut": "25730196-6",
      "studentName": "RUIZ BELLO JOSEFA ISABEL",
      "birthDate": "07-04-2017",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "María RUIZ BELLO",
      "guardianRut": "24.181.728-8",
      "guardianPhone": "+56 9 8263 3929",
      "guardianEmail": "maria.ruiz@email.com",
      "guardianAddress": "Av. Colón 445, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 230000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1183,
      "rut": "25921838-1",
      "studentName": "SALAS NEIRA MAXIMILIANO ALONSO",
      "birthDate": "23-09-2017",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisco SALAS NEIRA",
      "guardianRut": "23.759.579-3",
      "guardianPhone": "+56 9 5091 1094",
      "guardianEmail": "francisco.salas@email.com",
      "guardianAddress": "Calle Bories 1378, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1184,
      "rut": "25747760-6",
      "studentName": "SOTO MONSALVE DYLAN ISAAC",
      "birthDate": "26-04-2017",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Luis SOTO MONSALVE",
      "guardianRut": "24.134.597-1",
      "guardianPhone": "+56 9 2742 4487",
      "guardianEmail": "luis.soto@email.com",
      "guardianAddress": "Calle Bories 567, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1185,
      "rut": "25869498-8",
      "studentName": "TIZNADO JIMENEZ TOMS IGNACIO",
      "birthDate": "09-08-2017",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Francisco TIZNADO JIMENEZ",
      "guardianRut": "20.452.083-6",
      "guardianPhone": "+56 9 7715 5915",
      "guardianEmail": "francisco.tiznado@email.com",
      "guardianAddress": "Calle Magallanes 512, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1186,
      "rut": "25957976-7",
      "studentName": "VELSQUEZ BASOALTO LISANDRA ITZAMARA",
      "birthDate": "20-10-2017",
      "sex": "Femenino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Elena VELSQUEZ BASOALTO",
      "guardianRut": "23.509.020-1",
      "guardianPhone": "+56 9 6460 0870",
      "guardianEmail": "elena.velsquez@email.com",
      "guardianAddress": "Av. España 902, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 230000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1188,
      "rut": "25869154-7",
      "studentName": "VIDAL AGUILAR LEONARDO",
      "birthDate": "10-08-2017",
      "sex": "Masculino",
      "enrollmentDate": "2025-03-01",
      "guardianName": "Eduardo VIDAL AGUILAR",
      "guardianRut": "23.287.659-K",
      "guardianPhone": "+56 9 3139 1759",
      "guardianEmail": "eduardo.vidal@email.com",
      "guardianAddress": "Av. España 507, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1193,
      "rut": "25395230-K",
      "studentName": "CALLAHAN SEGOVIA MATILDE EMILIA",
      "birthDate": "24-02-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena CALLAHAN SEGOVIA",
      "guardianRut": "22.028.425-5",
      "guardianPhone": "+56 9 3489 9967",
      "guardianEmail": "elena.callahan@email.com",
      "guardianAddress": "Pasaje Los Leones 1931, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-20",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1196,
      "rut": "25587960-K",
      "studentName": "JARAMILLO RIVERA VICENTE JESS",
      "birthDate": "09-01-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan JARAMILLO RIVERA",
      "guardianRut": "20.323.983-1",
      "guardianPhone": "+56 9 7539 5779",
      "guardianEmail": "juan.jaramillo@email.com",
      "guardianAddress": "Pasaje Los Leones 1543, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1197,
      "rut": "25626937-6",
      "studentName": "MANCILLA VERA ALONSO IGNACIO",
      "birthDate": "28-01-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MANCILLA VERA",
      "guardianRut": "20.018.608-7",
      "guardianPhone": "+56 9 8353 1942",
      "guardianEmail": "rosa.mancilla@email.com",
      "guardianAddress": "Pasaje O'Higgins 154, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1198,
      "rut": "25655942-0",
      "studentName": "MAYORGA OATE CATALINA FERNANDA",
      "birthDate": "28-02-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana MAYORGA OATE",
      "guardianRut": "21.898.791-5",
      "guardianPhone": "+56 9 6699 6789",
      "guardianEmail": "ana.mayorga@email.com",
      "guardianAddress": "Calle Magallanes 866, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1203,
      "rut": "25688316-3",
      "studentName": "PAILLAN MUOZ JUAN PEDRO",
      "birthDate": "01-03-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo PAILLAN MUOZ",
      "guardianRut": "21.048.375-6",
      "guardianPhone": "+56 9 8171 7050",
      "guardianEmail": "eduardo.paillan@email.com",
      "guardianAddress": "Av. España 1448, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1204,
      "rut": "25676497-0",
      "studentName": "PAREDES AGUILAR CELESTE",
      "birthDate": "15-02-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María PAREDES AGUILAR",
      "guardianRut": "19.721.948-3",
      "guardianPhone": "+56 9 4092 7460",
      "guardianEmail": "maria.paredes@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2073, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1207,
      "rut": "25664477-0",
      "studentName": "SNCHEZ LLANOS NICOLE IGNACIA",
      "birthDate": "07-02-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca SNCHEZ LLANOS",
      "guardianRut": "20.844.957-5",
      "guardianPhone": "+56 9 9999 2099",
      "guardianEmail": "francisca.snchez@email.com",
      "guardianAddress": "Av. España 392, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1208,
      "rut": "25264031-2",
      "studentName": "SANCHEZ SEGOVIA OMAR ESTEBAN",
      "birthDate": "07-02-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto SANCHEZ SEGOVIA",
      "guardianRut": "22.592.573-9",
      "guardianPhone": "+56 9 3195 5598",
      "guardianEmail": "roberto.sanchez@email.com",
      "guardianAddress": "Calle Magallanes 1939, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 230000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1213,
      "rut": "25691795-5",
      "studentName": "VERA MIRANDA CATALINA BELN",
      "birthDate": "28-02-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa VERA MIRANDA",
      "guardianRut": "20.052.441-1",
      "guardianPhone": "+56 9 9649 9398",
      "guardianEmail": "rosa.vera@email.com",
      "guardianAddress": "Calle Magallanes 945, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1214,
      "rut": "25700134-2",
      "studentName": "VILLEGAS GONZLEZ VICTORIA ISABELLA",
      "birthDate": "08-03-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia VILLEGAS GONZLEZ",
      "guardianRut": "23.427.202-0",
      "guardianPhone": "+56 9 6149 4409",
      "guardianEmail": "patricia.villegas@email.com",
      "guardianAddress": "Calle Bories 1601, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1216,
      "rut": "25395343-8",
      "studentName": "ALMONACID VERA AGUSTN NICOLS",
      "birthDate": "03-06-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo ALMONACID VERA",
      "guardianRut": "20.130.151-3",
      "guardianPhone": "+56 9 9291 3776",
      "guardianEmail": "eduardo.almonacid@email.com",
      "guardianAddress": "Av. España 291, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1217,
      "rut": "25619720-0",
      "studentName": "AMPUERO PREZ MARTINA BELN",
      "birthDate": "04-01-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana AMPUERO PREZ",
      "guardianRut": "22.136.570-4",
      "guardianPhone": "+56 9 5000 2221",
      "guardianEmail": "ana.ampuero@email.com",
      "guardianAddress": "Calle Bories 866, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1218,
      "rut": "25632356-7",
      "studentName": "BARRERA OYARZN RAFAELA IGNACIA",
      "birthDate": "13-01-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca BARRERA OYARZN",
      "guardianRut": "22.830.224-4",
      "guardianPhone": "+56 9 7586 8794",
      "guardianEmail": "francisca.barrera@email.com",
      "guardianAddress": "Av. Colón 727, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1220,
      "rut": "25679297-4",
      "studentName": "CORTS HERRERA SOFA PASCAL",
      "birthDate": "16-02-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María CORTS HERRERA",
      "guardianRut": "22.718.238-5",
      "guardianPhone": "+56 9 9337 7946",
      "guardianEmail": "maria.corts@email.com",
      "guardianAddress": "Pasaje Los Leones 1581, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-22",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1229,
      "rut": "25671438-8",
      "studentName": "MUOZ LOAIZA SOFA IGNACIA",
      "birthDate": "14-02-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana MUOZ LOAIZA",
      "guardianRut": "23.840.965-9",
      "guardianPhone": "+56 9 8520 7688",
      "guardianEmail": "ana.muoz@email.com",
      "guardianAddress": "Pasaje Los Leones 1293, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1231,
      "rut": "25626517-6",
      "studentName": "NAVARRO PREZ OSCAR ALBERTO",
      "birthDate": "10-01-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco NAVARRO PREZ",
      "guardianRut": "24.371.195-9",
      "guardianPhone": "+56 9 3077 0590",
      "guardianEmail": "francisco.navarro@email.com",
      "guardianAddress": "Pasaje Los Leones 904, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1232,
      "rut": "25626530-3",
      "studentName": "NAVARRO PREZ PALOMA ANGELINA",
      "birthDate": "10-01-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica NAVARRO PREZ",
      "guardianRut": "24.388.354-7",
      "guardianPhone": "+56 9 3077 0590",
      "guardianEmail": "monica.navarro@email.com",
      "guardianAddress": "Av. Manuel Bulnes 2052, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-20",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1234,
      "rut": "25676557-8",
      "studentName": "PAREDES AGUILAR EMILIA",
      "birthDate": "15-02-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca PAREDES AGUILAR",
      "guardianRut": "22.457.221-2",
      "guardianPhone": "+56 9 9409 2746",
      "guardianEmail": "francisca.paredes@email.com",
      "guardianAddress": "Calle Magallanes 1058, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1235,
      "rut": "25707939-2",
      "studentName": "PAREDES DVILA BRUNO HUMBERTO",
      "birthDate": "17-03-2017",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto PAREDES DVILA",
      "guardianRut": "23.859.191-0",
      "guardianPhone": "+56 9 8979 1703",
      "guardianEmail": "roberto.paredes@email.com",
      "guardianAddress": "Calle Magallanes 1094, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1238,
      "rut": "25368906-4",
      "studentName": "SCHMIDT OYARZN EMILY AURORA",
      "birthDate": "02-05-2017",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa SCHMIDT OYARZN",
      "guardianRut": "19.582.182-8",
      "guardianPhone": "+56 9 9855 9876",
      "guardianEmail": "rosa.schmidt@email.com",
      "guardianAddress": "Av. Colón 1580, Punta Arenas",
      "grade": "3° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    }
  ],
  "4° Básico A": [
    {
      "id": 1190,
      "rut": "25461787-3",
      "studentName": "ACEVEDO RUIZ PALOMA IGNACIA",
      "birthDate": "28-07-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia ACEVEDO RUIZ",
      "guardianRut": "23.388.277-1",
      "guardianPhone": "+56 9 6300 9948",
      "guardianEmail": "patricia.acevedo@email.com",
      "guardianAddress": "Calle Bories 428, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1191,
      "rut": "25544507-3",
      "studentName": "BAEZA BRQUEZ RENATA SOFA",
      "birthDate": "22-11-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica BAEZA BRQUEZ",
      "guardianRut": "20.623.345-1",
      "guardianPhone": "+56 9 7622 5067",
      "guardianEmail": "monica.baeza@email.com",
      "guardianAddress": "Calle Magallanes 226, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1192,
      "rut": "25429571-K",
      "studentName": "BARRA CATRILEO MAYLEN ARELA",
      "birthDate": "03-07-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia BARRA CATRILEO",
      "guardianRut": "24.364.943-9",
      "guardianPhone": "+56 9 5826 9249",
      "guardianEmail": "patricia.barra@email.com",
      "guardianAddress": "Av. España 1537, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1194,
      "rut": "25440401-2",
      "studentName": "CHIGUAY HUAIQUILAF PAZ ISABEL",
      "birthDate": "10-07-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca CHIGUAY HUAIQUILAF",
      "guardianRut": "21.307.387-7",
      "guardianPhone": "+56 9 7445 7473",
      "guardianEmail": "francisca.chiguay@email.com",
      "guardianAddress": "Av. Colón 1025, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1195,
      "rut": "25488020-5",
      "studentName": "GONZLEZ GALINDO MAITE ARACELY",
      "birthDate": "03-12-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia GONZLEZ GALINDO",
      "guardianRut": "24.472.452-3",
      "guardianPhone": "+56 9 4220 6784",
      "guardianEmail": "patricia.gonzlez@email.com",
      "guardianAddress": "Av. España 1908, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 230000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1199,
      "rut": "25685664-6",
      "studentName": "MELLADO ALMONACID DAMIN OSVALDO",
      "birthDate": "01-06-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos MELLADO ALMONACID",
      "guardianRut": "19.822.238-0",
      "guardianPhone": "+56 9 5989 3438",
      "guardianEmail": "carlos.mellado@email.com",
      "guardianAddress": "Pasaje O'Higgins 605, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1200,
      "rut": "25531367-3",
      "studentName": "MUOZ ARAUJO SEBASTIN",
      "birthDate": "10-10-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto MUOZ ARAUJO",
      "guardianRut": "22.288.417-9",
      "guardianPhone": "+56 9 6260 7374",
      "guardianEmail": "roberto.muoz@email.com",
      "guardianAddress": "Av. Colón 1372, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1201,
      "rut": "25392413-6",
      "studentName": "OJEDA OJEDA DANIEL ALEJANDRO",
      "birthDate": "03-05-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco OJEDA OJEDA",
      "guardianRut": "24.030.387-6",
      "guardianPhone": "+56 9 6495 4313",
      "guardianEmail": "francisco.ojeda@email.com",
      "guardianAddress": "Av. Colón 841, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1202,
      "rut": "25389168-8",
      "studentName": "PEZ SALAZAR BASTIN IGNACIO",
      "birthDate": "24-05-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis PEZ SALAZAR",
      "guardianRut": "21.842.134-2",
      "guardianPhone": "+56 9 9222 9541",
      "guardianEmail": "luis.pez@email.com",
      "guardianAddress": "Calle Magallanes 1305, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1205,
      "rut": "25496356-9",
      "studentName": "RADDATZ VIDAL SOFA CATALINA",
      "birthDate": "01-09-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia RADDATZ VIDAL",
      "guardianRut": "24.236.809-6",
      "guardianPhone": "+56 9 8150 6928",
      "guardianEmail": "patricia.raddatz@email.com",
      "guardianAddress": "Av. Colón 222, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1206,
      "rut": "25413534-8",
      "studentName": "RAMREZ VOISIER SIMN ALEJANDRO",
      "birthDate": "15-06-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan RAMREZ VOISIER",
      "guardianRut": "20.934.026-7",
      "guardianPhone": "+56 9 6603 4213",
      "guardianEmail": "juan.ramrez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 129, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1209,
      "rut": "25443085-4",
      "studentName": "SWINBURN PREZ AMAIA LORETO",
      "birthDate": "14-07-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena SWINBURN PREZ",
      "guardianRut": "21.835.209-K",
      "guardianPhone": "+56 9 9640 2429",
      "guardianEmail": "elena.swinburn@email.com",
      "guardianAddress": "Av. España 1400, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1210,
      "rut": "25566278-3",
      "studentName": "TORRES QUINCHAMN DERECK JAZIEL",
      "birthDate": "16-10-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan TORRES QUINCHAMN",
      "guardianRut": "20.105.036-7",
      "guardianPhone": "+56 9 8990 1985",
      "guardianEmail": "juan.torres@email.com",
      "guardianAddress": "Av. España 476, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1211,
      "rut": "25445758-2",
      "studentName": "VALENZUELA CALDERN MAGDALENA IGNACIA",
      "birthDate": "18-07-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena VALENZUELA CALDERN",
      "guardianRut": "19.646.340-2",
      "guardianPhone": "+56 9 7557 7680",
      "guardianEmail": "elena.valenzuela@email.com",
      "guardianAddress": "Calle Bories 369, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1212,
      "rut": "25583509-2",
      "studentName": "VARGAS MUOZ PEDRO ALEJANDRO",
      "birthDate": "30-11-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan VARGAS MUOZ",
      "guardianRut": "21.890.396-7",
      "guardianPhone": "+56 9 9722 9249",
      "guardianEmail": "juan.vargas@email.com",
      "guardianAddress": "Pasaje Los Leones 1772, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1215,
      "rut": "25344564-5",
      "studentName": "AGUILAR HERNNDEZ FLORENCIA PAZ",
      "birthDate": "12-04-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica AGUILAR HERNNDEZ",
      "guardianRut": "22.729.614-3",
      "guardianPhone": "+56 9 4638 6112",
      "guardianEmail": "monica.aguilar@email.com",
      "guardianAddress": "Av. España 2013, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1219,
      "rut": "25386985-2",
      "studentName": "CRDENAS SOTO LUIS MAXIMILIANO",
      "birthDate": "25-05-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo CRDENAS SOTO",
      "guardianRut": "23.074.428-9",
      "guardianPhone": "+56 9 9960 2757",
      "guardianEmail": "eduardo.crdenas@email.com",
      "guardianAddress": "Pasaje Los Leones 731, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1221,
      "rut": "25509594-3",
      "studentName": "FURNIER GUENCHUMAN ALISSON STEPHANIA",
      "birthDate": "13-09-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen FURNIER GUENCHUMAN",
      "guardianRut": "24.344.873-5",
      "guardianPhone": "+56 9 3753 5090",
      "guardianEmail": "carmen.furnier@email.com",
      "guardianAddress": "Pasaje O'Higgins 938, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1222,
      "rut": "25626998-8",
      "studentName": "GARMENDIA VSQUEZ BENJAMN ALEXANDER",
      "birthDate": "28-11-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto GARMENDIA VSQUEZ",
      "guardianRut": "21.749.914-3",
      "guardianPhone": "+56 9 8999 4418",
      "guardianEmail": "roberto.garmendia@email.com",
      "guardianAddress": "Av. Manuel Bulnes 898, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1223,
      "rut": "25448358-3",
      "studentName": "HERNNDEZ ULLOA ANTONELLA CONSTANZA",
      "birthDate": "20-07-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica HERNNDEZ ULLOA",
      "guardianRut": "22.069.604-9",
      "guardianPhone": "+56 9 9078 1863",
      "guardianEmail": "monica.hernndez@email.com",
      "guardianAddress": "Calle Bories 1634, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1224,
      "rut": "25571298-5",
      "studentName": "JUAREZ ANDRADE EMILIA",
      "birthDate": "19-11-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca JUAREZ ANDRADE",
      "guardianRut": "22.390.075-5",
      "guardianPhone": "+56 9 8893 8578",
      "guardianEmail": "francisca.juarez@email.com",
      "guardianAddress": "Calle Bories 1267, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1225,
      "rut": "25491813-K",
      "studentName": "LPEZ PIZARRO LLACOLEN MONSERRAT",
      "birthDate": "20-08-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena LPEZ PIZARRO",
      "guardianRut": "20.794.656-7",
      "guardianPhone": "+56 9 7321 1847",
      "guardianEmail": "elena.lpez@email.com",
      "guardianAddress": "Pasaje O'Higgins 707, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 230000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1226,
      "rut": "25363996-2",
      "studentName": "MANSILLA VILLEGAS CONSTANZA PAZ",
      "birthDate": "28-04-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen MANSILLA VILLEGAS",
      "guardianRut": "22.236.880-4",
      "guardianPhone": "+56 9 8937 5306",
      "guardianEmail": "carmen.mansilla@email.com",
      "guardianAddress": "Av. Colón 137, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1227,
      "rut": "25356227-7",
      "studentName": "MEDINA SIERPE MATTHIAS DALESSANDRO",
      "birthDate": "19-04-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés MEDINA SIERPE",
      "guardianRut": "22.118.940-K",
      "guardianPhone": "+56 9 3531 8167",
      "guardianEmail": "andres.medina@email.com",
      "guardianAddress": "Calle Bories 1414, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1228,
      "rut": "25404194-7",
      "studentName": "MENA LVAREZ MBAR JAZMN",
      "birthDate": "06-06-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa MENA LVAREZ",
      "guardianRut": "19.417.203-6",
      "guardianPhone": "+56 9 8803 5363",
      "guardianEmail": "rosa.mena@email.com",
      "guardianAddress": "Av. España 942, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1230,
      "rut": "25512731-4",
      "studentName": "NAVARRO FERNNDEZ SANTIAGO ALONSO",
      "birthDate": "16-09-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto NAVARRO FERNNDEZ",
      "guardianRut": "21.991.722-8",
      "guardianPhone": "+56 9 7190 9932",
      "guardianEmail": "roberto.navarro@email.com",
      "guardianAddress": "Calle Magallanes 1837, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 460000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1233,
      "rut": "25503550-9",
      "studentName": "OLAZO OYARZN VICENTE DOMINGO",
      "birthDate": "26-08-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés OLAZO OYARZN",
      "guardianRut": "23.845.213-9",
      "guardianPhone": "+56 9 7808 7192",
      "guardianEmail": "andres.olazo@email.com",
      "guardianAddress": "Av. España 1536, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-19",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1236,
      "rut": "25565937-5",
      "studentName": "SALAZAR CAMPOS MAXIMILIANO LEN",
      "birthDate": "08-10-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan SALAZAR CAMPOS",
      "guardianRut": "20.752.337-2",
      "guardianPhone": "+56 9 5623 6737",
      "guardianEmail": "juan.salazar@email.com",
      "guardianAddress": "Av. España 913, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": 115000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1237,
      "rut": "25715421-1",
      "studentName": "SNCHEZ VARGAS ALEN MAURICIO",
      "birthDate": "15-11-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco SNCHEZ VARGAS",
      "guardianRut": "22.299.899-9",
      "guardianPhone": "+56 9 8964 8350",
      "guardianEmail": "francisco.snchez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 222, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 345000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1244,
      "rut": "25248057-9",
      "studentName": "CASTILLO LVAREZ DAYANA AGUSTINA",
      "birthDate": "07-01-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María CASTILLO LVAREZ",
      "guardianRut": "21.710.153-0",
      "guardianPhone": "+56 9 5416 0511",
      "guardianEmail": "maria.castillo@email.com",
      "guardianAddress": "Calle Bories 1522, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1245,
      "rut": "25314208-1",
      "studentName": "DE LA O SOTO JOSEFA PAZ",
      "birthDate": "12-03-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María DE LA",
      "guardianRut": "20.751.755-0",
      "guardianPhone": "+56 9 9241 4878",
      "guardianEmail": "maria.de@email.com",
      "guardianAddress": "Av. España 518, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1246,
      "rut": "25257631-2",
      "studentName": "EPUL CANTO SOFA ANTONIA",
      "birthDate": "18-06-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca EPUL CANTO",
      "guardianRut": "19.723.462-8",
      "guardianPhone": "+56 9 8736 9658",
      "guardianEmail": "francisca.epul@email.com",
      "guardianAddress": "Av. Colón 1467, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1255,
      "rut": "25265651-0",
      "studentName": "ORMEO AVENDAO SOFA ISABELLA",
      "birthDate": "27-01-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen ORMEO AVENDAO",
      "guardianRut": "20.998.244-7",
      "guardianPhone": "+56 9 7138 8571",
      "guardianEmail": "carmen.ormeo@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1258, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1267,
      "rut": "25282190-2",
      "studentName": "CRDENAS MANCILLA JEREMAS EDUARDO",
      "birthDate": "01-02-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés CRDENAS MANCILLA",
      "guardianRut": "20.871.919-K",
      "guardianPhone": "+56 9 9740 9183",
      "guardianEmail": "andres.crdenas@email.com",
      "guardianAddress": "Calle Magallanes 1686, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1268,
      "rut": "25327863-3",
      "studentName": "CARVAJAL VILLARROEL SEBASTIN IGNACIO",
      "birthDate": "23-03-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco CARVAJAL VILLARROEL",
      "guardianRut": "24.059.334-3",
      "guardianPhone": "+56 9 8886 5734",
      "guardianEmail": "francisco.carvajal@email.com",
      "guardianAddress": "Pasaje O'Higgins 429, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": 115000,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": 115000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": 115000,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-20",
          "amount": 115000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1271,
      "rut": "25320382-K",
      "studentName": "COUECAR MILLAPEL JAVIERA CECILIA",
      "birthDate": "12-03-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen COUECAR MILLAPEL",
      "guardianRut": "20.102.289-4",
      "guardianPhone": "+56 9 6280 9514",
      "guardianEmail": "carmen.couecar@email.com",
      "guardianAddress": "Calle Magallanes 277, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1272,
      "rut": "25319582-7",
      "studentName": "DAZ HERNNDEZ SALVADOR TAHIEL",
      "birthDate": "15-03-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés DAZ HERNNDEZ",
      "guardianRut": "20.870.748-5",
      "guardianPhone": "+56 9 6312 4801",
      "guardianEmail": "andres.daz@email.com",
      "guardianAddress": "Av. Manuel Bulnes 815, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1279,
      "rut": "25314134-4",
      "studentName": "OVANDO MADRID AGUSTN MAXIMILIANO",
      "birthDate": "12-03-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto OVANDO MADRID",
      "guardianRut": "20.480.255-6",
      "guardianPhone": "+56 9 7359 1060",
      "guardianEmail": "roberto.ovando@email.com",
      "guardianAddress": "Av. España 103, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1282,
      "rut": "25336219-7",
      "studentName": "RUIZ FIGUEROA MATAS LIONEL",
      "birthDate": "31-03-2016",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis RUIZ FIGUEROA",
      "guardianRut": "20.845.211-8",
      "guardianPhone": "+56 9 9125 2044",
      "guardianEmail": "luis.ruiz@email.com",
      "guardianAddress": "Av. Colón 1850, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1287,
      "rut": "25244228-6",
      "studentName": "VASCO BARRA ELIZABETH MARA",
      "birthDate": "01-01-2016",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia VASCO BARRA",
      "guardianRut": "20.407.221-3",
      "guardianPhone": "+56 9 6165 1733",
      "guardianEmail": "patricia.vasco@email.com",
      "guardianAddress": "Av. Colón 1927, Punta Arenas",
      "grade": "4° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    }
  ],
  "5° Básico A": [
    {
      "id": 1240,
      "rut": "24988000-0",
      "studentName": "ALVARADO CARTES VICENTE TOMS",
      "birthDate": "19-05-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto ALVARADO CARTES",
      "guardianRut": "20.147.077-3",
      "guardianPhone": "+56 9 9625 3797",
      "guardianEmail": "roberto.alvarado@email.com",
      "guardianAddress": "Av. Manuel Bulnes 593, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1241,
      "rut": "25138517-3",
      "studentName": "BARRA FIGUEROA RAFAEL SEBASTIN",
      "birthDate": "27-10-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto BARRA FIGUEROA",
      "guardianRut": "23.133.043-7",
      "guardianPhone": "+56 9 6596 5799",
      "guardianEmail": "roberto.barra@email.com",
      "guardianAddress": "Av. Manuel Bulnes 987, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1242,
      "rut": "25074189-8",
      "studentName": "BARRIGA ARISMENDI ISABELLA CAROLINA",
      "birthDate": "14-08-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca BARRIGA ARISMENDI",
      "guardianRut": "22.301.151-9",
      "guardianPhone": "+56 9 9227 2439",
      "guardianEmail": "francisca.barriga@email.com",
      "guardianAddress": "Pasaje O'Higgins 193, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1243,
      "rut": "25138503-3",
      "studentName": "CRCAMO VARGAS AGUSTN ALONSO",
      "birthDate": "27-09-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto CRCAMO VARGAS",
      "guardianRut": "21.691.029-K",
      "guardianPhone": "+56 9 6103 5018",
      "guardianEmail": "roberto.crcamo@email.com",
      "guardianAddress": "Calle Magallanes 759, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1247,
      "rut": "25012889-4",
      "studentName": "FARAS GONZLEZ JOSEFA ANTONIA",
      "birthDate": "12-06-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa FARAS GONZLEZ",
      "guardianRut": "22.411.077-4",
      "guardianPhone": "+56 9 6687 4593",
      "guardianEmail": "rosa.faras@email.com",
      "guardianAddress": "Calle Bories 856, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1248,
      "rut": "24948615-9",
      "studentName": "GALLARDO ARAVENA CAMILA TESSA",
      "birthDate": "07-04-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica GALLARDO ARAVENA",
      "guardianRut": "21.579.607-8",
      "guardianPhone": "+56 9 9443 1575",
      "guardianEmail": "monica.gallardo@email.com",
      "guardianAddress": "Calle Magallanes 1659, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1249,
      "rut": "25007686-K",
      "studentName": "LUCERO DELGADO VALERIA KAROLINA",
      "birthDate": "06-06-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa LUCERO DELGADO",
      "guardianRut": "20.325.676-0",
      "guardianPhone": "+56 9 9761 1324",
      "guardianEmail": "rosa.lucero@email.com",
      "guardianAddress": "Calle Magallanes 1112, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1250,
      "rut": "25079580-7",
      "studentName": "MALDONADO OYARZO JOS TOMS",
      "birthDate": "16-08-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto MALDONADO OYARZO",
      "guardianRut": "19.908.880-7",
      "guardianPhone": "+56 9 3088 4071",
      "guardianEmail": "roberto.maldonado@email.com",
      "guardianAddress": "Calle Magallanes 194, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1251,
      "rut": "24996659-2",
      "studentName": "MANCILLA CULN MARAJOS",
      "birthDate": "25-05-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica MANCILLA CULN",
      "guardianRut": "20.916.711-5",
      "guardianPhone": "+56 9 6469 4311",
      "guardianEmail": "monica.mancilla@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1282, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1252,
      "rut": "25223373-3",
      "studentName": "MARAIS SAAVEDRA DOMINIQUE FRANCOISE",
      "birthDate": "14-12-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia MARAIS SAAVEDRA",
      "guardianRut": "21.279.038-9",
      "guardianPhone": "+56 9 4208 2515",
      "guardianEmail": "patricia.marais@email.com",
      "guardianAddress": "Av. España 1699, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1253,
      "rut": "25199703-9",
      "studentName": "MARI TORRES KATHYA VANESSA",
      "birthDate": "19-11-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena MARI TORRES",
      "guardianRut": "20.139.606-9",
      "guardianPhone": "+56 9 9163 3096",
      "guardianEmail": "elena.mari@email.com",
      "guardianAddress": "Av. Manuel Bulnes 902, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1254,
      "rut": "25110543-K",
      "studentName": "NARANJO GALLARDO FLORENCIA ESTER",
      "birthDate": "03-09-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana NARANJO GALLARDO",
      "guardianRut": "19.280.025-0",
      "guardianPhone": "+56 9 7549 8689",
      "guardianEmail": "ana.naranjo@email.com",
      "guardianAddress": "Pasaje Los Leones 1094, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1256,
      "rut": "25185732-6",
      "studentName": "OYARZN BAHAMNDEZ AGUSTN ALEXANDER",
      "birthDate": "10-11-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo OYARZN BAHAMNDEZ",
      "guardianRut": "19.715.490-K",
      "guardianPhone": "+56 9 7652 4685",
      "guardianEmail": "eduardo.oyarzn@email.com",
      "guardianAddress": "Pasaje O'Higgins 1827, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-20",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1257,
      "rut": "24958109-7",
      "studentName": "OYARZN VILLALOBOS ISABELLA IGNACIA",
      "birthDate": "13-04-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca OYARZN VILLALOBOS",
      "guardianRut": "21.628.917-K",
      "guardianPhone": "+56 9 6217 2935",
      "guardianEmail": "francisca.oyarzn@email.com",
      "guardianAddress": "Calle Bories 1102, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1258,
      "rut": "24945115-0",
      "studentName": "SNCHEZ ESPINOZA ALONSO LEONEL",
      "birthDate": "03-04-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés SNCHEZ ESPINOZA",
      "guardianRut": "22.189.447-2",
      "guardianPhone": "+56 9 7514 4451",
      "guardianEmail": "andres.snchez@email.com",
      "guardianAddress": "Av. Manuel Bulnes 291, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1259,
      "rut": "24976469-8",
      "studentName": "SNCHEZ MUOZ MATAS ALONSO",
      "birthDate": "05-05-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Roberto SNCHEZ MUOZ",
      "guardianRut": "20.689.936-0",
      "guardianPhone": "+56 9 3433 6549",
      "guardianEmail": "roberto.snchez@email.com",
      "guardianAddress": "Pasaje Los Leones 1327, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1260,
      "rut": "25073985-0",
      "studentName": "SANTANA SANTANA GAEL PEDRO ANTONIO",
      "birthDate": "10-08-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel SANTANA SANTANA",
      "guardianRut": "23.567.551-K",
      "guardianPhone": "+56 9 8829 3999",
      "guardianEmail": "miguel.santana@email.com",
      "guardianAddress": "Pasaje Los Leones 1965, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1261,
      "rut": "24978374-9",
      "studentName": "TARUMN GALLARDO ANTONIA IGNACIA",
      "birthDate": "06-05-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa TARUMN GALLARDO",
      "guardianRut": "19.469.718-K",
      "guardianPhone": "+56 9 5935 6855",
      "guardianEmail": "rosa.tarumn@email.com",
      "guardianAddress": "Av. España 184, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1262,
      "rut": "24950029-1",
      "studentName": "VELOSO GUILA FRANCISCO AGUSTN",
      "birthDate": "06-04-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo VELOSO GUILA",
      "guardianRut": "22.709.168-1",
      "guardianPhone": "+56 9 6853 1680",
      "guardianEmail": "eduardo.veloso@email.com",
      "guardianAddress": "Pasaje O'Higgins 1000, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1263,
      "rut": "25138115-1",
      "studentName": "VENEGAS MANCILLA LUKAS FABIN",
      "birthDate": "30-10-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco VENEGAS MANCILLA",
      "guardianRut": "19.647.292-4",
      "guardianPhone": "+56 9 5423 0149",
      "guardianEmail": "francisco.venegas@email.com",
      "guardianAddress": "Av. España 1804, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1264,
      "rut": "24954804-9",
      "studentName": "VERA PUENTES ROCO ALEJANDRA",
      "birthDate": "13-04-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena VERA PUENTES",
      "guardianRut": "21.428.373-5",
      "guardianPhone": "+56 9 9534 8222",
      "guardianEmail": "elena.vera@email.com",
      "guardianAddress": "Calle Bories 1186, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1265,
      "rut": "25220182-3",
      "studentName": "ARIBEL SILVA AGUSTN ALEJANDRO",
      "birthDate": "08-12-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel ARIBEL SILVA",
      "guardianRut": "19.587.422-0",
      "guardianPhone": "+56 9 9961 2372",
      "guardianEmail": "miguel.aribel@email.com",
      "guardianAddress": "Av. España 904, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1266,
      "rut": "25074793-4",
      "studentName": "BELTRN MRQUEZ DANTE GAEL",
      "birthDate": "14-08-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan BELTRN MRQUEZ",
      "guardianRut": "21.518.391-2",
      "guardianPhone": "+56 9 6842 0475",
      "guardianEmail": "juan.beltrn@email.com",
      "guardianAddress": "Calle Bories 494, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1269,
      "rut": "24998065-K",
      "studentName": "CHVEZ FARAS ANTONELLA PASCALL",
      "birthDate": "26-05-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana CHVEZ FARAS",
      "guardianRut": "22.280.837-5",
      "guardianPhone": "+56 9 6318 7274",
      "guardianEmail": "ana.chvez@email.com",
      "guardianAddress": "Av. Colón 1144, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1270,
      "rut": "24979969-6",
      "studentName": "COUECAR MILLAPEL AMANDA IGNACIA",
      "birthDate": "03-05-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen COUECAR MILLAPEL",
      "guardianRut": "20.894.411-8",
      "guardianPhone": "+56 9 6280 9514",
      "guardianEmail": "carmen.couecar@email.com",
      "guardianAddress": "Calle Bories 858, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1273,
      "rut": "25230399-5",
      "studentName": "ESTRADA MRQUEZ ETHAN CHRISTOPHER",
      "birthDate": "17-12-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos ESTRADA MRQUEZ",
      "guardianRut": "22.481.735-5",
      "guardianPhone": "+56 9 3430 1615",
      "guardianEmail": "carlos.estrada@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1368, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1274,
      "rut": "25209321-4",
      "studentName": "HERNNDEZ CRCAMO JOSEFA CRISTIANE",
      "birthDate": "27-11-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica HERNNDEZ CRCAMO",
      "guardianRut": "20.039.638-3",
      "guardianPhone": "+56 9 6230 0161",
      "guardianEmail": "monica.hernndez@email.com",
      "guardianAddress": "Av. España 807, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1275,
      "rut": "24992284-6",
      "studentName": "MADARIAGA SALDIVIA ARANTZA BELN",
      "birthDate": "20-05-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena MADARIAGA SALDIVIA",
      "guardianRut": "20.271.327-0",
      "guardianPhone": "+56 9 5803 6869",
      "guardianEmail": "elena.madariaga@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1742, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": 120000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": 120000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-18",
          "amount": 120000,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-21",
          "amount": 120000,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1276,
      "rut": "24945102-9",
      "studentName": "MARIPILLN VALDEBENITO INARA MARA ALEJANDRA",
      "birthDate": "01-04-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica MARIPILLN VALDEBENITO",
      "guardianRut": "22.464.242-3",
      "guardianPhone": "+56 9 6809 6848",
      "guardianEmail": "monica.maripilln@email.com",
      "guardianAddress": "Av. España 907, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1277,
      "rut": "25231498-9",
      "studentName": "NEIRA BAHAMNDEZ CRISTBAL ALONSO",
      "birthDate": "17-12-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan NEIRA BAHAMNDEZ",
      "guardianRut": "21.865.257-3",
      "guardianPhone": "+56 9 9722 4148",
      "guardianEmail": "juan.neira@email.com",
      "guardianAddress": "Av. España 1190, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1278,
      "rut": "25122910-4",
      "studentName": "OLAVE MUOZ MAITE CATALINA",
      "birthDate": "22-09-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carmen OLAVE MUOZ",
      "guardianRut": "20.058.402-3",
      "guardianPhone": "+56 9 6629 2051",
      "guardianEmail": "carmen.olave@email.com",
      "guardianAddress": "Av. España 1613, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-17",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-18",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1280,
      "rut": "25206506-7",
      "studentName": "PALMA TABILO SOFA EMILIA",
      "birthDate": "28-11-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Elena PALMA TABILO",
      "guardianRut": "22.752.481-2",
      "guardianPhone": "+56 9 7788 5713",
      "guardianEmail": "elena.palma@email.com",
      "guardianAddress": "Pasaje Los Leones 1444, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": 120000,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": 360000,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": 120000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1281,
      "rut": "25011317-K",
      "studentName": "REYES TRUJILLO FERNANDA ANAS",
      "birthDate": "13-06-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María REYES TRUJILLO",
      "guardianRut": "22.140.341-K",
      "guardianPhone": "+56 9 6732 3730",
      "guardianEmail": "maria.reyes@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1679, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1283,
      "rut": "25236114-6",
      "studentName": "SALDIVIA SEGURA IAN ALFONSO ELAS",
      "birthDate": "18-12-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan SALDIVIA SEGURA",
      "guardianRut": "24.191.014-8",
      "guardianPhone": "+56 9 6122 4049",
      "guardianEmail": "juan.saldivia@email.com",
      "guardianAddress": "Av. Colón 1887, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-16",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1284,
      "rut": "25079957-8",
      "studentName": "TORRES HERNNDEZ DAMIN ISAAS",
      "birthDate": "19-08-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis TORRES HERNNDEZ",
      "guardianRut": "21.505.659-7",
      "guardianPhone": "+56 9 7758 1938",
      "guardianEmail": "luis.torres@email.com",
      "guardianAddress": "Pasaje O'Higgins 1890, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1285,
      "rut": "25079988-8",
      "studentName": "TORRES HERNNDEZ PILAR AMANDA",
      "birthDate": "19-08-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica TORRES HERNNDEZ",
      "guardianRut": "22.021.257-2",
      "guardianPhone": "+56 9 7758 1938",
      "guardianEmail": "monica.torres@email.com",
      "guardianAddress": "Av. Colón 559, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-20",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1286,
      "rut": "25038943-4",
      "studentName": "VALDEBENITO SNCHEZ FABIN IGNACIO",
      "birthDate": "03-07-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis VALDEBENITO SNCHEZ",
      "guardianRut": "22.969.672-6",
      "guardianPhone": "+56 9 7482 0992",
      "guardianEmail": "luis.valdebenito@email.com",
      "guardianAddress": "Calle Bories 1762, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1288,
      "rut": "25132681-9",
      "studentName": "VIDAL BURGOS JOAQUN ALBERTO",
      "birthDate": "01-10-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan VIDAL BURGOS",
      "guardianRut": "21.994.680-5",
      "guardianPhone": "+56 9 8601 7088",
      "guardianEmail": "juan.vidal@email.com",
      "guardianAddress": "Pasaje O'Higgins 1388, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1290,
      "rut": "25009534-1",
      "studentName": "VILLEGAS TOLEDO EMILIA IGNACIA",
      "birthDate": "09-06-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana VILLEGAS TOLEDO",
      "guardianRut": "22.122.374-8",
      "guardianPhone": "+56 9 5779 5440",
      "guardianEmail": "ana.villegas@email.com",
      "guardianAddress": "Pasaje O'Higgins 485, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-24",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1294,
      "rut": "24890909-9",
      "studentName": "ASTORGA ARAVENA FELIPE IGNACIO",
      "birthDate": "03-02-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan ASTORGA ARAVENA",
      "guardianRut": "22.167.640-8",
      "guardianPhone": "+56 9 6399 7288",
      "guardianEmail": "juan.astorga@email.com",
      "guardianAddress": "Av. Colón 1274, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-19",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1296,
      "rut": "24890691-K",
      "studentName": "BARRA ROCHA MAITE ALEXANDRA",
      "birthDate": "07-02-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia BARRA ROCHA",
      "guardianRut": "21.938.756-3",
      "guardianPhone": "+56 9 8509 7617",
      "guardianEmail": "patricia.barra@email.com",
      "guardianAddress": "Av. España 1012, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-17",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1303,
      "rut": "24867408-3",
      "studentName": "FLORES CANALES FERNANDA ISIDORA",
      "birthDate": "16-01-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa FLORES CANALES",
      "guardianRut": "19.319.730-2",
      "guardianPhone": "+56 9 9404 0891",
      "guardianEmail": "rosa.flores@email.com",
      "guardianAddress": "Pasaje O'Higgins 1735, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-21",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1305,
      "rut": "24936716-8",
      "studentName": "GALLARDO ARANCIBIA AYLIN SOFIA",
      "birthDate": "18-03-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa GALLARDO ARANCIBIA",
      "guardianRut": "21.250.059-3",
      "guardianPhone": "+56 9 3585 6880",
      "guardianEmail": "rosa.gallardo@email.com",
      "guardianAddress": "Pasaje O'Higgins 1834, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-15",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-15",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-21",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1307,
      "rut": "24862855-3",
      "studentName": "GARRIDO OYANEDER LUCIANO ANDRS",
      "birthDate": "10-01-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Eduardo GARRIDO OYANEDER",
      "guardianRut": "20.833.602-9",
      "guardianPhone": "+56 9 9649 0390",
      "guardianEmail": "eduardo.garrido@email.com",
      "guardianAddress": "Calle Magallanes 930, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1308,
      "rut": "24933594-0",
      "studentName": "HERNNDEZ COMICHEO VIOLETA ISABELLA",
      "birthDate": "20-03-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Patricia HERNNDEZ COMICHEO",
      "guardianRut": "23.689.440-1",
      "guardianPhone": "+56 9 7216 9029",
      "guardianEmail": "patricia.hernndez@email.com",
      "guardianAddress": "Pasaje O'Higgins 1207, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-18",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1314,
      "rut": "24912854-6",
      "studentName": "ZIGA MARTNEZ AGUSTN ANDRS",
      "birthDate": "24-02-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Miguel ZIGA MARTNEZ",
      "guardianRut": "20.435.900-8",
      "guardianPhone": "+56 9 8502 2077",
      "guardianEmail": "miguel.ziga@email.com",
      "guardianAddress": "Pasaje O'Higgins 504, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1316,
      "rut": "24879035-0",
      "studentName": "BALICH VILLANUEVA ZDENKA ISIDORA",
      "birthDate": "23-01-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Ana BALICH VILLANUEVA",
      "guardianRut": "22.740.971-1",
      "guardianPhone": "+56 9 5239 3482",
      "guardianEmail": "ana.balich@email.com",
      "guardianAddress": "Av. Manuel Bulnes 1793, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1318,
      "rut": "24888360-K",
      "studentName": "BURNES LOEZAR CRISTOBAL TOMS",
      "birthDate": "01-02-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Juan BURNES LOEZAR",
      "guardianRut": "22.495.731-9",
      "guardianPhone": "+56 9 2189 9521",
      "guardianEmail": "juan.burnes@email.com",
      "guardianAddress": "Pasaje O'Higgins 229, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "pending",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-24",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1320,
      "rut": "24963829-3",
      "studentName": "FERNNDEZ HERNNDEZ MANUEL IGNACIO",
      "birthDate": "18-03-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Luis FERNNDEZ HERNNDEZ",
      "guardianRut": "21.020.086-K",
      "guardianPhone": "+56 9 3126 2730",
      "guardianEmail": "luis.fernndez@email.com",
      "guardianAddress": "Pasaje Los Leones 1962, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": 120000,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": 120000,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-23",
          "amount": 120000,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-15",
          "amount": 120000,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1322,
      "rut": "26334869-9",
      "studentName": "JIN YUBIN",
      "birthDate": "10-01-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Andrés JIN YUBIN",
      "guardianRut": "23.920.360-4",
      "guardianPhone": "+56 9 9935 5093",
      "guardianEmail": "andres.jin@email.com",
      "guardianAddress": "Calle Magallanes 644, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-21",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1325,
      "rut": "24851814-6",
      "studentName": "MANCILLA TAPIA MATEO EMILIO",
      "birthDate": "07-01-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Carlos MANCILLA TAPIA",
      "guardianRut": "19.804.721-K",
      "guardianPhone": "+56 9 6224 9797",
      "guardianEmail": "carlos.mancilla@email.com",
      "guardianAddress": "Av. España 1008, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-22",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-24",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1326,
      "rut": "24860467-0",
      "studentName": "MARSAN SANCHEZ HELENA",
      "birthDate": "31-03-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Mónica MARSAN SANCHEZ",
      "guardianRut": "20.148.996-2",
      "guardianPhone": "+56 9 6489 2882",
      "guardianEmail": "monica.marsan@email.com",
      "guardianAddress": "Pasaje Los Leones 1915, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-23",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Transferencia"
        },
        {
          "date": "2024-07-19",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-23",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1329,
      "rut": "24911962-8",
      "studentName": "MOLINA SANTANA AMAYA GABRIELA",
      "birthDate": "28-02-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "María MOLINA SANTANA",
      "guardianRut": "19.572.858-5",
      "guardianPhone": "+56 9 9940 9624",
      "guardianEmail": "maria.molina@email.com",
      "guardianAddress": "Pasaje O'Higgins 401, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1330,
      "rut": "24919588-K",
      "studentName": "MONDACA GONZLEZ MARTINA ISIDORA",
      "birthDate": "05-03-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisca MONDACA GONZLEZ",
      "guardianRut": "23.646.146-7",
      "guardianPhone": "+56 9 5259 8078",
      "guardianEmail": "francisca.mondaca@email.com",
      "guardianAddress": "Av. Colón 846, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "paid",
      "balance": 0,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-19",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        },
        {
          "date": "2024-07-16",
          "amount": null,
          "concept": "Mensualidad Julio",
          "method": "Transferencia"
        },
        {
          "date": "2024-08-16",
          "amount": null,
          "concept": "Mensualidad Agosto",
          "method": "Transferencia"
        }
      ]
    },
    {
      "id": 1336,
      "rut": "24854156-3",
      "studentName": "PAVEZ CONTRERAS JOSEFA ISIDORA",
      "birthDate": "09-01-2015",
      "sex": "Femenino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Rosa PAVEZ CONTRERAS",
      "guardianRut": "21.059.396-9",
      "guardianPhone": "+56 9 4941 0850",
      "guardianEmail": "rosa.pavez@email.com",
      "guardianAddress": "Calle Magallanes 570, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-22",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    },
    {
      "id": 1337,
      "rut": "24843824-K",
      "studentName": "PINO VALDEBENITO ANGEL ANDRES",
      "birthDate": "01-01-2015",
      "sex": "Masculino",
      "enrollmentDate": "05-03-2025",
      "guardianName": "Francisco PINO VALDEBENITO",
      "guardianRut": "18.853.856-8",
      "guardianPhone": "+56 9 9093 9221",
      "guardianEmail": "francisco.pino@email.com",
      "guardianAddress": "Av. Manuel Bulnes 116, Punta Arenas",
      "grade": "5° Básico A",
      "monthlyFee": null,
      "scholarshipPercentage": 0,
      "status": "overdue",
      "balance": null,
      "lastPayment": "2024-07-15",
      "dueDate": "2024-09-05",
      "paymentHistory": [
        {
          "date": "2024-06-18",
          "amount": null,
          "concept": "Mensualidad Junio",
          "method": "Efectivo"
        }
      ]
    }
  ]
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

// Función para eliminar un estudiante
export const deleteStudent = (studentId) => {
  for (const grade of Object.keys(studentsByGrade)) {
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
