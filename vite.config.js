import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Adapter base au nom exact du dépôt GitHub.
export default defineConfig({ plugins: [react(), tailwindcss()], base: '/keitaDataIA/' })