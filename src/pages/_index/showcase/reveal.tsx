'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from './utils'

interface RevealProps {
	children: React.ReactNode
	className?: string
	delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
	const ref = useRef<HTMLDivElement>(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) {
			return
		}

		if (
			typeof window !== 'undefined'
			&& window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setVisible(true)
						observer.disconnect()
						break
					}
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
		)

		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	return (
		<div
			ref={ref}
			className={cn('reveal', visible && 'reveal-in', className)}
			style={delay ? { transitionDelay: `${delay}ms` } : undefined}
		>
			{children}
		</div>
	)
}
