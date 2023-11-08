import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    strictPort: true,
    https: process.env.HTTPS?.toLowerCase() == 'true' || false,
    host: process.env.HOST?.toLowerCase() == 'true' || process.env.HOST || undefined,
  },
  plugins: [react()],
})
