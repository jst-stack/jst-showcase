import { SectionHeading } from './section-heading'

const steps = [
	{ title: 'Domain types', text: 'Define model language and invariants in entities/<domain>/model.' },
	{ title: 'Repository port', text: 'Describe the smallest I/O contract the use case needs.' },
	{ title: 'Infrastructure', text: 'Add the adapter in the lowest valid layer.' },
	{ title: 'Store / service', text: 'Give orchestration and state one responsibility each.' },
	{ title: 'Feature', text: 'Create one feature for one user outcome.' },
	{ title: 'Injector', text: 'Satisfy the feature contract at the page composition root.' },
	{ title: 'UI entry', text: 'Map store state and actions to presentation props.' },
	{ title: 'Proof', text: 'Add focused unit and browser-level journey tests.' },
	{ title: 'Quality gate', text: 'Run npm run check before review.' },
]

export function AddingModule() {
	return (
		<section id="adding" className="border-b border-border py-20 sm:py-28">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					index="07"
					kicker="Workflow"
					title="Add a domain without inventing a structure"
					description="The sequence is repeatable, but no layer exists only to satisfy a diagram."
				/>

				<ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3" role="list">
					{steps.map((step, i) => (
						<li key={step.title} className="flex gap-4 bg-card p-6">
							<span className="font-mono text-sm tabular-nums text-primary">
								{String(i + 1).padStart(2, '0')}
							</span>
							<div>
								<h3 className="font-mono text-sm font-semibold text-foreground">{step.title}</h3>
								<p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
