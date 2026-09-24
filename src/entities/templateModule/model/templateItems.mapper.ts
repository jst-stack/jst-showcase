import type { TemplateItemsDTO } from '../repository/templateItem.dto'
import type { TemplateItem } from './templateItem.types'

export function mapTemplateItems(dto: TemplateItemsDTO, selectedIds: number[]): TemplateItem[] {
	const selected = new Set(selectedIds)
	return dto.items.map(item => ({
		...item,
		isSelected: selected.has(item.id),
	}))
}
