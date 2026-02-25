import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages fix
export default defineConfig({
  base: "/FS-BATCH-15/", // 👈 IMPORTANT (repo name)
  plugins: [react()],
})
