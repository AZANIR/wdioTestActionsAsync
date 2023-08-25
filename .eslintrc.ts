module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier",  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended",  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "quotes": "off",
        "@typescript-eslint/quotes": ["error"],
        "mocha/no-identical-title":"error"
    },
    "plugins": [
        "mocha"
    ],
    overrides: [{
        "files": ["*.js", "*.jsx", "*.ts", "*.tsx"],
        "rules": {
            "@typescript-eslint/quotes": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
        }
    }]
};
