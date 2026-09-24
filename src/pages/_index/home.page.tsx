import { wrap } from '@reatom/core'
import { reatomComponent } from '@reatom/react'
import { useSyncExternalStore } from 'react'
import { PostsStore } from '@/entities/post/posts.store'
import { TemplateModuleStore } from '@/entities/templateModule/templateModule.store'
import { PostsFeedEntry } from '@/features/postsFeed/postsFeed.entry'
import { PostsFeedInjector } from '@/features/postsFeed/postsFeed.injector'
import { TemplateCatalogEntry } from '@/features/templateCatalog/templateCatalog.entry'
import { TemplateCatalogInjector } from '@/features/templateCatalog/templateCatalog.injector'
import { useService } from '@/shared/di/serviceLocator.context'
import styles from './home.page.module.css'
import { AddingModule } from './showcase/addingModule.component'
import { BoundariesSection } from './showcase/boundariesSection.component'
import { ChecksSection } from './showcase/checksSection.component'
import { DataFlow } from './showcase/dataFlow.component'
import { DiSection } from './showcase/diSection.component'
import { FaqSection } from './showcase/faqSection.component'
import { Hero } from './showcase/hero.component'
import { LayersDiagram } from './showcase/layersDiagram.component'
import { LogoCloud } from './showcase/logoCloud.component'
import { Reveal } from './showcase/reveal.component'
import { RuntimeSection } from './showcase/runtimeSection.component'
import { SiteFooter } from './showcase/siteFooter.component'
import { StateSection } from './showcase/stateSection.component'
import { PlaygroundSection } from './ui/playgroundSection.component'

const subscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

export const HomePage = reatomComponent(() => {
	const templateModuleStore = useService(TemplateModuleStore)
	const postsStore = useService(PostsStore)
	const hydrated = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)
	const selectedItems = hydrated ? templateModuleStore.selectedItems() : []
	const selectedSummary = selectedItems.length
		? selectedItems.map(item => item.title).join(', ')
		: 'Nothing selected yet.'

	return (
		<div className={styles.page}>
			<Hero />
			<LogoCloud />
			<Reveal><LayersDiagram /></Reveal>
			<Reveal><DiSection /></Reveal>
			<Reveal><DataFlow /></Reveal>
			<Reveal><StateSection /></Reveal>
			<Reveal><RuntimeSection /></Reveal>
			<Reveal><ChecksSection /></Reveal>
			<Reveal>
				<PlaygroundSection
					feed={hydrated
						? (
								<PostsFeedInjector value={{ postsStore }}>
									<PostsFeedEntry />
								</PostsFeedInjector>
							)
						: <div className={styles.demoSkeleton} aria-label="Loading posts" />}
					selectedSummary={selectedSummary}
					canClear={selectedItems.length > 0}
					onClear={wrap(templateModuleStore.clearSelected)}
					catalog={hydrated
						? (
								<TemplateCatalogInjector value={{ templateModuleStore }}>
									<TemplateCatalogEntry />
								</TemplateCatalogInjector>
							)
						: <div className={styles.catalogSkeleton} aria-label="Loading catalog" />}
				/>
			</Reveal>
			<Reveal><AddingModule /></Reveal>
			<Reveal><BoundariesSection /></Reveal>
			<Reveal><FaqSection /></Reveal>
			<SiteFooter />
		</div>
	)
}, 'HomePage')
