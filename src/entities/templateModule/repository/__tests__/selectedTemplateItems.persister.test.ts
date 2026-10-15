import type { KeyValueStorage } from '@/shared/storages/storage.types'
import { describe, expect, it, vi } from 'vitest'
import { SelectedTemplateItemsStorage } from '../selectedTemplateItems.persister'

describe('selected template items storage', () => {
	it('discards persisted values outside the repository contract', async () => {
		const storage: KeyValueStorage = {
			clear: vi.fn(),
			delete: vi.fn(),
			get: vi.fn().mockResolvedValue([1, 'invalid']),
			set: vi.fn(),
		}
		const repository = new SelectedTemplateItemsStorage(storage)

		await expect(repository.getSelectedItemIds()).resolves.toEqual([])
		expect(storage.delete).toHaveBeenCalledWith('selected-template-items')
	})
})
