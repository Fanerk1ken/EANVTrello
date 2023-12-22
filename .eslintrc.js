module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "prettier"
  ],
  "ignorePatterns": [
    "dist",
    ".eslintrc.cjs"
  ],
  "parserOptions": {
    "ecmaVersion": 'latest',
    "sourceType": 'module',
    "project": ['./tsconfig.json', './tsconfig.node.json'],
    "tsconfigRootDir": "__dirname",
  },
  "rules": {
    "prettier/prettier": "error"
  }
}