import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  // server: {
  //   host: true,
  //   allowedHosts: ["1b8f192f0333.ngrok-free.app"]
  // }
});
