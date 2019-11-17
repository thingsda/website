import babel from 'rollup-plugin-babel'

export default {
  input: 'src/carousel.js',
  plugins: [babel()],
  output: {
    file: 'assets/carousel.js',
    format: 'iife',
  },
}
