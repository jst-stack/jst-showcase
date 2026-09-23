import { Check } from 'lucide-react'
import { SectionHeading } from './section-heading'

const commands = [
	{ cmd: 'npm run lint', note: 'code, styles, and dependency boundaries' },
	{ cmd: 'npm run test:unit', note: 'focused unit and integration tests' },
	{ cmd: 'npm run build', note: 'route types, TypeScript, and production bundles' },
	{ cmd: 'npm run knip', note: 'unused files, exports, and dependencies' },
	{ cmd: 'npm run test:e2e', note: 'SSR, hydration, accessibility, and user journeys' },
]

export function ChecksSection() {
	return (
		<section id="checks" className="border-b border-border py-20 sm:py-28">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					index="06"
					kicker="Architecture checks"
					title="Rules fail before review"
					description={(
						<>
							<span className="font-mono text-foreground">npm run check</span>
							{' '}
							combines
							static analysis, boundary checks, unit tests, type checking, a production build, and
							dead-code detection. Architecture rules do not depend on reviewer memory.
						</>
					)}
				/>

				<div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10">
					<div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
						<div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
							<span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
							<span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
							<span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
							<span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
						</div>
						<div className="px-5 py-5 font-mono text-sm leading-relaxed">
							<p className="term-line text-muted-foreground" style={{ animationDelay: '0.05s' }}>
								<span className="text-primary">$</span>
								{' '}
								npm run check
							</p>
							{commands.map((command, i) => (
								<p
									key={command.cmd}
									className="term-line mt-1 text-foreground"
									style={{ animationDelay: `${0.25 + i * 0.18}s` }}
								>
									<span className="text-muted-foreground/60">&gt;</span>
									{' '}
									{command.cmd.replace('npm run ', '')}
								</p>
							))}
							<p
								className="term-line mt-3 flex items-center gap-1.5 text-foreground"
								style={{ animationDelay: `${0.25 + commands.length * 0.18}s` }}
							>
								<Check className="size-3.5 text-primary" aria-hidden="true" />
								boundaries · unit · types · build · knip
								<span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-foreground" />
							</p>
						</div>
					</div>

					<ul className="flex flex-col gap-2" role="list">
						{commands.map(command => (
							<li
								key={command.cmd}
								className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card px-4 py-3"
							>
								<code className="font-mono text-sm text-foreground">{command.cmd}</code>
								<span className="text-right text-xs text-muted-foreground">{command.note}</span>
							</li>
						))}
						<li className="mt-1 rounded-lg border border-border bg-muted px-4 py-3 text-sm leading-relaxed text-muted-foreground">
							Playwright covers SSR, hydration, responsive layout, navigation, and reduced motion.
							Axe catches automatically detectable accessibility violations.
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
