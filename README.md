# Legal Pigeon

Pequeña aplicación de gestión de propiedades, con backend en Node.js (Express, MongoDB) y frontend en React (Vite).

---

## 1. Estructura básica del proyecto

```
legal-pigeon/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── middleware/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── tests/
│   ├── .env
│     ...
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Forms/PropertyForm.tsx
    │   │   └── PropertiesList.tsx
    │   ├── hooks/useProperties.ts
    │   ├── types/Properties.ts
    │   └── App.tsx
    ├── .env
      ...

```

---

## 2. Requisitos previos

- Node.js >= 16
- MongoDB Community Server
- Git

---

## 3. Instalación y arranque

### Backend

1. Añadir variables de entorno en `backend/.env` (ya vienen configuradas):

   ```dotenv
    MONGO_URI=mongodb://localhost:27017/legal-pigeon
    PORT=4000
   ```

2. Instalar dependencias:

   ```bash
   cd backend
   npm install
   ```

3. Arrancar MongoDB.
4. Iniciar servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

### Frontend

1. Añadir variables de entorno en `frontend/.env` (ya vienen configuradas):

   ```dotenv
   VITE_API_BASE=http://localhost:4000
   ```

2. Instalar dependencias y arrancar:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

El frontent puede verse en: `http://localhost:5173`

---

## 4. Uso

- **Crear propiedad**: rellena título, dirección y precio, pulsa "Crear propiedad".
- **Ver propiedades**: al crear o recargar, aparecen debajo.

---

## 5. Pruebas (Backend)

En el directorio `backend/`:

```bash
npm run test
```

Ejecuta Jest y Supertest para comprobar rutas y modelo.

---

## 6. Escalabilidad y mejoras

En este proyecto se ha diseñado una base que permite crecer sin complejidad y adaptarse a nuevas necesidades:

- **Back y front separados:** el frontend y el backend se comunican mediante una API REST bien definida, lo que facilita sustituir o ampliar cualquiera de las capas sin afectar a la otra.
- **Uso de hooks reutilizables:** toda la lógica para manipular datos en el frontend está dentro de un hook, lo que reduce la duplicación y simplifica la evolución..
- **Validación:** Zod en backend y TypeScript en frontend aseguran que los datos manipulados sean correctos.
- **Simplicidad de endpoints:** Tener los endpoints dentro de un mismo controlador y una ruta simplifica la gestión de la API.
- **Testing:** el uso de Jest y Supertest facilita añadir tests en cada PR, asegurando delivery seguro.

---

## 7. Roadmap y planificación

### 7.1 🧭 Roadmap propuesto

- **Añadir todos los endpoints de CRUD**: añadir endpoints de actualización y eliminación.
- **Tests completos**: crear tests completos para los endpoints.
- **Autenticación y roles**: integrar un sistema de usuarios con roles y proteger los endpoints.
- **Dockerización**: crear contenedores para backend, frontend y base de datos para facilitar desarrollo y despliegue.
- **Cache**: usar Redis para cachear consultas frecuentes y reducir la carga de la base de datos.
- **Logs**: añadir un sistema de logs bien estructurado.
- **Filtros y scroll**: incorporar paginación, ordenación y filtrado en el listado de propiedades para simplificar la gestión
  de gran cantidad de datos.
- **Front avanzado**: mejorar el frontend con rutas, formularios más complejos, y apliación de componentes reutilizables.

### 7.2 🗂️ Priorización de tareas futuras

- **Añadir todos los endpoints de CRUD**: (alta).
- **Tests completos**: (media).
- **Autenticación y roles**: (baja).
- **Dockerización**: (media).
- **Cache**: (media).
- **Logs**: (alta).
- **Filtros y scroll**: (alta).
- **Front avanzado**: (media).

### 7.3 🧪 Propuesta de testing

- **Tests unitarios** de validación con Zod y de utilidades del frontend + tests completos de endpoints para el backend.
- **End-to-End tests** para flujos de usuario completos (creación, edición, borrado).

### 7.4 ✅ Planificación de tareas realizadas

- **Backend, DB y CRUD:** 1:30 horas (he tenido problemas para iniciar la base de datos)
- **Frontend:** 30 minutos
- **README**: 30 minutos
