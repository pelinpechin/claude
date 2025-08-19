import React from 'react';
import { Database, FileText, CheckCircle, AlertTriangle, Settings } from 'lucide-react';

const ConfigurationStatus = ({ stats }) => {
  const { isSupabaseConnected, dataSource } = stats;

  return (
    <div className="bg-white border-l-4 border-blue-500 p-4 rounded-lg shadow-sm mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {isSupabaseConnected ? (
            <>
              <Database className="text-green-600 mr-3" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-green-800">Sistema en la Nube Activo</h3>
                <p className="text-green-600 text-sm">
                  Conectado a Supabase • Todos los cambios se guardan automáticamente
                </p>
              </div>
            </>
          ) : (
            <>
              <FileText className="text-orange-600 mr-3" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-orange-800">Modo Local Activado</h3>
                <p className="text-orange-600 text-sm">
                  Usando datos CSV • Para persistencia en la nube, configura Supabase
                </p>
              </div>
            </>
          )}
        </div>
        
        {!isSupabaseConnected && (
          <div className="text-right">
            <div className="flex items-center text-orange-600 text-sm mb-1">
              <Settings size={16} className="mr-1" />
              Configuración Pendiente
            </div>
            <details className="text-xs text-gray-600 cursor-pointer">
              <summary className="hover:text-blue-600">Ver instrucciones ↓</summary>
              <div className="mt-2 p-3 bg-gray-50 rounded border text-left">
                <div className="font-semibold mb-2">Para conectar con Supabase:</div>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Ve a <a href="https://app.supabase.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">app.supabase.com</a></li>
                  <li>Crea un proyecto (o selecciona existente)</li>
                  <li>Ve a Settings → API</li>
                  <li>Ejecuta script: <code className="bg-gray-200 px-1">supabase_fix_structure.sql</code></li>
                  <li>Importa: <code className="bg-gray-200 px-1">students_import_CLEAN.csv</code></li>
                  <li>Importa: <code className="bg-gray-200 px-1">payments_import.csv</code></li>
                  <li>Edita el archivo <code className="bg-gray-200 px-1">.env</code> con tus credenciales</li>
                  <li>Reinicia: <code className="bg-gray-200 px-1">npm run dev</code></li>
                </ol>
                <div className="mt-2 p-2 bg-blue-50 rounded text-blue-800 text-xs">
                  💡 Consulta los archivos INSTRUCCIONES_CORREGIDAS.txt para más detalles
                </div>
              </div>
            </details>
          </div>
        )}
      </div>
      
      {/* Estadísticas de datos */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
        <div className="text-center">
          <div className="text-sm text-gray-600">Fuente</div>
          <div className="font-semibold text-gray-900">
            {isSupabaseConnected ? '☁️ Supabase' : '📄 CSV Local'}
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Estudiantes</div>
          <div className="font-semibold text-blue-600">{stats.totalStudents}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Sincronización</div>
          <div className="font-semibold">
            {isSupabaseConnected ? (
              <span className="text-green-600">✅ Automática</span>
            ) : (
              <span className="text-orange-600">⏸️ Manual</span>
            )}
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Backup</div>
          <div className="font-semibold">
            {isSupabaseConnected ? (
              <span className="text-green-600">✅ En la nube</span>
            ) : (
              <span className="text-gray-600">📄 Local</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationStatus;