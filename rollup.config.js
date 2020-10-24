import typescript from 'rollup-plugin-typescript2';

const FILENAME = 'dist/vue3-node';

const plugins = [typescript()];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: `${FILENAME}.js`,
      format: 'cjs',
    },
    {
      file: `${FILENAME}.es.js`,
      format: 'es',
    },
  ],
  plugins,
};
