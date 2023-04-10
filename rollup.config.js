const html = require('@rollup/plugin-html');
const typescript = require('@rollup/plugin-typescript');
const styles = require('rollup-plugin-styles');

module.exports = {
  input: './src/main.ts',
  output: {
    dir: './dist',
    format: 'es',
    sourcemap: true,
    entryFileNames: 'main-[hash].js',
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    styles({
      mode: ['extract', 'styles.css'],
      minimize: false,
      sourceMap: true,
    }),
    html({
      title: 'cds-city-rollup',
    }),
  ],
};
