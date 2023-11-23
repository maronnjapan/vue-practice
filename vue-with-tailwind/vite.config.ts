import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      preprocessCustomRequire(id) {
        console.log(id)
      },
      compilerOptions: {
        nodeTransforms: [
          (page) => {
            if (page.type === 1) {

              page.props = page.props.filter((prop) => prop.type === 6 && prop.name.indexOf('data-test') === -1)
            }
          }
        ]
      }
    }
  })],
  build: {
    outDir: 'dist2'
  }
})
