const stack = [
	'React Router',
	'TypeScript',
	'Vite',
	'Reatom',
	'needle-di',
	'Vitest',
	'Playwright',
	'Knip',
]

export function LogoCloud() {
	return (
		<section className="border-b border-border">
			<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
				<p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
					Built on maintained primitives
				</p>
				<ul
					className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
					role="list"
				>
					{stack.map(name => (
						<li
							key={name}
							className="text-sm font-medium tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
						>
							{name}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
