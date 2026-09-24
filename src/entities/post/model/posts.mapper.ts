import type { PostDTO } from '../repository/posts.dto'
import type { Post } from './post.types'

export function mapPosts(dto: PostDTO[], limit = dto.length): Post[] {
	return dto.slice(0, limit).map(post => ({
		id: post.id,
		title: post.title,
		excerpt: post.body.replaceAll(/\s+/g, ' ').trim(),
		author: `User ${post.userId}`,
	}))
}
