import { expect, test } from '@playwright/test'

const posts = [
	{ userId: 1, id: 1, title: 'First typed response', body: 'Mapped from a transport DTO.' },
	{ userId: 1, id: 2, title: 'Second typed response', body: 'Rendered through the entity UI.' },
	{ userId: 1, id: 3, title: 'Third typed response', body: 'Owned by the posts feature.' },
]

test('renders the JSONPlaceholder response through the posts feature', async ({ page }) => {
	let requestCount = 0
	await page.route('https://jsonplaceholder.typicode.com/posts?userId=1', async (route) => {
		requestCount += 1
		if (requestCount > 1) {
			await new Promise(resolve => setTimeout(resolve, 250))
		}
		await route.fulfill({ json: posts })
	})

	await page.goto('/')

	await expect(page.getByRole('heading', { name: 'First typed response' })).toBeVisible()
	await expect(page.getByText('Mapped from a transport DTO.')).toBeVisible()
	await expect(page.getByText('User 1')).toHaveCount(3)

	const refreshButton = page.getByRole('button', { name: 'Refresh' })
	await refreshButton.click()
	await expect(page.getByText('loading', { exact: true })).toBeVisible()
	await expect(page.getByRole('button', { name: 'Refreshing' })).toBeDisabled()
	await expect(refreshButton).toBeEnabled()
})

test('exposes a recoverable API error state', async ({ page }) => {
	await page.route('https://jsonplaceholder.typicode.com/posts?userId=1', route =>
		route.fulfill({ status: 503, json: { message: 'Unavailable' } }))

	await page.goto('/')

	await expect(page.getByRole('alert')).toContainText('Request failed with status 503.')
	await expect(page.getByRole('button', { name: 'Refresh' })).toBeEnabled()
})
