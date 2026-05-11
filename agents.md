# Reglas y Directrices para IA (agents.md)

Este documento establece las reglas base y el contexto que los asistentes de IA y desarrolladores deben seguir estrictamente al desarrollar, refactorizar o extender esta librería de componentes basada en Astro y React.

## 1. Principios Fundamentales
- **Componentes Altamente Reutilizables:** Todo componente (Astro o React) debe diseñarse pensando en la máxima reutilización. Deben ser agnósticos a su contexto, recibiendo datos y configuración exclusivamente a través de `props` o `slots`/`children`.
- **Composición sobre Configuración:** Fomentar el uso de piezas modulares que se combinan para crear interfaces complejas, en lugar de componentes monolíticos con decenas de parámetros.
- **Arquitectura Híbrida (Astro + React):** Priorizar **Astro** para componentes puramente estáticos, layouts y SEO. Utilizar **React** únicamente cuando se requiera interactividad del lado del cliente, estado local complejo o ciclos de vida específicos.

## 2. Tecnologías de Estilizado
- **Tailwind CSS como Motor Principal:** Todos los estilos deben aplicarse utilizando clases de utilidad de Tailwind CSS. Se deben evitar hojas de estilo en cascada (`.css`) tradicionales para componentes individuales.
- **Variables CSS para Tokens de Diseño:** Los temas, colores y configuraciones globales deben basarse en variables CSS nativas definidas en `src/styles/globals.css` (ej. `--background`, `--primary`). Estas variables se conectan a Tailwind mediante el archivo `tailwind.config.mjs`.
- **Fusión Segura de Clases:** Se debe permitir que el usuario sobrescriba estilos de forma predecible. En Astro, utilizar el atributo nativo `class:list`. En React, utilizar utilidades tipo `clsx` y `tailwind-merge` para combinar la prop `className` del usuario con las clases base.

## 3. Desarrollo de Componentes
- **Tipado Fuerte (TypeScript):** Las `Props` de cada componente deben estar estrictamente tipadas.
    - Se debe extender siempre de los atributos nativos del DOM correspondientes (por ejemplo, `HTMLAttributes<'button'>`) para garantizar el paso de atributos estándar (`aria-*`, `data-*`, `disabled`, etc.) mediante un operador rest (`...rest`).
- **Accesibilidad (A11y):** Es mandatorio incluir roles semánticos y atributos `aria` cuando corresponda para asegurar que la librería sea usable por todos.
- **Nomenclatura y Estructura:** Mantener las convenciones documentadas en `SYSTEM_ARCHITECTURE.md`. Los componentes UI puros residen en `src/components/ui/`.
- **Playground Integrado:** El proyecto contiene un entorno de pruebas visuales y documentación ("playground") alojado directamente en `src/pages/` y `src/playground-components/`. Asegurarse de que el código de la librería central (`src/components/`, `src/utils/`, etc.) no dependa en absoluto del código del playground. El playground es únicamente un consumidor de la librería.

## 4. Funcionalidades Reutilizables y Lógica
- **Extracción de Utilidades:** Cualquier lógica compartida, utilidades matemáticas, de formateo o helpers (como la lógica de cambio de temas) debe residir como funciones modulares en la carpeta `src/utils/`.
- **Hooks Personalizados (React):** La lógica de estado reutilizable para componentes interactivos de React debe extraerse a Custom Hooks para mantener los componentes visuales limpios.

## 5. Gestión del Sistema de Exportaciones
- **Punto de Entrada Único:** Todo nuevo componente público, tipo, función utilitaria o hook debe ser exportado de manera explícita en el archivo `src/index.ts` para que pueda ser consumido por el proyecto cliente.

## 6. Workflow y Skills Exclusivos para IA

### Skill: Desarrollo Componible (Strict Composition)
**Regla de Oro:** **NUNCA** construyas componentes monolíticos que reciban docenas de props para renderizar sub-elementos (ej. `<Card title="..." description="..." footer="...">`).
- **Obligatorio:** Divide siempre la interfaz en subcomponentes atómicos (`Parent` -> `Child`).
- Ejemplo correcto: `<Card><CardHeader><CardTitle>...</CardTitle></CardHeader></Card>`.
- **Beneficio:** Esto permite al consumidor intercambiar partes (ej. quitar el `CardTitle` sin tener que añadir una prop `showTitle={false}`).

### Skill: Interactividad en Astro (Custom Elements)
**Regla de Oro:** **NUNCA** utilices scripts en línea con manejadores de eventos como `onclick="..."` directamente en el HTML de los componentes de Astro, ni confíes en IDs globales (`document.getElementById('mobile-menu')`).
- **Obligatorio:** Para componentes puramente Astro que requieran interactividad del lado del cliente (ej. cerrar una alerta, desplegar un menú), debes empaquetar el componente en un **Custom Element** (Web Component).
- Ejemplo correcto: Crear un `<ui-alert>` que extienda de `HTMLElement`, y escuchar un evento personalizado lanzado desde el botón de cierre para cambiar su estado. Esto asegura que múltiples instancias del mismo componente en la misma página no colisionen.

---
**Recordatorio:** Al interactuar con el código, analiza el `SYSTEM_ARCHITECTURE.md` para mantener la coherencia con el catálogo de componentes y la estrategia de Modo Oscuro actualmente implementada.
