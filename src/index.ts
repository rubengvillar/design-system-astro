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
export { default as Badge } from './components/ui/Badge.astro';
export { default as ThemeToggle } from './components/ui/ThemeToggle.astro';
export { default as Image } from './components/ui/Image.astro';

// Alert Componible
export { default as Alert } from './components/ui/alert/Alert.astro';
export { default as AlertIcon } from './components/ui/alert/AlertIcon.astro';
export { default as AlertTitle } from './components/ui/alert/AlertTitle.astro';
export { default as AlertDescription } from './components/ui/alert/AlertDescription.astro';
export { default as AlertCloseButton } from './components/ui/alert/AlertCloseButton.astro';
export { default as AlertContent } from './components/ui/alert/AlertContent.astro';

// Navbar Componible
export { default as Navbar } from './components/ui/navbar/Navbar.astro';
export { default as NavbarBrand } from './components/ui/navbar/NavbarBrand.astro';
export { default as NavbarContent } from './components/ui/navbar/NavbarContent.astro';
export { default as NavbarMenuToggle } from './components/ui/navbar/NavbarMenuToggle.astro';
export { default as NavbarMenu } from './components/ui/navbar/NavbarMenu.astro';
export { default as NavbarLink } from './components/ui/NavbarLink.astro';

// Footer Componible
export { default as Footer } from './components/ui/footer/Footer.astro';
export { default as FooterColumn } from './components/ui/footer/FooterColumn.astro';
export { default as FooterHeading } from './components/ui/footer/FooterHeading.astro';
export { default as FooterLink } from './components/ui/footer/FooterLink.astro';
export { default as FooterBottom } from './components/ui/footer/FooterBottom.astro';

export { default as Card } from './components/ui/Card.astro';
export { default as CardHeader } from './components/ui/card/CardHeader.astro';
export { default as CardTitle } from './components/ui/card/CardTitle.astro';
export { default as CardDescription } from './components/ui/card/CardDescription.astro';
export { default as CardContent } from './components/ui/card/CardContent.astro';
export { default as CardFooter } from './components/ui/card/CardFooter.astro';

// Componentes de UI funcionales (como Toast, Modal, etc.)
export { toast, type ToastOptions, type ToastVariant } from "./utils/use-toast";
export { default as Toaster } from "./components/ui/Toaster.astro";
export { default as Skeleton } from "./components/ui/Skeleton.astro";

// Componentes de formulario
export { default as Input } from './components/ui/form/Input.astro';
export { default as Label } from './components/ui/form/Label.astro';
export { default as Textarea } from './components/ui/form/Textarea.astro';
export { default as Checkbox } from './components/ui/form/Checkbox.astro';
export { default as FormField } from './components/ui/form/FormField.astro';
export { default as ErrorMessage } from './components/ui/form/ErrorMessage.astro';

// elementos de SEO
export { default as Seo } from './components/seo/SEO.astro';
export { default as ThemeScript } from './components/seo/ThemeScript.astro';

// Utilidades
export { toggleTheme } from './utils/theme';
export { classMerge } from './utils/classMerge';