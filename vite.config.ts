import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'VITE_', // Optional prefix for clarity
  define: {
    'process.env': process.env, // Make `process.env` available in dev
  },
})
