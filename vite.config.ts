import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'

import { writeVersion } from './plugins/writeVersion'
import { rootValue } from './postcss.config.js'

// 写版本号到文件
const commitHash = writeVersion()

const envDir = './env'

const isTrue = flag => flag === 'true'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, resolve(__dirname, envDir), '')
  const isDev = command === 'serve'

  return {
    base: env.VITE_BASE_URL || '/',
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames(chunkInfo) {
            // if (['no-hash.png'].includes(chunkInfo.name)) {
            //   return 'assets/[name][extname]'
            // }
            return 'assets/[ext]/[name]-[hash][extname]'
          },
        },
        // plugins: [visualizer({ open: true })],
      },
    },
    plugins: [vue()].filter(Boolean),
    envDir,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: () => resolve(__dirname, 'src'),
        },
        {
          find: /^~.+/,
          replacement: val => {
            return val.replace(/^~/, '')
          },
        },
      ] as any,
    },
    server: {
      host: '0.0.0.0',
      open: isTrue(env.VITE_OPEN),
      port: Number(env.VITE_PORT || null),
      proxy: {
        // '/api': {
        //   target: 'http://127.0.0.1:8089/',
        //   ws: true,
        //   changeOrigin: true,
        // },
      },
    },
    define: {
      __ROOT_VALUE__: JSON.stringify(rootValue),
      __COMMIT_HASH__: JSON.stringify(commitHash),
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "sass:math";`,
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  }
})
