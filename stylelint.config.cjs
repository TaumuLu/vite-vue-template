// .stylelintrc.cjs
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  plugins: ['stylelint-prettier', 'stylelint-scss', 'stylelint-order'],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
  rules: {
    'prettier/prettier': true,
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-pseudo-class-no-unknown': null,
    'no-duplicate-selectors': null,
    'order/order': ['custom-properties', 'declarations'],
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-empty-source': null,
    'import-notation': null,
    'scss/operator-no-newline-after': null,
    'custom-property-pattern': null,
    'media-feature-range-notation': 'prefix',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },
}
