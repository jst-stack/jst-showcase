import type { PostsFeedDeps } from './postsFeed.types'
import { createDi } from '@/shared/lib/react.lib'

export const {
	Injector: PostsFeedInjector,
	useDi: usePostsFeedService,
} = createDi<PostsFeedDeps>()
