import tailwindcssNesting from '@tailwindcss/nesting'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
// import postCssPxToRem from 'postcss-pxtorem'
import tailwindcss from 'tailwindcss'

export const rootValue = 192

export default {
  plugins: [
    postcssImport,
    tailwindcssNesting,
    autoprefixer,
    tailwindcss,
    // postCssPxToRem({
    //   rootValue: () => {
    //     return rootValue
    //   },
    //   propList: ['*'],
    //   exclude: input => {
    //     if (input.endsWith('.rem.scss')) {
    //       return false
    //     }
    //     return true
    //   },
    // }),
    // 'postcss-import': {},
    // 'tailwindcss/nesting': {},
    // autoprefixer: {},
    // tailwindcss: {},
  ],
}
