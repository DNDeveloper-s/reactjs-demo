import React from 'react';
import styles from './CardContainer.module.css';

import CarpenterImage from '../../assets/images/sawTool.881decac.webp';
import ElectricalImage from '../../assets/images/bulb.64d54cb4.webp';
import MasonImage from '../../assets/images/trowel.2ca22e54.webp';
import MechanicImage from '../../assets/images/wheels.8b7c86d0.webp';
import PlumberImage from '../../assets/images/wrench.b2422781.webp';
import PainterImage from '../../assets/images/paintRoller.48f11134.webp';
import Card from './Card/Card';

const data = [
	{id: 1, label: 'Carpenter', image: CarpenterImage},
	{id: 2, label: 'Electrician', image: ElectricalImage},
	{id: 3, label: 'Mason', image: MasonImage},
	{id: 4, label: 'Mechanic', image: MechanicImage},
	{id: 5, label: 'Plumber', image: PlumberImage},
	{id: 6, label: 'Painter', image: PainterImage},
]

export default function CardContainer() {
	return (
		<div className={styles.container}>
			<h2>Find <span style={{color: '#fdb630'}}>trusted local working</span> professionals for any of your home project</h2>
			<div className={styles.gridContainer}>
				{
					data.map(item => (
						<Card
							key={item.id}
							label={item.label}
							image={item.image}
						/>
					))
				}
			</div>
		</div>
	)
}
