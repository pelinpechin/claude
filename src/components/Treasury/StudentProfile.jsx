import React, { memo } from 'react';
import { X, User, Phone, Mail, Calendar, GraduationCap, DollarSign, Award, FileText } from 'lucide-react';

const StudentProfile = ({ student, isOpen, onClose }) => {
  if (!isOpen || !student) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(amount);
  };

  const formatDate = (dateStr) => {
    if (!dateStr || dateStr === '2010-01-01') return 'No registrado';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-CL');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return '#22c55e';
      case 'pending': return '#f59e0b';
      case 'overdue': return '#ef4444';
      case 'scholarship': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'paid': return 'Al día';
      case 'pending': return 'Pendiente';
      case 'overdue': return 'Vencido';
      case 'scholarship': return 'Beca 100%';
      default: return status;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="student-profile-modal">
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <User size={24} />
            <h2>Perfil del Estudiante</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-content">
          {/* Información Principal */}
          <div className="profile-section">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <GraduationCap size={20} />
              Información del Estudiante
            </h3>
            
            <div className="info-grid">
              <div className="info-item">
                <label>Nombre Completo</label>
                <span>{student.studentName}</span>
              </div>
              <div className="info-item">
                <label>RUT</label>
                <span>{student.rut}</span>
              </div>
              <div className="info-item">
                <label>Sexo</label>
                <span>{student.sex || 'No registrado'}</span>
              </div>
              <div className="info-item">
                <label>Fecha de Nacimiento</label>
                <span>{formatDate(student.birthDate)}</span>
              </div>
              <div className="info-item">
                <label>Fecha de Ingreso</label>
                <span>{formatDate(student.admissionDate)}</span>
              </div>
              <div className="info-item">
                <label>Curso</label>
                <span>{student.grade}</span>
              </div>
            </div>
          </div>

          {/* Información del Apoderado */}
          <div className="profile-section">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <User size={20} />
              Información del Apoderado
            </h3>
            
            <div className="info-grid">
              <div className="info-item">
                <label>Nombre del Apoderado</label>
                <span>{student.guardianName}</span>
              </div>
              <div className="info-item">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} />
                  Teléfono
                </label>
                <span>{student.guardianPhone || 'No registrado'}</span>
              </div>
              <div className="info-item">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} />
                  Email
                </label>
                <span>{student.guardianEmail || 'No registrado'}</span>
              </div>
            </div>
          </div>

          {/* Información de Pagos y Becas */}
          <div className="profile-section">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <DollarSign size={20} />
              Información Financiera
            </h3>
            
            <div className="info-grid">
              <div className="info-item">
                <label>Estado de Pago</label>
                <span style={{ 
                  color: getStatusColor(student.status),
                  fontWeight: 'bold'
                }}>
                  {getStatusText(student.status)}
                </span>
              </div>
              <div className="info-item">
                <label>Arancel Anual</label>
                <span>{formatCurrency(student.totalAnnualFee || student.monthlyFee * 10)}</span>
              </div>
              <div className="info-item">
                <label>Mensualidad</label>
                <span>{formatCurrency(student.monthlyFee)}</span>
              </div>
              <div className="info-item">
                <label>Cuotas Pagadas</label>
                <span>{student.cuotasPagadas || 0} de 10</span>
              </div>
              <div className="info-item">
                <label>Total Pagado</label>
                <span>{formatCurrency(student.totalPagado || 0)}</span>
              </div>
              <div className="info-item">
                <label>Saldo Pendiente</label>
                <span style={{ 
                  color: student.balance > 0 ? '#ef4444' : '#22c55e',
                  fontWeight: 'bold'
                }}>
                  {formatCurrency(student.balance)}
                </span>
              </div>
            </div>
          </div>

          {/* Información de Beca */}
          {(student.hasFullScholarship || student.scholarshipType !== 'Sin beca') && (
            <div className="profile-section">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Award size={20} />
                Información de Beca
              </h3>
              
              <div className="info-grid">
                <div className="info-item">
                  <label>Tipo de Beca</label>
                  <span>{student.scholarshipType === 'VUL' ? 'Vulnerable' : student.scholarshipType}</span>
                </div>
                <div className="info-item">
                  <label>Porcentaje de Beca</label>
                  <span style={{ 
                    color: student.hasFullScholarship ? '#8b5cf6' : '#6b7280',
                    fontWeight: student.hasFullScholarship ? 'bold' : 'normal'
                  }}>
                    {student.scholarshipPercentage}%
                  </span>
                </div>
                <div className="info-item">
                  <label>Monto de Beca</label>
                  <span>{formatCurrency(student.scholarshipAmount || 0)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Detalle de Cuotas */}
          {student.cuotas && student.cuotas.length > 0 && (
            <div className="profile-section">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <FileText size={20} />
                Detalle de Cuotas
              </h3>
              
              <div className="cuotas-table">
                <div className="cuotas-header">
                  <span>Mes</span>
                  <span>Estado</span>
                  <span>Monto</span>
                  <span>Boleta</span>
                </div>
                {student.cuotas.map((cuota, index) => (
                  <div key={index} className="cuotas-row">
                    <span>{cuota.mes}</span>
                    <span style={{ 
                      color: cuota.pagado ? '#22c55e' : '#ef4444',
                      fontWeight: 'bold'
                    }}>
                      {cuota.pagado ? '✓ Pagado' : '✗ Pendiente'}
                    </span>
                    <span>
                      {cuota.pagado ? formatCurrency(cuota.montoPagado) : formatCurrency(0)}
                    </span>
                    <span>{cuota.boleta || '-'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .student-profile-modal {
          background: white;
          border-radius: 12px;
          max-width: 900px;
          width: 90vw;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f8fafc;
        }

        .modal-header h2 {
          margin: 0;
          color: #1f2937;
          font-size: 1.5rem;
        }

        .close-btn {
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          border-radius: 6px;
          color: #6b7280;
        }

        .close-btn:hover {
          background: #f3f4f6;
          color: #374151;
        }

        .modal-content {
          padding: 1.5rem;
          overflow-y: auto;
          flex: 1;
        }

        .profile-section {
          margin-bottom: 2rem;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          background: #fafafa;
        }

        .profile-section h3 {
          margin: 0 0 1rem 0;
          color: #374151;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .info-item label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #6b7280;
          display: flex;
          align-items: center;
        }

        .info-item span {
          font-size: 1rem;
          color: #111827;
          font-weight: 500;
        }

        .cuotas-table {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
          background: white;
        }

        .cuotas-header {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 0.75rem;
          background: #f3f4f6;
          font-weight: 600;
          color: #374151;
          font-size: 0.875rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .cuotas-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          padding: 0.75rem;
          border-bottom: 1px solid #f3f4f6;
          font-size: 0.875rem;
        }

        .cuotas-row:last-child {
          border-bottom: none;
        }

        .cuotas-row:hover {
          background: #f9fafb;
        }

        @media (max-width: 768px) {
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .cuotas-header,
          .cuotas-row {
            grid-template-columns: 1fr;
            gap: 0.25rem;
          }
          
          .cuotas-header span,
          .cuotas-row span {
            padding: 0.25rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(StudentProfile);