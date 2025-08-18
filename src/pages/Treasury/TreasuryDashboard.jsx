import React, { useState, useMemo } from 'react';
import PaymentStatus from '../../components/Treasury/PaymentStatus';
import PaymentHistory from '../../components/Treasury/PaymentHistory';
import StatsCards from '../../components/Treasury/StatsCards';
import { studentsData, coursesData, getPaymentStats } from '../../data/mockData';
import { exportToCSV } from '../../utils/formatters';

const TreasuryDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  const filteredStudents = useMemo(() => {
    return studentsData.filter(student => {
      const matchesSearch = 
        student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.guardianName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGrade = !selectedGrade || student.grade === selectedGrade;
      const matchesStatus = !selectedStatus || student.status === selectedStatus;
      
      return matchesSearch && matchesGrade && matchesStatus;
    });
  }, [searchTerm, selectedGrade, selectedStatus]);

  const stats = useMemo(() => getPaymentStats(filteredStudents), [filteredStudents]);

  const handleViewHistory = (student) => {
    setSelectedStudent(student);
    setShowHistory(true);
  };

  const handleExportCSV = () => {
    exportToCSV(filteredStudents, `reporte-tesoreria-${new Date().toISOString().split('T')[0]}.csv`);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedGrade('');
    setSelectedStatus('');
  };

  return (
    <div>
      <div className="header">
        <div className="container">
          <h1>Sistema de Tesorería</h1>
          <p>FUDE UMAG - Estado de Pagos de Apoderados</p>
        </div>
      </div>

      <div className="container">
        <StatsCards stats={stats} />

        <div className="card">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <h2>Estado de Pagos por Apoderado</h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                className="btn btn-secondary"
                onClick={clearFilters}
              >
                Limpiar Filtros
              </button>
              <button 
                className="btn btn-primary"
                onClick={handleExportCSV}
              >
                Exportar Excel
              </button>
            </div>
          </div>

          <input
            type="text"
            className="search-bar"
            placeholder="Buscar por nombre de estudiante o apoderado..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="filters">
            <select
              className="filter-select"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="">Todos los cursos</option>
              {coursesData.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>

            <select
              className="filter-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="">Todos los estados</option>
              <option value="paid">Al día</option>
              <option value="pending">Pendientes</option>
              <option value="overdue">Vencidos</option>
            </select>
          </div>

          {filteredStudents.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem', 
              color: '#666' 
            }}>
              No se encontraron resultados para los filtros seleccionados.
            </div>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Estudiante / Curso</th>
                  <th>Apoderado / Contacto</th>
                  <th>Estado</th>
                  <th>Mensualidad</th>
                  <th>Saldo Pendiente</th>
                  <th>Vencimiento</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(student => (
                  <PaymentStatus
                    key={student.id}
                    student={student}
                    onViewHistory={handleViewHistory}
                  />
                ))}
              </tbody>
            </table>
          )}

          <div style={{ 
            marginTop: '1rem', 
            textAlign: 'right',
            color: '#666',
            fontSize: '0.9rem'
          }}>
            Mostrando {filteredStudents.length} de {studentsData.length} estudiantes
          </div>
        </div>
      </div>

      <PaymentHistory
        student={selectedStudent}
        isOpen={showHistory}
        onClose={() => {
          setShowHistory(false);
          setSelectedStudent(null);
        }}
      />
    </div>
  );
};

export default TreasuryDashboard;