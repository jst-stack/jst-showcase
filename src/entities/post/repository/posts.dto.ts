export interface PostDTO {
	userId: number
	id: number
	title: string
	body: string
}

export function parsePostsDTO(value: unknown): PostDTO[] {
	if (!Array.isArray(value) || !value.every(isPostDTO)) {
		throw new TypeError('The posts API returned an invalid payload.')
	}

	return value
}

function isPostDTO(value: unknown): value is PostDTO {
	if (!value || typeof value !== 'object') {
		return false
	}

	const post = value as Record<string, unknown>
	return typeof post.userId === 'number'
		&& typeof post.id === 'number'
		&& typeof post.title === 'string'
		&& typeof post.body === 'string'
}
