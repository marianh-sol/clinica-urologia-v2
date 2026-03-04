# Clínica de Urología - Dr. Jorge Delgado

Sitio web profesional para la Clínica de Urología del Dr. Jorge J. Delgado Rodríguez en Tampico.

## 🚀 Despliegue en Render

Puedes desplegar este proyecto en Render como un **Static Site** usando el siguiente botón:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/marianh-sol/clinica-urologia-v2)

### Configuración manual en Render:
1. Crea un nuevo **Static Site**.
2. Conecta tu repositorio de GitHub.
3. Configura los siguientes parámetros:
   - **Build Command**: `pnpm install && pnpm build:static`
   - **Publish Directory**: `dist/public`
4. En la pestaña **Redirects/Rewrites**, añade una regla:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite` (esto permite que las rutas de React funcionen correctamente)


## 🛠️ Stack Tecnológico
- **Frontend**: React 19 + TypeScript + Vite 7
- **Estilos**: Tailwind CSS v4 + Radix UI
- **Backend**: Express (para servir el contenido estático)
- **Animaciones**: Framer Motion

## 💻 Desarrollo Local

1. Instalar dependencias:
   ```bash
   pnpm install
   ```
2. Iniciar servidor de desarrollo:
   ```bash
   pnpm run dev
   ```
