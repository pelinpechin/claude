-- =====================================================
-- ESQUEMA DE BASE DE DATOS PARA SISTEMA DE TESORERÍA 
-- FUDE UMAG - Supabase
-- =====================================================

-- Habilitar Row Level Security
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- TABLA: courses (Cursos)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.courses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL, -- NT1 A, 1° BÁSICO B, etc.
  level VARCHAR(50) NOT NULL, -- Parvularia, Básica, Media
  capacity INTEGER DEFAULT 35,
  monthly_fee INTEGER NOT NULL, -- En pesos chilenos
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- TABLA: students (Estudiantes)
-- =====================================================
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
  course_id INTEGER REFERENCES public.courses(id),
  grade VARCHAR(50) NOT NULL, -- Para referencia rápida
  
  -- Datos financieros
  monthly_fee INTEGER NOT NULL,
  total_annual_fee INTEGER DEFAULT 0,
  scholarship_amount INTEGER DEFAULT 0,
  scholarship_percentage INTEGER DEFAULT 0,
  scholarship_type VARCHAR(50) DEFAULT 'Sin beca',
  has_full_scholarship BOOLEAN DEFAULT FALSE,
  
  -- Estado de pagos
  status VARCHAR(20) DEFAULT 'pending', -- paid, pending, overdue, scholarship
  balance INTEGER DEFAULT 0, -- Saldo pendiente
  total_paid INTEGER DEFAULT 0,
  installments_paid INTEGER DEFAULT 0,
  last_payment_date DATE,
  due_date DATE,
  
  -- Metadatos
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- TABLA: payments (Pagos)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.payments (
  id SERIAL PRIMARY KEY,
  student_id INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  
  -- Datos del pago
  amount INTEGER NOT NULL, -- En pesos chilenos
  payment_date DATE NOT NULL DEFAULT NOW(),
  concept VARCHAR(200) NOT NULL, -- "Mensualidad Marzo", "Cuota 2", etc.
  payment_method VARCHAR(50) DEFAULT 'Transferencia', -- Efectivo, Transferencia, etc.
  
  -- Referencia
  receipt_number VARCHAR(100), -- Número de boleta/recibo
  notes TEXT,
  
  -- Control de cambios
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by VARCHAR(100) DEFAULT 'system'
);

-- =====================================================
-- TABLA: settings (Configuraciones del sistema)
-- =====================================================
CREATE TABLE IF NOT EXISTS public.settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- ÍNDICES PARA PERFORMANCE
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_students_rut ON public.students(rut);
CREATE INDEX IF NOT EXISTS idx_students_grade ON public.students(grade);
CREATE INDEX IF NOT EXISTS idx_students_status ON public.students(status);
CREATE INDEX IF NOT EXISTS idx_payments_student_id ON public.payments(student_id);
CREATE INDEX IF NOT EXISTS idx_payments_date ON public.payments(payment_date);

-- =====================================================
-- TRIGGERS PARA UPDATED_AT
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Aplicar trigger a todas las tablas con updated_at
CREATE TRIGGER update_students_updated_at BEFORE UPDATE ON public.students FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_settings_updated_at BEFORE UPDATE ON public.settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- DATOS INICIALES - CONFIGURACIONES
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
-- POLÍTICAS RLS (Row Level Security) - BÁSICAS
-- =====================================================
-- Para desarrollo, permitir acceso total (cambiar en producción)
CREATE POLICY "Enable read access for all users" ON public.students FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON public.students FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON public.students FOR UPDATE USING (true);
CREATE POLICY "Enable delete access for all users" ON public.students FOR DELETE USING (true);

CREATE POLICY "Enable read access for all users" ON public.payments FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON public.payments FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON public.payments FOR UPDATE USING (true);
CREATE POLICY "Enable delete access for all users" ON public.payments FOR DELETE USING (true);

CREATE POLICY "Enable read access for all users" ON public.courses FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON public.courses FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON public.courses FOR UPDATE USING (true);
CREATE POLICY "Enable delete access for all users" ON public.courses FOR DELETE USING (true);

CREATE POLICY "Enable read access for all users" ON public.settings FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON public.settings FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON public.settings FOR UPDATE USING (true);
CREATE POLICY "Enable delete access for all users" ON public.settings FOR DELETE USING (true);

-- =====================================================
-- COMENTARIOS EN TABLAS
-- =====================================================
COMMENT ON TABLE public.students IS 'Estudiantes del establecimiento FUDE UMAG';
COMMENT ON TABLE public.payments IS 'Historial de pagos de estudiantes';
COMMENT ON TABLE public.courses IS 'Cursos y niveles del establecimiento';
COMMENT ON TABLE public.settings IS 'Configuraciones del sistema de tesorería';

-- =====================================================
-- FIN DEL ESQUEMA
-- =====================================================