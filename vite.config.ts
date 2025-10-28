import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for deployment to GitHub Pages.
  // This should match your repository name.
  base: '/cloud-devops-portfolio/',
  resolve: {
    alias: {
      // This alias is consistent with the one in tsconfig.json
      // Fix: __dirname is not available in ESM, so use import.meta.url to get the current directory path.
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './'),
    }
  }
})
