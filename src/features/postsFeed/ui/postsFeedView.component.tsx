import type { Post } from '@/entities/post/model/post.types'
import { Alert, Box, Button, Group, Loader, Stack, Text } from '@mantine/core'
import { PostCard } from '@/entities/post/ui/postCard.component'
import styles from './postsFeedView.component.module.css'

interface Props {
	error: Error | undefined
	pending: boolean
	posts: Post[]
	ready: boolean
	refreshing: boolean
	onRefresh: () => void
}

export function PostsFeedView({ error, pending, posts, ready, refreshing, onRefresh }: Props) {
	return (
		<Stack gap="lg">
			<Group justify="space-between" align="center">
				<Group gap="xs">
					<span className={styles.requestStatus} data-pending={pending || refreshing || undefined} aria-hidden="true" />
					<Text size="xs" ff="monospace" c="var(--color-text-muted)">Request</Text>
					<Text className={styles.requestState} aria-live="polite">
						{pending || refreshing ? 'loading' : 'ready'}
					</Text>
				</Group>
				<Button
					variant="subtle"
					size="compact-sm"
					disabled={!ready || refreshing}
					loading={refreshing}
					onClick={onRefresh}
				>
					{refreshing ? 'Refreshing' : 'Refresh'}
				</Button>
			</Group>
			{!ready && !posts.length && (
				<Box className={styles.apiLoading} role="status" aria-live="polite">
					<Loader size="sm" aria-hidden="true" />
					<Text size="sm" c="var(--color-text-muted)">Fetching data…</Text>
				</Box>
			)}
			{error && (
				<Alert color="red" title="The demo API is unavailable">
					{error.message}
					{' '}
					Use Refresh to try again.
				</Alert>
			)}
			{posts.length > 0 && (
				<Stack className={styles.postsList} data-pending={refreshing || undefined} gap={0}>
					{posts.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}
				</Stack>
			)}
		</Stack>
	)
}
