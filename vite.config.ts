import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'build',
    target: 'esnext',
    minify: 'esbuild',
  },
  define: {
    global: 'globalThis',
  },
  server: {
    fs: {
      strict: false,
    },
  },
});