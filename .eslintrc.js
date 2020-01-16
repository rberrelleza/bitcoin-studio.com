module.exports = {
  "extends": [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2019,
    "project": "tsconfig.json",
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
  },
  "rules": {
    "@typescript-eslint/semi": ["warn", "never"],
    "comma-dangle": ["warn", "only-multiline"],
    "func-names": ["warn", "as-needed"],
    "import/no-cycle": ["off"],
    "import/prefer-default-export": ["off"],
    "max-len": ["warn", { "code": 130 }],
    "no-console": ["warn"],
    "no-underscore-dangle": ["off"],
    "object-curly-newline": ["off"],
    "object-curly-spacing": ["error", "never"],
    "object-shorthand": ["off"],
    "prefer-destructuring": ["off"],
    "react/jsx-boolean-value": ["warn", "always"],
    "react/jsx-curly-brace-presence": ["off"],
    "react/jsx-tag-spacing": ["warn", {"beforeSelfClosing": "never"}],
    "react/prop-types": ["off"],
    "semi": ["warn", "never"],
    "spaced-comment": ["warn", "always", {"markers": ["/"]}]
  }
}

/*
// Disable ESLint
module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2019,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
}
*/