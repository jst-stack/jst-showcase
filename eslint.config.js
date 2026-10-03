import antfu from '@antfu/eslint-config'
import jst from '@jst-stack/eslint-plugin'
import policy from './jst.config.ts'

export default antfu(
	{
		react: true,
		typescript: {
			tsconfigPath: 'tsconfig.json',
			overridesTypeAware: {
				'ts/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
				'ts/promise-function-async': 'off',
				'ts/strict-boolean-expressions': 'off',
			},
		},
		lessOpinionated: true,
		stylistic: { indent: 'tab', quotes: 'single', semi: false },
		formatters: { html: true, css: true },
		ignores: ['.lighthouseci/**', '.react-router/**', 'build/**', 'coverage/**', 'playwright-report/**', 'src/index.css', 'test-results/**'],
		rules: {
			'no-console': ['error', { allow: ['log', 'error'] }],
			'react-refresh/only-export-components': ['error', { extraHOCs: ['reatomComponent'] }],
		},
	},
	{ linterOptions: { reportUnusedDisableDirectives: 'error' } },
	...jst.createConfig(policy),
)
