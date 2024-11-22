import eslint from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  // common
  {
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'prettier/prettier': 'error',

      // simple-import-sort
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ['^@?\\w'],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ['^'],
            // Relative imports.
            // Anything that starts with a dot.
            ['^\\.'],
            // 这里是把 import './*.scss' 自动排序到最后。其它排序规则顺序都保持和依赖包里 defaultGroups 一样
            // 解决父组件样式覆盖不了子组件样式问题。如果 import './*.scss' 排在第一，子组件样式优先级会高于父组件
            // Side effect imports.
            ['^\\u0000'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // typescript-eslint
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      'no-empty': 'warn',
    },
  },
  // nodejs
  {
    files: ['', 'plugins/**', 'scripts/**', 'server/**'].map(path => `${path}*.{js,cjs,mjs,ts}`),
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
    },
  },
  // vue
  {
    files: ['**/*.vue'],
    extends: [...pluginVue.configs['flat/essential']],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  // src
  {
    files: ['src/**/*.{js,mjs,cjs,ts,vue}'],
    // ignores: ['lib/*', 'backup/*', 'dist/*', 'public/*', '.vite/*', 'backup/*', '**/node_modules/'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {},
    rules: {},
  },
)
