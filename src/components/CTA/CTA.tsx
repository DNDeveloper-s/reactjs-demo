import React from 'react';
import { Link } from 'react-router-dom';
import AppButton from '../../shared/components/AppButton/AppButton';
import styles from './CTA.module.css';

export default function CTA() {
	return (
		<div className={styles.container}>
			<h2>Are You a Home improvement or Service Professional?</h2>
			<Link to="/create-user">
				<AppButton label="Join Our Network" />
			</Link>
		</div>
	)
}
