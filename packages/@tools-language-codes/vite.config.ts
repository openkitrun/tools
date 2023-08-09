import path from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      entryRoot: 'src',
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    outDir: '.',
    lib: {
      entry: 'src/index.ts',
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
    },
    rollupOptions: {
      output: [
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: '[name].cjs',
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: '[name].mjs',
        },
      ],
    },
  },
});