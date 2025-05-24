import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-countup', 'react-router-dom'],
    exclude: ['lucide-react']
  },
  server: {
    force: true // Force dependency pre-bundling
  }
});