import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { //this is imporant to have, To tell ec2 instance that default port 3000 always
    port: 3000,
    host: '0.0.0.0',
  },
})
  