import type { TemplateItemDTO } from './templateItem.dto'
import type { TemplateItemsRepository } from './templateRepository.types'

const TEMPLATE_ITEMS: TemplateItemDTO[] = [
	{
		id: 1,
		title: 'Server rendering',
		description:
			'React Router owns the request, status code, route errors, server render, and hydration.',
		area: 'runtime',
		badge: 'React Router',
	},
	{
		id: 2,
		title: 'Import boundaries',
		description:
			'ESLint rejects imports that cross app, page, feature, entity, and shared layers in the wrong direction.',
		area: 'architecture',
		badge: 'ESLint',
	},
	{
		id: 3,
		title: 'Replaceable I/O',
		description:
			'HTTP and storage stay behind narrow ports and request-scoped dependencies.',
		area: 'data',
		badge: 'Needle DI',
	},
	{
		id: 4,
		title: 'Setup and cleanup',
		description:
			'The setup script can remove the example domain while preserving the project baseline.',
		area: 'setup',
		badge: 'CLI',
	},
]

export class TemplateItemsMemoryRepository implements TemplateItemsRepository {
	async getTemplateItems(query: string = '') {
		const normalizedQuery = query.trim().toLowerCase()

		if (!normalizedQuery) {
			return { items: TEMPLATE_ITEMS }
		}

		return {
			items: TEMPLATE_ITEMS.filter(item =>
				[
					item.title,
					item.description,
					item.area,
					item.badge,
				].some(value => value.toLowerCase().includes(normalizedQuery)),
			),
		}
	}
}
