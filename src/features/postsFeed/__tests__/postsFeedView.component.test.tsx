// @vitest-environment jsdom
import { MantineProvider } from '@mantine/core'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PostsFeedView } from '../ui/postsFeedView.component'

describe('postsFeedView', () => {
	it('exposes refresh as an injected user action', async () => {
		vi.stubGlobal('matchMedia', vi.fn(() => ({
			addEventListener: vi.fn(),
			matches: false,
			removeEventListener: vi.fn(),
		})))
		const onRefresh = vi.fn()
		render(
			<MantineProvider>
				<PostsFeedView error={undefined} pending={false} posts={[]} ready refreshing={false} onRefresh={onRefresh} />
			</MantineProvider>,
		)

		await userEvent.click(screen.getByRole('button', { name: 'Refresh' }))
		expect(onRefresh).toHaveBeenCalledOnce()
	})
})
