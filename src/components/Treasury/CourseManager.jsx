import React, { useState, useEffect } from 'react';
import { dataService } from '../../services/dataService';
import { formatCurrency } from '../../utils/formatters';

const CourseManager = ({ onStudentSelect, onDeleteStudent }) => {
  const [courses] = useState(dataService.getAllCourses());
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseStudents, setCourseStudents] = useState([]);
  const [courseStats, setCourseStats] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Suscribirse a cambios en los datos
    const unsubscribe = dataService.subscribe((change) => {
      if (selectedCourse) {
        loadCourseData(selectedCourse);
      }
    });

    return unsubscribe;
  }, [selectedCourse]);

  const loadCourseData = async (course) => {
    if (!course) return;
    
    setLoading(true);
    try {
      const students = dataService.getStudentsByGrade(course);
      const stats = dataService.getGradeStats(course);
      
      setCourseStudents(students);
      setCourseStats(stats);
    } catch (error) {
      console.error('Error loading course data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCourseChange = (course) => {
    setSelectedCourse(course);
    loadCourseData(course);
  };

  const handleExportCourse = () => {
    if (!selectedCourse) return;
    
    const exportData = dataService.exportGradeData(selectedCourse);
    dataService.downloadFile(
      exportData.csvExport.content,
      `${selectedCourse.replace(/[°\s]/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`,
      'text/csv;charset=utf-8;'
    );
  };

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

  const organizedCourses = courses.reduce((acc, course) => {
    if (course.includes('NT1')) {
      acc.Parvulos = acc.Parvulos || [];
      acc.Parvulos.push(course);
    } else if (course.includes('NT2')) {
      acc.Parvulos = acc.Parvulos || [];
      acc.Parvulos.push(course);
    } else if (course.includes('BASICO') || course.includes('BÁSICO') || course.includes('Básico')) {
      acc.Basica = acc.Basica || [];
      acc.Basica.push(course);
    } else if (course.includes('MEDIO') || course.includes('Medio')) {
      acc.Media = acc.Media || [];
      acc.Media.push(course);
    } else {
      // Otros cursos que no encajen en las categorías principales
      acc.Otros = acc.Otros || [];
      acc.Otros.push(course);
    }
    return acc;
  }, {});

  return (
    <div className="card">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <h2>Gestión por Curso</h2>
        {selectedCourse && (
          <button 
            className="btn btn-primary"
            onClick={handleExportCourse}
          >
            Exportar Curso
          </button>
        )}
      </div>

      <div className="filters" style={{ marginBottom: '2rem' }}>
        <select
          className="filter-select"
          style={{ width: '300px' }}
          value={selectedCourse}
          onChange={(e) => handleCourseChange(e.target.value)}
        >
          <option value="">Seleccionar curso</option>
          {Object.entries(organizedCourses).map(([level, levelCourses]) => (
            <optgroup key={level} label={
              level === 'Basica' ? 'Educación Básica' : 
              level === 'Media' ? 'Educación Media' : 
              level === 'Parvulos' ? 'Educación Parvularia (NT1, NT2)' :
              'Otros Cursos'
            }>
              {levelCourses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {courseStats && (
        <div className="stats-grid" style={{ marginBottom: '2rem' }}>
          <div className="stat-card">
            <h3>Estudiantes Matriculados</h3>
            <p>{courseStats.totalStudents} / {courseStats.capacity}</p>
            <small style={{ color: '#666' }}>
              Ocupación: {courseStats.occupancyRate}%
            </small>
          </div>
          
          <div className="stat-card">
            <h3>Mensualidad</h3>
            <p>{formatCurrency(courseStats.monthlyFee)}</p>
          </div>
          
          <div className="stat-card">
            <h3>Al Día</h3>
            <p style={{ color: '#22543d' }}>{courseStats.paidStudents}</p>
          </div>
          
          <div className="stat-card">
            <h3>Pendientes</h3>
            <p style={{ color: '#c53030' }}>{courseStats.pendingStudents}</p>
          </div>
          
          <div className="stat-card">
            <h3>Vencidos</h3>
            <p style={{ color: '#97266d' }}>{courseStats.overdueStudents}</p>
          </div>
          
          <div className="stat-card">
            <h3>Total Recaudado</h3>
            <p style={{ color: '#22543d' }}>{formatCurrency(courseStats.totalRevenue)}</p>
          </div>
        </div>
      )}

      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Cargando datos del curso...</p>
        </div>
      )}

      {selectedCourse && courseStudents.length === 0 && !loading && (
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem', 
          color: '#666',
          backgroundColor: '#f7fafc',
          borderRadius: '8px'
        }}>
          <h3>No hay estudiantes matriculados en {selectedCourse}</h3>
          <p>Este curso está disponible pero actualmente no tiene estudiantes asignados.</p>
        </div>
      )}

      {courseStudents.length > 0 && (
        <div>
          <h3 style={{ marginBottom: '1rem' }}>
            Estudiantes en {selectedCourse} ({courseStudents.length})
          </h3>
          
          <table className="table">
            <thead>
              <tr>
                <th>RUT</th>
                <th>Estudiante</th>
                <th>Apoderado</th>
                <th>Estado</th>
                <th>Mensualidad</th>
                <th>Saldo</th>
                <th>Último Pago</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {courseStudents.map(student => (
                <tr key={student.id}>
                  <td>
                    <small style={{ fontFamily: 'monospace' }}>
                      {student.rut}
                    </small>
                  </td>
                  <td>
                    <div>
                      <strong>{student.studentName}</strong>
                      {student.scholarshipPercentage > 0 && (
                        <>
                          <br />
                          <small style={{ 
                            color: '#667eea',
                            backgroundColor: '#e6f3ff',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            fontSize: '0.75rem'
                          }}>
                            Beca {student.scholarshipPercentage}%
                          </small>
                        </>
                      )}
                    </div>
                  </td>
                  <td>
                    <div>
                      {student.guardianName}
                      <br />
                      <small style={{ color: '#666' }}>
                        {student.guardianPhone}
                      </small>
                    </div>
                  </td>
                  <td>
                    <span className={`status ${getStatusClass(student.status)}`}>
                      {getStatusText(student.status)}
                    </span>
                  </td>
                  <td>{formatCurrency(student.monthlyFee)}</td>
                  <td style={{ 
                    color: student.balance > 0 ? '#c53030' : '#22543d', 
                    fontWeight: 'bold' 
                  }}>
                    {formatCurrency(student.balance)}
                  </td>
                  <td>
                    {student.lastPayment ? 
                      new Date(student.lastPayment).toLocaleDateString('es-CL') : 
                      'Sin pagos'
                    }
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <button 
                        className="btn btn-secondary"
                        onClick={() => onStudentSelect && onStudentSelect({...student, grade: selectedCourse})}
                        style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                      >
                        Ver Detalle
                      </button>
                      {onDeleteStudent && (
                        <button 
                          className="btn"
                          onClick={() => onDeleteStudent(student)}
                          style={{ 
                            padding: '0.5rem 1rem', 
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CourseManager;