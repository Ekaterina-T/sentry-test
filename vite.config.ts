import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    sentryVitePlugin({
      org: "ekat",
      project: "my-project5"
    })
  ],

  base: '/sentry-test/',

  build: {
    sourcemap: true
  }
})
