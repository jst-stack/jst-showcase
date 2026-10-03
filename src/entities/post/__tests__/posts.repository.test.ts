import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'
import { HttpClient } from '@/shared/api/httpClient.adapter'
import { PostsApi } from '../repository/posts.repository'

const server = setupServer()

describe('postsApi', () => {
	beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	it('validates an HTTP response before returning DTOs', async () => {
		server.use(http.get('https://example.test/posts', () => HttpResponse.json([{ body: 'Body', id: 1, title: 'Title', userId: 2 }])))
		const repository = new PostsApi(new HttpClient('https://example.test'))

		await expect(repository.getPosts()).resolves.toMatchObject({ data: [{ id: 1, title: 'Title' }], status: 200 })
	})

	it('rejects invalid external data at the repository boundary', async () => {
		server.use(http.get('https://example.test/posts', () => HttpResponse.json([{ id: 'wrong' }])))
		const repository = new PostsApi(new HttpClient('https://example.test'))

		await expect(repository.getPosts()).rejects.toThrow('invalid payload')
	})
})
