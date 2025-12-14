/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    // 1. Colores personalizados (Referencia a variables CSS)
    colors: {
      // Paleta principal
      'onyx': {
        50: 'var(--color-onyx-50)',
        100: 'var(--color-onyx-100)',
        200: 'var(--color-onyx-200)',
        300: 'var(--color-onyx-300)',
        400: 'var(--color-onyx-400)',
        500: 'var(--color-onyx-500)',
        600: 'var(--color-onyx-600)',
        700: 'var(--color-onyx-700)',
        800: 'var(--color-onyx-800)',
        900: 'var(--color-onyx-900)',
        950: 'var(--color-onyx-950)',
      },
      'slate-grey': {
        50: 'var(--color-slate-grey-50)',
        /* ... hasta 950 */
        950: 'var(--color-slate-grey-950)',
      },
      'bright-amber': {
        50: 'var(--color-bright-amber-50)',
        /* ... hasta 950 */
        950: 'var(--color-bright-amber-950)',
      },
      'white': {
        50: 'var(--color-white-50)',
        /* ... hasta 950 */
        950: 'var(--color-white-950)',
      },
      'dark-amethyst': {
        50: 'var(--color-dark-amethyst-50)',
        /* ... hasta 950 */
        950: 'var(--color-dark-amethyst-950)',
      },

      // Colores OKLCH
      'avocado': {
        100: 'var(--color-avocado-100)',
        200: 'var(--color-avocado-200)',
        300: 'var(--color-avocado-300)',
        400: 'var(--color-avocado-400)',
        500: 'var(--color-avocado-500)',
        600: 'var(--color-avocado-600)',
      },
    },

    // 2. Extender la configuración de Tailwind
    extend: {
      // Tipografía (usando variable CSS)
      fontFamily: {
        display: 'var(--font-display)',
      },

      // Breakpoints (usando variable CSS)
      screens: {
        '3xl': 'var(--breakpoint-3xl)',
      },

      // Funciones de Transición (Easing)
      transitionTimingFunction: {
        'fluid': 'var(--ease-fluid)',
        'snappy': 'var(--ease-snappy)',
      },
    },
  },
  plugins: [],
}
