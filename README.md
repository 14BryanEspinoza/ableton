# Ableton UI - Frontend Practice

Sitio web estático de una sola página, clon del sitio oficial de [Ableton](https://www.ableton.com), desarrollado como práctica de maquetación frontend. Proyecto basado en el desafío de [Frontend Practice](https://www.frontendpractice.com).

## Descripción

Pagina informativa ficticia que reproduce el estilo visual de Ableton, con navegación sticky, secciones de contenido con imagenes, video preview, footer con multiples enlaces y formulario de newsletter. Todo el contenido esta en espanol.

## Tecnologías

- **HTML5** — estructura semántica (`header`, `main`, `footer`, `nav`, `section`)
- **CSS3** — estilos puros sin pre-procesadores
- **Flexbox** — sistema de layout principal
- **CSS Custom Properties** — variables para colores, espaciado, tipografía y breakpoints
- **CSS-only hamburger menu** — técnica checkbox hack (sin JavaScript)

## Características

- **Responsive design** — mobile-first con breakpoints en 480px, 768px y 1024px
- **Accesibilidad** — skip link, `aria-label`, `aria-labelledby`, `visually-hidden`, `prefers-reduced-motion`, `:focus-visible`
- **SEO** — meta tags (description, keywords, author, robots), Open Graph
- **Performance** — preload de CSS, `loading="lazy"` en imagenes, `decoding="async"`
- **Menu hamburguesa** — funcional en mobile, oculto en tablet y desktop

## Estructura del proyecto

```
.
├── index.html           # Pagina principal (480 lineas)
├── css/
│   └── style.css        # Estilos únicos (808 lineas)
├── img/
│   ├── favicon.png      # Logo / icono (512x512)
│   ├── wallpaper.png    # Imagen hero (736x425)
│   ├── illustration.png # Ilustración artística (736x418)
│   ├── developer.png    # Foto de desarrollador (736x1104)
│   ├── computer.png     # Equipo retro (564x750)
│   └── preview.jpg      # Thumbnail video (360x640)
└── README.md
```

## Breakpoints

| Nombre  | Valor   | Dispositivo                                            |
| ------- | ------- | ------------------------------------------------------ |
| Mobile  | < 768px | Hamburger menu, layout apilado                         |
| Tablet  | 768px+  | Header horizontal, imagenes en grid, panel lado a lado |
| Desktop | 1024px+ | Mayor padding, imagenes mas grandes, footer amplio     |

## Secciones de la pagina

1. **Header** — logo, navegación (Live, Push, Link, Shop, Pack, Help, More+), botones de cuenta
2. **Hero** — imagen principal con links About / Jobs
3. **Products** — texto descriptivo + grid de 2 imagenes
4. **Video** — texto + preview de video (500x500)
5. **Team** — texto + grid de 3 imagenes
6. **Design** — texto + imagen única centrada
7. **Passion** — texto + 2 imagenes sobre fondo azul
8. **Panels** — texto + panel con imagen y CTA de empleos
9. **Footer** — enlaces, idioma, newsletter, links legales, copyright

## Como ver el proyecto

No requiere instalación ni build. Abrir `index.html` directamente en el navegador:

- Opción 1: Abrir archivo directamente
abrir index.html

- Opción 2: Netlify
[Ver Proyecto](https://ableton14bz.netlify.app/)

## Referencia

- Diseño visual: [Ableton.com](https://www.ableton.com)
- Desafió: [Frontend Practice - Ableton](https://www.frontendpractice.com)

## Autor

**Bryan Espinoza**

- GitHub: [@14BryanEspinoza](https://github.com/14BryanEspinoza)
- Correo: 14bryansaenz@gmail.com
