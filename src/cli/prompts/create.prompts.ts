import { text, select, confirm, multiselect, isCancel } from '@clack/prompts';

export interface CreateOptions {
  projectName: string;
  packageManager: 'npm' | 'pnpm' | 'yarn' | 'bun';
  typescript: boolean;
  darkMode: boolean;
  components: string[];
}

const COMPONENT_GROUPS = [
  {
    label: 'Botones & Badges',
    value: 'button-badge',
    items: ['Button', 'Badge'],
  },
  {
    label: 'Cards',
    value: 'card',
    items: ['Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter'],
  },
  {
    label: 'Navegación',
    value: 'navigation',
    items: ['Navbar', 'NavbarLink', 'Footer', 'Sidebar'],
  },
  {
    label: 'Formularios',
    value: 'forms',
    items: ['Input', 'Textarea', 'Checkbox', 'Switch', 'Label', 'FormField', 'ErrorMessage'],
  },
  {
    label: 'Modales & Dropdowns',
    value: 'modals',
    items: ['Modal', 'DropdownMenu', 'Tooltip'],
  },
  {
    label: 'Notificaciones',
    value: 'notifications',
    items: ['Alert', 'Toaster', 'Notification'],
  },
  {
    label: 'Data Display',
    value: 'data-display',
    items: ['Table', 'Tabs', 'Stat', 'Calendar', 'Skeleton'],
  },
  {
    label: 'SEO & Metadata',
    value: 'seo',
    items: ['SEO', 'MetaTags', 'OpenGraph', 'TwitterCard', 'JsonLd', 'Favicons'],
  },
  {
    label: 'Layout & Tipografía',
    value: 'layout',
    items: ['Container', 'Grid', 'Separator', 'Spacer', 'Typography'],
  },
  {
    label: 'Animaciones',
    value: 'animations',
    items: ['Reveal', 'Marquee', 'Spinner', 'HoverLift', 'Typewriter', 'BlurFade', 'TextReveal'],
  },
  {
    label: 'Tema (Dark Mode)',
    value: 'theme',
    items: ['ThemeToggle', 'ThemeScript'],
  },
];

export async function promptCreateOptions(): Promise<CreateOptions> {
  const projectName = await text({
    message: 'Nombre del proyecto:',
    placeholder: 'mi-proyecto-astro',
    validate(value) {
      if (!value || value.trim().length === 0) return 'El nombre del proyecto es requerido';
      if (!/^[a-z0-9-]+$/.test(value)) return 'Solo letras minúsculas, números y guiones';
    },
  });

  if (isCancel(projectName)) process.exit(0);

  const packageManager = await select({
    message: '¿Qué gestor de paquetes usar?',
    options: [
      { value: 'npm', label: 'npm' },
      { value: 'pnpm', label: 'pnpm' },
      { value: 'yarn', label: 'yarn' },
      { value: 'bun', label: 'bun' },
    ],
    initialValue: 'pnpm',
  });

  if (isCancel(packageManager)) process.exit(0);

  const useTypescript = await confirm({
    message: '¿Usar TypeScript?',
    initialValue: true,
  });

  if (isCancel(useTypescript)) process.exit(0);

  const componentSelection = await multiselect({
    message: 'Selecciona los componentes a incluir (espacio para marcar):',
    options: [
      { label: 'Todos los componentes', value: 'all', hint: 'selecciona todo' },
      ...COMPONENT_GROUPS.map((g) => ({
        label: g.label,
        value: g.value,
        hint: g.items.join(', '),
      })),
    ],
    required: true,
  });

  if (isCancel(componentSelection)) process.exit(0);

  const selected = componentSelection as string[];
  const components: string[] = [];

  if (selected.includes('all')) {
    components.push('all');
  } else {
    for (const sel of selected) {
      const group = COMPONENT_GROUPS.find((g) => g.value === sel);
      if (group) components.push(...group.items);
    }
  }

  const darkMode = await confirm({
    message: '¿Incluir soporte para modo oscuro?',
    initialValue: true,
  });

  if (isCancel(darkMode)) process.exit(0);

  return {
    projectName: (projectName as string).trim(),
    packageManager: packageManager as 'npm' | 'pnpm' | 'yarn' | 'bun',
    typescript: useTypescript as boolean,
    darkMode: darkMode as boolean,
    components: [...new Set(components)],
  };
}
