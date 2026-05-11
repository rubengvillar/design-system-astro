import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusiona de forma inteligente las clases de Tailwind resolviendo conflictos.
 * Ejemplo: cn("bg-red-500", "bg-blue-500") -> "bg-blue-500"
 */
export function classMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
