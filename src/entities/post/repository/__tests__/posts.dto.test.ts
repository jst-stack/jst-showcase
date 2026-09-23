import { describe, expect, it } from 'vitest'
import { parsePostsDTO } from '../posts.dto'

describe('parsePostsDTO', () => {
	it('accepts posts and rejects malformed API data', () => {
		expect(parsePostsDTO([{ userId: 1, id: 1, title: 'Post', body: 'Body' }])).toHaveLength(1)
		expect(() => parsePostsDTO([{ id: 'invalid' }])).toThrow('invalid payload')
	})
})
