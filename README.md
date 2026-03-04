# Clínica de Urología - Dr. Jorge Delgado

Sitio web profesional para la Clínica de Urología del Dr. Jorge J. Delgado Rodríguez en Tampico.

## 🚀 Despliegue en Render

Puedes desplegar este proyecto en Render usando el siguiente botón:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/marianh-sol/clinica-urologia-v2)

### Configuración manual en Render:
1. Crea un nuevo **Web Service**.
2. Conecta tu repositorio de GitHub.
3. Configura los siguientes parámetros:
   - **Runtime**: `Node`
   - **Build Command**: `pnpm install && pnpm run build`
   - **Start Command**: `pnpm run start`
4. Agrega las variables de entorno:
   - `NODE_ENV`: `production`

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
