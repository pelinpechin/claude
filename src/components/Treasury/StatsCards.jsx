import React from 'react';
import { formatCurrency } from '../../utils/formatters';

const StatsCards = ({ stats }) => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total Estudiantes</h3>
        <p>{stats.totalStudents}</p>
      </div>
      
      <div className="stat-card">
        <h3>Pagos al Día</h3>
        <p style={{ color: '#22543d' }}>{stats.paidStudents}</p>
      </div>
      
      <div className="stat-card">
        <h3>Pagos Pendientes</h3>
        <p style={{ color: '#c53030' }}>{stats.pendingStudents}</p>
      </div>
      
      <div className="stat-card">
        <h3>Pagos Vencidos</h3>
        <p style={{ color: '#97266d' }}>{stats.overdueStudents}</p>
      </div>
      
      <div className="stat-card">
        <h3>Ingresos Recaudados</h3>
        <p style={{ color: '#22543d' }}>{formatCurrency(stats.totalRevenue)}</p>
      </div>
      
      <div className="stat-card">
        <h3>Monto Pendiente</h3>
        <p style={{ color: '#c53030' }}>{formatCurrency(stats.totalPending)}</p>
      </div>
    </div>
  );
};

export default StatsCards;