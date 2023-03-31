import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

const manualChunks = {
  core: ['react', 'react-dom', 'react-router-dom'],
  axios: ['axios'],
  utility: ['clsx', 'dayjs'],
  'react-query': ['@tanstack/react-query', '@tanstack/react-query-devtools'],
  'framer-motion': ['framer-motion'],
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: [
      {
        find: '@images',
        replacement: path.resolve(__dirname, './src/assets/images'),
      },
      {
        find: '@scss',
        replacement: path.resolve(__dirname, './src/assets/scss'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, './src/assets'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, './src/hooks'),
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, './src/layouts'),
      },
      {
        find: '@libs',
        replacement: path.resolve(__dirname, './src/libs'),
      },
      {
        find: '@features',
        replacement: path.resolve(__dirname, './src/features'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, './src/utils'),
      },
      {
        find: '@providers',
        replacement: path.resolve(__dirname, './src/providers'),
      },
      {
        find: '@dto',
        replacement: path.resolve(__dirname, './src/types/DTO'),
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
})
