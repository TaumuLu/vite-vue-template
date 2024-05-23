import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'

const isTrue = (flag: string) => flag === 'true'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, resolve(__dirname, 'env'), '')
  const isDev = command === 'serve'
  const isProd = mode === 'production'

  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "sass:math"; @import "./src/styles/themes.scss"; @import "./src/styles/variable.scss"; @import "./src/styles/mixin.scss";`,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      hmr: isTrue(env.VITE_HMR_ENABLE),
      host: '0.0.0.0',
      open: isTrue(env.VITE_OPEN),
      port: Number(env.VITE_PORT),
    },
  }
})
