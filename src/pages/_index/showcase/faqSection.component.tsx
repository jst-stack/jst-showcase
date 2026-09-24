'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from './showcase.util'

const faq = [
	{
		q: 'What is JST?',
		a: 'An architecture-first React starter with enforceable boundaries between layers. It makes maintainable structure the path of least resistance.',
	},
	{
		q: 'Is this a framework?',
		a: 'No. JST is a starter with enforceable conventions. Product code remains ordinary React and TypeScript.',
	},
	{
		q: 'Why six layers?',
		a: 'Directed dependencies keep coupling under control as the codebase grows. Features know nothing about pages, entities know nothing about feature scenarios, and shared knows nothing about the domain.',
	},
	{
		q: 'Why DI instead of a service locator?',
		a: 'The container is confined to app and pages. Feature views receive narrow dependencies through injectors, making composition visible and implementations replaceable.',
	},
	{
		q: 'How are boundaries enforced?',
		a: 'npm run check combines static analysis, boundary checks, unit tests, type checking, a production build, and dead-code detection. Browser contracts run separately.',
	},
	{
		q: 'Can I adapt the rules?',
		a: 'Yes. Start with the defaults, then change a boundary only when the product has a concrete reason to own a different rule.',
	},
]

export function FaqSection() {
	const [open, setOpen] = useState<number | null>(0)

	return (
		<section id="faq" className="border-b border-border py-20 sm:py-28">
			<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
					Questions worth answering early
				</h2>
				<ul className="mt-10 divide-y divide-border border-y border-border" role="list">
					{faq.map((item, i) => {
						const isOpen = open === i
						return (
							<li key={item.q}>
								<button
									type="button"
									onClick={() => setOpen(isOpen ? null : i)}
									aria-expanded={isOpen}
									className="flex w-full items-center justify-between gap-4 py-4 text-left"
								>
									<span className="text-sm font-medium text-foreground sm:text-base">{item.q}</span>
									<ChevronDown
										className={cn(
											'size-4 shrink-0 text-muted-foreground transition-transform',
											isOpen && 'rotate-180 text-primary',
										)}
										aria-hidden="true"
									/>
								</button>
								<div
									className={cn(
										'grid transition-all duration-200',
										isOpen ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]',
									)}
								>
									<div className="overflow-hidden">
										<p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
											{item.a}
										</p>
									</div>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
