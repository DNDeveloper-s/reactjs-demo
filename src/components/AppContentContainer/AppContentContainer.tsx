import React from 'react';

import SearchImage from '../../assets/images/searching.fa3b55c6.webp';
import CarImage from '../../assets/images/timepetrol.a505442b.webp';
import MobileImage from '../../assets/images/getInContact.7bdf5bf9.webp';
import AppContentSection from '../AppContentSection/AppContentSection';

const data = [
	{id: 1, title: 'DIRECTLY GET IN TOUCH', description: 'Without any middle man, contact the kind of service man you want with in seconds and get your job done', image: MobileImage, SVGImage: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>},
	{id: 2, title: 'SEARCH FOR SKILLED PEOPLE ENDS HERE', description: 'Gone are the days of searching skilled people for getting the job done, choose from a long list of trusted & skilled professionals', image: SearchImage, SVGImage: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>},
	{id: 3, title: 'SAVE TIME, SWEAT & COSTLY PETROL', description: 'Sitback, relax and contact the service man when you need and get your job done, all hassle free', image: CarImage, SVGImage: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>},
]

export default function AppContentContainer() {

	return (
		<div style={{margin: '130px 0'}}>
			{data.map((item, index) => (
				<AppContentSection
					key={item.id}
					image={item.image}
					reverse={index % 2 !== 0}
					title={item.title}
					description={item.description}
					SVGImage={item.SVGImage}/>
			))}
		</div>
	);
}
