import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
// import { KeyValuePair } from 'tailwindcss/types/config'

// const unit = '--unit'
// const convert = value => `calc(${value} * var(${unit}))`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  prefix: '',
  fontFamily: {},
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    // spacing: () => {
    //   return Array.from({ length: 201 }).reduce<KeyValuePair<string>>((map, _, index) => {
    //     map[index] = `${convert(index)}`
    //     return map
    //   }, {})
    // },
    extend: {
      backgroundImage: () => ({
        loginBg: 'var(--login-bg)',
      }),
      // fontSize: ({ theme }) => ({
      //   ...theme('spacing'),
      // }),
      // borderWidth: ({ theme }) => ({
      //   ...theme('spacing'),
      // }),
      // borderRadius: ({ theme }) => ({
      //   ...theme('spacing'),
      // }),
      aspectRatio: {
        '3/1': '3 / 1',
      },
      width: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      height: {},
      padding: {},
      boxShadow: {},
      colors: {
        // 主题色
        // theme 开头作为标识方便识别查找，下划线断词和 tailwind 区分开
        theme_background: 'var(--background)', // 背景
        theme_foreground: 'var(--foreground)', // 前景
        theme_h1: 'var(--h1)', // 一级标题
        theme_border_1: 'var(--border-1)', // 边框1
      },
      keyframes: {
        accordion_down: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordion_up: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        accordion_down: 'accordion_down 0.2s ease-out',
        accordion_up: 'accordion_up 0.2s ease-out',
      },
    },
  },

  plugins: [
    require('tailwindcss-animate'),
    // function ({ addVariant }) {
    //   addVariant('vertical', '.vertical &')
    //   addVariant('horizontal', '.horizontal &')
    // },
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.flex-center': {
          '@apply flex justify-center items-center': {},
        },
      }
      addUtilities(newUtilities)
    }),
  ],
} satisfies Config
