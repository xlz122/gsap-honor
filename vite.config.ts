import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react(), viteCompression()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  server: {
    open: false,
    host: true,
    port: 3030,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: false,
    rolldownOptions: {
      output: {
        minify: {
          compress: { dropConsole: true },
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/name-[hash].[ext]',
      },
    },
  },
});
