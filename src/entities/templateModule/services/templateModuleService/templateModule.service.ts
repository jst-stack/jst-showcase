import type { TemplateItem } from '../../model/templateItem.types'
import { inject } from '@needle-di/core'
import { mapTemplateItems } from '../../model/templateItems.mapper'
import { TemplateItemsModel } from '../../model/templateItems.model'
import {
	SELECTED_TEMPLATE_ITEMS_REPOSITORY_TOKEN,
	TEMPLATE_ITEMS_REPOSITORY_TOKEN,
} from '../../repository/templateRepository.types'

export class TemplateModuleService {
	constructor(
		private readonly templateItemsRepo = inject(TEMPLATE_ITEMS_REPOSITORY_TOKEN),
		private readonly selectedItemsRepo = inject(
			SELECTED_TEMPLATE_ITEMS_REPOSITORY_TOKEN,
		),
	) {}

	async getTemplateItems(query: string = '') {
		const [dto, selectedIds] = await Promise.all([
			this.templateItemsRepo.getTemplateItems(query),
			this.selectedItemsRepo.getSelectedItemIds(),
		])

		return mapTemplateItems(dto, selectedIds)
	}

	public getSelectedItems(items: TemplateItem[]) {
		return TemplateItemsModel.getSelectedItems(items)
	}

	public async toggleSelected(items: TemplateItem[], id: number) {
		await this.selectedItemsRepo.toggleSelected(id)

		TemplateItemsModel.toggleItemById(items, id)
	}

	public async clearSelected(items: TemplateItem[]) {
		await this.selectedItemsRepo.clearSelected()

		TemplateItemsModel.clearSelected(items)
	}
}
