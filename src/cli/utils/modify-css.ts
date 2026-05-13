import { readFile, writeFile, appendFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import { join, basename } from 'path';
import { confirm, text } from '@clack/prompts';

const CSS_IMPORT_LINE = '@import "@rubenvillar/design-system-astro/styles.css";';
const COMMON_CSS_PATHS = [
  'src/styles/globals.css',
  'src/styles/global.css',
  'src/styles/index.css',
  'src/style.css',
  'src/app.css',
  'src/assets/styles/globals.css',
];

export async function findCssFile(cwd: string = process.cwd()): Promise<string | null> {
  for (const p of COMMON_CSS_PATHS) {
    const fullPath = join(cwd, p);
    if (existsSync(fullPath)) return fullPath;
  }
  return null;
}

export async function modifyCssFile(cwd: string = process.cwd()): Promise<void> {
  let cssPath = await findCssFile(cwd);

  if (!cssPath) {
    const createFile = await confirm({
      message: 'No se encontró un archivo CSS principal. ¿Crear src/styles/globals.css?',
    });

    if (!createFile) return;

    const dir = join(cwd, 'src/styles');
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    cssPath = join(cwd, 'src/styles/globals.css');
    const initialCss = `@import "tailwindcss";
${CSS_IMPORT_LINE}
`;
    await writeFile(cssPath, initialCss, 'utf-8');
    return;
  }

  const content = await readFile(cssPath, 'utf-8');

  if (content.includes(CSS_IMPORT_LINE) || content.includes('@rubenvillar/design-system-astro')) {
    return;
  }

  const updated = `${CSS_IMPORT_LINE}\n${content}`;
  await writeFile(cssPath, updated, 'utf-8');
}
