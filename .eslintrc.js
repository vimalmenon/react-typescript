module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
      "eslint:recommended",
      "plugin:react/recommended",  // Uses the recommended rules from @eslint-plugin-react
      "plugin:@typescript-eslint/recommended",  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions:  {
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      sourceType:  'module',  // Allows for the use of imports
      ecmaFeatures:  {
        jsx:  true,  // Allows for the parsing of JSX
      },
    },
    "globals": {
        "console":"readonly",
        "Promise":"readonly",
        "fetch":"readonly",
        "AbortController":"readonly",
        "document":"readonly",
        "location":"readonly",
        "setTimeout":"readonly",
        "window":"readonly"
    },
    rules:  {
      "indent": [2, "tab"],
      "no-unused-vars": [1, { "vars": "local", "args": "none", "ignoreRestSiblings": true}],
      "react/prop-types": [0, { ignore: ["location"]}],
      "react/display-name": [0],
      "jsx-quotes": [1, "prefer-double"],
      "quotes": [1, "double", {"allowTemplateLiterals": true}],
      "semi": [1, "always"],
      "prefer-arrow-callback": [1, { "allowUnboundThis": false } ]
    },
    settings:  {
      react:  {
        version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
  };