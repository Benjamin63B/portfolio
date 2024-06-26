/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['src/components/**/*.vue', 'src/views/**/*.vue'],
      rules: {
        'vue/no-reserved-component-names': 'off',
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
