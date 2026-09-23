import type { TemplateItemsDTO } from '../repository/templateItem.dto'
import type { TemplateItem } from './types'
import { atom } from '@reatom/core'

export function mapTemplateItems(dto: TemplateItemsDTO, selectedIds: number[]): TemplateItem[] {
	const selected = new Set(selectedIds)
	return dto.items.map(item => ({
		...item,
		isSelected: atom(selected.has(item.id)),
	}))
}
