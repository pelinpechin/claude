-- ⚠️ SCRIPT DE REPARACIÓN PARA SUPABASE
-- Este script corrige problemas de estructura existente

-- 1. LIMPIAR COMPLETAMENTE (eliminar tablas existentes)
DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS students CASCADE; 
DROP TABLE IF EXISTS courses CASCADE;

-- 2. CREAR ESTRUCTURA CORRECTA DESDE CERO
-- Tabla de estudiantes con TODAS las columnas necesarias
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    rut VARCHAR(15) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    curso VARCHAR(50) NOT NULL,
    arancel_anual INTEGER DEFAULT 0,
    monto_beca INTEGER DEFAULT 0,
    total_pagado INTEGER DEFAULT 0,
    saldo_pendiente INTEGER DEFAULT 0,
    estado_pago VARCHAR(20) DEFAULT 'pendiente',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de pagos
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    student_rut VARCHAR(15) REFERENCES students(rut) ON DELETE CASCADE,
    numero_cuota INTEGER,
    monto INTEGER NOT NULL,
    fecha_pago DATE,
    concepto VARCHAR(255),
    metodo_pago VARCHAR(50) DEFAULT 'Efectivo',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de cursos
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    nivel VARCHAR(50),
    capacidad INTEGER DEFAULT 30,
    arancel_mensual INTEGER DEFAULT 126500,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. CREAR ÍNDICES PARA RENDIMIENTO
CREATE INDEX idx_students_rut ON students(rut);
CREATE INDEX idx_students_curso ON students(curso);
CREATE INDEX idx_students_estado ON students(estado_pago);
CREATE INDEX idx_payments_student ON payments(student_rut);
CREATE INDEX idx_payments_fecha ON payments(fecha_pago);

-- 4. CONFIGURACIÓN DE SEGURIDAD BÁSICA
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY; 
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Políticas permisivas para desarrollo (ajustar en producción)
CREATE POLICY "Allow all operations" ON students FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON payments FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON courses FOR ALL USING (true);

-- 5. VERIFICAR QUE TODO ESTÉ CORRECTO
SELECT 
    table_name,
    column_name,
    data_type
FROM information_schema.columns 
WHERE table_name IN ('students', 'payments', 'courses')
ORDER BY table_name, ordinal_position;

-- ✅ ESTRUCTURA CORREGIDA Y LISTA
-- Ahora puedes importar los archivos CSV sin errores