import { StaticImageData } from 'next/image';
import { assets } from '../../assets/assets';

//Component
import { Card } from '../ui';
//Styles
import s from './Portfolio.module.scss'

interface Assets {
		title: string;
		icon: string | any;
		img: StaticImageData;
		github: string;
		website: string;
} 

const Portfolio: React.FC = () => {
	return (
		<section id="portfolio" className={s.portfolio}>
			<h2 className={s.portfolio__heading}>Portfolio</h2>
			<div className={s.portfolio__cards}>
				{assets.map((item: Assets, index: number) => {
					const { title, img, github, website } = item;
					return <Card key={index} name={title} img={img} github={github} website={website} />;
				})}
			</div>
		</section>
	);
};

export default Portfolio;
