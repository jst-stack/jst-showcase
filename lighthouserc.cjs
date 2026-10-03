const { budgets } = require('./performance/baseline.json')

module.exports = {
	ci: {
		assert: {
			assertions: {
				'cumulative-layout-shift': ['error', { maxNumericValue: budgets.cumulativeLayoutShift }],
				'categories:accessibility': ['error', { minScore: 0.95 }],
				'categories:best-practices': ['error', { minScore: 0.9 }],
				'categories:performance': ['error', { minScore: 0.8 }],
				'categories:seo': ['error', { minScore: 0.95 }],
				'largest-contentful-paint': ['error', { maxNumericValue: budgets.largestContentfulPaintMs }],
				'total-blocking-time': ['error', { maxNumericValue: budgets.totalBlockingTimeMs }],
			},
		},
		collect: {
			numberOfRuns: 3,
			startServerCommand: 'npm start',
			startServerReadyPattern: 'http://localhost:',
			url: ['http://localhost:3000/'],
		},
		upload: { target: 'temporary-public-storage' },
	},
}
