import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

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
      sxg: '1124px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      aspectRatio: {
        '3/1': '3 / 1',
      },
      backgroundImage: () => ({
        loginBg: 'var(--login-bg)',
      }),
      width: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        layout_top: 'var(--layoutTop)',
      },
      height: {
        layout_top: 'var(--layoutTop)',
      },
      padding: {
        layout_top: 'var(--layoutTop)',
      },
      boxShadow: {
        theme_wrap: 'var(--wrap-shadow)',
      },
      borderWidth: {},
      borderRadius: {
        mid: '20px',
      },
      colors: {
        // 主题色
        // theme 开头作为标识方便识别查找，下划线断词和 tailwind 区分开
        theme_background: 'var(--background)', // 背景
        theme_foreground: 'var(--foreground)', // 前景
        theme_h1: 'var(--h1)', // 一级标题
        theme_h2: 'var(--h2)', // 二级标题
        theme_btn: 'var(--btn)', // 按钮
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
