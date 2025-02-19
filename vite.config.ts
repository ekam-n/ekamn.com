import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
            tailwindcss()],
  base: '/', // 👈 IMPORTANT: Change this to match your GitHub repo name
  build: {
    outDir: "dist",
  },
})
