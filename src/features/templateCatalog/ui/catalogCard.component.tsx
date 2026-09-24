import type { TemplateItem } from '@/entities/templateModule/model/templateItem.types'
import { TemplateItemCard } from '@/entities/templateModule/ui/templateItemCard.component'

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
