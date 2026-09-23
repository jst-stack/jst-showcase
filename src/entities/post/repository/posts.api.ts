import type { PostDTO } from './posts.dto'
import type { PostsRepository } from './types'
import type { ApiResponse, RequestConfig } from '@/shared/api/types'
import { HttpClient } from '@/shared/api/HttpClient'
import { parsePostsDTO } from './posts.dto'

export class PostsApi implements PostsRepository {
	constructor(
		private readonly httpClient: Pick<HttpClient, 'get'> = new HttpClient(
			'https://jsonplaceholder.typicode.com',
			{ Accept: 'application/json' },
		),
	) {}

	async getPosts(config?: RequestConfig): ApiResponse<PostDTO[]> {
		const response = await this.httpClient.get<unknown>('posts', config?.options)
		return { ...response, data: parsePostsDTO(response.data) }
	}
}
