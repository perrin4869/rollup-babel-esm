import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: { file: 'commonjs/entry.cjs', format: 'cjs' },
  plugins: [babel()],
};
