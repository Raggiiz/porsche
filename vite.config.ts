// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/
export default ({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
  plugins: [react(), svgr({
    exportAsDefault: true
  }),
  {
    name: 'custom-url-loader',
    // This is a Vite plugin to handle .hdr files with url-loader
    // Make sure you have url-loader installed: npm install url-loader
    transform: (code, id) => {
      if (id.endsWith('.hdr')) {
        return `export default import.meta.ROLLUP_FILE_URL_${id}`;
      }
    },
  },],
  base: '/'
})
