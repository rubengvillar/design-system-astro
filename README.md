# @rubenvillar/design-system-astro

Un sistema de diseño premium, moderno y altamente composible construido con **Astro**, **React** y **Tailwind CSS v4**. Diseñado para ofrecer una estética excepcional y un rendimiento óptimo.

## 🚀 Instalación

Esta librería está disponible de forma pública en el registro de NPM. Puedes instalarla en cualquier proyecto Astro sin necesidad de configurar credenciales.

```bash
# Con pnpm
pnpm add @rubenvillar/design-system-astro

# Con npm
npm install @rubenvillar/design-system-astro

# Con yarn
yarn add @rubenvillar/design-system-astro
```

## 🛠️ Configuración (Tailwind CSS v4)

Para que el sistema de diseño funcione correctamente y los estilos se apliquen, debes configurar tu proyecto para que Tailwind procese los componentes de la librería.

En tu archivo principal de CSS (ej: `src/styles/globals.css`), añade la referencia a la librería:

```css
@import "tailwindcss";
@reference "../../node_modules/@rubenvillar/design-system-astro/src/styles/globals.css";

/* Opcional: importa los estilos base si no quieres definirlos manualmente */
@import "../../node_modules/@rubenvillar/design-system-astro/src/styles/globals.css";
```

## 💡 Uso Básico

Importa los componentes directamente desde el paquete:

```astro
---
import { Button, Typography, Card } from '@rubenvillar/design-system-astro';
---

<Card>
  <Typography as="h2" variant="h2">Hola Mundo</Typography>
  <Typography as="p">
    Este es un ejemplo de uso del Design System.
  </Typography>
  <Button>Click aquí</Button>
</Card>
```

## ✨ Características Principales

- **Astro Native:** Componentes optimizados para la arquitectura de islas.
- **Tailwind v4:** Estilos ultrarrápidos basados en variables CSS.
- **Glassmorphism:** Estética moderna con desenfoques y gradientes dinámicos.
- **Accesible:** Cumple con estándares WCAG por defecto.
- **Componible:** Divide interfaces complejas en piezas atómicas reutilizables.

## 📦 Desarrollo y Contribución

Si eres el autor o quieres contribuir al proyecto:

1. Clona el repositorio.
2. Instala las dependencias: `pnpm install`.
3. Ejecuta el playground en modo desarrollo: `pnpm dev`.
4. Para publicar una nueva versión:
   ```bash
   pnpm version patch # o minor/major
   npm publish --access public
   ```

---

Desarrollado con ❤️ por [Ruben Villar](https://rubenvillar.vercel.app).
