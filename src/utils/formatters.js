export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(amount);
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('es-CL');
};

export const exportToCSV = (data, filename = 'reporte-pagos.csv') => {
  const headers = [
    'Estudiante',
    'Apoderado',
    'Curso',
    'Estado',
    'Mensualidad',
    'Saldo Pendiente',
    'Último Pago'
  ];

  const csvContent = [
    headers.join(','),
    ...data.map(student => [
      `"${student.studentName}"`,
      `"${student.guardianName}"`,
      `"${student.grade}"`,
      student.status === 'paid' ? 'Al Día' : 
      student.status === 'pending' ? 'Pendiente' : 'Vencido',
      student.monthlyFee,
      student.balance,
      student.lastPayment
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};