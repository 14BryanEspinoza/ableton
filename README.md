# Ableton UI — Frontend Practice

[![Deploy](https://github.com/14BryanEspinoza/ableton/actions/workflows/deploy.yml/badge.svg)](https://github.com/14BryanEspinoza/ableton/actions/workflows/deploy.yml)
[![CI](https://github.com/14BryanEspinoza/ableton/actions/workflows/ci.yml/badge.svg)](https://github.com/14BryanEspinoza/ableton/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Recreación del challenge **Ableton** de [Frontend Practice](https://www.frontendpractice.com/): sitio estático de **una sola página** construido con **Astro 7** (SSG) y **Tailwind CSS v4**, con despliegue automático a GitHub Pages.

![Preview](public/preview.png)

---

## 🌐 Demo en vivo

**<https://14bryanespinoza.github.io/ableton/>**

---

## 🚀 Inicio rápido

```bash
pnpm install       # instalar dependencias
pnpm dev           # desarrollo local → http://localhost:4321
pnpm preview       # previsualizar el build
```

**Verificación** — los cuatro checks deben pasar en `0`:

```bash
pnpm format:check && pnpm lint && pnpm check && pnpm build
```

| Comando             | Resultado esperado                 |
| ------------------- | ---------------------------------- |
| `pnpm format:check` | 0 archivos sin formatear           |
| `pnpm lint`         | 0 errores                          |
| `pnpm check`        | `astro check`: 0 errores, 0 avisos |
| `pnpm build`        | 2 páginas generadas                |

| Comando adicional | Uso                  |
| ----------------- | -------------------- |
| `pnpm lint:fix`   | `eslint . --fix`     |
| `pnpm format`     | `prettier --write .` |

> **Node ≥ 22.12** (declarado en `package.json` y usado en ambos workflows).

---

## 🎯 Alcance

Esto es un ejercicio de maquetación, no un producto. Lo siguiente es **intencional**, no un pendiente:

| Punto                | Estado real                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| **Tipo de proyecto** | Clone visual de **una sola página** para practicar Astro, Tailwind y accesibilidad. Sin backend.     |
| **Enlaces**          | Navegación, footer y legales apuntan a `#`: no hay contenido propio a dónde llevar.                  |
| **Newsletter**       | `method="get"`, sin backend. No envía datos a ningún servicio.                                       |
| **JavaScript**       | Un solo `<script type="module">` inline para el menú mobile. Sin bundles ni dependencias en cliente. |
| **Tests**            | Fuera de alcance. La garantía de calidad son los cuatro checks de arriba.                            |

---

## ✨ Qué incluye

- **Astro 7 (SSG)** — HTML estático; el único JS en cliente es el menú mobile (1 `<script type="module">` inline).
- **Tailwind CSS v4** — configuración CSS-first con `@theme` y design tokens en `src/styles/global.css`.
- **Imágenes optimizadas** — `<Picture>` con `formats={["avif", "webp"]}`, `srcset`/`sizes` responsive y `layout="constrained"` vía Sharp en build.
- **SEO y metadatos** — `title`, `description`, `canonical`, Open Graph y Twitter Card (con `og:image:alt`), `robots` y `viewport` con `initial-scale`.
- **astro-icon + Lucide** — iconos SVG con tree-shaking.
- **JetBrains Mono variable** — una sola petición de fuente (`wght@100..800`) con `preconnect` a Google Fonts.
- **Sitemap + robots** — `@astrojs/sitemap` genera `sitemap-index.xml` y `robots.txt` apunta a él.
- **Página 404** propia, con `<title>` diferenciado gracias al prop `title` de `Layout`.
- **TypeScript estricto** — `astro check` con `typescript@5.7`, 0 errores.
- **ESLint 10 + Prettier** — plugins de Astro y Tailwind, con `--check` en CI.
- **Husky + lint-staged** — formateo y lint en cada commit.
- **CI + Deploy separados** — un workflow valida, otro publica.

---

## ♿ Accesibilidad

- **Skip link real** — `<main id="main-content">` existe en `index.astro` y `404.astro`; el destino está verificado en el HTML compilado.
- **Menú mobile con teclado** — `<button>` con `aria-expanded`/`aria-controls`; `Escape` cierra y devuelve el foco al botón (patrón APG); se colapsa al seguir un enlace; `aria-label` en español; `hidden` lo saca del árbol de accesibilidad cuando está cerrado.
- **Semántica HTML5** — `header`, `main`, `section`, `footer`, `nav`, `figure`/`figcaption`.
- **11 `alt` descriptivos** en el mismo idioma que el contenido (`lang="es"`): 9 de la colección, 1 del hero y 1 del logo.
- **Jerarquía de encabezados** — 1 `h1` → 7 `h2` → 5 `h3`.
- **`:focus-visible` global** con outline de 2px sobre `--color-primary`.
- **`prefers-reduced-motion`** desactiva animaciones y `scroll-behavior`.
- **Contraste AA** medido sobre los estados reales:

| Elemento                           | Color                  | Ratio                    |
| ---------------------------------- | ---------------------- | ------------------------ |
| Enlaces y botones `text-primary`   | `#0000ff` sobre blanco | **8.6:1**                |
| Indicador de foco `:focus-visible` | `#0000ff` sobre blanco | **8.6:1**                |
| Skip link enfocado                 | blanco sobre `#0000ff` | **8.6:1**                |
| Texto secundario                   | `#666666` sobre blanco | **5.74:1**               |
| Bordes de inputs y botones         | `#767676` sobre blanco | **4.54:1**               |
| Título del hero sobre la foto      | scrim `black/60`       | **≥ 5.74:1** (peor caso) |

---

## ⚡ Performance

| Optimización               | Implementación                                                          |
| -------------------------- | ----------------------------------------------------------------------- |
| **AVIF + WebP responsive** | `<Picture formats={["avif","webp"]} layout="constrained">`              |
| **`srcset` + `sizes`**     | múltiples anchos por imagen, de 359w a 1200w, elegidos por el navegador |
| **LCP con prioridad**      | Hero con `priority` → `fetchpriority="high"` + `loading="eager"`        |
| **Below-the-fold lazy**    | 9 imágenes con `loading="lazy"` + `decoding="async"`                    |
| **Fuente en una petición** | `preconnect` ×2 + variable font `100..800` (1 request en vez de 4)      |
| **Un solo script**         | 1 `<script type="module">` inline, sin bundle                           |
| **Sitemap + robots**       | Generados en build                                                      |
| **Sharp en build**         | AVIF `effort: 4`, WebP `effort: 5`, PNG `compressionLevel: 9`           |

---

## 📁 Estructura

```text
src/
├── components/          # Button, Form, Link, Section
├── data/                # collection.ts, links.ts
├── layouts/             # Layout, Header, Hero, Footer
├── metadata/            # metadata.ts (title, description, OG, Twitter)
├── pages/               # index.astro, 404.astro
├── styles/              # global.css (design tokens + reset de accesibilidad)
└── assets/              # 10 imágenes procesadas por Astro en build
public/
├── favicon.png          # favicon y logo del header
├── preview.png          # imagen Open Graph / Twitter Card
└── robots.txt           # con referencia al sitemap
.github/workflows/
├── ci.yml               # lint + format:check + build + astro check
└── deploy.yml           # build + deploy a GitHub Pages
```

---

## 🧱 Componentes

| Componente      | Rol                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Layout.astro`  | Shell HTML: metadata SEO, Open Graph/Twitter, fuente, favicon vía `BASE_URL`, skip link, `<slot>` y prop opcional `title`                               |
| `Header.astro`  | Navbar sticky con menú mobile accesible: `<button aria-expanded aria-controls>`, cierra con `Escape` y devuelve el foco, se colapsa al seguir un enlace |
| `Hero.astro`    | Sección hero: imagen `priority`, scrim de contraste y `aria-labelledby` a un `h1` con `id`                                                              |
| `Section.astro` | Sección genérica reutilizable: título, texto, galería de imágenes y panel opcional con `figcaption` condicional                                         |
| `Footer.astro`  | Links, formulario de newsletter y legales                                                                                                               |
| `Button.astro`  | Botón con `type` y `className` opcionales                                                                                                               |
| `Link.astro`    | Enlace con `className` opcional y variante `skip` para el skip link                                                                                     |
| `Form.astro`    | Input con label `sr-only` + botón de envío                                                                                                              |

Las secciones se componen desde `src/pages/index.astro` pasando objetos de `src/data/collection.ts` como props.

---

## 📦 Datos y metadata

| Archivo                    | Contenido                                                      |
| -------------------------- | -------------------------------------------------------------- |
| `src/data/collection.ts`   | Tipado `CollectionProps` e items de cada sección, con imports. |
| `src/data/links.ts`        | Navegación, footer y legales.                                  |
| `src/metadata/metadata.ts` | Título, descripción, canonical, OG y Twitter Card.             |

---

## 🔧 Stack

| Herramienta         | Versión | Uso                                        |
| ------------------- | ------- | ------------------------------------------ |
| Astro               | 7.2.9   | SSG, optimización de assets                |
| Tailwind CSS        | 4.3.3   | Utility-first + design tokens              |
| TypeScript          | 5.7.3   | Tipado estricto (`astro check`)            |
| ESLint              | 10.9.1  | Linting (plugin-astro, plugin-tailwindcss) |
| Prettier            | 3.9.6   | Formato (plugin-astro, plugin-tailwindcss) |
| @astrojs/check      | 0.9.10  | Diagnósticos de tipos Astro                |
| @astrojs/sitemap    | 3.7.4   | sitemap-index.xml                          |
| astro-icon          | 1.2.0   | Iconos SVG (Lucide)                        |
| Sharp               | 0.35.4  | Transformación de imágenes en build        |
| Husky / lint-staged | 9 / 17  | Git hooks                                  |

---

## 🔁 CI/CD

**`ci.yml`** — en cada push y pull request (pnpm 11.21.0, Node 22):

1. `pnpm install --frozen-lockfile`
2. `pnpm run lint`
3. `pnpm run format:check`
4. `pnpm run build`
5. `pnpm run check`

**`deploy.yml`** — en push a `main`:

1. `withastro/action@v6` (Node 22) → instala y buildea
2. `actions/deploy-pages@v4` → publica `dist/` en el entorno `github-pages`

La `base` está en `astro.config.mjs`:

```js
site: "https://14bryanespinoza.github.io/ableton/",
base: "/ableton/",
build: { assets: "assets" },
```

---

## 📝 Licencia

[MIT](LICENSE) — libre para uso personal y educativo.
