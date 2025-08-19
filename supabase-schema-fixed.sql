-- =====================================================
-- ESQUEMA CORREGIDO PARA SUPABASE - SISTEMA DE TESORERÍA 
-- FUDE UMAG - Sin errores de dependencias
-- =====================================================

-- PRIMERO: Crear las tablas sin RLS ni políticas
-- =====================================================

-- TABLA: courses (Cursos)
CREATE TABLE IF NOT EXISTS public.courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  level VARCHAR(50) NOT NULL,
  capacity INTEGER DEFAULT 35,
  monthly_fee INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- TABLA: students (Estudiantes) 
CREATE TABLE IF NOT EXISTS public.students (
  id SERIAL PRIMARY KEY,
  rut VARCHAR(20) UNIQUE NOT NULL,
  student_name VARCHAR(200) NOT NULL,
  birth_date DATE,
  sex VARCHAR(20),
  enrollment_date DATE DEFAULT NOW(),
  
  -- Datos del apoderado
  guardian_name VARCHAR(200) NOT NULL,
  guardian_rut VARCHAR(20),
  guardian_phone VARCHAR(20),
  guardian_email VARCHAR(100),
  guardian_address TEXT,
  
  -- Datos académicos
  course_id INTEGER,
  grade VARCHAR(50) NOT NULL,
  
  -- Datos financieros
  monthly_fee INTEGER NOT NULL,
  total_annual_fee INTEGER DEFAULT 0,
  scholarship_amount INTEGER DEFAULT 0,
  scholarship_percentage INTEGER DEFAULT 0,
  scholarship_type VARCHAR(50) DEFAULT 'Sin beca',
  has_full_scholarship BOOLEAN DEFAULT FALSE,
  
  -- Estado de pagos
  status VARCHAR(20) DEFAULT 'pending',
  balance INTEGER DEFAULT 0,
  total_paid INTEGER DEFAULT 0,
  installments_paid INTEGER DEFAULT 0,
  last_payment_date DATE,
  due_date DATE,
  
  -- Metadatos
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- TABLA: payments (Pagos)
CREATE TABLE IF NOT EXISTS public.payments (
  id SERIAL PRIMARY KEY,
  student_id INTEGER NOT NULL,
  amount INTEGER NOT NULL,
  payment_date DATE NOT NULL DEFAULT NOW(),
  concept VARCHAR(200) NOT NULL,
  payment_method VARCHAR(50) DEFAULT 'Transferencia',
  receipt_number VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by VARCHAR(100) DEFAULT 'system'
);

-- TABLA: settings (Configuraciones)
CREATE TABLE IF NOT EXISTS public.settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- SEGUNDO: Agregar claves foráneas después de crear tablas
-- =====================================================

-- Agregar referencia de students a courses
ALTER TABLE public.students 
ADD CONSTRAINT fk_students_course 
FOREIGN KEY (course_id) REFERENCES public.courses(id);

-- Agregar referencia de payments a students  
ALTER TABLE public.payments 
ADD CONSTRAINT fk_payments_student 
FOREIGN KEY (student_id) REFERENCES public.students(id) ON DELETE CASCADE;

-- =====================================================
-- TERCERO: Crear índices para performance
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_students_rut ON public.students(rut);
CREATE INDEX IF NOT EXISTS idx_students_grade ON public.students(grade);
CREATE INDEX IF NOT EXISTS idx_students_status ON public.students(status);
CREATE INDEX IF NOT EXISTS idx_payments_student_id ON public.payments(student_id);
CREATE INDEX IF NOT EXISTS idx_payments_date ON public.payments(payment_date);

-- =====================================================
-- CUARTO: Configurar Row Level Security
-- =====================================================
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Políticas permisivas para desarrollo (cambiar en producción)
CREATE POLICY "Enable all for students" ON public.students USING (true) WITH CHECK (true);
CREATE POLICY "Enable all for payments" ON public.payments USING (true) WITH CHECK (true);  
CREATE POLICY "Enable all for courses" ON public.courses USING (true) WITH CHECK (true);
CREATE POLICY "Enable all for settings" ON public.settings USING (true) WITH CHECK (true);

-- =====================================================
-- QUINTO: Trigger para updated_at
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_students_updated_at 
    BEFORE UPDATE ON public.students 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at 
    BEFORE UPDATE ON public.courses 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_settings_updated_at 
    BEFORE UPDATE ON public.settings 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- SEXTO: Datos iniciales
-- =====================================================
INSERT INTO public.settings (key, value, description) VALUES 
('school_name', 'FUDE UMAG', 'Nombre del establecimiento educacional'),
('school_rbd', '186455-0', 'RBD del establecimiento'),
('academic_year', '2025', 'Año académico actual'),
('system_version', '1.0.0', 'Versión del sistema de tesorería'),
('last_csv_import', '', 'Fecha de última importación CSV'),
('auto_sync_enabled', 'true', 'Sincronización automática habilitada')
ON CONFLICT (key) DO NOTHING;

-- =====================================================
-- ¡LISTO! Tablas creadas correctamente
-- =====================================================