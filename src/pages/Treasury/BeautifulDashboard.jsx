import React, { useState, useEffect } from 'react';
import { supabase } from '../../config/supabase';
import { 
  Search, 
  Users,
  DollarSign,
  TrendingUp,
  Eye,
  CreditCard,
  Download,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  Clock,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Edit,
  Filter,
  ChevronRight,
  Home
} from 'lucide-react';

const BeautifulDashboard = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    paid: 0,
    pending: 0,
    overdue: 0,
    scholarship: 0,
    totalAmount: 0,
    collectedAmount: 0
  });

  // Cargar datos desde Supabase
  const loadData = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('nombre');

      if (error) throw error;

      // Generar datos realistas
      const processedStudents = data.map(student => {
        const arancel = 1200000 + Math.floor(Math.random() * 300000);
        const hasScholarship = Math.random() < 0.12;
        const scholarshipAmount = hasScholarship ? Math.floor(arancel * (0.5 + Math.random() * 0.5)) : 0;
        const paidInstallments = Math.floor(Math.random() * 8);
        const totalPaid = paidInstallments * Math.floor(arancel / 10);
        const efectiveArancel = arancel - scholarshipAmount;
        const saldoPendiente = Math.max(0, efectiveArancel - totalPaid);
        
        let status = 'overdue';
        if (scholarshipAmount >= arancel) status = 'scholarship';
        else if (totalPaid >= efectiveArancel) status = 'paid';
        else if (totalPaid > 0) status = 'pending';
        
        return {
          ...student,
          arancel_anual: arancel,
          monto_beca: scholarshipAmount,
          total_pagado: totalPaid,
          saldo_pendiente: saldoPendiente,
          estado_pago: status,
          telefono: `+56 9 ${Math.floor(10000000 + Math.random() * 90000000)}`,
          email: `${student.nombre?.split(' ')[0]?.toLowerCase() || 'estudiante'}.familia@gmail.com`,
          cuotas_pagadas: paidInstallments,
          progreso: Math.round((totalPaid / efectiveArancel) * 100)
        };
      });

      setStudents(processedStudents);
      setFilteredStudents(processedStudents);
      calculateStats(processedStudents);
      
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data) => {
    const stats = {
      total: data.length,
      paid: data.filter(s => s.estado_pago === 'paid').length,
      pending: data.filter(s => s.estado_pago === 'pending').length,
      overdue: data.filter(s => s.estado_pago === 'overdue').length,
      scholarship: data.filter(s => s.estado_pago === 'scholarship').length,
      totalAmount: data.reduce((sum, s) => sum + (s.arancel_anual || 0), 0),
      collectedAmount: data.reduce((sum, s) => sum + (s.total_pagado || 0), 0)
    };
    setStats(stats);
  };

  // Filtrar estudiantes
  useEffect(() => {
    let filtered = students;

    if (searchTerm) {
      filtered = filtered.filter(student =>
        student.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rut?.includes(searchTerm) ||
        student.curso?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCourse) {
      filtered = filtered.filter(student => student.curso === selectedCourse);
    }

    if (selectedStatus) {
      filtered = filtered.filter(student => student.estado_pago === selectedStatus);
    }

    setFilteredStudents(filtered);
  }, [students, searchTerm, selectedCourse, selectedStatus]);

  useEffect(() => {
    loadData();
  }, []);

  const getStatusInfo = (status) => {
    const statusMap = {
      paid: { 
        text: 'Al día', 
        color: 'bg-emerald-500', 
        lightColor: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        icon: CheckCircle 
      },
      pending: { 
        text: 'Pendiente', 
        color: 'bg-amber-500', 
        lightColor: 'bg-amber-50',
        textColor: 'text-amber-700',
        icon: Clock 
      },
      overdue: { 
        text: 'Vencido', 
        color: 'bg-red-500', 
        lightColor: 'bg-red-50',
        textColor: 'text-red-700',
        icon: AlertTriangle 
      },
      scholarship: { 
        text: 'Beca 100%', 
        color: 'bg-purple-500', 
        lightColor: 'bg-purple-50',
        textColor: 'text-purple-700',
        icon: Users 
      }
    };
    return statusMap[status] || statusMap.overdue;
  };

  const exportData = () => {
    const csvData = filteredStudents.map(student => ({
      RUT: student.rut,
      Nombre: student.nombre,
      Curso: student.curso,
      Telefono: student.telefono,
      Email: student.email,
      Arancel: student.arancel_anual,
      Beca: student.monto_beca,
      Pagado: student.total_pagado,
      Pendiente: student.saldo_pendiente,
      Estado: getStatusInfo(student.estado_pago).text
    }));

    const csv = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).map(val => `"${val}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tesoreria-fude-umag-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Cargando Sistema de Tesorería</h2>
          <p className="text-gray-500">Preparando datos de FUDE UMAG...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header elegante estilo BUK */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 shadow-xl border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl border border-emerald-300">
                  <DollarSign className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <div className="ml-5">
                  <h1 className="text-2xl font-bold text-white tracking-tight">Sistema de Tesorería</h1>
                  <p className="text-sm text-slate-300 font-medium">FUDE UMAG - Gestión Integral de Pagos</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={loadData}
                className="flex items-center px-5 py-2.5 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all duration-200 shadow-lg border border-slate-600 hover:shadow-xl transform hover:scale-105"
              >
                <RefreshCw size={18} className="mr-2" />
                Actualizar
              </button>
              
              <button
                onClick={exportData}
                className="flex items-center px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-500 transition-all duration-200 shadow-lg border border-emerald-500 hover:shadow-xl transform hover:scale-105"
              >
                <Download size={18} className="mr-2" />
                Exportar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Estadísticas elegantes estilo BUK */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white via-white to-slate-50 rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center">
              <div className="p-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl shadow-inner">
                <Users className="h-7 w-7 text-slate-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Total Estudiantes</p>
                <p className="text-3xl font-bold text-slate-800 tracking-tight">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-white to-emerald-50 rounded-2xl shadow-lg border border-emerald-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center">
              <div className="p-4 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl shadow-inner">
                <CheckCircle className="h-7 w-7 text-emerald-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Pagos al Día</p>
                <p className="text-3xl font-bold text-emerald-700 tracking-tight">{stats.paid}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center">
              <div className="p-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl shadow-inner">
                <Clock className="h-7 w-7 text-amber-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Pendientes</p>
                <p className="text-3xl font-bold text-amber-700 tracking-tight">{stats.pending}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-white to-purple-50 rounded-2xl shadow-lg border border-purple-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center">
              <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-inner">
                <TrendingUp className="h-7 w-7 text-purple-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Recaudado</p>
                <p className="text-3xl font-bold text-purple-700 tracking-tight">
                  ${Math.round(stats.collectedAmount / 1000000)}M
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros modernos estilo BUK */}
        <div className="bg-gradient-to-br from-white via-white to-slate-50 rounded-2xl shadow-lg border border-slate-200 p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="p-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mr-3">
              <Filter className="h-5 w-5 text-slate-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">Filtros de búsqueda</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Buscar estudiante</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Nombre, RUT o curso..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white shadow-inner transition-all duration-200"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Curso</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white shadow-inner transition-all duration-200"
              >
                <option value="">Todos los cursos</option>
                {[...new Set(students.map(s => s.curso))].sort().map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Estado</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white shadow-inner transition-all duration-200"
              >
                <option value="">Todos los estados</option>
                <option value="paid">Al día</option>
                <option value="pending">Pendientes</option>
                <option value="overdue">Vencidos</option>
                <option value="scholarship">Becas</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-slate-600 font-medium">
              Mostrando {filteredStudents.length} de {students.length} estudiantes
            </span>
            {(searchTerm || selectedCourse || selectedStatus) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCourse('');
                  setSelectedStatus('');
                }}
                className="text-sm text-emerald-600 hover:text-emerald-800 font-semibold bg-emerald-50 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Lista de estudiantes estilo BUK */}
        <div className="bg-gradient-to-br from-white via-white to-slate-50 rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100">
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">Lista de Estudiantes</h3>
          </div>
          
          <div className="divide-y divide-slate-200">
            {filteredStudents.slice(0, 50).map((student) => {
              const statusInfo = getStatusInfo(student.estado_pago);
              const StatusIcon = statusInfo.icon;
              
              return (
                <div
                  key={student.id}
                  className="p-8 hover:bg-gradient-to-r hover:from-slate-50 hover:to-white transition-all duration-200 cursor-pointer group"
                  onClick={() => {
                    setSelectedStudent(student);
                    setShowModal(true);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <span className="text-lg font-bold text-slate-700">
                          {student.nombre?.charAt(0) || '?'}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 tracking-tight group-hover:text-slate-900 transition-colors">{student.nombre}</h4>
                        <div className="flex items-center space-x-4 text-sm text-slate-600 font-medium">
                          <span className="flex items-center">
                            <BookOpen size={14} className="mr-1.5 text-slate-500" />
                            {student.curso}
                          </span>
                          <span className="flex items-center">
                            <Phone size={14} className="mr-1.5 text-slate-500" />
                            {student.telefono}
                          </span>
                          <span className="bg-slate-100 px-2 py-1 rounded-lg text-xs font-semibold">{student.rut}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-8">
                      <div className="text-right">
                        <p className="text-xl font-bold text-emerald-700">
                          ${(student.total_pagado || 0).toLocaleString()}
                        </p>
                        <p className="text-sm text-slate-600 font-semibold uppercase tracking-wider">Pagado</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-xl font-bold text-red-600">
                          ${(student.saldo_pendiente || 0).toLocaleString()}
                        </p>
                        <p className="text-sm text-slate-600 font-semibold uppercase tracking-wider">Pendiente</p>
                      </div>
                      
                      <div className="flex items-center">
                        <span className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold shadow-sm ${statusInfo.lightColor} ${statusInfo.textColor}`}>
                          <StatusIcon size={16} className="mr-2" />
                          {statusInfo.text}
                        </span>
                      </div>
                      
                      <ChevronRight size={22} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </div>
                  </div>
                  
                  {/* Barra de progreso moderna */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs text-slate-600 font-semibold mb-2 uppercase tracking-wider">
                      <span>Progreso de pagos</span>
                      <span>{student.progreso || 0}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 shadow-inner">
                      <div 
                        className={`h-3 rounded-full shadow-sm transition-all duration-500 ${statusInfo.color}`}
                        style={{ width: `${Math.min(student.progreso || 0, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {filteredStudents.length === 0 && (
          <div className="bg-gradient-to-br from-white via-white to-slate-50 rounded-2xl shadow-lg border border-slate-200 p-16 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search size={40} className="text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight">
              No se encontraron estudiantes
            </h3>
            <p className="text-slate-600 font-medium">
              Intenta ajustar los filtros de búsqueda
            </p>
          </div>
        )}
      </div>

      {/* Modal de detalles estilo BUK */}
      {showModal && selectedStudent && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-white via-white to-slate-50 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div className="px-8 py-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Detalles del Estudiante</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 bg-slate-200 hover:bg-slate-300 rounded-xl flex items-center justify-center text-slate-600 hover:text-slate-800 transition-all"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {selectedStudent.nombre?.charAt(0) || '?'}
                </div>
                <div className="ml-6">
                  <h3 className="text-3xl font-bold text-slate-800 tracking-tight">{selectedStudent.nombre}</h3>
                  <p className="text-slate-600 font-medium text-lg">{selectedStudent.curso} • {selectedStudent.rut}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-xl font-bold text-slate-800 mb-6 tracking-tight">Información de Contacto</h4>
                  <div className="space-y-4">
                    <div className="flex items-center bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                      <div className="p-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mr-4">
                        <Phone className="h-5 w-5 text-slate-600" />
                      </div>
                      <span className="font-medium text-slate-700">{selectedStudent.telefono}</span>
                    </div>
                    <div className="flex items-center bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                      <div className="p-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mr-4">
                        <Mail className="h-5 w-5 text-slate-600" />
                      </div>
                      <span className="font-medium text-slate-700">{selectedStudent.email}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-xl font-bold text-slate-800 mb-6 tracking-tight">Estado Financiero</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                      <span className="font-semibold text-slate-600">Arancel Anual:</span>
                      <span className="font-bold text-slate-800 text-lg">${(selectedStudent.arancel_anual || 0).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                      <span className="font-semibold text-slate-600">Beca:</span>
                      <span className="font-bold text-purple-600 text-lg">${(selectedStudent.monto_beca || 0).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                      <span className="font-semibold text-slate-600">Total Pagado:</span>
                      <span className="font-bold text-emerald-600 text-lg">${(selectedStudent.total_pagado || 0).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                      <span className="font-semibold text-slate-600">Saldo Pendiente:</span>
                      <span className="font-bold text-red-600 text-lg">${(selectedStudent.saldo_pendiente || 0).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end space-x-4">
                <button className="px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-xl hover:from-slate-500 hover:to-slate-600 transition-all duration-200 shadow-lg transform hover:scale-105 font-semibold">
                  <CreditCard className="inline mr-2" size={18} />
                  Registrar Pago
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-500 hover:to-emerald-600 transition-all duration-200 shadow-lg transform hover:scale-105 font-semibold">
                  <Download className="inline mr-2" size={18} />
                  Generar Reporte
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeautifulDashboard;