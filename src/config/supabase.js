import { createClient } from '@supabase/supabase-js'

// Configuración de Supabase desde variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validar que las variables estén configuradas correctamente
const isValidConfig = supabaseUrl && 
                     supabaseAnonKey && 
                     !supabaseUrl.includes('your-project') && 
                     !supabaseAnonKey.includes('your-anon-key');

if (!isValidConfig) {
  console.warn('⚠️ Supabase no configurado - usando modo local')
  console.log('Para configurar Supabase:')
  console.log('1. Edita el archivo .env con tus credenciales reales')
  console.log('2. VITE_SUPABASE_URL=https://tu-proyecto.supabase.co')  
  console.log('3. VITE_SUPABASE_ANON_KEY=tu-clave-real')
}

// Crear cliente de Supabase solo si está configurado correctamente
export const supabase = isValidConfig ? 
  createClient(supabaseUrl, supabaseAnonKey) : 
  null;

// Configuración de la base de datos
export const dbConfig = {
  tables: {
    students: 'students',
    payments: 'payments', 
    courses: 'courses',
    settings: 'settings'
  }
}