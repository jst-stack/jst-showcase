import type { TemplateItem } from '@/entities/templateModule/templateModule.public'
import { TemplateItemCard } from '@/entities/templateModule/templateModule.public'

export function CatalogCard({ item, onToggleSelected }: {
	item: TemplateItem
	onToggleSelected: (id: TemplateItem['id']) => Promise<void>
}) {
	return (
		<TemplateItemCard
			item={item}
			onToggleSelected={onToggleSelected}
		/>
	)
}
