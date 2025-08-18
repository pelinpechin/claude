import React from 'react';
import { formatCurrency } from '../../utils/formatters';

const PaymentStatus = ({ student, onViewHistory, onUpdatePayment }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'paid': return 'status-paid';
      case 'pending': return 'status-pending';
      case 'overdue': return 'status-overdue';
      default: return 'status-pending';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'paid': return 'Al Día';
      case 'pending': return 'Pendiente';
      case 'overdue': return 'Vencido';
      default: return 'Pendiente';
    }
  };

  return (
    <tr>
      <td>
        <div>
          <strong>{student.studentName}</strong>
          <br />
          <small style={{ color: '#666' }}>{student.grade}</small>
        </div>
      </td>
      <td>
        <div>
          {student.guardianName}
          <br />
          <small style={{ color: '#666' }}>{student.guardianPhone}</small>
        </div>
      </td>
      <td>
        <span className={`status ${getStatusClass(student.status)}`}>
          {getStatusText(student.status)}
        </span>
      </td>
      <td>{formatCurrency(student.monthlyFee)}</td>
      <td style={{ color: student.balance > 0 ? '#c53030' : '#22543d', fontWeight: 'bold' }}>
        {formatCurrency(student.balance)}
      </td>
      <td>{new Date(student.dueDate).toLocaleDateString('es-CL')}</td>
      <td>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => onViewHistory(student)}
            style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
          >
            Ver Historial
          </button>
          {student.balance > 0 && onUpdatePayment && (
            <button 
              className="btn btn-primary"
              onClick={() => onUpdatePayment(student)}
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              Registrar Pago
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default PaymentStatus;