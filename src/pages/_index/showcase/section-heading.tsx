import type { ReactNode } from 'react'

interface SectionHeadingProps {
	index: string
	kicker: string
	title: string
	description?: ReactNode
}

export function SectionHeading({ index, kicker, title, description }: SectionHeadingProps) {
	return (
		<div className="max-w-2xl">
			<div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
				<span className="tabular-nums">{index}</span>
				<span aria-hidden="true">·</span>
				<span>{kicker}</span>
			</div>
			<h2 className="mt-3 text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
				{title}
			</h2>
			{description
				? (
						<p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
							{description}
						</p>
					)
				: null}
		</div>
	)
}
