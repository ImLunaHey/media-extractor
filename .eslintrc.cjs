/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: 'xo',
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
	},
	ignorePatterns: [
		'__tests__',
	],
};
