import { intro, outro, spinner, note } from '@clack/prompts';
import picocolors from 'picocolors';
import { checkAstroProject } from '../utils/check-astro-project';
import { detectPackageManager, getInstallCmd } from '../utils/detect-pm';
import { modifyAstroConfig } from '../utils/modify-astro-config';
import { modifyCssFile } from '../utils/modify-css';
import { execCmd } from '../utils/install-pkgs';
import { promptInitOptions } from '../prompts/init.prompts';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const DS_PACKAGE = '@rubenvillar/design-system-astro';

export async function initCommand(): Promise<void> {
  intro(picocolors.bold(picocolors.cyan('design-system-astro init')));

  const check = await checkAstroProject();
  if (!check.isAstro) {
    outro(
      picocolors.red(
        `❌ ${check.error || 'No es un proyecto Astro'}\nUsa: npx @rubenvillar/design-system-astro create`
      )
    );
    process.exit(1);
  }

  const pm = await detectPackageManager();

  const options = await promptInitOptions();

  const s = spinner();

  // Install package
  s.start('Instalando dependencias...');
  execCmd(getInstallCmd(pm, [DS_PACKAGE]));
  s.stop('✅ Dependencias instaladas');

  // Configure astro.config
  s.start('Configurando astro.config...');
  try {
    await modifyAstroConfig();
    s.stop('✅ astro.config configurado');
  } catch (e) {
    s.stop(picocolors.yellow('⚠️ No se pudo modificar astro.config automáticamente'));
  }

  // Configure CSS
  s.start('Configurando estilos CSS...');
  try {
    await modifyCssFile();
    s.stop('✅ Estilos configurados');
  } catch (e) {
    s.stop(picocolors.yellow('⚠️ No se pudo configurar CSS automáticamente'));
  }

  // Create example page
  if (options.createExample) {
    s.start('Creando página de ejemplo...');
    try {
      createExamplePage(options.components, options.darkMode);
      s.stop('✅ Página de ejemplo creada en src/pages/_design-system-demo.astro');
    } catch (e) {
      s.stop(picocolors.yellow('⚠️ No se pudo crear la página de ejemplo'));
    }
  }

  note(
    `✅ Configuración completada\n\nEjecuta ${picocolors.cyan(`${pm} dev`)} para iniciar el servidor de desarrollo.`,
    'Listo'
  );

  outro('Hecho');
}

function createExamplePage(components: string[], darkMode: boolean): void {
  const demoDir = join(process.cwd(), 'src/pages');
  if (!existsSync(demoDir)) {
    mkdirSync(demoDir, { recursive: true });
  }

  const imports = [
    "import { Container, Typography, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Grid, GridItem, Separator } from '@rubenvillar/design-system-astro';",
  ];

  const pageContent = `---
${imports.join('\n')}
---

<Container>
  <Typography as="h1" variant="h1">Demo - Design System</Typography>
  <Typography as="p">Página de ejemplo generada automáticamente.</Typography>

  <Separator class="my-8" />

  <Grid cols="3" gap="md">
    <Card>
      <CardHeader>
        <Badge>Nuevo</Badge>
        <CardTitle>Componentes</CardTitle>
        <CardDescription>Todos los componentes de la librería</CardDescription>
      </CardHeader>
      <CardContent>
        <Typography as="p">Los componentes instalados están listos para usar.</Typography>
      </CardContent>
      <CardFooter>
        <Button>Más información</Button>
      </CardFooter>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Rendimiento</CardTitle>
        <CardDescription>Optimizado con Astro</CardDescription>
      </CardHeader>
      <CardContent>
        <Typography as="p">Cero JavaScript por defecto, solo lo que necesitas.</Typography>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Saber más</Button>
      </CardFooter>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Accesible</CardTitle>
        <CardDescription>WCAG compliant por defecto</CardDescription>
      </CardHeader>
      <CardContent>
        <Typography as="p">Diseñado con accesibilidad desde el inicio.</Typography>
      </CardContent>
      <CardFooter>
        <Button variant="ghost">Detalles</Button>
      </CardFooter>
    </Card>
  </Grid>
</Container>
`;

  writeFileSync(join(demoDir, '_design-system-demo.astro'), pageContent, 'utf-8');
}
