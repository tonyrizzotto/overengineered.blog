import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: join(dirname(fileURLToPath(new URL(import.meta.url))), 'src'),
  plugins: [
    react({ jsxRuntime: 'classic' }),
    mdx({
      // jsxImportSource: '@emotion/react',
    }),
  ],
  mode: 'production',
  build: {
    manifest: true,
    outDir: 'dist',
  },
});
