import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FS-BATCH-15/',   // ⭐ ADD THIS
  plugins: [react()],
})
