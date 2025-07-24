// rollup.config.js (MUST be .js, NOT .mjs)

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const packageJson = require('./package.json');

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
  // Configuration for your main JavaScript bundles (CJS and ESM)
  {
    input: 'src/index.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json', // Use the new TSConfig for JS output
        declaration: false, // Prevent this plugin instance from emitting .d.ts files
      }),
      postcss({
        extract: true,
        modules: true,
      }),
      terser(),
    ],
    external: [...Object.keys(packageJson.peerDependencies || {})],
  },
  // Configuration for the TypeScript declaration files (.d.ts)
  {
    // This input needs to point to where TypeScript compiles its individual .d.ts files.
    // Ensure your tsconfig.app.json has "declaration": true and "outDir" set for types.
    // Also, ensure your 'build:component' script runs 'tsc -b' or equivalent *before* Rollup for DTS.
    input: 'dist/esm/types/index.d.ts', // Adjust this path if your TS compiler outputs to a different folder
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [
      // <--- REMOVED: typescript({ tsconfig: './tsconfig.app.json' }) from here
      dts() // Only the dts plugin is needed here
    ],
  },
];
