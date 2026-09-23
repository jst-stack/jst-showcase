export default {
	extends: ['stylelint-config-standard'],
	ignoreFiles: ['**/src/index.css'],
	overrides: [
		{
			files: ['src/**/*.module.css'],
			rules: {
				'no-descending-specificity': null,
				'selector-class-pattern': [
					'^[a-z][a-zA-Z0-9]*$',
					{ message: 'Use camelCase class names in CSS Modules' },
				],
			},
		},
		{
			files: ['src/tailwind.css'],
			rules: {
				'import-notation': 'string',
				'at-rule-no-unknown': [true, { ignoreAtRules: ['apply', 'custom-variant', 'theme'] }],
				'at-rule-prelude-no-invalid': [true, { ignoreAtRules: ['apply'] }],
				'selector-class-pattern': null,
			},
		},
	],
}
