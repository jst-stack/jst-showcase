import type { TemplateCatalogDeps } from './templateCatalog.types'
import { createDi } from '@/shared/lib/react.lib'

export const {
	Injector: TemplateCatalogInjector,
	useDi: useTemplateCatalogService,
} = createDi<TemplateCatalogDeps>()
