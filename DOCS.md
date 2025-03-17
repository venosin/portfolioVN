# Documentación del Portafolio

## Estructura del Proyecto

```
portfolioVN/
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── icons/      # Iconos SVG como componentes
│   │   ├── sections/   # Secciones principales de la página
│   │   └── Particles.astro  # Sistema de partículas interactivas
│   ├── data/          # Datos estáticos (proyectos, tecnologías, etc.)
│   ├── layouts/       # Plantillas de página
│   ├── pages/         # Páginas de la aplicación
│   ├── styles/        # Estilos y temas
│   └── types/         # Definiciones de TypeScript
├── public/           # Archivos estáticos
└── tailwind.config.mjs # Configuración de Tailwind CSS
```

## Temas y Modos

### Modo Claro
- **Fondo**: Blanco puro (#FFFFFF)
- **Tarjetas**: Blanco semi-transparente con efecto de cristal
- **Texto**: Negro profundo para mejor legibilidad
- **Bordes**: Sutiles con opacidad reducida
- **Sombras**: Suaves con tinte de acento

### Modo Oscuro
- **Primary** (#FF4D4D): Rojo vibrante para elementos principales
- **Secondary** (#7000FF): Púrpura intenso para acentos
- **Accent** (#00FFB2): Verde neón para destacar elementos
- **Dark**: Escala de grises oscuros para fondos
  - Default: #121212
  - 100: #1E1E1E
  - 200: #2D2D2D
  - 300: #404040

## Componentes Principales

### Sistema de Partículas (src/components/Particles.astro)
- Fondo interactivo con partículas animadas
- Conexiones dinámicas entre partículas
- Interacción al hover y click
- Color personalizado (#00FFB2)
- Configuración optimizada para rendimiento

### Estilos Comunes (src/styles/common.ts)

Los estilos están organizados en categorías:

- **gradients**: 
  - Modo claro: Gradientes sutiles con baja opacidad
  - Modo oscuro: Gradientes más intensos con mayor contraste
- **transitions**: 
  - Efectos de hover mejorados
  - Animaciones de elevación
  - Transiciones suaves
- **text**: Estilos de texto adaptados a ambos modos
- **containers**: Contenedores con efectos de cristal
- **buttons**: Botones con efectos de hover y elevación

### Secciones (src/components/sections/)

- **Hero.astro**: Sección principal con animación flotante y partículas
- **Projects.astro**: Galería de proyectos con efectos hover
- **Technologies.astro**: Grid de tecnologías con iconos
- **Contact.astro**: Formulario de contacto y enlaces sociales

## Efectos Visuales

### Animaciones

- **floating**: Efecto de flotación suave (3s de duración)
- **hover-float**: Elevación suave al hover
- **shine**: Efecto de brillo en hover mejorado
- **gradient**: Gradiente animado adaptativo
- **glow**: Efecto de resplandor en hover con opacidad variable

### Cards y Elementos Interactivos

- Efecto de elevación al hover
- Gradiente sutil que aparece al hover
- Transiciones suaves en todos los estados
- Sombras dinámicas con color de acento
- Animación de flechas en hover

## Sistema de Animaciones AOS

- Inicialización mejorada para mejor rendimiento
- Recarga automática en cambios de página
- Soporte para ViewTransitions de Astro
- Animaciones persistentes entre navegaciones
- Configuración optimizada para fluidez

## Mejores Prácticas

1. **Organización del Código**:
   - Usa los componentes de la carpeta `sections/` para grandes bloques de contenido
   - Mantén los componentes pequeños y reutilizables en `components/`
   - Almacena datos estáticos en `data/`

2. **Estilos**:
   - Utiliza las clases predefinidas en `common.ts`
   - Aprovecha los gradientes y animaciones para elementos interactivos
   - Mantén la consistencia usando las variables de color definidas

3. **Rendimiento**:
   - Sistema de partículas optimizado
   - Animaciones basadas en GPU
   - Lazy loading de imágenes
   - ViewTransitions para navegación fluida

4. **Accesibilidad**:
   - Alto contraste en modo claro
   - Textos legibles
   - Indicadores de hover claros
   - Estados activos visibles

## Consejos de Desarrollo

1. **Añadir Efectos de Hover**:
   ```html
   <div class="card-hover">
     <div class="relative overflow-hidden group">
       <div class={gradients.glow}></div>
       <!-- Contenido -->
     </div>
   </div>
   ```

2. **Usar Animaciones**:
   ```html
   <div 
     class="animate-floating"
     data-aos="fade-up"
     data-aos-delay="200"
   >
     <!-- Contenido -->
   </div>
   ```

3. **Implementar Modo Claro/Oscuro**:
   ```html
   <div class="bg-white/80 dark:bg-dark-100/30 
               text-dark dark:text-light
               border-light-200/50 dark:border-dark-200/30">
     <!-- Contenido -->
   </div>
   ```

## Comandos Útiles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye el proyecto para producción
- `npm run preview`: Vista previa de la versión de producción
