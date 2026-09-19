# Funeraria "Virgen de las Mercedes" — Sitio web

Sitio web completo para la **Funeraria "Virgen de las Mercedes"**, construido con:

- **Backend:** Node.js + Express (API REST)
- **Frontend:** React + Vite + Tailwind CSS

Incluye páginas de Inicio, Nosotros, Servicios, Galería y Contacto (con formulario
funcional conectado a la API), botón flotante de WhatsApp, mapa de ubicación y logo
basado en la imagen de la Virgen de las Mercedes que enviaste.

## Datos del negocio usados en el sitio

- **Nombre:** Funeraria "Virgen de las Mercedes"
- **Teléfono / WhatsApp:** +51 948 600 608
- **Dirección:** Av. 9 de Diciembre 405, Andrés Avelino Cáceres Dorregaray, Lima, Perú

Puedes editar estos datos en dos lugares (mantenlos iguales en ambos):
- `backend/src/data/business.js`
- `frontend/src/lib/business.js`

## Estructura del proyecto

```
funeraria-virgen-mercedes/
├── backend/              # API en Express
│   └── src/
│       ├── data/         # Datos del negocio y mensajes recibidos
│       ├── routes/       # /api/info y /api/contact
│       ├── app.js
│       └── server.js
└── frontend/             # App en React + Vite + Tailwind
    ├── public/assets/    # Logo e imágenes de la Virgen de las Mercedes
    └── src/
        ├── components/   # Navbar, Footer, formulario, tarjetas, iconos
        ├── pages/        # Inicio, Nosotros, Servicios, Galería, Contacto
        └── lib/          # Datos estáticos y cliente de la API
```

## Cómo ejecutar el proyecto en tu computadora

Necesitas tener instalado [Node.js](https://nodejs.org) (versión 18 o superior).

### 1. Backend (API)

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Esto levanta la API en `http://localhost:4000`. Puedes probar que funciona abriendo
`http://localhost:4000/api/health` en el navegador.

### 2. Frontend (sitio web)

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Esto levanta el sitio en `http://localhost:5173`. El formulario de contacto ya está
conectado a la API del backend (usa un proxy configurado en `vite.config.js`, así que
no necesitas configurar nada adicional en desarrollo).

Abre `http://localhost:5173` en tu navegador y verás el sitio funcionando.

## Cómo publicar el sitio (producción)

### Frontend
```bash
cd frontend
npm run build
```
Esto genera la carpeta `frontend/dist` lista para subir a cualquier hosting estático
(Vercel, Netlify, Hostinger, cPanel, etc.).

Antes de compilar, crea un archivo `frontend/.env` con la URL real de tu API, por ejemplo:
```
VITE_API_URL=https://api.tudominio.pe/api
```

### Backend
El backend puede desplegarse en cualquier servicio que soporte Node.js (Render, Railway,
un VPS, etc.). Configura las variables de entorno de `backend/.env.example`
(`PORT` y `CORS_ORIGIN`, este último con la URL de tu frontend en producción) y ejecuta:
```bash
cd backend
npm install
npm start
```

## Formulario de contacto

Los mensajes enviados desde el formulario se guardan en
`backend/src/data/mensajes.json`. Si más adelante quieres que además te lleguen por
correo o WhatsApp automáticamente, se puede integrar un servicio de email (p. ej.
Resend, Nodemailer) o la API de WhatsApp Business — avísame y lo agregamos.

## Personalización

- **Colores y tipografía:** `frontend/tailwind.config.js`
- **Textos de cada sección:** dentro de `frontend/src/pages/`
- **Imágenes:** reemplaza los archivos en `frontend/public/assets/` (mantén los
  mismos nombres o actualiza las rutas en el código)
- **Servicios ofrecidos:** `frontend/src/lib/business.js` (y su reflejo en
  `backend/src/data/business.js`)

---

Hecho con cuidado para acompañar a las familias en los momentos más difíciles. 🕯️
