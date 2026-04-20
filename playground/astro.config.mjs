import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // <--- Nuevo import

export default defineConfig({
  // Eliminamos "integrations: [tailwind()]"
  vite: {
    plugins: [tailwindcss()], // <--- Añadimos el plugin aquí
    optimizeDeps: {
      // Mantenemos tu configuración anterior de monorepo que es correcta
      include: ['@rubengvillar/design-system-astro']
    },
    resolve: {
      dedupe: ['astro']
    }
  }
});
