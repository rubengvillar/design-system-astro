import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { parseModule, generateCode, builders } from 'magicast';

const CONFIG_FILES = ['astro.config.mjs', 'astro.config.ts', 'astro.config.js'];

function findConfigFile(cwd: string): string | null {
  for (const f of CONFIG_FILES) {
    if (existsSync(join(cwd, f))) return f;
  }
  return null;
}

function isFn(item: any, name: string): boolean {
  return item?.$type === 'function-call' && String(item.$callee) === name;
}

export async function modifyAstroConfig(cwd: string = process.cwd()): Promise<void> {
  const configFile = findConfigFile(cwd);
  if (!configFile) throw new Error('No se encontró archivo de configuración de Astro');

  const filePath = join(cwd, configFile);
  const source = await readFile(filePath, 'utf-8');
  const mod = parseModule(source);

  // Add missing imports
  if (!source.includes('@astrojs/react')) {
    mod.imports.react = { imported: 'default', from: '@astrojs/react' };
  }
  if (!source.includes('@tailwindcss/vite')) {
    mod.imports.tailwindcss = { imported: 'default', from: '@tailwindcss/vite' };
  }

  const config = mod.exports.default.$args[0];

  // Add react() to integrations if missing
  if (config.integrations) {
    const hasReact = config.integrations.some((i: any) => isFn(i, 'react'));
    if (!hasReact) {
      config.integrations.push(builders.functionCall('react'));
    }
  }

  // Always ensure vite config has tailwindcss + optimizeDeps + dedupe
  if (!config.vite) config.vite = {};
  if (!config.vite.plugins) config.vite.plugins = [];

  const hasTWP = (config.vite.plugins as any[]).some((p: any) => isFn(p, 'tailwindcss'));
  if (!hasTWP) {
    config.vite.plugins.push(builders.functionCall('tailwindcss'));
  }

  if (!config.vite.optimizeDeps) config.vite.optimizeDeps = {};
  if (!config.vite.optimizeDeps.include) config.vite.optimizeDeps.include = [];
  if (!config.vite.optimizeDeps.include.includes('@rubenvillar/design-system-astro')) {
    config.vite.optimizeDeps.include.push('@rubenvillar/design-system-astro');
  }

  if (!config.vite.resolve) config.vite.resolve = {};
  if (!config.vite.resolve.dedupe) config.vite.resolve.dedupe = [];
  if (!config.vite.resolve.dedupe.includes('astro')) {
    config.vite.resolve.dedupe.push('astro');
  }

  const result = generateCode(mod).code;
  await writeFile(filePath, result, 'utf-8');
}
