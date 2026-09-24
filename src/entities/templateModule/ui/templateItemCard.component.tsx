import type { TemplateItemCardProps } from './templateItem.types'
import { Button, Card, Group, Text, Title } from '@mantine/core'
import styles from './templateItemCard.component.module.css'

export function TemplateItemCard({ item, onToggleSelected }: TemplateItemCardProps) {
	return (
		<Card className={styles.card} radius={0} padding="lg" h="100%">
			<Group justify="space-between" align="flex-start" mb="md">
				<Text className={styles.area} size="xs" tt="uppercase" fw={700}>
					{item.area}
				</Text>
				<Text className={styles.badge} size="xs">
					{item.badge}
				</Text>
			</Group>

			<Title order={3} className={styles.title} mb="xs">
				{item.title}
			</Title>

			<Text className={styles.description} size="sm" mb="xl">
				{item.description}
			</Text>

			<Button
				mt="auto"
				size="compact-sm"
				variant={item.isSelected ? 'filled' : 'subtle'}
				onClick={() => void onToggleSelected(item.id)}
			>
				{item.isSelected ? 'Added' : 'Add'}
			</Button>
		</Card>
	)
}
