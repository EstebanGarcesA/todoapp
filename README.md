# TodoApp

Aplicación de gestión de tareas (To-Do List) desarrollada con [Angular 20](https://angular.dev/). Permite crear, editar, eliminar y filtrar tareas, con persistencia local y una interfaz moderna.

## Características principales

- **Añadir tareas:** Escribe y presiona Enter para agregar una nueva tarea.
- **Editar tareas:** Haz doble clic sobre una tarea para editar su texto.
- **Completar tareas:** Marca/desmarca tareas como completadas.
- **Eliminar tareas:** Borra tareas individualmente.
- **Filtrado:** Visualiza todas, solo pendientes o solo completadas.
- **Persistencia:** Las tareas se guardan automáticamente en el navegador (`localStorage`).
- **Interfaz responsiva:** Adaptada para escritorio y móvil.
- **Angular Signals:** Uso de signals y computed para gestión reactiva del estado.
- **Formulario reactivo:** Validación y control de entrada con `FormControl`.

## Estructura del proyecto

```
todoapp/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── task.model.ts
│   │   ├── pages/
│   │   │   └── home/
│   │   │       ├── home.ts
│   │   │       ├── home.html
│   │   │       └── home.css
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── main.ts
│   ├── styles.css
│   └── index.html
├── public/
│   ├── index.html
│   └── 404.html
├── firebase.json
├── package.json
└── README.md
```

## Tecnologías utilizadas

- **Angular 20** (standalone components, signals, computed, effect)
- **TypeScript**
- **Reactive Forms**
- **LocalStorage** para persistencia
- **CSS** para estilos personalizados
- **Firebase Hosting** (opcional, ver `firebase.json`)

## Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd todoapp
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm start
   ```
   Accede a [http://localhost:4200](http://localhost:4200) en tu navegador.

## Scripts disponibles

- `npm start` — Inicia el servidor de desarrollo.
- `npm run build` — Compila la aplicación para producción en `dist/`.
- `npm test` — Ejecuta los tests unitarios.

## Personalización

- **Agregar nuevas páginas:** Crea una carpeta en `src/app/pages/` y añade tu componente standalone.
- **Modificar el modelo de tarea:** Edita `src/app/models/task.model.ts` para añadir campos (por ejemplo, fecha límite, prioridad).
- **Cambiar estilos:** Edita `src/app/pages/home/home.css` o `src/styles.css`.

## Despliegue

La configuración para Firebase Hosting está en `firebase.json`. Para desplegar, primero compila el proyecto:
```bash
npm run build
```
Luego sigue la documentación de [Firebase Hosting](https://firebase.google.com/docs/hosting).


## Recursos útiles

- [Angular Signals](https://angular.dev/reference/signals)
- [Angular Standalone Components](https://angular.dev/guide/standalone-components)
- [Angular Forms](https://angular.dev/guide/forms-overview)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

