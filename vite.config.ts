import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

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
        find: '@pages',
        replacement: path.resolve(__dirname, './src/pages'),
      },
      {
        find: '@types',
        replacement: path.resolve(__dirname, './src/types'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, './src/utils'),
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
})
