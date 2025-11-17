import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',           // project root
  publicDir: 'public', // points to public folder
  build: {
    outDir: 'dist',    // output folder for Render
  },
})
