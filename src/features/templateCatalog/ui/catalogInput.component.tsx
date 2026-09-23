import { TextInput } from '@mantine/core'
import styles from './catalogInput.component.module.css'

export function CatalogInput({ value, onChange }: { value: string, onChange: (value: string) => void }) {
	return (
		<TextInput
			classNames={{ input: styles.input, label: styles.label }}
			label="Filter examples"
			placeholder="Search SSR, DI, checks..."
			value={value}
			onChange={event => onChange(event.target.value)}
		/>
	)
}
