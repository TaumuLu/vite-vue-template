module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{json,md}': ['prettier --write'],
  '*.{css,less,scss}': ['stylelint --fix'],
  '*.{png,jpg,jpeg}': ['tinypng', 'git add ./tinypng-output'],
}
