import React, { useState, useMemo } from 'react';
import { Award, Search, GraduationCap, Users } from 'lucide-react';

const ScholarshipView = ({ students, onStudentClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');

  // Filtrar estudiantes con beca 100%
  const scholarshipStudents = useMemo(() => {
    return students.filter(student => student.hasFullScholarship || student.status === 'scholarship');
  }, [students]);

  // Filtrar estudiantes basado en búsqueda y curso
  const filteredScholarships = useMemo(() => {
    return scholarshipStudents.filter(student => {
      const matchesSearch = 
        student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.guardianName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rut.includes(searchTerm);
      
      const matchesGrade = !selectedGrade || student.grade === selectedGrade;
      
      return matchesSearch && matchesGrade;
    });
  }, [scholarshipStudents, searchTerm, selectedGrade]);

  // Obtener cursos únicos de estudiantes con beca
  const scholarshipGrades = useMemo(() => {
    const grades = [...new Set(scholarshipStudents.map(s => s.grade))];
    return grades.sort();
  }, [scholarshipStudents]);

  // Estadísticas de becas
  const scholarshipStats = useMemo(() => {
    const total = scholarshipStudents.length;
    const byGrade = scholarshipGrades.reduce((acc, grade) => {
      acc[grade] = scholarshipStudents.filter(s => s.grade === grade).length;
      return acc;
    }, {});
    
    const totalSaved = scholarshipStudents.reduce((sum, student) => {
      return sum + (student.scholarshipAmount || student.totalAnnualFee || student.monthlyFee * 10);
    }, 0);

    return { total, byGrade, totalSaved };
  }, [scholarshipStudents, scholarshipGrades]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(amount);
  };

  return (
    <div className="scholarship-view">
      {/* Header */}
      <div className="scholarship-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Award size={32} style={{ color: '#8b5cf6' }} />
          <div>
            <h2>Estudiantes con Beca 100%</h2>
            <p>Beneficiarios del programa de becas institucionales</p>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="scholarship-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>{scholarshipStats.total}</h3>
            <p>Estudiantes con Beca</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <GraduationCap size={24} />
          </div>
          <div className="stat-content">
            <h3>{scholarshipGrades.length}</h3>
            <p>Cursos Beneficiados</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Award size={24} />
          </div>
          <div className="stat-content">
            <h3>{formatCurrency(scholarshipStats.totalSaved)}</h3>
            <p>Total en Becas</p>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="scholarship-filters">
        <div className="search-container">
          <Search size={20} />
          <input
            type="text"
            placeholder="Buscar estudiante con beca..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <select
          className="filter-select"
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
        >
          <option value="">Todos los cursos</option>
          {scholarshipGrades.map(grade => (
            <option key={grade} value={grade}>
              {grade} ({scholarshipStats.byGrade[grade]})
            </option>
          ))}
        </select>
      </div>

      {/* Lista de estudiantes con beca */}
      <div className="scholarship-list">
        {filteredScholarships.length === 0 ? (
          <div className="no-results">
            <Award size={48} style={{ color: '#d1d5db' }} />
            <p>No se encontraron estudiantes con beca que coincidan con los filtros.</p>
          </div>
        ) : (
          <div className="scholarship-grid">
            {filteredScholarships.map(student => (
              <div 
                key={student.id} 
                className="scholarship-card"
                onClick={() => onStudentClick(student)}
              >
                <div className="card-header">
                  <div className="student-avatar">
                    {student.studentName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="beca-badge">
                    <Award size={16} />
                    100%
                  </div>
                </div>
                
                <div className="card-content">
                  <h4>{student.studentName}</h4>
                  <p className="student-rut">{student.rut}</p>
                  <p className="student-grade">{student.grade}</p>
                  
                  <div className="scholarship-info">
                    <div className="info-row">
                      <span>Tipo de Beca:</span>
                      <span>{student.scholarshipType === 'VUL' ? 'Vulnerable' : student.scholarshipType}</span>
                    </div>
                    <div className="info-row">
                      <span>Beca Anual:</span>
                      <span>{formatCurrency(student.scholarshipAmount || student.totalAnnualFee || student.monthlyFee * 10)}</span>
                    </div>
                    <div className="info-row">
                      <span>Apoderado:</span>
                      <span>{student.guardianName}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .scholarship-view {
          padding: 1.5rem;
        }

        .scholarship-header {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .scholarship-header h2 {
          margin: 0 0 0.5rem 0;
          font-size: 1.75rem;
        }

        .scholarship-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 1rem;
        }

        .scholarship-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .stat-icon {
          background: #f3f4f6;
          padding: 0.75rem;
          border-radius: 8px;
          color: #8b5cf6;
        }

        .stat-content h3 {
          margin: 0 0 0.25rem 0;
          font-size: 1.5rem;
          font-weight: bold;
          color: #111827;
        }

        .stat-content p {
          margin: 0;
          color: #6b7280;
          font-size: 0.875rem;
        }

        .scholarship-filters {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: center;
        }

        .search-container {
          position: relative;
          flex: 1;
          max-width: 400px;
        }

        .search-container svg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
        }

        .search-input:focus {
          outline: none;
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }

        .filter-select {
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          min-width: 200px;
        }

        .filter-select:focus {
          outline: none;
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }

        .scholarship-list {
          background: white;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          min-height: 400px;
        }

        .no-results {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
        }

        .no-results p {
          margin: 1rem 0 0 0;
          color: #6b7280;
          font-size: 1.125rem;
        }

        .scholarship-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          padding: 1.5rem;
        }

        .scholarship-card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.5rem;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .scholarship-card:hover {
          border-color: #8b5cf6;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .student-avatar {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.125rem;
        }

        .beca-badge {
          background: #8b5cf6;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .card-content h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
        }

        .student-rut {
          margin: 0 0 0.25rem 0;
          color: #6b7280;
          font-size: 0.875rem;
        }

        .student-grade {
          margin: 0 0 1rem 0;
          color: #8b5cf6;
          font-weight: 500;
          font-size: 0.875rem;
        }

        .scholarship-info {
          border-top: 1px solid #f3f4f6;
          padding-top: 1rem;
        }

        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .info-row span:first-child {
          color: #6b7280;
          font-weight: 500;
        }

        .info-row span:last-child {
          color: #111827;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .scholarship-filters {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-container {
            max-width: none;
          }
          
          .filter-select {
            min-width: auto;
          }
          
          .scholarship-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ScholarshipView;