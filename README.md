# @rubenvillar/design-system-astro

Un sistema de diseño premium, moderno y altamente composible construido con **Astro**, **React** y **Tailwind CSS v4**. Diseñado para ofrecer una estética excepcional y un rendimiento óptimo.

## 🚀 CLI (Recomendado)

La forma más rápida de empezar es con nuestra CLI interactiva:

```bash
# Crear un proyecto desde cero
npx @rubenvillar/design-system-astro create

# Configurar un proyecto Astro existente
npx @rubenvillar/design-system-astro init
```

El CLI te guiará paso a paso:
- Selección de componentes individuales (Button, Card, Navbar, etc.)
- Soporte para modo oscuro
- Creación de páginas de ejemplo
- Configuración automática de `astro.config.*` y CSS

### Comandos

| Comando | Descripción |
|---|---|
| `init` | Configura el design system en un proyecto Astro existente |
| `create` | Crea un nuevo proyecto Astro con el design system preconfigurado |

## 📦 Instalación Manual

Si prefieres instalar manualmente, la librería está disponible en NPM:

```bash
pnpm add @rubenvillar/design-system-astro
npm install @rubenvillar/design-system-astro
yarn add @rubenvillar/design-system-astro
```

## 🛠️ Configuración Manual (Tailwind CSS v4)

Añade la referencia a la librería en tu archivo CSS principal:

```css
@import "tailwindcss";
@import "@rubenvillar/design-system-astro/styles.css";
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
- **CLI Interactiva:** Inicialización y configuración automática con `npx`.

## 📦 Desarrollo y Contribución

1. Clona el repositorio.
2. Instala las dependencias: `pnpm install`.
3. Ejecuta el playground: `pnpm dev`.
4. Construye la CLI: `pnpm build:cli`.
5. Para publicar:
   ```bash
   pnpm build:cli
   pnpm version patch
   npm publish --access public
   ```

---

Desarrollado con ❤️ por [Ruben Villar](https://rubenvillar.vercel.app).
