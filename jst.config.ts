import { defineConfig } from '@jst-stack/eslint-plugin'

export default defineConfig({
	styles: {
		globalFiles: ['index.css', 'tailwind.css'],
		moduleExtension: 'css',
	},
})
