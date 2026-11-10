import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes built asset paths relative, so it works on GitHub Pages
// at /<repo-name>/ without hardcoding the repo name.
export default defineConfig({
  plugins: [react()],
  base: './',
});
