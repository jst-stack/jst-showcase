import { z } from 'zod'

const postSchema = z.object({
	body: z.string(),
	id: z.number().int(),
	title: z.string(),
	userId: z.number().int(),
})

const postsSchema = z.array(postSchema)

export type PostDTO = z.infer<typeof postSchema>

export function parsePostsDTO(value: unknown): PostDTO[] {
	const result = postsSchema.safeParse(value)
	if (!result.success) {
		throw new TypeError('The posts API returned an invalid payload.', { cause: result.error })
	}
	return result.data
}
