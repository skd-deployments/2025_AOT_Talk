// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  // Tell Vite to treat files matching this pattern as static assets
  assetsInclude: [
    '**/*.ppm',
    '**/*.JPEG'
],

  // You might have other Vite configurations here in the future
})
