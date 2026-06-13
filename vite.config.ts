import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 项目页路径：https://<user>.github.io/BricksWorkshop-Web/
  base: '/BricksWorkshop-Web/',
  build: {
    sourcemap: 'hidden',
  },
  plugins: [react({
    babel: {
      plugins: [
        'react-dev-locator',
      ],
    },
  }), tsconfigPaths(), cloudflare()],
})