# SEO Components

Este sistema de diseño incluye un conjunto de componentes de SEO diseñados bajo el principio de "Composición sobre Configuración". Puedes utilizar un componente unificado de inicio rápido (`<Seo />`) o componer tus etiquetas SEO utilizando los componentes atómicos para tener un control más granular.

## Componente Unificado (`<Seo />`)

El componente `<Seo />` es la forma más rápida de añadir metaetiquetas básicas, Open Graph y Twitter Cards a una página.

```astro
---
import { Seo } from '@tu-usuario/design-system';
---

<head>
  <Seo 
    title="Mi Página Increíble"
    description="Esta es una descripción optimizada para motores de búsqueda."
    image="/images/og-cover.png"
    canonicalURL="https://midominio.com/mi-pagina"
  />
</head>
```

## Componentes Atómicos

Para casos de uso avanzados, puedes importar directamente las piezas individuales:

### `<MetaTags />`
Define las etiquetas `<title>`, `<meta name="description">`, `charset`, `viewport` y `canonical`.

```astro
import { MetaTags } from '@tu-usuario/design-system';

<MetaTags 
  title="Título" 
  description="Descripción" 
  canonicalURL="https://midominio.com" 
/>
```

### `<OpenGraph />`
Genera las etiquetas `<meta property="og:*">` estándar.

```astro
import { OpenGraph } from '@tu-usuario/design-system';

<OpenGraph 
  title="Título OG" 
  description="Descripción OG" 
  image="/og-image.png"
  type="article"
/>
```

### `<TwitterCard />`
Genera las etiquetas `<meta name="twitter:*">`.

```astro
import { TwitterCard } from '@tu-usuario/design-system';

<TwitterCard 
  title="Título Twitter" 
  description="Descripción Twitter" 
  image="/twitter-image.png"
  cardType="summary_large_image"
  creator="@usuario"
/>
```

### `<JsonLd />`
Inserta un script `<script type="application/ld+json">` para datos estructurados (Schema.org).

```astro
import { JsonLd } from '@tu-usuario/design-system';

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mi Sistema de Diseño",
  "url": "https://midominio.com/"
};

<JsonLd schema={schema} />
```

### `<MetaRobots />`
Controla cómo los rastreadores indexan tu página con la etiqueta `<meta name="robots">`.

```astro
import { MetaRobots } from '@tu-usuario/design-system';

<MetaRobots 
  index={true} 
  follow={true} 
  maxSnippet={-1} 
  maxImagePreview="large" 
/>
```

### `<Favicons />`
Genera enlaces estándar a favicons y manifiestos de aplicaciones web.

```astro
import { Favicons } from '@tu-usuario/design-system';

<Favicons 
  basePath="/" 
  themeColor="#000000" 
/>
```
