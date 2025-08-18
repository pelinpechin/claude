// Utilidad para procesar el archivo CSV con datos reales de becas y pagos
export function parseCSVStudentData(csvContent) {
  const lines = csvContent.split('\n');
  const students = [];
  
  // Buscar línea de encabezados
  let headerIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('N°;N°Mat;Nombre;RUN;Sexo;F. Ingreso;Fecha Nac;Fono;CURSO;CORREO;T. BECA')) {
      headerIndex = i;
      break;
    }
  }
  
  if (headerIndex === -1) return [];
  
  // Procesar datos desde después del encabezado
  for (let i = headerIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line || line.startsWith(';;;') || line.trim() === '') continue;
    
    const columns = line.split(';');
    if (columns.length < 15) continue;
    
    // Extraer datos básicos
    const numero = columns[0]?.replace(/[^0-9]/g, '').trim();
    const numeroMat = columns[1]?.trim();
    const nombre = columns[2]?.trim();
    const run = columns[3]?.trim();
    const sexo = columns[4]?.trim();
    const fechaIngreso = columns[5]?.trim();
    const fechaNacimiento = columns[6]?.trim();
    const telefono = columns[7]?.trim();
    const curso = columns[8]?.trim();
    const email = columns[9]?.trim();
    const tipoBeca = columns[10]?.trim();
    const porcentajeBeca = columns[11]?.trim();
    
    // Skip if essential data is missing
    if (!nombre || !run || nombre.includes('TIPOS DE BECAS') || run.includes('ARANCEL') || nombre.length < 3) {
      continue;
    }
    
    // Extraer datos de pago
    const arancelTotal = parseFloat(columns[12]?.replace(/[$.,]/g, '') || '0');
    const becaEnPesos = parseFloat(columns[13]?.replace(/[$.,]/g, '') || '0');
    const totalAPagar = parseFloat(columns[14]?.replace(/[$.,]/g, '') || '0');
    
    // Extraer cuotas (10 cuotas desde MARZO hasta DICIEMBRE)
    const cuotas = [];
    let totalPagado = 0;
    const meses = ['MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
    
    // Las cuotas están en las columnas desde el índice 15 en adelante
    // Cada cuota tiene BOLETA, ARANCEL $, BECA $
    for (let j = 0; j < 10; j++) {
      const baseIndex = 15 + (j * 3);
      const boleta = columns[baseIndex]?.trim() || '';
      const montoArancel = parseFloat(columns[baseIndex + 1]?.replace(/[$.,\s]/g, '') || '0');
      const montoBeca = parseFloat(columns[baseIndex + 2]?.replace(/[$.,\s]/g, '') || '0');
      
      const montoPagado = montoArancel > 0 ? montoArancel : 0;
      cuotas.push({
        mes: meses[j],
        boleta,
        montoArancel,
        montoBeca,
        montoPagado,
        pagado: montoPagado > 0 && boleta !== ''
      });
      
      if (montoPagado > 0 && boleta !== '') {
        totalPagado += montoPagado;
      }
    }
    
    // Calcular estado de pago
    const cuotasPagadas = cuotas.filter(c => c.pagado).length;
    const saldoPendiente = Math.max(0, totalAPagar - totalPagado);
    
    // Determinar si tiene beca 100%
    const tieneBeca100 = porcentajeBeca === '100%' && (tipoBeca === 'VUL' || becaEnPesos >= arancelTotal);
    
    let status = 'paid';
    if (tieneBeca100) {
      status = 'scholarship';
    } else if (saldoPendiente > 0) {
      // Si no ha pagado las últimas 2 cuotas, es vencido
      const mesActual = new Date().getMonth() + 3; // Marzo = 3
      const cuotasAtrasadas = cuotas.slice(0, Math.min(mesActual - 3, 10)).filter(c => !c.pagado).length;
      status = cuotasAtrasadas >= 2 ? 'overdue' : 'pending';
    }
    
    // Generar datos del apoderado basados en el nombre del estudiante
    const nameParts = nombre.split(' ');
    const apellido1 = nameParts[0] || 'Pérez';
    const apellido2 = nameParts[1] || 'González';
    
    const guardianNames = sexo === 'M' ? 
      ['Carlos', 'Miguel', 'Juan', 'Luis', 'Roberto', 'Francisco', 'Eduardo', 'Andrés'] :
      ['María', 'Carmen', 'Rosa', 'Patricia', 'Ana', 'Elena', 'Francisca', 'Mónica'];
    
    const guardianName = guardianNames[Math.floor(Math.random() * guardianNames.length)];
    const apoderadoCompleto = `${guardianName} ${apellido1} ${apellido2}`;
    
    const student = {
      id: parseInt(numeroMat) || students.length + 1,
      studentName: nombre,
      rut: run,
      guardianName: apoderadoCompleto,
      guardianPhone: telefono || '+56 9 0000 0000',
      guardianEmail: email || `${guardianName.toLowerCase()}${apellido1.toLowerCase()}@email.com`,
      grade: curso || 'Sin clasificar',
      monthlyFee: Math.round(totalAPagar / 10), // Aproximado por mes
      status: status,
      lastPayment: cuotas.filter(c => c.pagado).pop()?.mes || 'Sin pagos',
      dueDate: new Date().toISOString().split('T')[0], // Fecha actual como referencia
      balance: saldoPendiente,
      // Datos adicionales del CSV
      birthDate: fechaNacimiento || '2010-01-01',
      admissionDate: fechaIngreso || '2025-03-05',
      sex: sexo === 'M' ? 'Masculino' : 'Femenino',
      totalAnnualFee: arancelTotal,
      scholarshipAmount: becaEnPesos,
      scholarshipType: tipoBeca || 'Sin beca',
      scholarshipPercentage: porcentajeBeca?.replace('%', '') || '0',
      hasFullScholarship: tieneBeca100,
      cuotas: cuotas,
      cuotasPagadas: cuotasPagadas,
      totalPagado: totalPagado,
      paymentHistory: cuotas.filter(c => c.pagado).map((c, index) => ({
        date: `2024-${(cuotas.indexOf(c) + 3).toString().padStart(2, '0')}-15`,
        amount: c.montoPagado,
        concept: `Mensualidad ${c.mes}`,
        method: 'Transferencia'
      }))
    };
    
    students.push(student);
  }
  
  return students;
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

// Función para organizar estudiantes por curso
export function organizeStudentsByGrade(students) {
  const studentsByGrade = {};
  
  students.forEach(student => {
    const grade = student.grade;
    if (!studentsByGrade[grade]) {
      studentsByGrade[grade] = [];
    }
    studentsByGrade[grade].push(student);
  });
  
  return studentsByGrade;
}

// Función para exportar datos a CSV
export function exportToCSV(data) {
  const headers = [
    'Nombre Estudiante',
    'RUT',
    'Curso',
    'Apoderado',
    'Teléfono',
    'Email',
    'Estado',
    'Mensualidad',
    'Saldo Pendiente',
    'Cuotas Pagadas',
    'Total Pagado',
    'Beca',
    'Porcentaje Beca'
  ];
  
  const csvContent = [
    headers.join(','),
    ...data.map(student => [
      `"${student.studentName}"`,
      student.rut,
      `"${student.grade}"`,
      `"${student.guardianName}"`,
      student.guardianPhone,
      student.guardianEmail,
      student.status,
      student.monthlyFee,
      student.balance,
      student.cuotasPagadas || 0,
      student.totalPagado || 0,
      student.scholarshipType || 'Sin beca',
      student.scholarshipPercentage || '0%'
    ].join(','))
  ].join('\n');
  
  return csvContent;
}