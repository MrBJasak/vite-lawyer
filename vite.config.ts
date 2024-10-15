import { inspectorServer } from '@react-dev-inspector/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), inspectorServer()],
  base: '/vite-lawyer/',
});
