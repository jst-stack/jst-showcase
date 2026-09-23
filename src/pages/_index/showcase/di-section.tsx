import { ChevronRight } from 'lucide-react'
import { SectionHeading } from './section-heading'

const chain = [
	'application container',
	'page composition root',
	'feature injector',
	'feature entry',
	'presentation components',
]

const benefits = [
	'Replace an HTTP repository with an in-memory implementation in tests',
	'Swap localStorage for another persistence adapter',
	'Compose different feature implementations for different runtimes',
	'See every dependency at the composition root',
	'Keep the service locator out of presentation code',
]

export function DiSection() {
	return (
		<section id="di" className="border-b border-border py-20 sm:py-28">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					index="02"
					kicker="Dependency Injection"
					title="The container stays in app. Dependencies move through injectors."
					description={(
						<>
							JST uses
							{' '}
							<span className="font-mono text-foreground">@needle-di/core</span>
							.
							Pages resolve dependencies, feature injectors expose a narrow contract, and
							presentation components receive only data and handlers.
						</>
					)}
				/>

				<div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-10">
					<div className="rounded-xl border border-border bg-card p-6">
						<span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
							composition flow
						</span>
						<ol className="mt-5 flex flex-col gap-2" role="list">
							{chain.map((node, i) => (
								<li key={node} className="flex items-center gap-3">
									<span className="flex size-6 shrink-0 items-center justify-center rounded border border-border font-mono text-[11px] text-primary">
										{i + 1}
									</span>
									<code className="flex-1 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
										{node}
									</code>
								</li>
							))}
						</ol>
					</div>

					<div className="flex flex-col justify-center">
						<h3 className="text-sm font-medium text-foreground">This makes it possible to</h3>
						<ul className="mt-4 flex flex-col gap-3" role="list">
							{benefits.map(benefit => (
								<li key={benefit} className="flex items-start gap-3 text-sm text-muted-foreground">
									<ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
									<span className="leading-relaxed text-foreground">{benefit}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
