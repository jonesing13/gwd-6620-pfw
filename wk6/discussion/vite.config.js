import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // indicates the base is the current directory THIS code is in
  plugins: [react()],
})
