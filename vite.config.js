import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000
    }
  },
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      context: '/src/context',
      routes: '/src/routes'
    }
  }
})
