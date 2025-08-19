import React, { useState, useMemo, useEffect } from 'react';
import PaymentStatus from '../../components/Treasury/PaymentStatus';
import PaymentHistory from '../../components/Treasury/PaymentHistory';
import StatsCards from '../../components/Treasury/StatsCards';
import CourseManager from '../../components/Treasury/CourseManager';
import DataUpdater from '../../components/Treasury/DataUpdater';
import StudentProfile from '../../components/Treasury/StudentProfile';
import ScholarshipView from '../../components/Treasury/ScholarshipView';
import { dataService } from '../../services/dataService';
import { exportToCSV } from '../../utils/formatters';

const TreasuryDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [showUpdater, setShowUpdater] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [activeView, setActiveView] = useState('general'); // 'general' | 'courses' | 'scholarships'
  const [allStudents, setAllStudents] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [isRebuilding, setIsRebuilding] = useState(false);
  const [supabaseStatus, setSupabaseStatus] = useState({ status: 'disconnected', isActive: false });

  useEffect(() => {
    // Cargar datos CSV embebidos al inicio
    const loadInitialData = async () => {
      try {
        await dataService.loadCSVData();
        console.log('Datos CSV cargados exitosamente');
      } catch (error) {
        console.error('Error cargando datos CSV:', error);
      }
      
      // Cargar datos iniciales
      setAllStudents(dataService.getAllStudents());
      setAllCourses(dataService.getAllCourses());
    };

    loadInitialData();

    // Suscribirse a cambios
    const unsubscribe = dataService.subscribe(async () => {
      const students = await dataService.getAllStudents();
      setAllStudents(Array.isArray(students) ? students : []);
      setAllCourses(dataService.getAllCourses());
      setSupabaseStatus(dataService.getSupabaseStatus());
    });

    // Obtener estado inicial de Supabase
    setTimeout(() => {
      setSupabaseStatus(dataService.getSupabaseStatus());
    }, 2000);

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

  const handleViewProfile = (student) => {
    setSelectedStudent(student);
    setShowProfile(true);
  };

  const handleDeleteStudent = (student) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar al estudiante ${student.studentName} (${student.rut})?\n\nEsta acción no se puede deshacer.`)) {
      const result = dataService.deleteStudent(student.id);
      if (result.success) {
        alert(`Estudiante ${result.deletedStudent.studentName} eliminado exitosamente del curso ${result.grade}.`);
        setAllStudents(dataService.getAllStudents());
      } else {
        alert(`Error al eliminar estudiante: ${result.error}`);
      }
    }
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

  const handleRebuildDatabase = async () => {
    if (window.confirm('¿Estás seguro de que quieres reconstruir toda la base de datos desde alumnos.csv?\n\nEsto eliminará todos los estudiantes actuales y los reemplazará con los datos del archivo CSV.\n\n¡Esta acción no se puede deshacer!')) {
      setIsRebuilding(true);
      try {
        const result = await dataService.rebuildDatabaseFromAlumnos();
        if (result.success) {
          alert(`Base de datos reconstruida exitosamente!\n\n✅ ${result.studentsCount} estudiantes cargados\n✅ ${result.coursesCount} cursos creados\n\nCursos: ${result.courses.join(', ')}`);
          // Actualizar el estado local
          setAllStudents(dataService.getAllStudents());
          setAllCourses(dataService.getAllCourses());
        } else {
          alert(`Error reconstruyendo la base de datos: ${result.error}`);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
        console.error('Error rebuilding database:', error);
      } finally {
        setIsRebuilding(false);
      }
    }
  };

  const handleSupabaseRebuild = async () => {
    if (window.confirm('¿Migrar y reconstruir datos en Supabase?\n\nEsto creará una base de datos persistente en la nube con todos los datos de alumnos.csv.\n\n✅ Los cambios se guardarán automáticamente\n✅ Acceso desde cualquier dispositivo\n✅ Backup automático en la nube\n\n¿Continuar?')) {
      setIsRebuilding(true);
      try {
        const result = await dataService.rebuildSupabaseFromAlumnos();
        if (result.success) {
          alert(`🎉 ¡Base de datos Supabase configurada exitosamente!\n\n✅ ${result.studentsCount} estudiantes migrados\n✅ Persistencia automática activada\n✅ Datos seguros en la nube\n\nTodos los cambios se guardarán automáticamente a partir de ahora.`);
          const students = await dataService.getAllStudents();
          setAllStudents(Array.isArray(students) ? students : []);
          setSupabaseStatus(dataService.getSupabaseStatus());
        } else {
          alert(`Error configurando Supabase: ${result.error}\n\nVerifica que hayas configurado las variables de entorno en el archivo .env`);
        }
      } catch (error) {
        alert(`Error: ${error.message}\n\nAsegúrate de haber configurado Supabase correctamente.`);
        console.error('Error configuring Supabase:', error);
      } finally {
        setIsRebuilding(false);
      }
    }
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
          <button 
            className={`btn ${activeView === 'scholarships' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveView('scholarships')}
            style={{
              background: activeView === 'scholarships' ? '#8b5cf6' : '#f3f4f6',
              borderColor: activeView === 'scholarships' ? '#8b5cf6' : '#d1d5db',
              color: activeView === 'scholarships' ? 'white' : '#374151'
            }}
          >
            Becas 100%
          </button>
          <button 
            className="btn"
            onClick={handleRebuildDatabase}
            disabled={isRebuilding}
            style={{
              background: isRebuilding ? '#9ca3af' : '#dc2626',
              borderColor: isRebuilding ? '#9ca3af' : '#dc2626',
              color: 'white',
              marginLeft: 'auto',
              fontWeight: 'bold'
            }}
          >
            {isRebuilding ? '🔄 Reconstruyendo...' : '🔄 Reconstruir desde CSV'}
          </button>
          {supabaseStatus.status === 'connected' && (
            <button 
              className="btn"
              onClick={handleSupabaseRebuild}
              disabled={isRebuilding}
              style={{
                background: isRebuilding ? '#9ca3af' : '#059669',
                borderColor: isRebuilding ? '#9ca3af' : '#059669',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {isRebuilding ? '☁️ Migrando...' : '☁️ Migrar a Supabase'}
            </button>
          )}
          <div style={{ 
            fontSize: '0.85rem', 
            color: supabaseStatus.status === 'connected' ? '#059669' : '#dc2626',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            {supabaseStatus.message}
            {supabaseStatus.isActive && <span style={{ color: '#059669' }}>📡 ACTIVO</span>}
          </div>
        </div>

        {activeView === 'courses' ? (
          <CourseManager onStudentSelect={handleViewHistory} />
        ) : activeView === 'scholarships' ? (
          <ScholarshipView 
            students={allStudents} 
            onStudentClick={handleViewProfile}
          />
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
              <option value="scholarship">Beca 100%</option>
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
                  <th>RUT Estudiante</th>
                  <th>Apoderado / Contacto</th>
                  <th>Estado</th>
                  <th>Mensualidad</th>
                  <th>Saldo Pendiente</th>
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
                    onDeleteStudent={handleDeleteStudent}
                    onViewProfile={handleViewProfile}
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

      <StudentProfile
        student={selectedStudent}
        isOpen={showProfile}
        onClose={() => {
          setShowProfile(false);
          setSelectedStudent(null);
        }}
      />
    </div>
  );
};

export default TreasuryDashboard;