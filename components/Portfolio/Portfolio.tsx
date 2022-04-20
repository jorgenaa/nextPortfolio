import { assets } from '../../assets/assets';

//Component
import { Card } from '../ui';
//Styles
import s from './Portfolio.module.scss'

const Portfolio: React.FC = () => {
	return (
		<section id="portfolio" className={s.portfolio}>
			<h2 className={s.portfolio__heading}>Portfolio</h2>
			<div className={s.portfolio__cards}>
				{assets.map((item: any, index: any) => {
					const { title, img, github, website } = item;
					return <Card key={index} name={title} img={img} github={github} website={website} />;
				})}
			</div>
		</section>
	);
};

export default Portfolio;
