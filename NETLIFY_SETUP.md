# Configuración de Deploy Automático con Netlify

## 🎯 Objetivo
Conectar tu repositorio GitHub `https://github.com/pelinpechin/claude.git` con tu sitio de Netlify `https://marvelous-rugelach-dc505d.netlify.app/` para deploy automático en cada push.

## 📋 Pasos para Configurar Deploy Automático

### 1. Acceder a la Configuración del Sitio
- Ve a: https://app.netlify.com/sites/marvelous-rugelach-dc505d/settings
- En el menú lateral, haz clic en **"Build & Deploy"**

### 2. Conectar con GitHub
- En la sección **"Continuous Deployment"**
- Haz clic en **"Link site to Git"**
- Selecciona **"GitHub"** como proveedor
- Autoriza a Netlify para acceder a tus repositorios (si no lo has hecho)

### 3. Seleccionar Repositorio
- Busca y selecciona: **`pelinpechin/claude`**
- Selecciona la rama: **`main`**

### 4. Configurar Build Settings
Usa exactamente esta configuración:

```yaml
Branch to deploy: main
Build command: npm ci && npm run build
Publish directory: dist
```

### 5. Variables de Entorno (si necesarias)
- En **"Environment variables"** agregar:
  - `NODE_VERSION`: `18`

### 6. Guardar Configuración
- Haz clic en **"Save"** o **"Deploy site"**

## ✅ Resultado Esperado
Después de la configuración:
- ✅ Cada `git push` activará automáticamente un nuevo deploy
- ✅ Verás el progreso en: https://app.netlify.com/sites/marvelous-rugelach-dc505d/deploys
- ✅ El badge mostrará el estado del último deploy
- ✅ No necesitarás más drag & drop manual

## 🔧 Configuración Actual del Proyecto
El proyecto ya tiene configurado:
- ✅ `netlify.toml` con build command correcto
- ✅ `package.json` con scripts de build
- ✅ Repositorio GitHub sincronizado
- ✅ Build output en carpeta `dist`

## 🚨 Si hay Problemas
1. **Build falla**: Verificar que el `netlify.toml` esté en la raíz
2. **Archivos no se muestran**: Confirmar que `publish directory` sea `dist`
3. **Sin permisos**: Re-autorizar conexión GitHub-Netlify

## 🎉 Una vez configurado
Simplemente haz:
```bash
git add .
git commit -m "Tu mensaje"
git push
```
¡Y tu sitio se actualizará automáticamente!