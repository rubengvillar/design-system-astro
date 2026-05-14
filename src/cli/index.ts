import { Command } from 'commander';
import { initCommand } from './commands/init.command';
import { createCommand } from './commands/create.command';

declare const __VERSION__: string;

const program = new Command();

program
  .name('design-system-astro')
  .description('CLI interactiva para @rubenvillar/design-system-astro')
  .version(__VERSION__, '-v, --version', 'Muestra la versión');

program
  .command('init')
  .description('Configura el design system en un proyecto Astro existente')
  .action(initCommand);

program
  .command('create')
  .description('Crea un nuevo proyecto Astro con el design system preconfigurado')
  .action(createCommand);

program.parse();
