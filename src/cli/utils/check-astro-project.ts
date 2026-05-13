import { readFile } from 'fs/promises';
import { existsSync } from 'fs';

export interface AstroCheckResult {
  isAstro: boolean;
  configFile?: string;
  error?: string;
}

export async function checkAstroProject(cwd: string = process.cwd()): Promise<AstroCheckResult> {
  const configFiles = ['astro.config.mjs', 'astro.config.ts', 'astro.config.js'];
  for (const f of configFiles) {
    if (existsSync(`${cwd}/${f}`)) {
      return { isAstro: true, configFile: f };
    }
  }

  const pkgPath = `${cwd}/package.json`;
  if (!existsSync(pkgPath)) {
    return { isAstro: false, error: `No se encontró package.json en ${cwd}` };
  }

  try {
    const pkg = JSON.parse(await readFile(pkgPath, 'utf-8'));
    const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
    if (allDeps.astro) {
      return { isAstro: true };
    }
    return { isAstro: false, error: 'No se detectó Astro en las dependencias' };
  } catch {
    return { isAstro: false, error: 'Error al leer package.json' };
  }
}
