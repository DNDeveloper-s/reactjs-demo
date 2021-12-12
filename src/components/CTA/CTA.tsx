import React from 'react';
import AppButton from '../../shared/components/AppButton/AppButton';
import styles from './CTA.module.css';

export default function CTA() {
	return (
		<div className={styles.container}>
			<h2>Are You a Home improvement or Service Professional?</h2>
			<AppButton label="Join Our Network" />
		</div>
	)
}
