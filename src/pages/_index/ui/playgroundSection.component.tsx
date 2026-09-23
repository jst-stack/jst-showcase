import type { MouseEventHandler, ReactNode } from 'react'
import { Button } from '@mantine/core'
import { SectionHeading } from '../showcase/section-heading'

interface PlaygroundSectionProps {
	selectedSummary: string
	canClear: boolean
	onClear: MouseEventHandler<HTMLButtonElement>
	feed: ReactNode
	catalog: ReactNode
}

export function PlaygroundSection({ selectedSummary, canClear, onClear, feed, catalog }: PlaygroundSectionProps) {
	return (
		<section id="playground" className="border-b border-border py-20 sm:py-28" aria-labelledby="playground-title">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					index="LIVE"
					kicker="Working vertical slices"
					title="Trace the architecture in running code"
					description="Two deliberately small features exercise HTTP, validation, mapping, state, dependency injection, persistence, and presentation boundaries."
				/>

				<div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-2">
					<article className="flex min-w-0 flex-col bg-card p-6">
						<div className="flex items-start justify-between gap-4">
							<div>
								<span className="font-mono text-xs uppercase tracking-widest text-primary">01 · Remote data</span>
								<h3 className="mt-3 text-base font-semibold text-foreground">A real repository boundary</h3>
							</div>
							<code className="text-right font-mono text-xs text-muted-foreground">HTTP · DTO · mapper</code>
						</div>
						<p className="mt-3 text-sm leading-relaxed text-muted-foreground">JSONPlaceholder data is validated and mapped before it reaches the view.</p>
						<div className="mt-6 border-t border-border pt-6">{feed}</div>
					</article>

					<article className="flex min-w-0 flex-col bg-card p-6">
						<div className="flex items-start justify-between gap-4">
							<div>
								<span className="font-mono text-xs uppercase tracking-widest text-primary">02 · Local persistence</span>
								<h3 className="mt-3 text-base font-semibold text-foreground">State behind an injected gateway</h3>
							</div>
							<code className="text-right font-mono text-xs text-muted-foreground">search · state · storage</code>
						</div>
						<p className="mt-3 text-sm leading-relaxed text-muted-foreground">Choose an example and reload. The storage adapter keeps the selection.</p>
						<div className="mt-6 flex items-center justify-between gap-4 border-y border-border py-4">
							<div>
								<span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Persisted selection</span>
								<strong className="mt-1 block text-sm font-medium text-foreground">{selectedSummary}</strong>
							</div>
							<Button variant="subtle" disabled={!canClear} onClick={onClear}>Clear</Button>
						</div>
						<div className="pt-6">{catalog}</div>
					</article>
				</div>
			</div>
		</section>
	)
}
