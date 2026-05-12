import type { HTMLTag, Polymorphic } from "astro/types";

/**
 * Helper para definir props de componentes polimórficos en Astro.
 * Asegura que las props del elemento HTML seleccionado vía 'as' estén disponibles.
 */
export type PolymorphicProps<T extends HTMLTag> = Polymorphic<{ as: T }>;

/**
 * Tipo base para componentes que soportan la prop 'as' y variantes de CVA.
 */
export type BaseProps<T extends HTMLTag, V = any> = PolymorphicProps<T> & {
  class?: string;
} & (V extends undefined ? {} : V);
