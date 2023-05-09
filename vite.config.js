import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
// eslint-disable-next-line import/no-unresolved
import { cjsInterop } from 'vite-plugin-cjs-interop';

export default defineConfig({
  root: join(dirname(fileURLToPath(new URL(import.meta.url))), 'src'),
  plugins: [
    react({ jsxRuntime: '@emotion/react' }),
    viteCompression(),
    cjsInterop({
      dependencies: [
        '@emotion/cache',
      ],
    }),
    mdx({
      jsxImportSource: '@emotion/react',
    }),
  ],
  mode: 'production',
  build: {
    manifest: true,
    outDir: 'dist',
  },
});
