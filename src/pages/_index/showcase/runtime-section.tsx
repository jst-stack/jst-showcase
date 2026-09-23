import { Database, Layout, Server } from 'lucide-react'
import { SectionHeading } from './section-heading'

const cards = [
	{
		icon: Server,
		title: 'SSR and hydration',
		text: 'React Router owns server rendering and hydration. Browser-only storage and interaction use explicit client boundaries, so browser APIs never run during server render.',
	},
	{
		icon: Layout,
		title: 'Presentation',
		text: 'Views receive display data, loading and error state, and handlers through narrow props. They never import repositories, services, the DI container, or storage adapters.',
	},
	{
		icon: Database,
		title: 'Persistence',
		text: 'A gateway owns key namespaces, serialization, reads, writes, removal, and availability checks. Features depend on its contract, not on window.localStorage.',
	},
]

export function RuntimeSection() {
	return (
		<section id="runtime" className="border-b border-border py-20 sm:py-28">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					index="05"
					kicker="Runtime boundaries"
					title="Server, browser, and persistence stay explicit"
					description="Infrastructure details sit behind narrow contracts, so changing an adapter does not rewrite UI or domain rules."
				/>

				<div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
					{cards.map(card => (
						<article key={card.title} className="flex flex-col bg-card p-6">
							<span className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
								<card.icon className="size-5" aria-hidden="true" />
							</span>
							<h3 className="mt-4 text-base font-semibold text-foreground">{card.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
