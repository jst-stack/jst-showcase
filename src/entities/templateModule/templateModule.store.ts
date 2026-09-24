import type { TemplateItem } from './model/templateItem.types'
import { inject } from '@needle-di/core'
import { action, atom, computed, sleep, withAsyncData, wrap } from '@reatom/core'
import { TemplateModuleService } from './services/templateModuleService/templateModule.service'

export class TemplateModuleStore {
	constructor(
		private readonly templateModuleService = inject(TemplateModuleService),
	) {}

	search = atom('')
	private revision = atom(0)
	private bumpRevision = action(() => this.revision.set(this.revision() + 1))

	items = computed(async () => {
		this.revision()
		const query = this.search()

		if (query) {
			await wrap(sleep(150))
		}

		return wrap(this.templateModuleService.getTemplateItems(query))
	}).extend(withAsyncData({ initState: [] }))

	selectedItems = computed(() =>
		this.templateModuleService.getSelectedItems(this.items.data()),
	)

	clearSelected = async () => {
		await wrap(this.templateModuleService.clearSelected(this.items.data()))
		this.bumpRevision()
	}

	toggleSelected = async (id: TemplateItem['id']) => {
		await wrap(this.templateModuleService.toggleSelected(this.items.data(), id))
		this.bumpRevision()
	}
}
