import { beforeEach, describe, expect, it, vi } from 'vitest'
import { PostsService } from '../posts.service'

const postsRepositoryMock = { getPosts: vi.fn() }

describe('postsService.getFeaturedPosts', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	it('maps transport DTOs into a limited domain model', async () => {
		postsRepositoryMock.getPosts.mockResolvedValue({
			data: Array.from({ length: 4 }, (_, index) => ({
				userId: 1,
				id: index + 1,
				title: `Post ${index + 1}`,
				body: 'A transport\n value.',
			})),
			status: 200,
			headers: new Headers(),
		})

		const service = new PostsService(postsRepositoryMock)
		const result = await service.getFeaturedPosts()

		expect(postsRepositoryMock.getPosts).toHaveBeenCalledWith({
			options: { params: { userId: 1 } },
		})
		expect(result).toHaveLength(3)
		expect(result[0]).toEqual({
			id: 1,
			title: 'Post 1',
			excerpt: 'A transport value.',
			author: 'User 1',
		})
	})
})
