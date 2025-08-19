# 🌿 Git Workflow - Gestión de Ramas

## 📋 Flujo de Trabajo con Ramas

### 1. **Asegurar que estás en main**
```bash
git checkout main
git pull origin main  # Sincronizar con remoto
```

### 2. **Crear Nueva Rama**
```bash
# Crear y cambiar a nueva rama
git checkout -b nombre-de-la-rama

# Ejemplos de nombres sugeridos:
git checkout -b feature/auto-deploy
git checkout -b feature/csv-improvements  
git checkout -b develop
git checkout -b hotfix/bug-fixes
```

### 3. **Trabajar en la Rama**
```bash
# Hacer cambios en archivos
# ... editar código ...

# Ver estado
git status

# Agregar cambios
git add .
# o agregar archivos específicos:
git add archivo1.js archivo2.jsx

# Commit con mensaje descriptivo
git commit -m "Descripción clara de los cambios"
```

### 4. **Subir Rama a GitHub**
```bash
# Primera vez (crear rama remota)
git push -u origin nombre-de-la-rama

# Siguientes pushes
git push
```

### 5. **Mergear a Main (cuando esté listo)**
```bash
# Volver a main
git checkout main

# Mergear la rama
git merge nombre-de-la-rama

# Subir main actualizado
git push origin main

# Opcional: eliminar rama local
git branch -d nombre-de-la-rama

# Opcional: eliminar rama remota
git push origin --delete nombre-de-la-rama
```

## 🎯 **Ramas Sugeridas para este Proyecto**

### `feature/auto-deploy`
Para trabajar en:
- Configuración automática de Netlify
- Scripts de deploy
- CI/CD improvements

### `feature/csv-enhancements` 
Para trabajar en:
- Mejoras al parser CSV
- Nuevos campos de datos
- Validaciones adicionales

### `develop`
Para desarrollo general:
- Nuevas características
- Refactoring
- Testing

### `hotfix/urgent-fixes`
Para correcciones urgentes:
- Bugs críticos
- Problemas de producción

## ✅ **Ventajas del Workflow con Ramas**

- ✅ **Trabajo paralelo** en múltiples features
- ✅ **Historia limpia** de commits
- ✅ **Fácil rollback** si algo sale mal
- ✅ **Testing aislado** de features
- ✅ **Deploy automático** desde main
- ✅ **Colaboración** sin conflictos

## 🚀 **Deploy Automático con Ramas**

Una vez configurado Netlify:
- **Main branch** → Deploy automático a producción
- **Develop branch** → Deploy automático a staging (opcional)
- **Feature branches** → Deploy preview (opcional)

## 📝 **Buenas Prácticas**

- ✅ **Nombres descriptivos** para ramas
- ✅ **Commits frecuentes** con mensajes claros
- ✅ **Pull antes de push** para evitar conflictos
- ✅ **Testing antes de merge** a main
- ✅ **Cleanup** de ramas antiguas