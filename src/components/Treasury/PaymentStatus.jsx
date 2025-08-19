import React, { useCallback } from 'react';
import { formatCurrency } from '../../utils/formatters';
import { Award } from 'lucide-react';

const PaymentStatus = ({ student, onViewHistory, onUpdatePayment, onDeleteStudent, onViewProfile }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'paid': return 'status-paid';
      case 'pending': return 'status-pending';
      case 'overdue': return 'status-overdue';
      case 'scholarship': return 'status-scholarship';
      default: return 'status-pending';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'paid': return 'Al Día';
      case 'pending': return 'Pendiente';
      case 'overdue': return 'Vencido';
      case 'scholarship': return 'Beca 100%';
      default: return 'Pendiente';
    }
  };

  // Optimizar handlers con useCallback
  const handleViewProfile = useCallback((e) => {
    e.preventDefault();
    if (onViewProfile) {
      requestAnimationFrame(() => onViewProfile(student));
    }
  }, [onViewProfile, student]);

  const handleViewHistory = useCallback((e) => {
    e.preventDefault();
    if (onViewHistory) {
      requestAnimationFrame(() => onViewHistory(student));
    }
  }, [onViewHistory, student]);

  const handleUpdatePayment = useCallback((e) => {
    e.preventDefault();
    if (onUpdatePayment) {
      requestAnimationFrame(() => onUpdatePayment(student));
    }
  }, [onUpdatePayment, student]);

  const handleDeleteStudent = useCallback((e) => {
    e.preventDefault();
    if (onDeleteStudent) {
      requestAnimationFrame(() => onDeleteStudent(student));
    }
  }, [onDeleteStudent, student]);

  return (
    <tr>
      <td>
        <div 
          style={{ cursor: 'pointer' }}
          onClick={handleViewProfile}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <strong>{student.studentName}</strong>
            {student.hasFullScholarship && (
              <Award size={16} style={{ color: '#8b5cf6' }} title="Beca 100%" />
            )}
          </div>
          <small style={{ color: '#666' }}>{student.grade}</small>
          {student.cuotasPagadas !== undefined && (
            <div style={{ fontSize: '0.75rem', color: '#8b5cf6', marginTop: '0.25rem' }}>
              {student.cuotasPagadas}/10 cuotas pagadas
            </div>
          )}
        </div>
      </td>
      <td>
        <strong style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
          {student.rut}
        </strong>
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
          {student.hasFullScholarship && <Award size={14} style={{ marginRight: '0.25rem' }} />}
          {getStatusText(student.status)}
        </span>
      </td>
      <td>
        <div>
          {formatCurrency(student.monthlyFee)}
          {student.scholarshipPercentage > 0 && (
            <div style={{ fontSize: '0.75rem', color: '#8b5cf6' }}>
              -{student.scholarshipPercentage}% beca
            </div>
          )}
        </div>
      </td>
      <td style={{ color: student.balance > 0 ? '#c53030' : '#22543d', fontWeight: 'bold' }}>
        {formatCurrency(student.balance)}
        {student.totalPagado > 0 && (
          <div style={{ fontSize: '0.75rem', color: '#666', fontWeight: 'normal' }}>
            Pagado: {formatCurrency(student.totalPagado)}
          </div>
        )}
      </td>
      <td>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-info"
            onClick={handleViewProfile}
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
          >
            Ver Perfil
          </button>
          <button 
            className="btn btn-secondary"
            onClick={handleViewHistory}
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
          >
            Historial
          </button>
          {student.balance > 0 && onUpdatePayment && (
            <button 
              className="btn btn-primary"
              onClick={handleUpdatePayment}
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
            >
              Pagar
            </button>
          )}
          {onDeleteStudent && (
            <button 
              className="btn"
              onClick={handleDeleteStudent}
              style={{ 
                padding: '0.4rem 0.8rem', 
                fontSize: '0.8rem',
                backgroundColor: '#e53e3e',
                color: '#fff',
                border: 'none'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c53030'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#e53e3e'}
            >
              Eliminar
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default PaymentStatus;