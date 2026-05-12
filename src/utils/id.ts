/**
 * Genera un ID único para elementos del DOM.
 * Útil para vincular labels con inputs, o triggers con paneles.
 */
export function generateId(prefix: string = "ui") {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}
