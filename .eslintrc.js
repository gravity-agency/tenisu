module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'airbnb-typescript/base'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        "import/prefer-default-export": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never",
                "": "never"
            }
        ],
        "react/jsx-filename-extension": [0]
    },
    ignorePatterns: [
        'dist/**/*'
    ],
};
