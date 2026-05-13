import { multiselect, confirm, isCancel } from '@clack/prompts';

export interface InitOptions {
  components: string[];
  darkMode: boolean;
  createExample: boolean;
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

export async function promptInitOptions(): Promise<InitOptions> {
  const componentSelection = await multiselect({
    message: 'Selecciona los componentes a instalar (espacio para marcar):',
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

  if (isCancel(componentSelection)) {
    process.exit(0);
  }

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

  const createExample = await confirm({
    message: '¿Crear una página de ejemplo con los componentes seleccionados?',
    initialValue: false,
  });

  if (isCancel(createExample)) process.exit(0);

  return {
    components: [...new Set(components)],
    darkMode: darkMode as boolean,
    createExample: createExample as boolean,
  };
}
