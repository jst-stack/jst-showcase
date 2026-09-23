import { inject } from '@needle-di/core'
import { mapPosts } from '../model/posts.mapper'
import { POSTS_REPOSITORY_TOKEN } from '../repository/types'

export class PostsService {
	constructor(
		private readonly postsRepository = inject(POSTS_REPOSITORY_TOKEN),
	) {}

	async getFeaturedPosts() {
		const { data } = await this.postsRepository.getPosts({
			options: { params: { userId: 1 } },
		})

		return mapPosts(data, 3)
	}
}
