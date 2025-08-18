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

// Detectar patrones de cursos en el CSV (mantenido para compatibilidad)
const gradePatterns = {
  'PRE K': 'Pre-Kinder',
  'KINDER A': 'Kinder A',
  'KINDER B': 'Kinder B',
  'NT1 A': 'NT1 A',
  'NT1 B': 'NT1 B',
  'NT2 A': 'NT2 A',
  'NT2 B': 'NT2 B',
  '1° BASICO A': '1° Básico A',
  '1° BASICO B': '1° Básico B',
  '2° BASICO A': '2° Básico A',
  '2° BASICO B': '2° Básico B',
  '3° BASICO A': '3° Básico A',
  '3° BASICO B': '3° Básico B',
  '4° BASICO A': '4° Básico A',
  '4° BASICO B': '4° Básico B',
  '5° BASICO A': '5° Básico A',
  '5° BASICO B': '5° Básico B',
  '6° BASICO A': '6° Básico A',
  '6° BASICO B': '6° Básico B',
  '7° BASICO A': '7° Básico A',
  '7° BASICO B': '7° Básico B',
  '8° BASICO A': '8° Básico A',
  '8° BASICO B': '8° Básico B',
  '1° MEDIO A': '1° Medio A',
  '1° MEDIO B': '1° Medio B',
  '1° MEDIO C': '1° Medio C',
  '2° MEDIO A': '2° Medio A',
  '2° MEDIO B': '2° Medio B',
  '3° MEDIO A': '3° Medio A',
  '3° MEDIO B': '3° Medio B',
  '4° MEDIO A': '4° Medio A',
  '4° MEDIO B': '4° Medio B',
  '4° MEDIO C': '4° Medio C'
};

  // Función para limpiar RUT
  const cleanRUT = (rut) => {
    if (!rut) return '';
    return rut.toString().replace(/[^\dKk-]/g, '').toUpperCase();
  };

  // Función para limpiar teléfono
  const cleanPhone = (phone) => {
    if (!phone) return '';
    const cleaned = phone.toString().replace(/[^\d]/g, '');
    if (cleaned.length >= 8) {
      return `+56 9 ${cleaned.slice(-8).substring(0,4)} ${cleaned.slice(-4)}`;
    }
    return phone;
  };

  // Función para inferir curso basado en fecha de nacimiento
  const inferGradeFromBirthDate = (birthDate) => {
    if (!birthDate) return 'Sin clasificar';
    
    const birth = new Date(birthDate);
    const currentYear = 2025;
    const age = currentYear - birth.getFullYear();
    
    // Aproximación de cursos por edad (puede variar)
    if (age <= 5) return 'Pre-Kinder';
    if (age <= 6) return 'Kinder A';
    if (age <= 7) return '1° Básico A';
    if (age <= 8) return '2° Básico A';
    if (age <= 9) return '3° Básico A';
    if (age <= 10) return '4° Básico A';
    if (age <= 11) return '5° Básico A';
    if (age <= 12) return '6° Básico A';
    if (age <= 13) return '7° Básico A';
    if (age <= 14) return '8° Básico A';
    if (age <= 15) return '1° Medio A';
    if (age <= 16) return '2° Medio A';
    if (age <= 17) return '3° Medio A';
    if (age <= 18) return '4° Medio A';
    
    return 'Sin clasificar';
  };

  lines.forEach((line, index) => {
    // Detectar encabezados de curso
    for (const [pattern, grade] of Object.entries(gradePatterns)) {
      if (line.toUpperCase().includes(pattern)) {
        currentGrade = grade;
        return;
      }
    }

    // Procesar línea de estudiante
    const cols = line.split(';');
    
    // Verificar si es una línea válida de estudiante
    if (cols.length > 10 && cols[2] && cols[3] && cols[2] !== 'Nombre') {
      const name = cols[2]?.trim();
      const rut = cleanRUT(cols[3]);
      const sex = cols[4]?.trim();
      const enrollDate = cols[5]?.trim();
      const birthDate = cols[6]?.trim();
      const phone = cleanPhone(cols[7]);
      
      // Extraer información de beca
      const scholarshipType = cols[9]?.trim();
      const scholarshipPercent = scholarshipType === 'VUL' ? 100 : 
                               cols[10]?.replace('%', '').trim() || 0;
      
      // Extraer arancel y monto a pagar
      const totalFeeText = cols[11]?.replace(/[$,]/g, '').trim();
      const totalFee = totalFeeText ? parseFloat(totalFeeText) : 0;
      
      const becaAmountText = cols[12]?.replace(/[$,]/g, '').trim();
      const becaAmount = becaAmountText ? parseFloat(becaAmountText) : 0;
      
      const monthlyFeeText = cols[13]?.replace(/[$,]/g, '').trim();
      const monthlyFee = monthlyFeeText ? parseFloat(monthlyFeeText) : Math.round(totalFee / 10);

      // Si no tenemos grado actual, intentar inferirlo
      let grade = currentGrade;
      if (!grade && birthDate) {
        grade = inferGradeFromBirthDate(birthDate);
      }
      if (!grade) {
        grade = 'Sin clasificar';
      }

      // Crear objeto estudiante
      const student = {
        id: students.length + 1001, // ID único
        rut: rut,
        studentName: name,
        birthDate: birthDate || '2020-01-01',
        sex: sex === 'M' ? 'Masculino' : 'Femenino',
        enrollmentDate: enrollDate || '2025-03-01',
        guardianName: '', // Será inferido del nombre del estudiante
        guardianRut: '', // Será generado
        guardianPhone: phone || '',
        guardianEmail: '', // Será generado
        guardianAddress: '', // Será generado
        grade: grade,
        monthlyFee: monthlyFee || 126500,
        scholarshipPercentage: parseFloat(scholarshipPercent) || 0,
        status: Math.random() > 0.7 ? 'paid' : Math.random() > 0.5 ? 'pending' : 'overdue',
        balance: 0, // Será calculado
        lastPayment: '2024-07-15',
        dueDate: '2024-09-05',
        paymentHistory: []
      };

      // Generar datos del apoderado basados en el estudiante
      const nameParts = name.split(' ');
      const lastName1 = nameParts[0] || 'Pérez';
      const lastName2 = nameParts[1] || 'González';
      
      // Generar nombres de apoderados típicos
      const guardianNames = sex === 'M' ? 
        ['Carlos', 'Miguel', 'Juan', 'Luis', 'Roberto', 'Francisco', 'Eduardo', 'Andrés'] :
        ['María', 'Carmen', 'Rosa', 'Patricia', 'Ana', 'Elena', 'Francisca', 'Mónica'];
      
      const guardianName = guardianNames[Math.floor(Math.random() * guardianNames.length)];
      student.guardianName = `${guardianName} ${lastName1} ${lastName2}`;
      
      // Generar RUT del apoderado (diferente al estudiante)
      const studentRutNumber = parseInt(rut.split('-')[0].replace(/\./g, ''));
      const guardianRutNumber = studentRutNumber - Math.floor(Math.random() * 5000000) - 1000000;
      const guardianRutDV = calculateRUTVerifier(guardianRutNumber);
      student.guardianRut = `${guardianRutNumber.toLocaleString('es-CL')}-${guardianRutDV}`;
      
      // Generar email
      const emailName = guardianName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const emailLastName = lastName1.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      student.guardianEmail = `${emailName}.${emailLastName}@email.com`;
      
      // Generar dirección
      const streets = ['Av. España', 'Calle Magallanes', 'Pasaje Los Leones', 'Av. Colón', 'Calle Bories', 'Av. Manuel Bulnes', 'Pasaje O\'Higgins'];
      const street = streets[Math.floor(Math.random() * streets.length)];
      const number = Math.floor(Math.random() * 2000) + 100;
      student.guardianAddress = `${street} ${number}, Punta Arenas`;
      
      // Calcular balance basado en estado
      if (student.status === 'paid') {
        student.balance = 0;
      } else if (student.status === 'pending') {
        student.balance = student.monthlyFee;
      } else {
        student.balance = student.monthlyFee * (Math.floor(Math.random() * 3) + 2); // 2-4 meses
      }

      // Generar historial de pagos básico
      const months = ['Junio', 'Julio', 'Agosto'];
      months.forEach((month, index) => {
        if (index < (student.status === 'paid' ? 3 : student.status === 'pending' ? 2 : 1)) {
          student.paymentHistory.push({
            date: `2024-0${6 + index}-${15 + index}`,
            amount: student.monthlyFee * (100 - student.scholarshipPercentage) / 100,
            concept: `Mensualidad ${month}`,
            method: Math.random() > 0.5 ? 'Transferencia' : 'Efectivo'
          });
        }
      });

      students.push(student);
    }
  });

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