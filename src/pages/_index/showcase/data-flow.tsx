import { SectionHeading } from './section-heading'

const pipeline = ['HTTP client', 'repository', 'DTO mapping', 'domain model', 'store', 'feature entry', 'UI']

const boundaries = [
	{
		title: 'HTTP client',
		text: 'Owns protocol details: URLs, query parameters, headers, serialization, status codes, and network errors.',
	},
	{
		title: 'Repository',
		text: 'Speaks in application terms and returns domain data or explicit failures—not raw response objects.',
	},
	{
		title: 'DTO mapping',
		text: 'Transport DTOs stop at the repository boundary. A mapper converts validated payloads into domain models.',
	},
	{
		title: 'Store',
		text: 'Owns operation state: initial, pending, ready, refreshing, and error. The view renders state without managing transport.',
	},
]

export function DataFlow() {
	return (
		<section id="data" className="border-b border-border py-20 sm:py-28">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					index="03"
					kicker="Transport & Model"
					title="External data crosses one boundary at a time"
					description="Every step from protocol to render owns one responsibility. DTOs stop at the repository boundary, and UI never knows how data was fetched."
				/>

				<div className="mt-12 overflow-x-auto rounded-xl border border-border bg-card p-6">
					<ol className="flex min-w-max items-center gap-2 font-mono text-sm" role="list">
						{pipeline.map((node, i) => (
							<li key={node} className="flex items-center gap-2">
								<span
									className={
										i === 0 || i === pipeline.length - 1
											? 'rounded-md border border-primary/40 bg-primary/[0.06] px-3 py-2 text-primary'
											: 'rounded-md border border-border bg-muted px-3 py-2 text-foreground'
									}
								>
									{node}
								</span>
								{i < pipeline.length - 1
									? (
											<span className="text-border" aria-hidden="true">
												→
											</span>
										)
									: null}
							</li>
						))}
					</ol>
				</div>

				<div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
					{boundaries.map(item => (
						<div key={item.title} className="bg-card p-6">
							<h3 className="font-mono text-sm font-semibold text-primary">{item.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
