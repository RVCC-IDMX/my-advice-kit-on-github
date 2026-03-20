// This file uses .cjs (CommonJS) because package.json sets "type": "module",
// and ESLint 8 config files need require/module.exports, not import/export.

module.exports = {
  // ESLint skips these files entirely — they are not part of the project source.
  ignorePatterns: [".eslintrc.cjs"],

  // "env" tells ESLint what global variables exist so it doesn't flag them as undefined.
  // "browser: true" means window, document, fetch, etc. are all valid.
  env: {
    browser: true,
    es2022: true,
  },

  // "eslint:recommended" turns on ~30 common-sense rules like no-undef and no-unused-vars.
  // See the full list: https://eslint.org/docs/latest/rules/
  extends: "eslint:recommended",

  // "sourceType: module" lets ESLint understand import/export syntax.
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },

  // "error" = fails the lint check and blocks commits via Husky.
  // "warn"  = shows a warning but does not block anything.
  // "off"   = rule is completely disabled.
  rules: {
    // eval() executes arbitrary strings as code — a serious security risk
    "no-eval": "error",

    // var has confusing scope rules; let and const behave predictably
    "no-var": "error",

    // if you never reassign a variable, const makes that clear to readers
    "prefer-const": "error",

    // console.log is useful for debugging but should not ship in production;
    // warn during development — will tighten to "error" later in the semester
    "no-console": "warn",
  },
};
