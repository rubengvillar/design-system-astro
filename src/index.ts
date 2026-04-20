// src/index.ts
// SEO y metadata
export { default as SEO } from './components/seo/SEO.astro';

// Componentes de Layouts
export { default as Container } from './components/layouts/Container.astro';
export { default as Grid } from './components/layouts/Grid.astro';
export { default as GridItem } from './components/layouts/GridItem.astro';
export { default as Separator } from './components/layouts/Separator.astro';
export { default as Spacer } from './components/layouts/Spacer.astro';
export { default as Typography } from './components/ui/Typography.astro';

// Componentes de UI visuales atomicos
export { default as Button } from './components/ui/Button.astro';
export { default as Card } from './components/ui/Card.astro';
export { default as Badge } from './components/ui/Badge.astro';
export { default as Alert } from './components/ui/Alert.astro';
export { default as Navbar } from './components/ui/Navbar.astro';
export { default as NavbarLink } from './components/ui/NavbarLink.astro';
export { default as Footer } from './components/ui/Footer.astro';
export { default as ThemeToggle } from './components/ui/ThemeToggle.astro';

// Componentes de formulario
export { default as Input } from './components/ui/form/Input.astro';
export { default as Label } from './components/ui/form/Label.astro';
export { default as ErrorMessage } from './components/ui/form/ErrorMessage.astro';

// elementos de SEO
export { default as Seo } from './components/seo/SEO.astro';
export { default as ThemeScript } from './components/seo/ThemeScript.astro';

// Utilidades
export { toggleTheme } from './utils/theme';