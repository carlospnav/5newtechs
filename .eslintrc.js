module.exports = {
  extends: [
    "standard",
    "plugin:jest/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["react", "jest", "prettier", "jsx-a11y"],
  env: {
    "jest/globals": true
  },
  rules: {
    "react/jsx-uses-vars": 2,
    "prettier/prettier": [
      "error",
      {
        semi: false
      }
    ],
    "jsx-a11y/no-autofocus": [
      2,
      {
        ignoreNonDOM: true
      }
    ]
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    React: true
  }
};
