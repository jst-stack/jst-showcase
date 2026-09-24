import type { TemplateItem } from '../model/templateItem.types'

export interface TemplateItemCardProps {
	item: TemplateItem
	onToggleSelected: (id: TemplateItem['id']) => void
}
