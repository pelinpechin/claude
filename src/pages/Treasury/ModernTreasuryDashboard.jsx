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
  RefreshCw,
  Database,
  Wifi,
  WifiOff
} from 'lucide-react';
import { dataIntegrationService } from '../../services/dataIntegrationService';
import ConfigurationStatus from '../../components/Treasury/ConfigurationStatus';

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
      await dataIntegrationService.initialize();
      const data = dataIntegrationService.getStudents();
      setStudents(data);
      console.log(`📊 Cargados ${data.length} estudiantes desde ${dataIntegrationService.getDataSource()}`);
    } catch (error) {
      console.error('Error cargando datos:', error);
      setStudents([]);
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
    return dataIntegrationService.getStatistics();
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
      const result = await dataIntegrationService.recordPayment({
        studentRut: newPayment.studentRut,
        amount: newPayment.amount,
        date: newPayment.paymentDate,
        concept: newPayment.concept,
        method: 'Transferencia',
        installmentNumber: newPayment.month
      });

      if (result.success) {
        setShowPaymentModal(false);
        setNewPayment({
          studentRut: '',
          amount: '',
          month: '',
          concept: '',
          paymentDate: new Date().toISOString().split('T')[0]
        });
        await loadData(); // Recargar datos
        alert('✅ Pago registrado exitosamente');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error creando pago:', error);
      alert('Error al registrar el pago');
    }
  };

  const migrateToSupabase = async () => {
    const isConnected = dataIntegrationService.isConnectedToSupabase();
    
    if (isConnected) {
      alert('✅ Ya estás conectado a Supabase!\n\nTodos los cambios se guardan automáticamente en la nube.');
      return;
    }

    alert('🔧 Para conectar con Supabase:\n\n1. Configura las variables en el archivo .env\n2. VITE_SUPABASE_URL=tu-url\n3. VITE_SUPABASE_ANON_KEY=tu-clave\n4. Reinicia la aplicación\n\n📄 Consulta las instrucciones en los archivos generados.');
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
              <div className="flex items-center space-x-2">
                {stats.isSupabaseConnected ? (
                  <div className="flex items-center px-3 py-2 bg-green-100 text-green-800 rounded-xl">
                    <Database size={16} className="mr-2" />
                    <span className="text-sm font-medium">Supabase Activo</span>
                  </div>
                ) : (
                  <div className="flex items-center px-3 py-2 bg-orange-100 text-orange-800 rounded-xl">
                    <FileText size={16} className="mr-2" />
                    <span className="text-sm font-medium">Modo Local</span>
                  </div>
                )}
                <button
                  onClick={migrateToSupabase}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Settings size={18} className="mr-2" />
                  Configurar Supabase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Estado de configuración */}
        <ConfigurationStatus stats={stats} />

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
                <p className="text-sm font-medium text-gray-600">Becas 100%</p>
                <p className="text-3xl font-bold text-purple-600">{stats.studentsWithScholarship}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Users size={24} className="text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta de resumen financiero */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">${stats.totalCollected.toLocaleString()}</div>
              <div className="text-blue-200 text-sm">Total Recaudado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">${stats.totalPending.toLocaleString()}</div>
              <div className="text-blue-200 text-sm">Por Cobrar</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                ${(stats.totalCollected + stats.totalPending).toLocaleString()}
              </div>
              <div className="text-blue-200 text-sm">Total Proyectado</div>
            </div>
          </div>
          <div className="mt-4 text-center text-blue-200 text-sm">
            Fuente de datos: {stats.isSupabaseConnected ? '☁️ Supabase (En la nube)' : '📄 Local (CSV)'}
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
                          onClick={() => {
                            const history = dataIntegrationService.getPaymentHistory(student.rut);
                            if (history.length === 0) {
                              alert('Este estudiante no tiene pagos registrados.');
                            } else {
                              alert(`Historial de ${student.studentName}:\n\n${history.map(p => `• ${p.concept}: $${p.amount.toLocaleString()} (${p.date})`).join('\n')}`);
                            }
                          }}
                          className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors"
                          title="Ver historial de pagos"
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
                    Mes/Cuota (opcional)
                  </label>
                  <select
                    value={newPayment.month}
                    onChange={(e) => setNewPayment({...newPayment, month: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sin especificar</option>
                    {Array.from({length: 10}, (_, i) => (
                      <option key={i+1} value={i+1}>Cuota {i+1}</option>
                    ))}
                  </select>
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
                    <option value="Mensualidad">Mensualidad</option>
                    <option value="Matrícula">Matrícula</option>
                    <option value="Cuota Extra">Cuota Extra</option>
                    <option value="Pago Atrasado">Pago Atrasado</option>
                    <option value="Otro">Otro</option>
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
                      <p className="text-sm text-gray-600 mt-2">Arancel Anual</p>
                      <p className="font-semibold text-blue-900">
                        ${(selectedStudent.totalAnnualFee || 0).toLocaleString()}
                      </p>
                      {selectedStudent.scholarshipAmount > 0 && (
                        <>
                          <p className="text-sm text-gray-600 mt-2">Beca</p>
                          <p className="font-semibold text-purple-900">
                            ${selectedStudent.scholarshipAmount.toLocaleString()}
                          </p>
                        </>
                      )}
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
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mensualidad:</span>
                        <span className="font-semibold text-blue-600">
                          ${(selectedStudent.monthlyFee || 0).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Historial de Pagos</h4>
                    <div className="bg-gray-50 p-4 rounded-xl max-h-40 overflow-y-auto">
                      {selectedStudent.paymentHistory && selectedStudent.paymentHistory.length > 0 ? (
                        <div className="space-y-2">
                          {selectedStudent.paymentHistory.slice(0, 5).map((payment, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-gray-600">{payment.concept}</span>
                              <span className="font-semibold text-green-600">
                                ${payment.amount.toLocaleString()}
                              </span>
                            </div>
                          ))}
                          {selectedStudent.paymentHistory.length > 5 && (
                            <div className="text-xs text-gray-500 text-center pt-2">
                              +{selectedStudent.paymentHistory.length - 5} pagos más...
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-center text-sm">Sin pagos registrados</p>
                      )}
                    </div>
                  </div>

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