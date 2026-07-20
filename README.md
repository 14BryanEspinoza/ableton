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
│   └── style.css        # Estilos (659 líneas)
├── img/
│   ├── 2027.png         # Calendario de escritorio
│   ├── code.png         # Editor de código
│   ├── developer.png    # Desarrollador en escritorio
│   ├── favicon.png      # Logo del sitio
│   ├── github.png       # Perfil de GitHub
│   ├── linux.png        # Terminal Linux
│   ├── loading.png      # Spinner de carga
│   ├── packman.png      # Videojuego Pac-Man
│   ├── person.png       # Colaboración en equipo
│   ├── preview.png      # Vista previa
│   ├── reset.png        # Teléfono con artículo
│   ├── terminal.png     # Emulador de terminal
│   └── wallpaper.png    # Imagen hero de fondo
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

**Bryan Espinoza**

- GitHub: [@14BryanEspinoza](https://github.com/14BryanEspinoza)
- Correo: 14bryansaenz@gmail.com
