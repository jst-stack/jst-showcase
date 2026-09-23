import { expect, test } from '@playwright/test'

test('search filters the catalog and handles an empty result', async ({ page }) => {
	await page.goto('/')

	const search = page.getByRole('textbox', { name: 'Filter examples' })
	await search.fill('Setup and cleanup')

	await expect(page.getByRole('heading', { name: 'Setup and cleanup' })).toBeVisible()
	await expect(page.getByRole('button', { name: 'Add' })).toHaveCount(1)

	await search.fill('does-not-exist')
	await expect(page.getByText('No examples match this search.')).toBeVisible()
})
