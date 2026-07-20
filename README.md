# Ableton UI - Frontend Practice

Sitio web estático de una sola página inspirado en el desafío Ableton, desarrollado como práctica de maquetación moderna y minimalista. Proyecto enfocado en el desafío de [Frontend Practice](https://www.frontendpractice.com), manteniendo un diseño limpio, tipografía cuidada y experiencia responsive.

## Descripción

Página informativa ficticia que reproduce un estilo minimalista inspirado en Ableton. Incluye navegación sticky, secciones con imágenes, footer con enlaces y formulario de newsletter. Todo el contenido está en inglés.

## Tecnologías

- **HTML5** — estructura semántica (`header`, `main`, `footer`, `nav`, `section`)
- **CSS3** — estilos puros sin pre-procesadores
- **Flexbox** — layout principal y grids responsivos
- **CSS Custom Properties** — variables para colores, espaciado, tipografía y sombras
- **CSS-only hamburger menu** — navegación móvil sin JavaScript

## Características

- **Diseño moderno y minimalista** — paleta neutra, tipografía clara y uso de espacios.
- **Responsive** — adaptado para mobile, tablet y desktop.
- **Accesibilidad** — skip link, `aria-label`, `aria-labelledby`, `visually-hidden`, `prefers-reduced-motion`, `:focus-visible`.
- **SEO básico** — meta tags, Open Graph.
- **Performance** — font preconnect, carga diferida de imágenes (`loading="lazy"`, `decoding="async"`).

## Estructura del proyecto

```text
.
├── index.html           # Página principal (519 líneas)
├── css/
│   └── style.css        # Estilos (677 líneas)
├── img/
│   ├── cat.png          # Gato junto al setup de desarrollo
│   ├── dev.png          # Desarrollador programando en laptop
│   ├── developer.png    # Desarrollador frontend con vistas mobile/desktop
│   ├── devs.png         # Equipo colaborando en code review
│   ├── favicon.png      # Logo del sitio
│   ├── linux.png        # Terminal Linux con operaciones del sistema
│   ├── person.png       # Ingeniero en escritorio de pie
│   ├── preview.png      # Vista previa
│   ├── red.png          # Workspace con iluminación roja
│   ├── tech.png         # Espacio tech con herramientas de desarrollo
│   ├── wallpaper.png    # Imagen hero de fondo
│   ├── web.png          # Interfaz de aplicación web moderna
│   └── web-developer.png # Web developer con editor de código
└── README.md
```

## Breakpoints

| Nombre  | Valor   | Dispositivo                                             |
| ------- | ------- | ------------------------------------------------------- |
| Mobile  | < 768px | Menú hamburguesa, layout apilado                        |
| Tablet  | 768px+  | Header horizontal, grids de imágenes, panel lado a lado |
| Desktop | 1024px+ | Mayor padding, imágenes más amplias, footer amplio      |

## Secciones de la página

1. **Header** — logo, navegación (Home, Projects, About, Services, Blog, Contact, More+), botones de cuenta.
2. **Hero** — imagen principal con enlaces About / Jobs y título "Ableton" superpuesto.
3. **Create** — texto sobre frontend development y grid de dos imágenes.
4. **Clean Code** — texto sobre código limpio con imagen y caption.
5. **Team** — texto sobre el equipo diverso y galería de imágenes.
6. **Creativity** — texto sobre crear experiencias web excepcionales con una imagen.
7. **Passion** — texto sobre pasión por el desarrollo y grid de dos imágenes.
8. **Panels** — texto sobre oportunidades laborales con panel de imagen y CTA.
9. **Footer** — enlaces comunitarios, educación, newsletter, enlaces legales y copyright.

## Cómo ver el proyecto

No requiere instalación ni build. Abrir `index.html` directamente en el navegador.

- Opción 1: Abrir el archivo localmente.
- Opción 2: GitHub Page
  [Ver Proyecto](https://14bryanespinoza.github.io/ableton/)

## Autor

> Bryan Espinoza

- GitHub: [@14BryanEspinoza](https://github.com/14BryanEspinoza)
- Correo: <14bryansaenz@gmail.com>
