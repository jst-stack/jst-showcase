import { X } from 'lucide-react'
import { SectionHeading } from './sectionHeading.component'

const boundaries = [
	'Import app, pages, or widgets from entities or shared',
	'Resolve the application container from presentation components',
	'Use the HTTP client directly inside feature UI',
	'Pass transport DTOs beyond the repository boundary',
	'Call localStorage from a component or domain store',
	'Create global state for interaction that belongs to one component',
	'Add an abstraction before it has two real use cases',
	'Move code to shared only because its owner is not clear yet',
]

export function BoundariesSection() {
	return (
		<section id="boundaries" className="border-b border-border py-20 sm:py-28">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					index="08"
					kicker="Do not cross"
					title="Boundaries that keep coupling visible"
					description="These constraints are easier to follow because the repository checks them automatically."
				/>

				<ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2" role="list">
					{boundaries.map(rule => (
						<li key={rule} className="flex items-start gap-3 bg-card p-5">
							<span
								className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-destructive/40 bg-destructive/[0.06] text-destructive"
								aria-hidden="true"
							>
								<X className="size-3" />
							</span>
							<span className="text-sm leading-relaxed text-foreground">{rule}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
