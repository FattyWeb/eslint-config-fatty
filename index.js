module.exports = {
  // 检查html文件
  plugins: ["@html-eslint"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      // extends: ["plugin:@html-eslint/recommended"],
    },
  ],
  globals: {
    // MyGlobal: true
  },

  rules: {
    "@html-eslint/require-lang": "error",
    semi: [2, "always"]
  }

};
