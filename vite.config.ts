import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react()],
  // ✅ Use relative paths for Netlify and Docker static servers
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './'),
    },
  },
})
