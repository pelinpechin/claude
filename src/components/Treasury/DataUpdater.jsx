import React, { useState } from 'react';
import { dataService } from '../../services/dataService';
import { formatCurrency } from '../../utils/formatters';

const DataUpdater = ({ student, onClose, onUpdate }) => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    concept: '',
    date: new Date().toISOString().split('T')[0],
    method: 'Transferencia'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const paymentMethods = [
    'Transferencia',
    'Efectivo',
    'Cheque',
    'Tarjeta de Débito',
    'Tarjeta de Crédito'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!paymentData.amount || !paymentData.concept) return;

    setLoading(true);
    try {
      const success = dataService.recordPayment(student.id, {
        ...paymentData,
        amount: parseFloat(paymentData.amount)
      });

      if (success) {
        setSuccess(true);
        setTimeout(() => {
          onUpdate && onUpdate();
          onClose();
        }, 1500);
      }
    } catch (error) {
      console.error('Error recording payment:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickPayment = (amount, concept) => {
    setPaymentData({
      ...paymentData,
      amount: amount.toString(),
      concept
    });
  };

  if (!student) return null;

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
          <h2>Registrar Pago</h2>
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

        {success ? (
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            color: '#22543d'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem'
            }}>✅</div>
            <h3>¡Pago registrado exitosamente!</h3>
            <p>Los datos se han actualizado correctamente.</p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#667eea' }}>{student.studentName}</h3>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>
                <strong>Curso:</strong> {student.grade}<br />
                <strong>Apoderado:</strong> {student.guardianName}<br />
                <strong>Saldo Actual:</strong> 
                <span style={{ 
                  color: student.balance > 0 ? '#c53030' : '#22543d',
                  fontWeight: 'bold',
                  marginLeft: '0.5rem'
                }}>
                  {formatCurrency(student.balance)}
                </span>
              </p>
            </div>

            {student.balance > 0 && (
              <div style={{ 
                marginBottom: '1.5rem',
                padding: '1rem',
                backgroundColor: '#f7fafc',
                borderRadius: '6px'
              }}>
                <h4 style={{ marginBottom: '1rem', color: '#4a5568' }}>Pagos Rápidos</h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.9rem' }}
                    onClick={() => handleQuickPayment(student.monthlyFee, `Mensualidad ${new Date().toLocaleDateString('es-CL', { month: 'long', year: 'numeric' })}`)}
                  >
                    Mensualidad {formatCurrency(student.monthlyFee)}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.9rem' }}
                    onClick={() => handleQuickPayment(student.balance, 'Pago completo de deuda')}
                  >
                    Saldar Deuda {formatCurrency(student.balance)}
                  </button>
                  {student.balance > student.monthlyFee && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{ fontSize: '0.9rem' }}
                      onClick={() => handleQuickPayment(student.monthlyFee * 2, 'Pago de 2 mensualidades')}
                    >
                      2 Mensualidades {formatCurrency(student.monthlyFee * 2)}
                    </button>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  fontWeight: '600' 
                }}>
                  Monto del Pago *
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  required
                  value={paymentData.amount}
                  onChange={(e) => setPaymentData({
                    ...paymentData,
                    amount: e.target.value
                  })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  placeholder="Ingrese el monto en pesos"
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem',
                  fontWeight: '600' 
                }}>
                  Concepto del Pago *
                </label>
                <input
                  type="text"
                  required
                  value={paymentData.concept}
                  onChange={(e) => setPaymentData({
                    ...paymentData,
                    concept: e.target.value
                  })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                  placeholder="ej: Mensualidad Agosto 2024"
                />
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    fontWeight: '600' 
                  }}>
                    Fecha de Pago
                  </label>
                  <input
                    type="date"
                    value={paymentData.date}
                    onChange={(e) => setPaymentData({
                      ...paymentData,
                      date: e.target.value
                    })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    fontWeight: '600' 
                  }}>
                    Método de Pago
                  </label>
                  <select
                    value={paymentData.method}
                    onChange={(e) => setPaymentData({
                      ...paymentData,
                      method: e.target.value
                    })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  >
                    {paymentMethods.map(method => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ 
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-end',
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: '1px solid #e2e8f0'
              }}>
                <button 
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                  disabled={loading}
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading || !paymentData.amount || !paymentData.concept}
                >
                  {loading ? 'Registrando...' : 'Registrar Pago'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DataUpdater;