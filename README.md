# 🚗 Vitrina Motors

Sitio web profesional para la venta de vehículos usados, con catálogo editable por el cliente sin necesidad de conocimientos técnicos.

🌐 **Sitio en producción:** https://vitrina-motors-three.vercel.app  
🎛️ **CMS (Sanity Studio):** https://vitrina-motors-three.vercel.app/studio  
📦 **Repositorio:** https://github.com/santiago128/vitrina-motors

---

## 🛠️ Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 |
| Estilos | Tailwind CSS v4 |
| CMS | Sanity.io 3.99 |
| Lenguaje | TypeScript |
| Hosting | Vercel |

---

## 📁 Estructura del proyecto

```
vitrina-motors/
├── app/
│   ├── page.tsx                     # Home
│   ├── catalogo/
│   │   ├── page.tsx                 # Listado de vehículos
│   │   └── [slug]/
│   │       └── page.tsx             # Detalle del vehículo
│   ├── contacto/
│   │   └── page.tsx                 # Formulario de contacto
│   ├── studio/
│   │   └── [[...tool]]/
│   │       └── page.tsx             # Panel Sanity Studio
│   ├── globals.css
│   └── layout.tsx                   # Layout global
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── vehicles/
│   │   ├── VehicleCard.tsx
│   │   └── VehicleGrid.tsx
│   └── ui/
│       └── WhatsAppButton.tsx
├── lib/
│   └── queries.ts
├── sanity/
│   ├── lib/
│   │   ├── client.ts
│   │   └── image.ts
│   └── schemaTypes/
│       ├── index.ts
│       └── vehicle.ts
├── sanity.config.ts
├── .npmrc
└── package.json
```

---

## 🚀 Correr el proyecto localmente

### Requisitos
- Node.js 18+
- Cuenta en [Sanity.io](https://sanity.io)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/santiago128/vitrina-motors
cd vitrina-motors

# Instalar dependencias
npm install --legacy-peer-deps

# Correr en desarrollo
npm run dev
```

Abrir en el navegador:
- **Sitio:** http://localhost:3000
- **Studio:** http://localhost:3000/studio

---

## 🔑 Variables de entorno

No se requieren variables de entorno. El Project ID de Sanity está configurado directamente en `sanity/lib/client.ts` y `sanity.config.ts`.
---

## 📋 CORS requerido en Sanity

Agregar en [sanity.io/manage](https://sanity.io/manage/project/2dupyrtu/api):

| Origen | Credenciales |
|---|---|
| http://localhost:3000 | Permitidas |
| https://vitrina-motors-three.vercel.app | Permitidas |

---

## ⚙️ Deploy en Vercel

1. Conectar el repo a Vercel
2. En **Settings → Build and Deployment**, configurar:
   - **Install Command:** `npm install --legacy-peer-deps`
3. Deploy automático con cada push a `main`

---

## 📝 Convención de commits

| Prefijo | Uso |
|---|---|
| `feat:` | Nueva funcionalidad |
| `fix:` | Corrección de bug |
| `chore:` | Configuración o mantenimiento |
| `style:` | Cambios visuales sin lógica |

---

## ✅ Funcionalidades

- [x] Home con Hero, vehículos destacados y sección de beneficios
- [x] Catálogo con grid responsive
- [x] Detalle de vehículo con galería y botón WhatsApp
- [x] CMS editable (Sanity Studio) en `/studio`
- [x] Formulario de contacto
- [x] Botón WhatsApp flotante
- [x] Deploy automático en Vercel
- [ ] Envío real del formulario (Resend/Formspree)
- [ ] Filtros en el catálogo
- [ ] SEO dinámico por vehículo