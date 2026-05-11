# @tu-usuario/design-system

Un sistema de diseño personal ligero, basado en Astro y Tailwind CSS, diseñado para ser utilizado en múltiples proyectos propios.

## 🚀 Instalación

Al ser un paquete privado hospedado en GitHub Packages, necesitas configurar tu entorno para poder descargarlo.

1. **Configurar el registro:**
Crea o edita el archivo `.npmrc` en la raíz del proyecto **donde vas a consumir la librería** (no en la librería misma):

```text
@tu-usuario:registry=[https://npm.pkg.github.com/](https://npm.pkg.github.com/)
```

2. **Instalar** la librería:**

```Bash
pnpm add @tu-usuario/design-system
```

🛠️ **Configuración**
Para que el sistema de diseño funcione correctamente en tu proyecto, debes vincular tus estilos con los componentes.

1. Tailwind CSS
Debes informar a Tailwind que procese los archivos de tu librería. Edita tu tailwind.config.mjs:

```JavaScript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    // Añade la ruta de tu librería en node_modules
    './node_modules/@tu-usuario/design-system/src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      // Tus personalizaciones aquí
    },
  },
  plugins: [],
}
```

2. **Variables CSS (Globals)**
Importa o define las variables de diseño en tu archivo global de CSS (src/styles/globals.css):

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;
  --radius: 0.5rem;
  /* ... resto de tus variables */
}
```

## 💡 Uso básico
Importa los componentes directamente desde el paquete instalado:

```astro Fragmento de código
---
import { Button } from '@tu-usuario/design-system';
---

<Button variant="primary">
  Hola desde mi sistema
</Button>
```

## 🔄 Actualización
Cuando realices cambios en tu repositorio central y publiques una nueva versión, simplemente actualiza la dependencia en tus proyectos cliente:

```Bash
pnpm update @tu-usuario/design-system
```

## 📦 Desarrollo (Para el autor)
Si necesitas modificar componentes:

1. Haz los cambios en la carpeta `src/`.

2. Prueba los cambios ejecutando `npm run dev` en la raíz (el entorno de pruebas/playground está integrado en `src/pages/`).

3. Actualiza la versión en package.json (ej: npm version patch).

4. Haz git push. La acción de GitHub publicará automáticamente la nueva versión.

```
---

### Unos consejos finales antes de "lanzar" tu sistema:

1.  **La regla de oro:** Cada vez que hagas un cambio importante (ej: cambias cómo funciona un botón), incrementa la versión en el `package.json` de la raíz (usando `npm version patch`, `minor` o `major`). Esto evita que el `pnpm update` de tus otros proyectos traiga cambios inesperados si no estás listo.
2.  **Seguridad:** Recuerda añadir `.npmrc` a tu `.gitignore` en todos tus proyectos para que nunca subas tu token de acceso a GitHub.
3.  **Expansión:** Si en el futuro ves que tienes muchos componentes, organiza tu `index.ts` exportando carpetas, por ejemplo: `export * as UI from './components/ui/index.js'`.

¿Quieres que hagamos una última revisión de cómo se vería tu archivo `.gitignore` final para asegurarnos de que no estás subiendo archivos innecesarios al repositorio?
```