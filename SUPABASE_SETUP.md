# 🗄️ Configuración de Supabase para Sistema de Tesorería

## 🎯 **Pasos para Configurar Supabase**

### **Paso 1: Crear Proyecto en Supabase**

1. Ve a [supabase.com](https://supabase.com)
2. Haz clic en **"Start your project"**
3. Crea una cuenta o inicia sesión
4. Haz clic en **"New Project"**
5. Completa:
   - **Name:** `fude-umag-tesoreria`
   - **Database Password:** (genera una contraseña segura)
   - **Region:** Selecciona la más cercana a Chile
6. Haz clic en **"Create new project"**
7. Espera 2-3 minutos a que se configure

### **Paso 2: Obtener Credenciales**

1. En tu proyecto de Supabase, ve a **Settings → API**
2. Copia estos valores:
   - **Project URL:** `https://xxxxx.supabase.co`
   - **Project API keys → anon public:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### **Paso 3: Configurar Variables de Entorno**

1. En el proyecto, crea el archivo `.env`:
   ```bash
   cd C:\Users\HP\school-treasury-system
   copy .env.example .env
   ```

2. Edita el archivo `.env` con tus datos:
   ```env
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu-anon-key-aqui
   VITE_APP_NAME=Sistema Tesorería FUDE UMAG
   VITE_APP_VERSION=1.0.0
   ```

### **Paso 4: Crear Tablas en Supabase**

1. En Supabase, ve a **SQL Editor**
2. Copia y pega todo el contenido del archivo `supabase-schema.sql`
3. Haz clic en **"Run"** para ejecutar el SQL
4. Verifica que se crearon las tablas:
   - `students` (estudiantes)
   - `payments` (pagos)  
   - `courses` (cursos)
   - `settings` (configuraciones)

### **Paso 5: Verificar Configuración**

1. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve al navegador y abre la consola (F12)
3. Busca mensajes como:
   - ✅ `"Supabase conectado correctamente"`
   - ❌ `"Variables de entorno de Supabase no configuradas"`

### **Paso 6: Migrar Datos Existentes**

Una vez configurado Supabase:

1. En la aplicación, haz clic en **"🔄 Reconstruir desde CSV"**
2. Esto migrará automáticamente todos los datos de `alumnos.csv` a Supabase
3. Los datos se persistirán en la base de datos en la nube

## 🛡️ **Seguridad (Opcional - Para Producción)**

### Configurar Row Level Security (RLS):

```sql
-- Política más restrictiva para producción
DROP POLICY IF EXISTS "Enable read access for all users" ON public.students;
CREATE POLICY "Enable read access for authenticated users" 
ON public.students FOR SELECT 
USING (auth.role() = 'authenticated');

-- Repetir para todas las tablas
```

## 🔧 **Características de Supabase Implementadas**

### ✅ **Persistencia Automática:**
- Todos los pagos se guardan automáticamente
- Estados de estudiantes se actualizan en tiempo real
- Historial completo de cambios

### ✅ **Sincronización:**
- Datos accesibles desde cualquier dispositivo
- Backup automático en la nube
- Sin pérdida de datos

### ✅ **Performance:**
- Índices optimizados para búsquedas rápidas
- Consultas eficientes por RUT, curso, estado
- Carga rápida de datos grandes

### ✅ **Escalabilidad:**
- Maneja miles de estudiantes
- Múltiples usuarios simultáneos
- Crecimiento sin límites

## 🆘 **Solución de Problemas**

### Error: "Variables de entorno no configuradas"
- Verificar que `.env` existe en la raíz del proyecto
- Confirmar que las variables empiecen con `VITE_`
- Reiniciar el servidor de desarrollo

### Error: "Database connection failed"
- Verificar URL y clave en Supabase → Settings → API
- Confirmar que el proyecto Supabase está activo
- Revisar que no hay typos en las variables

### Error: "Table doesn't exist"
- Ejecutar completamente el archivo `supabase-schema.sql`
- Verificar en Supabase → Table Editor que las tablas existen

## 💰 **Costos**

- **Desarrollo:** Completamente GRATIS
- **Hasta 500MB:** Gratis para siempre
- **Producción pequeña:** ~$25 USD/mes
- **Para FUDE UMAG:** Plan gratuito es suficiente inicialmente

## 🚀 **Próximos Pasos**

Una vez funcionando:
1. ✅ Los pagos se guardan automáticamente en Supabase
2. ✅ Los datos persisten entre sesiones
3. ✅ Backup automático en la nube
4. ✅ Sistema completamente funcional sin pérdida de datos

**¿Necesitas ayuda configurando? Solo dime qué paso te está dando problemas.**