import React from 'react';
import styles from './AppButton.module.css';

interface AppButtonProps {
	label: string;
	borderRadius?: number;
	backgroundColor?: string;
	style?: any;
}

export default function AppButton({label, ...props}: AppButtonProps) {
	return (
		<div style={{
			borderRadius: (props.borderRadius || 10) + 'px',
			background: props.backgroundColor || '#5020bf'
		}} className={styles.button}>
			<span {...props} className={styles.label}>{label}</span>
		</div>
	)
}
