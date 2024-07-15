import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Gera mapas de fontes durante a construção
    rollupOptions: {
      output: {
        sourcemap: true,
      },
    },
  },
});
