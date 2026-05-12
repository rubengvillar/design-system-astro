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
export { Button as ReactButton, type ButtonProps as ReactButtonProps } from './components/ui/react/Button.tsx';
export { default as Badge } from './components/ui/Badge.astro';
export { default as ThemeToggle } from './components/ui/ThemeToggle.astro';
export { default as Image } from './components/ui/Image.astro';
export { default as Avatar } from './components/ui/Avatar.astro';

// Notificaciones
export { default as Notification } from './components/ui/notification/Notification.astro';
export { default as NotificationIndicator } from './components/ui/notification/NotificationIndicator.astro';

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
export { default as Switch } from './components/ui/form/Switch.astro';
export { default as FormField } from './components/ui/form/FormField.astro';
export { default as ErrorMessage } from './components/ui/form/ErrorMessage.astro';

// Tabs Componibles
export { default as Tabs } from './components/ui/tabs/Tabs.astro';
export { default as TabsList } from './components/ui/tabs/TabsList.astro';
export { default as TabsTrigger } from './components/ui/tabs/TabsTrigger.astro';
export { default as TabsContent } from './components/ui/tabs/TabsContent.astro';

// Table Componibles
export { default as Table } from './components/ui/table/Table.astro';
export { default as TableHeader } from './components/ui/table/TableHeader.astro';
export { default as TableBody } from './components/ui/table/TableBody.astro';
export { default as TableRow } from './components/ui/table/TableRow.astro';
export { default as TableHead } from './components/ui/table/TableHead.astro';
export { default as TableCell } from './components/ui/table/TableCell.astro';
export { default as TableCaption } from './components/ui/table/TableCaption.astro';

// Sidebar Componibles
export { default as Sidebar } from './components/ui/sidebar/Sidebar.astro';
export { default as SidebarHeader } from './components/ui/sidebar/SidebarHeader.astro';
export { default as SidebarContent } from './components/ui/sidebar/SidebarContent.astro';
export { default as SidebarFooter } from './components/ui/sidebar/SidebarFooter.astro';
export { default as SidebarItem } from './components/ui/sidebar/SidebarItem.astro';

// Modal Componibles
export { default as Modal } from './components/ui/modal/Modal.astro';
export { default as ModalTrigger } from './components/ui/modal/ModalTrigger.astro';
export { default as ModalContent } from './components/ui/modal/ModalContent.astro';
export { default as ModalHeader } from './components/ui/modal/ModalHeader.astro';
export { default as ModalFooter } from './components/ui/modal/ModalFooter.astro';
export { default as ModalTitle } from './components/ui/modal/ModalTitle.astro';
export { default as ModalDescription } from './components/ui/modal/ModalDescription.astro';
export { default as ModalClose } from './components/ui/modal/ModalClose.astro';

// Dropdown Componibles
export { default as DropdownMenu } from './components/ui/dropdown/DropdownMenu.astro';
export { default as DropdownMenuTrigger } from './components/ui/dropdown/DropdownMenuTrigger.astro';
export { default as DropdownMenuContent } from './components/ui/dropdown/DropdownMenuContent.astro';
export { default as DropdownMenuItem } from './components/ui/dropdown/DropdownMenuItem.astro';
export { default as DropdownMenuLabel } from './components/ui/dropdown/DropdownMenuLabel.astro';
export { default as DropdownMenuSeparator } from './components/ui/dropdown/DropdownMenuSeparator.astro';

// Tooltip
export { default as Tooltip } from './components/ui/tooltip/Tooltip.astro';

// Collapse
export { default as Collapse } from './components/ui/collapse/Collapse.astro';
export { default as CollapseHeader } from './components/ui/collapse/CollapseHeader.astro';
export { default as CollapseContent } from './components/ui/collapse/CollapseContent.astro';

// Estadísticas (Stats)
export { default as Stat } from './components/ui/stat/Stat.astro';
export { default as StatGroup } from './components/ui/stat/StatGroup.astro';
export { default as StatLabel } from './components/ui/stat/StatLabel.astro';
export { default as StatNumber } from './components/ui/stat/StatNumber.astro';
export { default as StatHelpText } from './components/ui/stat/StatHelpText.astro';
export { default as StatIndicator } from './components/ui/stat/StatIndicator.astro';

// Calendar (React)
export { Calendar, type CalendarProps } from './components/ui/calendar/Calendar.tsx';

// Animaciones
export { default as Reveal } from './components/ui/animations/Reveal.astro';
export { default as BlurFade } from './components/ui/animations/BlurFade.astro';
export { default as Marquee } from './components/ui/animations/Marquee.astro';
export { default as Spinner } from './components/ui/animations/Spinner.astro';
export { default as HoverLift } from './components/ui/animations/HoverLift.astro';
export { default as Typewriter } from './components/ui/animations/Typewriter.astro';
export { default as TextReveal } from './components/ui/animations/TextReveal.astro';

// elementos de SEO
export { default as Seo } from './components/seo/SEO.astro';
export { default as ThemeScript } from './components/seo/ThemeScript.astro';
export { default as MetaTags } from './components/seo/MetaTags.astro';
export { default as OpenGraph } from './components/seo/OpenGraph.astro';
export { default as TwitterCard } from './components/seo/TwitterCard.astro';
export { default as JsonLd } from './components/seo/JsonLd.astro';
export { default as MetaRobots } from './components/seo/MetaRobots.astro';
export { default as Favicons } from './components/seo/Favicons.astro';

// Utilidades
export { toggleTheme } from './utils/theme';
export { classMerge } from './utils/classMerge';
