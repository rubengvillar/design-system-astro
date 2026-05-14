import { intro, outro, spinner, note } from '@clack/prompts';
import picocolors from 'picocolors';
import { join } from 'path';
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { promptCreateOptions } from '../prompts/create.prompts';
import { getInstallCmd } from '../utils/detect-pm';
import { modifyAstroConfig } from '../utils/modify-astro-config';
import { modifyCssFile } from '../utils/modify-css';
import { execCmd } from '../utils/install-pkgs';

const DS_PACKAGE = '@rubenvillar/design-system-astro';

export async function createCommand(): Promise<void> {
  intro(picocolors.bold(picocolors.cyan('design-system-astro create')));

  const options = await promptCreateOptions();
  const { projectName, packageManager, typescript, components, darkMode } = options;
  const targetDir = join(process.cwd(), projectName);

  const s = spinner();

  // Check if directory exists
  if (existsSync(targetDir)) {
    outro(picocolors.red(`❌ El directorio "${projectName}" ya existe`));
    process.exit(1);
  }

  // Scaffold with create-astro
  s.start('Creando proyecto Astro base...');
  const tsFlag = typescript ? '--typescript strict' : '--typescript off';
  try {
    execSync(
      `npx create-astro@latest ${projectName} --template basics ${tsFlag} --no-install --no-git`,
      { stdio: 'inherit' }
    );
    s.stop('✅ Proyecto Astro creado');
  } catch (e) {
    s.stop(picocolors.red('❌ Error al crear proyecto Astro'));
    outro(picocolors.red(`Error al ejecutar create-astro. Verifica tu conexión.`));
    process.exit(1);
  }

  // Install base dependencies
  s.start('Instalando dependencias base...');
  try {
    execCmd(`${packageManager} install`, targetDir);
    s.stop('✅ Dependencias base instaladas');
  } catch (e) {
    s.stop(picocolors.red('❌ Error al instalar dependencias base'));
    process.exit(1);
  }

  // Install design system
  s.start('Instalando design system...');
  try {
    execCmd(getInstallCmd(packageManager, [DS_PACKAGE]), targetDir);
    s.stop('✅ Design system instalado');
  } catch (e) {
    s.stop(picocolors.red('❌ Error al instalar el design system'));
    process.exit(1);
  }

  // Configure astro.config
  s.start('Configurando astro.config...');
  try {
    await modifyAstroConfig(targetDir);
    s.stop('✅ astro.config configurado');
  } catch (e) {
    s.stop(picocolors.yellow('⚠️ No se pudo modificar astro.config automáticamente'));
  }

  // Configure CSS
  s.start('Configurando estilos CSS...');
  try {
    await modifyCssFile(targetDir);
    s.stop('✅ Estilos configurados');
  } catch (e) {
    s.stop(picocolors.yellow('⚠️ No se pudo configurar CSS automáticamente'));
  }

  note(
    `✅ Proyecto "${projectName}" creado y configurado\n\n  ${picocolors.cyan(`cd ${projectName}`)}\n  ${picocolors.cyan(`${packageManager} dev`)}`,
    'Listo'
  );

  outro('Hecho');
}
