import React from 'react';
import styles from './AppContentSection.module.css';

interface AppContentSectionProps {
	image: string;
	reverse: boolean;
	SVGImage?: any;
	title: string;
	description: string;
}
export default function AppContentSection({image, reverse, title, description, SVGImage}: AppContentSectionProps) {
	return (
		<div style={{
			flexDirection: reverse ? 'row-reverse' : 'row'
		}} className={styles.container}>
			<div className={styles.image}>
				<img src={image} alt=""/>
			</div>
			<div>
				{SVGImage}
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}
