import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    rollupOptions:{
      output:{
        manualChunks:{
          'bundle-cars': [
            './src/components/pages/cars/CarAddPage.vue',
            './src/components/pages/cars/CarListPage.vue',
            './src/components/pages/cars/CarSearchPage.vue'
          ]
        }
      }
    }
  }
})
