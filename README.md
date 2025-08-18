# Sistema de Tesorería - FUDE UMAG

Sistema web para gestionar los estados de pagos de apoderados en establecimientos educacionales.

## Características

### 📊 Dashboard Principal
- **Estadísticas en tiempo real**: Total de estudiantes, pagos al día, pendientes y vencidos
- **Resumen financiero**: Ingresos recaudados y montos pendientes
- **Vista general** del estado financiero del establecimiento

### 🔍 Gestión de Pagos por Apoderado
- **Listado completo** de estudiantes y sus apoderados
- **Estados de pago** claramente identificados:
  - 🟢 **Al día**: Pagos actualizados
  - 🟡 **Pendiente**: Pagos próximos a vencer
  - 🔴 **Vencido**: Pagos atrasados
- **Información detallada**: Mensualidad, saldo pendiente, fechas de vencimiento

### 🔎 Filtros y Búsqueda
- **Búsqueda por nombre** de estudiante o apoderado
- **Filtro por curso** (desde Kinder hasta 4° Medio)
- **Filtro por estado** de pago
- **Búsqueda en tiempo real** mientras escribes

### 📈 Historial de Pagos
- **Historial completo** por estudiante
- **Detalles de cada pago**: fecha, concepto y monto
- **Modal intuitivo** para visualizar información

### 📄 Exportación de Datos
- **Exportar a CSV/Excel** para compatibilidad con sistemas existentes
- **Reportes personalizables** según filtros aplicados
- **Integración** con sistemas de contabilidad externos

## Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Navegar al directorio del proyecto**:
   ```bash
   cd C:\Users\HP\school-treasury-system
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   La aplicación se abrirá automáticamente en `http://localhost:3000`

## Estructura del Proyecto

```
school-treasury-system/
├── src/
│   ├── components/
│   │   └── Treasury/
│   │       ├── PaymentStatus.jsx     # Componente de estado de pago
│   │       ├── PaymentHistory.jsx    # Modal de historial
│   │       └── StatsCards.jsx        # Tarjetas de estadísticas
│   ├── pages/
│   │   └── Treasury/
│   │       └── TreasuryDashboard.jsx # Página principal
│   ├── data/
│   │   └── mockData.js              # Datos de ejemplo
│   ├── utils/
│   │   └── formatters.js            # Utilidades de formato
│   └── index.css                    # Estilos globales
├── package.json
├── vite.config.js
└── README.md
```

## Datos de Ejemplo

El sistema incluye datos de muestra con:
- **7 estudiantes** de diferentes cursos
- **Diversos estados** de pago
- **Historiales de pago** completos
- **Información de contacto** de apoderados

## Personalización

### Modificar Datos
Editar el archivo `src/data/mockData.js` para:
- Agregar/quitar estudiantes
- Modificar cursos disponibles
- Actualizar información de contacto
- Cambiar montos de mensualidades

### Estilos
Los estilos se encuentran en `src/index.css` y pueden personalizarse para:
- Cambiar colores institucionales
- Modificar tipografías
- Ajustar espaciados y tamaños

### Funcionalidades Adicionales
El código está estructurado para agregar fácilmente:
- Autenticación de usuarios
- Base de datos real
- Notificaciones por email/SMS
- Reportes más avanzados
- Módulos adicionales (académico, inventario, etc.)

## Compatibilidad

- ✅ **Navegadores modernos** (Chrome, Firefox, Safari, Edge)
- ✅ **Responsive design** para tablets y móviles
- ✅ **Exportación** compatible con Excel y sistemas contables
- ✅ **Datos** en formato estándar chileno (pesos, fechas)

## Próximas Mejoras

- 🔄 Conexión con base de datos
- 🔐 Sistema de autenticación
- 📧 Notificaciones automáticas
- 📊 Reportes avanzados
- 💳 Integración con sistemas de pago
- 📱 App móvil para apoderados

## Soporte

Para soporte técnico o consultas sobre funcionalidades adicionales, contactar al desarrollador.

---

**Desarrollado específicamente para FUDE UMAG**  
*Sistema de Tesorería v1.0*