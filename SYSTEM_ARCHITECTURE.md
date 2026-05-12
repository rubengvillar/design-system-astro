# SYSTEM_ARCHITECTURE.md

## 1. Visión General
Este sistema de diseño es una librería de componentes basada en **Astro** y **Tailwind CSS**, diseñada bajo principios de **Diseño Atómico** y **Composición**. Su objetivo es proporcionar bloques reutilizables, accesibles y estéticamente consistentes para portafolios y aplicaciones web modernas.

## 2. Estructura de Directorios
src/
├── components/
│   ├── ui/         # Componentes visuales puros (Button, Card, etc.)
│   ├── seo/        # Componentes de lógica (SEO, ThemeScript)
│   └── layouts/    # Esqueletos de página exportables
├── playground-components/ # Componentes exclusivos del entorno de pruebas (no se exportan)
├── pages/          # Páginas del playground (rutas de Astro)
├── layouts/        # Layouts exclusivos del playground
├── styles/
│   └── globals.css # Variables CSS y estilos base
├── utils/
│   └── theme.ts    # Lógica de cambio de tema
└── index.ts        # Punto de entrada (Exports)

## 3. Catálogo de Componentes

### A. Layout y Estructura
| Componente | Descripción | Uso principal |
| :--- | :--- | :--- |
| `Container` | Wrapper centrado con max-width. | Alineación global de contenido. |
| `Grid` / `GridItem` | Sistema de rejilla basado en Tailwind. | Layouts complejos y responsivos. |
| `Spacer` | Espaciador invisible con tamaños definidos. | Mantener espaciado consistente. |
| `Separator` | Línea divisoria (horizontal/vertical). | Separación lógica de secciones. |

### B. UI y Tipografía
| Componente | Descripción |
| :--- | :--- |
| `Typography` | Componente polimórfico (h1-h6, p) basado en variables CSS. |
| `Button` | Botón interactivo con variantes (primary, ghost, etc.). |
| `Card` | Contenedor con borde y sombra (escaparate). |
| `Badge` | Etiqueta pequeña para tags o estados. |
| `Alert` | Mensajes de feedback (success, error, warning). |

### C. Navegación
| Componente | Descripción |
| :--- | :--- |
| `Navbar` | Contenedor sticky con menú hamburguesa (móvil). |
| `NavbarLink` | Enlace con estado activo automático (`isActive`). |
| `Footer` | Pie de página modular con slots para links. |

### D. Formularios (Átomos Componibles)
Para formularios, utiliza la combinación de estos átomos:
* `Label`: Etiqueta accesible.
* `Input` / `Textarea`: Campos de texto con estado de error.
* `FormField`: Wrapper que une Label, Input y ErrorMessage.
* `ErrorMessage`: Bloque de texto para validación.

### E. SEO y Metadata
El sistema proporciona componentes SEO modulares y composables:

| Componente | Descripción |
| :--- | :--- |
| `SEO` | Orquestador principal con slots para extensión |
| `MetaTags` | Title, description, canonical, viewport |
| `OpenGraph` | Facebook/LinkedIn social meta tags |
| `TwitterCard` | Twitter social meta tags |
| `JsonLd` | Structured data (Article, Product, FAQ, etc.) |
| `MetaRobots` | Crawl directives para搜索引擎 |
| `Favicons` | Iconos y manifest para PWA |
| `ThemeScript` | Inline script anti-FOUC para tema |

**Tipos TypeScript disponibles:**
- `ArticleSchema`, `ProductSchema`, `FAQPageSchema`, `BreadcrumbListSchema`, `OrganizationSchema`
- `SEOProps`, `MetaTagsProps`, `OpenGraphProps`, `TwitterCardProps`
- `FaviconItem`, `FaviconsProps`

**Slots disponibles en SEO:**
- `metatags-prepend`: Contenido antes de meta tags
- `opengraph`: Meta tags OG custom
- `twitter`: Meta tags Twitter custom
- `json-ld`: JSON-LD adicional

## 5. Gestión de Temas (Modo Oscuro)
El sistema utiliza una estrategia híbrida:
1.  **Lógica:** `utils/theme.ts` maneja el estado en `localStorage`.
2.  **Script de Prevención:** `components/seo/ThemeScript.astro` (inyectado en el `<head>`) evita el parpadeo blanco inicial.
3.  **UI:** `ThemeToggle.astro` dispara la lógica de cambio de clase `dark` en `<html>`.
4.  **Estilos:** Todo el sistema se basa en variables CSS definidas en `globals.css` (ej: `--background`, `--foreground`).

## 6. Reglas de Desarrollo (Para el Autor)

### Cómo crear un nuevo componente:
1.  **Props:** Define siempre una interfaz `Props` extendiendo las nativas de Astro (`HTMLAttributes<'button'>`, etc.) cuando sea posible.
2.  **Composición:** No crees componentes gigantes. Si el componente crece mucho, divídelo en sub-componentes (como hicimos con `Input` + `Label` + `ErrorMessage`).
3.  **Accesibilidad:** Usa siempre `aria-` attributes (ej: `aria-describedby` en inputs, `role="alert"` en alertas).
4.  **Tailwind:** Usa `class:list` para fusionar clases fijas con las clases pasadas por `className` (prop del usuario).
5.  **Exportación:** Todo componente nuevo debe exportarse desde `src/index.ts`.

### Cómo integrar en proyectos cliente:
1.  Asegurar que el proyecto tenga `@tu-usuario/design-system` en `package.json`.
2.  Configurar el `tailwind.config.mjs` del cliente para incluir la ruta de la librería en el array de `content`.
3.  Importar componentes directamente: `import { Button } from '@tu-usuario/design-system';`.
