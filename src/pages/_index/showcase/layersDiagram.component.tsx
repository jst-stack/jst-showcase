'use client'

import { ArrowDown, Check } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from './sectionHeading.component'
import { cn } from './showcase.util'

interface Layer {
	id: string
	title: string
	role: string
	points: string[]
}

const layers: Layer[] = [
	{
		id: 'app',
		title: 'app',
		role: 'Runtime composition',
		points: [
			'React Router and layouts',
			'Global providers',
			'Request-scoped DI container',
			'Theme and shared configuration',
			'Composition roots',
		],
	},
	{
		id: 'pages',
		title: 'pages',
		role: 'Route composition',
		points: [
			'Resolve dependencies from the container',
			'Create the feature injector',
			'Pass feature entries into page UI',
			'Keep transport and browser APIs out',
		],
	},
	{
		id: 'widgets',
		title: 'widgets',
		role: 'Large interface blocks',
		points: [
			'Compose several page regions',
			'Accept presentation props and ReactNode',
			'Never resolve repositories, services, or stores',
		],
	},
	{
		id: 'features',
		title: 'features',
		role: 'Complete user outcomes',
		points: [
			'Feature entry and injector',
			'User-action orchestration',
			'Props-driven feature UI',
			'Connect entities to presentation',
		],
	},
	{
		id: 'entities',
		title: 'entities',
		role: 'Domain ownership',
		points: [
			'Models and focused reactive stores',
			'Repository contracts',
			'Domain-oriented services',
			'Transport DTO validation and mapping',
			'Reusable entity UI',
		],
	},
	{
		id: 'shared',
		title: 'shared',
		role: 'Reusable infrastructure',
		points: [
			'HTTP client and storage gateway',
			'Cross-cutting React helpers',
			'Configuration',
			'UI primitives without product meaning',
		],
	},
]

export function LayersDiagram() {
	const [active, setActive] = useState<string>('features')
	const activeLayer = layers.find(layer => layer.id === active) ?? layers[0]

	return (
		<section id="layers" aria-label="JST application layers" className="border-b border-border py-20 sm:py-28">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					index="01"
					kicker="Layers"
					title="Six layers with directed dependencies"
					description="Lower layers never import higher ones. Features know nothing about pages, entities know nothing about feature scenarios, and shared knows nothing about the product domain."
				/>

				<div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
					<LayerStack active={active} onSelect={setActive} />
					<LayerDetail layer={activeLayer} />
				</div>
			</div>
		</section>
	)
}

function LayerStack({ active, onSelect }: { active: string, onSelect: (id: string) => void }) {
	return (
		<div>
			<div className="relative pl-6">
				<div className="pointer-events-none absolute left-[7px] top-5 bottom-5 w-px overflow-hidden bg-gradient-to-b from-primary/70 via-primary/40 to-primary/10" aria-hidden="true">
					<span className="animate-flow absolute left-1/2 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent" />
				</div>
				<ul className="flex flex-col gap-2" role="list">
					{layers.map((layer, index) => <LayerButton key={layer.id} active={active === layer.id} index={index} layer={layer} onSelect={onSelect} />)}
				</ul>
			</div>
			<p className="mt-4 pl-6 font-mono text-xs text-muted-foreground">→ imports are allowed only down the stack</p>
		</div>
	)
}

function LayerButton({ active, index, layer, onSelect }: { active: boolean, index: number, layer: Layer, onSelect: (id: string) => void }) {
	return (
		<li className="relative">
			<span className={cn('pointer-events-none absolute -left-[calc(1.5rem-4px)] top-1/2 size-2 -translate-y-1/2 rounded-full border-2 transition-colors', active ? 'animate-node border-primary bg-primary' : 'border-border bg-background')} aria-hidden="true" />
			<button type="button" onClick={() => onSelect(layer.id)} onMouseEnter={() => onSelect(layer.id)} aria-pressed={active} className={cn('group flex w-full items-center gap-4 rounded-lg border px-4 py-4 text-left transition-all', active ? 'border-primary bg-primary/[0.08] shadow-sm' : 'border-border bg-card hover:border-primary/40')}>
				<span className={cn('font-mono text-xs tabular-nums', active ? 'text-primary' : 'text-muted-foreground')}>{String(index + 1).padStart(2, '0')}</span>
				<span className="min-w-0 flex-1">
					<span className={cn('font-mono text-base font-semibold', active ? 'text-primary' : 'text-foreground')}>{layer.title}</span>
					<span className="ml-3 text-sm text-muted-foreground">{layer.role}</span>
				</span>
				{index < layers.length - 1 ? <ArrowDown className={cn('size-4 shrink-0 transition-colors', active ? 'text-primary' : 'text-border')} aria-hidden="true" /> : null}
			</button>
		</li>
	)
}

function LayerDetail({ layer }: { layer: Layer }) {
	return (
		<div className="min-w-0">
			<div className="rounded-xl border border-border bg-card">
				<div className="flex items-center justify-between border-b border-border px-6 py-4">
					<span className="font-mono text-lg font-semibold text-primary">{layer.title}</span>
					<span className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">{layer.role}</span>
				</div>
				<ul className="flex flex-col gap-3 px-6 py-6" role="list">
					{layer.points.map(point => (
						<li key={point} className="flex items-start gap-3 text-sm text-foreground">
							<Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
							<span className="leading-relaxed">{point}</span>
						</li>
					))}
				</ul>
			</div>
			<p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
				Code belongs in
				<span className="font-mono text-foreground">shared</span>
				{' '}
				only when it is independent of a domain context and has proven reuse—not because its owner is still unclear.
			</p>
		</div>
	)
}
