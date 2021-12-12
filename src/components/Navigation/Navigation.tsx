import React from 'react';
import styles from './Navigation.module.css';
import LogoImage from '../../shared/components/LogoImage';
import AppButton from '../../shared/components/AppButton/AppButton';

export default function Navigation() {

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className="flex justify-center">
					<div className="flex align-center">
						<LogoImage width={50} />
					</div>
					<h2 className={styles.logoTitle}>Baharagora Services</h2>
				</div>
				<AppButton borderRadius={100} label="About" />
			</nav>
		</header>
	)
}
