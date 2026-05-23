import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Agregamos 'if-function' a la lista para callar a Sass
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'legacy-js-api', 'if-function'],
      },
    },
  },
})