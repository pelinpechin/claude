import React from 'react';
import { formatCurrency } from '../../utils/formatters';

const PaymentHistory = ({ student, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        minWidth: '500px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '1.5rem'
        }}>
          <h2>Historial de Pagos</h2>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#999'
            }}
          >
            ×
          </button>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#667eea' }}>{student.studentName}</h3>
          <p style={{ color: '#666', marginTop: '0.5rem' }}>
            <strong>Apoderado:</strong> {student.guardianName}<br />
            <strong>Curso:</strong> {student.grade}<br />
            <strong>Mensualidad:</strong> {formatCurrency(student.monthlyFee)}<br />
            <strong>Saldo Pendiente:</strong> 
            <span style={{ 
              color: student.balance > 0 ? '#c53030' : '#22543d',
              fontWeight: 'bold',
              marginLeft: '0.5rem'
            }}>
              {formatCurrency(student.balance)}
            </span>
          </p>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Fecha de Pago</th>
              <th>Concepto</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {student.paymentHistory.map((payment, index) => (
              <tr key={index}>
                <td>{new Date(payment.date).toLocaleDateString('es-CL')}</td>
                <td>{payment.concept}</td>
                <td>{formatCurrency(payment.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ 
          marginTop: '2rem', 
          textAlign: 'right',
          paddingTop: '1rem',
          borderTop: '1px solid #e2e8f0'
        }}>
          <button 
            className="btn btn-primary"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;