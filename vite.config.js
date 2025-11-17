import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',           // root of project
  publicDir: 'public', // <-- points Vite to public folder
  build: {
    outDir: 'dist',    // build output
  },
})
