import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/internet-shop",
  plugins: [react()],
  build: {chunkSizeWarningLimit:1600, target:"esnext",}
})
