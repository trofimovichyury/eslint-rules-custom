module.exports = {

  globals: {
      MyGlobal: true
  },

  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true
  },
  extends: "eslint:recommended",
  parserOptions: {
      "ecmaVersion": 13
  },
  rules: {
      semi: ["error", "always"],
      quotes: [2, 'single', { 'avoidEscape': true }]
  }
};