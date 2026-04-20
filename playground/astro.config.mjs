import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    optimizeDeps: {
      // Obligamos a Vite a incluir tu librería en la pre-optimización
      include: ['@rubengvillar/design-system-astro'] 
    },
    // Opcional: A veces ayuda a evitar problemas de "duplicación" de módulos
    resolve: {
      dedupe: ['astro']
    }
  }
});
