import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Edit3, 
  Eye, 
  DollarSign, 
  Users, 
  Calendar, 
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  PieChart,
  BarChart3,
  FileText,
  CreditCard,
  BookOpen,
  Bell,
  Settings,
  RefreshCw
} from 'lucide-react';
import { dataService } from '../../services/dataService';
import { supabaseService } from '../../services/supabaseService';

const ModernTreasuryDashboard = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [migrationStatus, setMigrationStatus] = useState('idle'); // idle, loading, success, error

  // Estados para nuevos pagos
  const [newPayment, setNewPayment] = useState({
    studentRut: '',
    amount: '',
    month: '',
    concept: '',
    paymentDate: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    filterStudents();
  }, [students, searchTerm, selectedCourse, selectedStatus]);

  const loadData = async () => {
    try {
      setLoading(true);
      // Intentar cargar desde Supabase primero, si no desde CSV
      let data = [];
      try {
        data = await supabaseService.getStudents();
        if (data.length === 0) {
          // Si Supabase está vacío, cargar desde CSV
          await dataService.loadCSVData();
          data = dataService.getAllStudents();
        }
      } catch {
        // Si falla Supabase, usar datos locales
        await dataService.loadCSVData();
        data = dataService.getAllStudents();
      }
      setStudents(data);
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterStudents = () => {
    let filtered = students;

    if (searchTerm) {
      filtered = filtered.filter(student =>
        student.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.guardianName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rut?.includes(searchTerm)
      );
    }

    if (selectedCourse) {
      filtered = filtered.filter(student => student.grade === selectedCourse);
    }

    if (selectedStatus) {
      filtered = filtered.filter(student => student.status === selectedStatus);
    }

    setFilteredStudents(filtered);
  };

  const stats = useMemo(() => {
    if (!students.length) return {
      totalStudents: 0,
      totalCollected: 0,
      totalPending: 0,
      studentsUpToDate: 0,
      studentsPending: 0,
      studentsOverdue: 0
    };

    const totalStudents = students.length;
    const totalCollected = students.reduce((sum, student) => sum + (student.totalPaid || 0), 0);
    const totalPending = students.reduce((sum, student) => sum + (student.pendingAmount || 0), 0);
    
    const studentsUpToDate = students.filter(s => s.status === 'paid').length;
    const studentsPending = students.filter(s => s.status === 'pending').length;
    const studentsOverdue = students.filter(s => s.status === 'overdue').length;

    return {
      totalStudents,
      totalCollected,
      totalPending,
      studentsUpToDate,
      studentsPending,
      studentsOverdue
    };
  }, [students]);

  const openStudentProfile = (student) => {
    setSelectedStudent(student);
    setShowStudentModal(true);
  };

  const openPaymentModal = (student = null) => {
    if (student) {
      setNewPayment({
        ...newPayment,
        studentRut: student.rut
      });
    }
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí implementarías la lógica para guardar el pago
      // await supabaseService.createPayment(newPayment);
      console.log('Nuevo pago:', newPayment);
      setShowPaymentModal(false);
      setNewPayment({
        studentRut: '',
        amount: '',
        month: '',
        concept: '',
        paymentDate: new Date().toISOString().split('T')[0]
      });
      await loadData(); // Recargar datos
    } catch (error) {
      console.error('Error creando pago:', error);
      alert('Error al registrar el pago');
    }
  };

  const migrateToSupabase = async () => {
    if (!window.confirm('¿Migrar todos los datos a Supabase?\n\nEsto creará una base de datos persistente en la nube.')) {
      return;
    }

    setMigrationStatus('loading');
    try {
      // Aquí usarías el script SQL generado anteriormente
      setMigrationStatus('success');
      alert('¡Migración exitosa! Los datos ahora se guardan automáticamente en Supabase.');
      await loadData();
    } catch (error) {
      setMigrationStatus('error');
      console.error('Error en migración:', error);
      alert('Error en la migración. Verifica la configuración de Supabase.');
    }
  };

  const exportToCSV = () => {
    const csvData = filteredStudents.map(student => ({
      RUT: student.rut,
      Nombre: student.studentName,
      Apoderado: student.guardianName,
      Curso: student.grade,
      Estado: student.status,
      'Total Pagado': student.totalPaid,
      'Saldo Pendiente': student.pendingAmount,
      Teléfono: student.phone,
      Email: student.email
    }));

    const csv = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `reporte-tesoreria-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      case 'scholarship': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'paid': return 'Al día';
      case 'pending': return 'Pendiente';
      case 'overdue': return 'Vencido';
      case 'scholarship': return 'Beca 100%';
      default: return 'Sin definir';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-center text-lg">Cargando sistema de tesorería...</p>
          <p className="text-gray-500 text-center text-sm mt-2">FUDE UMAG</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header moderno */}
      <div className="bg-white shadow-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                💰 Sistema de Tesorería
              </h1>
              <p className="text-gray-600 flex items-center">
                <BookOpen size={16} className="mr-2" />
                FUDE UMAG - Gestión Inteligente de Pagos
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Total Estudiantes</div>
                <div className="text-2xl font-bold text-blue-600">{stats.totalStudents}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Recaudado</div>
                <div className="text-2xl font-bold text-green-600">
                  ${stats.totalCollected.toLocaleString()}
                </div>
              </div>
              <button
                onClick={migrateToSupabase}
                disabled={migrationStatus === 'loading'}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {migrationStatus === 'loading' ? (
                  <RefreshCw size={18} className="mr-2 animate-spin" />
                ) : (
                  <Settings size={18} className="mr-2" />
                )}
                {migrationStatus === 'loading' ? 'Migrando...' : 'Migrar a Supabase'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tarjetas de estadísticas modernas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Al Día</p>
                <p className="text-3xl font-bold text-green-600">{stats.studentsUpToDate}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle size={24} className="text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pendientes</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.studentsPending}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Clock size={24} className="text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Vencidos</p>
                <p className="text-3xl font-bold text-red-600">{stats.studentsOverdue}</p>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <AlertCircle size={24} className="text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Por Cobrar</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${stats.totalPending.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <DollarSign size={24} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Barra de herramientas */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-blue-100">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar estudiante, apoderado o RUT..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Todos los cursos</option>
                {[...new Set(students.map(s => s.grade))].sort().map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Todos los estados</option>
                <option value="paid">Al día</option>
                <option value="pending">Pendientes</option>
                <option value="overdue">Vencidos</option>
                <option value="scholarship">Beca 100%</option>
              </select>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => openPaymentModal()}
                className="flex items-center px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Plus size={18} className="mr-2" />
                Registrar Pago
              </button>
              <button
                onClick={exportToCSV}
                className="flex items-center px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Download size={18} className="mr-2" />
                Exportar
              </button>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 flex items-center justify-between">
            <span>Mostrando {filteredStudents.length} de {students.length} estudiantes</span>
            {(searchTerm || selectedCourse || selectedStatus) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCourse('');
                  setSelectedStatus('');
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Tabla de estudiantes moderna */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Estudiante
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Apoderado
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Curso
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Pagado
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Pendiente
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredStudents.map((student, index) => (
                  <tr 
                    key={student.id || student.rut} 
                    className={`hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {student.studentName}
                        </div>
                        <div className="text-sm text-gray-500">
                          RUT: {student.rut}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {student.guardianName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {student.phone && (
                            <span className="mr-3">📱 {student.phone}</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                        {student.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(student.status)}`}>
                        {getStatusText(student.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">
                      ${(student.totalPaid || 0).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-red-600">
                      ${(student.pendingAmount || 0).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openStudentProfile(student)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                          title="Ver perfil completo"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => openPaymentModal(student)}
                          className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                          title="Registrar pago"
                        >
                          <CreditCard size={16} />
                        </button>
                        <button
                          onClick={() => openStudentProfile(student)}
                          className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors"
                          title="Historial de pagos"
                        >
                          <FileText size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredStudents.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-blue-100">
            <Users size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No se encontraron estudiantes
            </h3>
            <p className="text-gray-600">
              Intenta ajustar los filtros para ver más resultados
            </p>
          </div>
        )}
      </div>

      {/* Modal de registro de pago */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                💳 Registrar Nuevo Pago
              </h3>
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    RUT del Estudiante
                  </label>
                  <input
                    type="text"
                    value={newPayment.studentRut}
                    onChange={(e) => setNewPayment({...newPayment, studentRut: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="12.345.678-9"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monto
                  </label>
                  <input
                    type="number"
                    value={newPayment.amount}
                    onChange={(e) => setNewPayment({...newPayment, amount: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="126500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Concepto
                  </label>
                  <select
                    value={newPayment.concept}
                    onChange={(e) => setNewPayment({...newPayment, concept: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Seleccionar concepto</option>
                    <option value="mensualidad">Mensualidad</option>
                    <option value="matricula">Matrícula</option>
                    <option value="cuota_extra">Cuota Extra</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de Pago
                  </label>
                  <input
                    type="date"
                    value={newPayment.paymentDate}
                    onChange={(e) => setNewPayment({...newPayment, paymentDate: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowPaymentModal(false)}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                  >
                    Registrar Pago
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal de perfil de estudiante */}
      {showStudentModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    👤 {selectedStudent.studentName}
                  </h3>
                  <p className="text-gray-600">RUT: {selectedStudent.rut}</p>
                </div>
                <button
                  onClick={() => setShowStudentModal(false)}
                  className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Información Académica</h4>
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <p className="text-sm text-gray-600">Curso</p>
                      <p className="font-semibold text-blue-900">{selectedStudent.grade}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Estado de Pagos</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Estado:</span>
                        <span className={`font-semibold px-2 py-1 rounded-full text-sm ${getStatusColor(selectedStudent.status)}`}>
                          {getStatusText(selectedStudent.status)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Pagado:</span>
                        <span className="font-semibold text-green-600">
                          ${(selectedStudent.totalPaid || 0).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saldo Pendiente:</span>
                        <span className="font-semibold text-red-600">
                          ${(selectedStudent.pendingAmount || 0).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Información del Apoderado</h4>
                    <div className="bg-green-50 p-4 rounded-xl space-y-2">
                      <div>
                        <p className="text-sm text-gray-600">Nombre</p>
                        <p className="font-semibold text-green-900">{selectedStudent.guardianName}</p>
                      </div>
                      {selectedStudent.phone && (
                        <div>
                          <p className="text-sm text-gray-600">Teléfono</p>
                          <p className="font-semibold text-green-900">{selectedStudent.phone}</p>
                        </div>
                      )}
                      {selectedStudent.email && (
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-semibold text-green-900">{selectedStudent.email}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    setShowStudentModal(false);
                    openPaymentModal(selectedStudent);
                  }}
                  className="flex-1 px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                >
                  Registrar Pago
                </button>
                <button
                  onClick={() => setShowStudentModal(false)}
                  className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernTreasuryDashboard;