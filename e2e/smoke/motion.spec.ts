import { expect, test } from '@playwright/test'

test('removes decorative motion when reduced motion is requested', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'reduce' })
	await page.goto('/')

	await expect(page.locator('.reveal').first()).toHaveCSS('transition-duration', '0s')
})

test('reveals sections on scroll and keeps the layer diagram interactive', async ({ page }) => {
	await page.goto('/')

	await page.getByRole('link', { name: 'Explore the architecture' }).click()
	await expect(page.locator('.reveal').first()).toHaveClass(/reveal-in/)

	const entitiesLayer = page.getByRole('button', { name: /entities/i })
	await entitiesLayer.click()
	await expect(entitiesLayer).toHaveAttribute('aria-pressed', 'true')
	await expect(page.locator('#layers li').filter({ hasText: 'Repository contracts' })).toBeVisible()
})

test('keeps every layer control inside its diagram', async ({ page }) => {
	await page.goto('/')

	const diagram = page.locator('[aria-label="JST application layers"]')
	await diagram.scrollIntoViewIfNeeded()

	const bounds = await diagram.boundingBox()
	const layers = diagram.getByRole('button')

	expect(bounds).not.toBeNull()
	for (let index = 0; index < await layers.count(); index += 1) {
		const layer = await layers.nth(index).boundingBox()
		expect(layer).not.toBeNull()
		expect(layer?.x).toBeGreaterThanOrEqual(bounds?.x ?? 0)
		expect((layer?.x ?? 0) + (layer?.width ?? 0)).toBeLessThanOrEqual((bounds?.x ?? 0) + (bounds?.width ?? 0))
	}
})
