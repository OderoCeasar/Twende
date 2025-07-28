import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['c416e4e3a2fb.ngrok-free.app']
  }
});
