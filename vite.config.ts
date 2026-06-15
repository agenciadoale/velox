import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          preventiva: path.resolve(__dirname, 'manutencao-preventiva.html'),
          corretiva: path.resolve(__dirname, 'manutencao-corretiva.html'),
          montagem: path.resolve(__dirname, 'montagem-equipamentos.html'),
          troca_pecas: path.resolve(__dirname, 'troca-de-pecas.html'),
          contato: path.resolve(__dirname, 'contato.html'),
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
