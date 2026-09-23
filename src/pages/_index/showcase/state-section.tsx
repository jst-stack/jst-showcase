import { SectionHeading } from './section-heading'

const lifecycle = ['initial', 'pending', 'ready', 'refreshing', 'error']

const rules = [
	'A store belongs to one entity or feature use case—not to a global bucket for all application state.',
	'Local interaction state stays in the component until independent parts of the application genuinely need it.',
	'Persisted state crosses a storage gateway instead of calling localStorage from a component.',
]

export function StateSection() {
	return (
		<section id="state" className="border-b border-border py-20 sm:py-28">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					index="04"
					kicker="State"
					title="Reatom state follows the model—not the whole application"
					description="Reactive state lives beside an entity or feature and owns one concrete use case. There is no single global store."
				/>

				<div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
					<div className="rounded-xl border border-border bg-card p-6">
						<span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
							store lifecycle
						</span>
						<div className="mt-5 flex flex-wrap items-center gap-2">
							{lifecycle.map((state, i) => (
								<span key={state} className="flex items-center gap-2">
									<span
										className={
											state === 'error'
												? 'rounded-md border border-destructive/40 bg-destructive/[0.06] px-3 py-1.5 font-mono text-sm text-destructive'
												: 'rounded-md border border-border bg-muted px-3 py-1.5 font-mono text-sm text-foreground'
										}
									>
										{state}
									</span>
									{i < lifecycle.length - 1
										? (
												<span className="text-border" aria-hidden="true">
													·
												</span>
											)
										: null}
								</span>
							))}
						</div>
						<p className="mt-6 text-sm leading-relaxed text-muted-foreground">
							The view switches between loading, error, empty, and ready states without controlling
							transport details.
						</p>
					</div>

					<ul className="flex flex-col gap-4" role="list">
						{rules.map(rule => (
							<li
								key={rule}
								className="lift rounded-lg border border-border bg-card px-5 py-4 text-sm leading-relaxed text-foreground hover:border-primary/40"
							>
								{rule}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
