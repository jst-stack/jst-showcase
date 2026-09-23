import { expect, test } from '@playwright/test'

test('selection updates, persists, and can be cleared', async ({ page }) => {
	await page.goto('/')

	await page.getByRole('button', { name: 'Add' }).first().click()
	await expect(page.getByRole('button', { name: 'Added' })).toHaveCount(1)

	await page.reload()
	await expect(page.getByRole('button', { name: 'Added' })).toHaveCount(1)

	await page.getByRole('button', { name: 'Clear' }).click()
	await expect(page.getByRole('button', { name: 'Added' })).toHaveCount(0)
	await expect(page.getByText('Nothing selected yet.')).toBeVisible()
})
