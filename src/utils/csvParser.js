// Función para normalizar caracteres especiales y evitar problemas de encoding
function normalizeText(text) {
  if (!text || typeof text !== 'string') return text;
  
  return text
    // Arreglar patrones específicos de corrupción de encoding del CSV
    .replace(/GONZ�LEZ/g, 'GONZALEZ')
    .replace(/HERN�N/g, 'HERNAN') 
    .replace(/�LEZ/g, 'ALEZ')  // Para casos como GONZ�LEZ
    .replace(/�N/g, 'AN')      // Para casos como HERN�N
    .replace(/C�RDENAS/g, 'CARDENAS')
    .replace(/D�AZ/g, 'DIAZ')
    .replace(/ANAH�/g, 'ANAHI')
    .replace(/HUENCHUM�N/g, 'HUENCHUMAN')
    .replace(/ANDR�S/g, 'ANDRES')
    .replace(/G�MEZ/g, 'GOMEZ')
    .replace(/TUBI�EZ/g, 'TUBIEZ')
    .replace(/JES�S/g, 'JESUS')
    .replace(/NICOL�S/g, 'NICOLAS')
    .replace(/OYARZ�N/g, 'OYARZUN')
    .replace(/VEL�SQUEZ/g, 'VELASQUEZ')
    .replace(/BARR�A/g, 'BARRIA')
    .replace(/MU�OZ/g, 'MUNOZ')
    .replace(/AGUST�N/g, 'AGUSTIN')
    .replace(/V�SQUEZ/g, 'VASQUEZ')
    .replace(/BEL�N/g, 'BELEN')
    .replace(/SOF�A/g, 'SOFIA')
    .replace(/�LVAREZ/g, 'ALVAREZ')
    .replace(/LE�N/g, 'LEON')
    .replace(/LEUQU�N/g, 'LEUQUEN')
    .replace(/G�LVEZ/g, 'GALVEZ')
    // Eliminar cualquier � restante
    .replace(/[�]/g, '')
    // Reemplazar caracteres con acentos por versiones básicas
    .replace(/[áàäâÁÀÄÂ]/g, 'a')
    .replace(/[éèëêÉÈËÊ]/g, 'e')
    .replace(/[íìïîÍÌÏÎ]/g, 'i')
    .replace(/[óòöôÓÒÖÔ]/g, 'o')
    .replace(/[úùüûÚÙÜÛ]/g, 'u')
    .replace(/[ñÑ]/g, 'n')
    .replace(/[çÇ]/g, 'c')
    // Solo mantener letras, números, espacios, guiones y apostrofes
    .replace(/[^\w\s'-]/g, '')
    .trim();
}

// Función para capitalizar nombres correctamente sin acentos
function capitalizeName(name) {
  if (!name || typeof name !== 'string') return name;
  
  // Primero normalizar para evitar problemas de encoding
  const normalized = normalizeText(name);
  
  return normalized
    .toLowerCase()
    .split(' ')
    .map(word => {
      if (word.length <= 1) return word.toUpperCase();
      
      // Preposiciones y artículos que van en minúscula (excepto al inicio)
      const lowercase = ['de', 'del', 'la', 'las', 'los', 'el', 'y', 'e', 'o', 'u'];
      
      // Si es una preposición/artículo, mantener minúscula
      if (lowercase.includes(word)) return word;
      
      // Capitalizar primera letra de cada palabra
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .trim();
}

// Función para procesar archivo alumnos.csv con estructura simplificada
export function parseAlumnosCSV(csvContent) {
  const lines = csvContent.split('\n');
  const students = [];
  const seenRuts = new Set(); // Para trackear RUTs ya procesados
  
  // Buscar línea de encabezados
  let headerIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('nombre alumno;rut;curso;ARANCEL;MONTO DE BECA;CUOTA')) {
      headerIndex = i;
      break;
    }
  }
  
  if (headerIndex === -1) return [];
  
  // Procesar datos desde después del encabezado
  for (let i = headerIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line || line.trim() === '') continue;
    
    const columns = line.split(';');
    if (columns.length < 6) continue;
    
    // Extraer datos básicos y capitalizar nombres
    const nombre = capitalizeName(columns[0]?.trim());
    const rut = columns[1]?.trim();
    let curso = columns[2]?.trim();
    const arancelStr = columns[3]?.trim();
    const becaStr = columns[4]?.trim();
    const cuotaPagadaStr = columns[5]?.trim();
    
    // Corregir símbolos y caracteres especiales en el curso
    if (curso) {
      curso = curso
        // Primero corregir los símbolos de grado (? por °)
        .replace(/1\?/g, '1°')
        .replace(/2\?/g, '2°') 
        .replace(/3\?/g, '3°')
        .replace(/4\?/g, '4°')
        .replace(/5\?/g, '5°')
        .replace(/6\?/g, '6°')
        .replace(/7\?/g, '7°')
        .replace(/8\?/g, '8°')
        // Normalizar BASICO (sin acentos para evitar problemas de encoding)
        .replace(/BASICO/gi, 'BASICO')
        .replace(/B[�Á]SICO/gi, 'BASICO')
        .replace(/BÁSICO/gi, 'BASICO')
        // Normalizar otras palabras (sin acentos)
        .replace(/EDUCACION/gi, 'EDUCACION')
        .replace(/EDUCACIÓN/gi, 'EDUCACION')
        .replace(/PARVULARIA/gi, 'PARVULARIA') // ya está correcto
        // También manejar otros caracteres problemáticos
        .replace(/(\d)[�]/g, '$1°')
        .replace(/(\d) \?/g, '$1°')
        // Limpiar espacios extra y caracteres residuales
        .replace(/[�]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }
    
    // Skip if essential data is missing
    if (!nombre || !rut || !curso || nombre.length < 3) {
      continue;
    }
    
    // Normalizar RUT y validar
    const normalizedRut = rut.trim().toLowerCase();
    
    // Skip if RUT is invalid or already seen (eliminar duplicados)
    if (normalizedRut === '0' || normalizedRut === '' || seenRuts.has(normalizedRut)) {
      if (seenRuts.has(normalizedRut)) {
        console.log(`Duplicado eliminado: ${nombre} con RUT ${rut}`);
      }
      continue;
    }
    
    // Registrar este RUT como procesado
    seenRuts.add(normalizedRut);
    
    // Procesar valores monetarios
    const arancel = parseFloat(arancelStr.replace(/[$.,]/g, '') || '0');
    const montoBeca = parseFloat(becaStr.replace(/[$.,]/g, '') || '0');
    const primeraCuotaPagada = parseFloat(cuotaPagadaStr.replace(/[$.,]/g, '') || '0');
    
    // Calcular datos derivados
    const totalAPagar = arancel - montoBeca;
    const tieneBeca100 = montoBeca >= arancel && montoBeca > 0;
    const cuotaMensual = Math.round(totalAPagar / 10);
    
    // Determinar estado de pago
    let status = 'pending';
    let saldoPendiente = totalAPagar;
    
    if (tieneBeca100) {
      status = 'scholarship';
      saldoPendiente = 0;
    } else if (primeraCuotaPagada > 0) {
      status = 'paid';
      saldoPendiente = Math.max(0, totalAPagar - primeraCuotaPagada);
    }
    
    // Generar datos del apoderado basados en el nombre del estudiante
    const nameParts = nombre.split(' ');
    const apellido1 = capitalizeName(nameParts[0] || 'Pérez');
    const apellido2 = capitalizeName(nameParts[1] || 'González');
    
    const guardianNames = ['Carlos', 'María', 'Luis', 'Carmen', 'Miguel', 'Rosa', 'Juan', 'Ana', 'Patricia', 'Francisco', 'Claudia', 'Roberto'];
    const guardianName = guardianNames[Math.floor(Math.random() * guardianNames.length)];
    const apoderadoCompleto = `${guardianName} ${apellido1} ${apellido2}`;
    
    const student = {
      id: students.length + 1,
      studentName: nombre,
      rut: normalizedRut === '0' ? 'Sin RUT' : rut,
      guardianName: apoderadoCompleto,
      guardianPhone: '+56 9 0000 0000',
      guardianEmail: `${guardianName.toLowerCase().replace(/[áéíóúñ]/g, (match) => {
        const replacements = {'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n'};
        return replacements[match] || match;
      })}${apellido1.toLowerCase().replace(/[áéíóúñ]/g, (match) => {
        const replacements = {'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n'};
        return replacements[match] || match;
      })}@email.com`,
      grade: curso,
      monthlyFee: cuotaMensual,
      status: status,
      lastPayment: primeraCuotaPagada > 0 ? 'MARZO' : 'Sin pagos',
      dueDate: new Date().toISOString().split('T')[0],
      balance: saldoPendiente,
      // Datos adicionales
      birthDate: '2010-01-01',
      admissionDate: '2025-03-05',
      sex: 'No especificado',
      totalAnnualFee: arancel,
      scholarshipAmount: montoBeca,
      scholarshipType: montoBeca > 0 ? 'BECA' : 'Sin beca',
      scholarshipPercentage: arancel > 0 ? Math.round((montoBeca / arancel) * 100) : 0,
      hasFullScholarship: tieneBeca100,
      cuotasPagadas: primeraCuotaPagada > 0 ? 1 : 0,
      totalPagado: primeraCuotaPagada,
      // Historial de pagos simplificado
      paymentHistory: primeraCuotaPagada > 0 ? [{
        date: '2025-03-15',
        amount: primeraCuotaPagada,
        concept: 'Primera cuota',
        method: 'Transferencia'
      }] : []
    };
    
    students.push(student);
  }
  
  console.log(`Parser completado: ${students.length} estudiantes únicos procesados`);
  console.log(`RUTs únicos registrados: ${seenRuts.size}`);
  
  return students;
}

// Utilidad para procesar el archivo CSV con datos reales de becas y pagos
export function parseCSVStudentData(csvContent) {
  const lines = csvContent.split('\n');
  const students = [];
  
  // Buscar línea de encabezados
  let headerIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('N°;N°Mat;Nombre;RUN;Sexo;F. Ingreso;Fecha Nac;Fono;CURSO;CORREO;T. BECA') || 
        lines[i].includes('Nº;NºMat;Nombre;RUN;Sexo;F. Ingreso;Fecha Nac;Fono;CURSO;CORREO;T. BECA')) {
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
    
    // Skip if essential data is missing or invalid
    if (!nombre || !run || nombre === '0' || run === '0' || 
        nombre.includes('TIPOS DE BECAS') || run.includes('ARANCEL') || 
        nombre.length < 3 || nombre.includes('TODO LO QUE LLEVA') ||
        run.includes('BOLETA') || nombre.includes('PRIMERA CUOTA')) {
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
    
    // Las cuotas están en las columnas desde el índice 16 en adelante (ajustado para nueva estructura)
    // Cada cuota tiene BOLETA, ARANCEL $, BECA $
    for (let j = 0; j < 10; j++) {
      const baseIndex = 16 + (j * 3);
      const boleta = columns[baseIndex]?.trim() || '';
      const montoArancel = parseFloat(columns[baseIndex + 1]?.replace(/[$.,\s]/g, '') || '0');
      const montoBeca = parseFloat(columns[baseIndex + 2]?.replace(/[$.,\s]/g, '') || '0');
      
      const montoPagado = montoArancel > 0 ? montoArancel : 0;
      const tieneBoleta = boleta && boleta !== '0' && boleta !== '';
      
      cuotas.push({
        mes: meses[j],
        boleta: tieneBoleta ? boleta : '',
        montoArancel,
        montoBeca,
        montoPagado,
        pagado: montoPagado > 0 && tieneBoleta
      });
      
      if (montoPagado > 0 && tieneBoleta) {
        totalPagado += montoPagado;
      }
    }
    
    // Calcular estado de pago
    const cuotasPagadas = cuotas.filter(c => c.pagado).length;
    
    // Determinar si tiene beca 100%
    const tieneBeca100 = porcentajeBeca === '100%' && (tipoBeca === 'VUL' || becaEnPesos >= arancelTotal);
    
    // Para becas 100%, el saldo es 0
    let saldoPendiente = 0;
    let status = 'paid';
    
    if (tieneBeca100) {
      status = 'scholarship';
      saldoPendiente = 0;
    } else {
      // Calcular saldo basado en cuotas mensuales
      const cuotaMensual = Math.round(totalAPagar / 10);
      const deberiaHaberPagado = cuotaMensual * cuotasPagadas;
      saldoPendiente = Math.max(0, totalAPagar - totalPagado);
      
      // Determinar estado basado en cuotas pagadas
      const mesActual = 8; // Agosto (mes 8 del año)
      const cuotasEsperadas = Math.min(mesActual - 2, 10); // Desde marzo (mes 3)
      
      if (saldoPendiente === 0) {
        status = 'paid';
      } else if (cuotasPagadas >= cuotasEsperadas) {
        status = 'pending';
      } else {
        status = 'overdue';
      }
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
        date: `2025-${(cuotas.indexOf(c) + 3).toString().padStart(2, '0')}-15`,
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