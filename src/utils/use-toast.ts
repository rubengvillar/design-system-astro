// Añadimos "success" y "warning" a la unión de tipos
export type ToastVariant = "default" | "primary" | "secondary" | "destructive" | "success" | "warning";

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  className?: string;
}

export function toast(options: ToastOptions) {
  const event = new CustomEvent("design-system-toast", {
    detail: { 
      ...options, 
      id: crypto.randomUUID() 
    }
  });
  window.dispatchEvent(event);
}