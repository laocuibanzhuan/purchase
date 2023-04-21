import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'


import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:5172',
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // }
  }
})
