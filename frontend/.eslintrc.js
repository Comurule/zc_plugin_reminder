module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	plugins: ['react'],
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'arrow-body-style': 'off',
		'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
		'prefer-const': ['error'],
		'no-var': ['error'],
		'no-new-object': ['error'],
		'object-shorthand': ['error'],
		'quote-props': ['error', 'as-needed'],
		'prefer-object-spread': ['error'],
		'array-callback-return': ['error'],
		'prefer-destructuring': [
			'error',
			{
				array: true,
				object: true,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		quotes: [2, 'single', { allowTemplateLiterals: true }],
		'prefer-template': ['error'],
		'no-useless-escape': ['error'],
		'prefer-rest-params': ['error'],
		'no-new-func': ['error'],
		'no-param-reassign': ['error'],
		'prefer-spread': ['error'],
		'function-paren-newline': ['error'],
		'prefer-arrow-callback': ['error'],
		'implicit-arrow-linebreak': ['error'],
		'no-useless-constructor': ['error'],
		semi: ['error', 'never'],
		'eol-last': 0,
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
	},
	overrides: [
		{
			files: ['**/*.js', '**/*.jsx'],
			plugins: ['unused-imports'],
			extends: ['plugin:prettier/recommended'],
			rules: {
				'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
				'jsx-a11y/anchor-is-valid': 'off',
				'react/require-default-props': 'off', // Allow non-defined react props as undefined
				'import/prefer-default-export': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'unused-imports/no-unused-imports': 'error',
				'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
				'react/no-multi-comp': [1, { ignoreStateless: true }],
				'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
				'react/jsx-pascal-case': 1,
			},
		},
	],
}