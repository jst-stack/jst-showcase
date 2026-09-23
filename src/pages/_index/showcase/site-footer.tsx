import { Boxes, Trash2 } from 'lucide-react'

const REPO = 'https://github.com/jst-stack/jst'

const columns = [
	{
		title: 'Architecture',
		links: [
			{ label: 'Layers', href: '#layers' },
			{ label: 'Dependency Injection', href: '#di' },
			{ label: 'Transport & Model', href: '#data' },
			{ label: 'State', href: '#state' },
		],
	},
	{
		title: 'Practices',
		links: [
			{ label: 'Runtime boundaries', href: '#runtime' },
			{ label: 'Checks', href: '#checks' },
			{ label: 'New module', href: '#adding' },
			{ label: 'Boundaries', href: '#boundaries' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ label: 'README', href: `${REPO}#readme` },
			{ label: 'Changelog', href: `${REPO}/releases` },
			{ label: 'GitHub', href: REPO },
			{ label: 'Issues', href: `${REPO}/issues` },
		],
	},
]

export function SiteFooter() {
	return (
		<footer id="footer" className="relative overflow-hidden bg-background">
			<div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
				<div className="flex items-start gap-4 rounded-xl border border-dashed border-border bg-muted/40 p-6">
					<span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground">
						<Trash2 className="size-5" aria-hidden="true" />
					</span>
					<div>
						<h2 className="text-sm font-semibold text-foreground">This is a demonstration application</h2>
						<p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
							It shows JST boundaries in running code. Production projects are created clean with
							npm create jst@latest; this showcase stays in its own repository.
						</p>
					</div>
				</div>

				<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div>
						<div className="flex items-center gap-2">
							<span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
								<Boxes className="size-4" aria-hidden="true" />
							</span>
							<span className="text-sm font-semibold text-foreground">JST</span>
						</div>
						<p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
							Architecture-first React starter with enforceable layer boundaries.
						</p>
					</div>
					{columns.map(col => (
						<div key={col.title}>
							<h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
								{col.title}
							</h3>
							<ul className="mt-4 flex flex-col gap-2.5" role="list">
								{col.links.map((link) => {
									const external = link.href.startsWith('http')
									return (
										<li key={link.label}>
											<a
												href={link.href}
												{...(external
													? { target: '_blank', rel: 'noreferrer noopener' }
													: {})}
												className="text-sm text-foreground/80 transition-colors hover:text-primary"
											>
												{link.label}
											</a>
										</li>
									)
								})}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border py-6 sm:flex-row sm:items-center">
					<p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
						Product of · architecture-first template
					</p>
					<p className="font-mono text-xs text-muted-foreground">
						app → pages → widgets → features → entities → shared
					</p>
				</div>
			</div>

			{/* Watermark */}
			<div aria-hidden="true" className="pointer-events-none select-none px-4">
				<p aria-hidden="true" className="translate-y-[18%] text-center text-[22vw] font-semibold leading-none tracking-tighter text-muted/60">
					JST
				</p>
			</div>
		</footer>
	)
}
