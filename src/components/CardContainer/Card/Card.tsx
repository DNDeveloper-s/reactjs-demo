import React from 'react';
import AppButton from '../../../shared/components/AppButton/AppButton';
import BgImage from '../../../assets/images/iconsBG.896ca275.webp';
import styles from './Card.module.css';

interface CardProps {
	image: string;
	label: string;
}
export default function Card({image, label}: CardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.cardImageContainer} style={{
				backgroundImage: `url(${BgImage})`
			}} >
				<img className={styles.cardImage} src={image} alt=""/>
			</div>
			<AppButton style={{fontSize: '14px'}} label={label} backgroundColor="linear-gradient(315deg,#000,#0f0f0f 74%)" />
		</div>
	)
}
