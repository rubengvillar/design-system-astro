import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // <--- Nuevo import
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()], // <--- Añadimos el plugin aquí
    optimizeDeps: {
      // Mantenemos tu configuración anterior de monorepo que es correcta
      include: ['@rubenvillar/design-system-astro']
    },
    resolve: {
      dedupe: ['astro']
    }
  }
});
