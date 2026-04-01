# Ableton UI - Frontend Practice

Sitio web estático de una sola página inspirado en [Ableton](https://www.ableton.com), desarrollado como práctica de maquetación moderna y minimalista. Proyecto enfocado en el desafío de [Frontend Practice](https://www.frontendpractice.com), manteniendo un diseño limpio, tipografía cuidada y experiencia responsive.

## Descripción

Página informativa ficticia que reproduce un estilo minimalista inspirado en Ableton. Incluye navegación sticky, secciones con imágenes, preview de video, footer con enlaces y formulario de newsletter. Todo el contenido está en español.

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
- **SEO básico** — meta tags, Open Graph y contenido localizado.
- **Performance** — CSS preload y carga diferida de imágenes (`loading="lazy"`, `decoding="async"`).

## Estructura del proyecto

```
.
├── index.html           # Página principal (530 líneas)
├── css/
│   └── style.css        # Estilos únicos (794 líneas)
├── img/
│   ├── favicon.png      # Logo / icono
│   ├── wallpaper.png    # Imagen hero
│   ├── illustration.png # Ilustración artística
│   ├── developer.png    # Foto de desarrollador
│   ├── computer.png     # Equipo retro
│   └── preview.jpg      # Thumbnail de video
└── README.md
```

## Breakpoints

| Nombre  | Valor   | Dispositivo                                             |
| ------- | ------- | ------------------------------------------------------- |
| Mobile  | < 768px | Menú hamburguesa, layout apilado                        |
| Tablet  | 768px+  | Header horizontal, grids de imágenes, panel lado a lado |
| Desktop | 1024px+ | Mayor padding, imagenes más amplias, footer amplio      |

## Secciones de la página

1. **Header** — logo, navegación (Live, Push, Link, Shop, Pack, Help, More+), botones de cuenta.
2. **Hero** — imagen principal con links About / Jobs.
3. **Products** — texto descriptivo y grid de dos imágenes.
4. **Video** — texto y preview de video.
5. **Team** — texto y galería de imágenes.
6. **Creativity** — texto y una imagen destacada.
7. **Passion** — texto y dos imágenes sobre fondo suave.
8. **Panels** — texto con panel de imagen y CTA de empleos.
9. **Footer** — enlaces comunitarios, educación, newsletter, links legales y copyright.

## Cómo ver el proyecto

No requiere instalación ni build. Abrir `index.html` directamente en el navegador.

- Opción 1: Abrir el archivo localmente.
- Opción 2: GitHub Page
  [Ver Proyecto](https://14bryanespinoza.github.io/ableton/)

## Referencia

- Diseño visual: [Ableton.com](https://www.ableton.com)
- Desafío: [Frontend Practice - Ableton](https://www.frontendpractice.com)

## Autor

**Bryan Espinoza**

- GitHub: [@14BryanEspinoza](https://github.com/14BryanEspinoza)
- Correo: 14bryansaenz@gmail.com
