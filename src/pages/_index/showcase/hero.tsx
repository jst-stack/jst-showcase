'use client'

import { ArrowDown, Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { GithubIcon } from './github-icon'

const INSTALL = 'npm create jst@latest my-app'

export function Hero() {
	const [copied, setCopied] = useState(false)

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(INSTALL)
			setCopied(true)
			setTimeout(setCopied, 1600, false)
		}
		catch {
			/* clipboard unavailable */
		}
	}

	return (
		<section id="top" className="relative overflow-hidden border-b border-border">
			<div
				aria-hidden="true"
				className="bg-grid-drift pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
			/>
			<div className="relative mx-auto max-w-3xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
				<h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
					Architecture breaks as products grow. JST keeps it intact.
				</h1>
				<p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
					JST fixes the boundaries between app, pages, widgets, features, entities, and shared.
					Maintainable structure becomes the path of least resistance from the first commit.
				</p>

				<div className="mx-auto mt-8 flex max-w-lg flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
					<div className="flex items-center gap-3 rounded-md border border-border bg-muted/50 px-4 py-2.5">
						<span aria-hidden="true" className="select-none font-mono text-sm text-muted-foreground">
							$
						</span>
						<code className="flex-1 truncate text-left font-mono text-sm text-foreground">
							{INSTALL}
						</code>
						<button
							type="button"
							onClick={copy}
							className="text-muted-foreground transition-colors hover:text-foreground"
							aria-label="Copy install command"
						>
							{copied
								? (
										<Check className="size-4 text-primary" aria-hidden="true" />
									)
								: (
										<Copy className="size-4" aria-hidden="true" />
									)}
						</button>
					</div>
					<a
						href="https://github.com/jst-stack/jst"
						className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
					>
						<GithubIcon className="size-4" aria-hidden="true" />
						View on GitHub
					</a>
				</div>

				{/* Terminal mockup */}
				<div className="mx-auto mt-12 max-w-md overflow-hidden rounded-lg border border-border bg-card text-left shadow-sm">
					<div className="relative flex items-center border-b border-border bg-muted/60 px-4 py-2.5">
						<div className="flex items-center gap-1.5">
							<span className="size-3 rounded-full bg-border" aria-hidden="true" />
							<span className="size-3 rounded-full bg-border" aria-hidden="true" />
							<span className="size-3 rounded-full bg-border" aria-hidden="true" />
						</div>
						<span className="absolute left-1/2 -translate-x-1/2 font-mono text-xs text-muted-foreground">
							jst — setup
						</span>
					</div>
					<div className="space-y-1 px-5 py-5 font-mono text-[13px] leading-relaxed">
						<p className="term-line text-muted-foreground" style={{ animationDelay: '0.1s' }}>
							<span className="text-primary">$</span>
							{' '}
							{INSTALL}
						</p>
						<p className="term-line text-foreground" style={{ animationDelay: '0.5s' }}>
							Creating my-app…
						</p>
						<p className="term-line text-foreground" style={{ animationDelay: '0.9s' }}>
							Layers
							{' '}
							<span className="text-primary">›</span>
							{' '}
							app · pages · widgets · features ·
							entities · shared
						</p>
						<p className="term-line text-muted-foreground/70" style={{ animationDelay: '1.3s' }}>
							Installing dependencies and initializing Git…
						</p>
						<p
							className="term-line flex items-center gap-1.5 pt-2 text-foreground"
							style={{ animationDelay: '1.7s' }}
						>
							<Check className="size-3.5 text-primary" aria-hidden="true" />
							boundaries · di · ssr · checks ready
							<span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-foreground" />
						</p>
					</div>
				</div>

				<div className="mt-10">
					<a
						href="#layers"
						className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
					>
						Explore the architecture
						<ArrowDown className="size-4" aria-hidden="true" />
					</a>
				</div>
			</div>
		</section>
	)
}
