import { createClient } from '@supabase/supabase-js'

// Configuración de Supabase desde variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validar que las variables estén configuradas
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('⚠️ Variables de entorno de Supabase no configuradas')
  console.log('Crear archivo .env con:')
  console.log('VITE_SUPABASE_URL=https://your-project.supabase.co')
  console.log('VITE_SUPABASE_ANON_KEY=your-anon-key')
}

// Crear cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Configuración de la base de datos
export const dbConfig = {
  tables: {
    students: 'students',
    payments: 'payments', 
    courses: 'courses',
    settings: 'settings'
  }
}