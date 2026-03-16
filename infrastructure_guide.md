# Infrastructure & Marketing Guide - VORTEXA

## 📱 Redes Sociales (Estrategia de Lanzamiento)

### Perfiles Sugeridos
- **Instagram/Facebook/Threads:** `@imaginationcreations.tech` o `@creationsimagination`
- **TikTok:** `@imagination_creations`

### Biografía Persuasiva
> "Donde la tecnología se encuentra con la creatividad. 🚀 Especialistas en Apps Inteligentes, Web a Medida y Marketing Estratégico. Transformamos tus ideas en realidades digitales. 💡✨ #CreationsOfTheImagination #TechAgency"

### Estrategia de Contenido
1. **Lunes de Innovación:** Curiosidades sobre IA y apps.
2. **Miércoles de Proyectos:** "Detrás de cámaras" de una web en desarrollo.
3. **Viernes Creativo:** Motivación y visión de diseño.

---

## 📧 Configuración de Correo Corporativo

Para configurar correos como `hola@creationsimagination.com` o `ventas@...`, utiliza los siguientes registros en tu panel de dominio:

### Registros MX (Ejemplo para Google Workspace)
| Prioridad | Host | Valor |
|-----------|------|-------|
| 1 | @ | ASPMX.L.GOOGLE.COM |
| 5 | @ | ALT1.ASPMX.L.GOOGLE.COM |
| 5 | @ | ALT2.ASPMX.L.GOOGLE.COM |

### Registro TXT (Seguridad SPF)
- **Nombre:** `@`
- **Valor:** `v=spf1 include:_spf.google.com ~all`

---

## 💾 Estructura de Base de Datos (Leads & Citas)

Para que el Chatbot y el sitio funcionen, se recomienda una base de datos (Postgres/MongoDB) con las siguientes tablas:

### Tabla: `appointments` (Citas)
- `id`: UUID (Primary Key)
- `client_name`: String
- `client_email`: String
- `service_interested`: Enum (Apps, Web, Marketing)
- `location`: Enum (Cancún, CDMX)
- `date_time`: Timestamp
- `status`: Enum (Pending, Confirmed, Cancelled)

### Tabla: `leads` (Contactos)
- `id`: UUID
- `source`: String (Formulario Web, Chatbot)
- `name`: String
- `message`: Text
- `created_at`: Timestamp
