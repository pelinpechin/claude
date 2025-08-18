import React, { useState, useMemo, useEffect } from 'react';
import PaymentStatus from '../../components/Treasury/PaymentStatus';
import PaymentHistory from '../../components/Treasury/PaymentHistory';
import StatsCards from '../../components/Treasury/StatsCards';
import CourseManager from '../../components/Treasury/CourseManager';
import DataUpdater from '../../components/Treasury/DataUpdater';
import { dataService } from '../../services/dataService';
import { exportToCSV } from '../../utils/formatters';

const TreasuryDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [showUpdater, setShowUpdater] = useState(false);
  const [activeView, setActiveView] = useState('general'); // 'general' | 'courses'
  const [allStudents, setAllStudents] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    // Cargar datos iniciales
    setAllStudents(dataService.getAllStudents());
    setAllCourses(dataService.getAllCourses());

    // Suscribirse a cambios
    const unsubscribe = dataService.subscribe(() => {
      setAllStudents(dataService.getAllStudents());
    });

    return unsubscribe;
  }, []);

  const filteredStudents = useMemo(() => {
    if (!allStudents.length) return [];
    
    return allStudents.filter(student => {
      const matchesSearch = 
        student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.guardianName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rut.includes(searchTerm);
      
      const matchesGrade = !selectedGrade || student.grade === selectedGrade;
      const matchesStatus = !selectedStatus || student.status === selectedStatus;
      
      return matchesSearch && matchesGrade && matchesStatus;
    });
  }, [searchTerm, selectedGrade, selectedStatus, allStudents]);

  const stats = useMemo(() => dataService.getGeneralStats(), [allStudents]);

  const handleViewHistory = (student) => {
    setSelectedStudent(student);
    setShowHistory(true);
  };

  const handleUpdatePayment = (student) => {
    setSelectedStudent(student);
    setShowUpdater(true);
  };

  const handleExportCSV = () => {
    const exportData = dataService.exportData('csv', {
      grade: selectedGrade,
      status: selectedStatus
    });
    dataService.downloadFile(
      exportData.content,
      exportData.filename,
      exportData.mimeType
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedGrade('');
    setSelectedStatus('');
  };

  const handleDataUpdate = () => {
    setAllStudents(dataService.getAllStudents());
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

        {/* Navegación entre vistas */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '1rem'
        }}>
          <button 
            className={`btn ${activeView === 'general' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveView('general')}
          >
            Vista General
          </button>
          <button 
            className={`btn ${activeView === 'courses' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveView('courses')}
          >
            Gestión por Curso
          </button>
        </div>

        {activeView === 'courses' ? (
          <CourseManager onStudentSelect={handleViewHistory} />
        ) : (
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
              {allCourses.map(grade => (
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
                    onUpdatePayment={handleUpdatePayment}
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
            Mostrando {filteredStudents.length} de {allStudents.length} estudiantes
          </div>
        </div>
        )}
      </div>

      <PaymentHistory
        student={selectedStudent}
        isOpen={showHistory}
        onClose={() => {
          setShowHistory(false);
          setSelectedStudent(null);
        }}
      />

      <DataUpdater
        student={selectedStudent}
        onClose={() => {
          setShowUpdater(false);
          setSelectedStudent(null);
        }}
        onUpdate={handleDataUpdate}
      />
    </div>
  );
};

export default TreasuryDashboard;