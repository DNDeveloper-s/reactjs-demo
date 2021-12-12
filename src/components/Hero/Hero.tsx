import React from 'react'
import HeroImage from '../../assets/images/hero-image.webp';
import Hero2Image from '../../assets/images/hero-2.webp';
import styles from './Hero.module.css';
import AppButton from '../../shared/components/AppButton/AppButton';

export default function Hero() {

	return (
		<div className={styles.hero}>
			<div>
				<img className={styles.heroImage} src={HeroImage} alt="Hero Image"/>
			</div>
			<div className={styles.heroContent} style={{
				backgroundImage: `url(${Hero2Image})`
			}}>
				<h2>Repairing</h2>
				<h2>Renovation</h2>
				<h2>Construction</h2>
				<h3>Just a Phone Call away</h3>
				<AppButton label="Get Started" />
			</div>
		</div>
	)
}
