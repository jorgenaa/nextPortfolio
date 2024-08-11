import Image from 'next/image';
import { Metadata } from 'next';
import ProfileImg from '../../../public/assets/img/IMG_4924.jpg';
import s from './About.module.scss'

export const metadata: Metadata = {
	title: "About page",
	description: "About me section created by Jørgen Årnes"
}

const About = () => {
	return (
		<section id="about" className={s.about}>
			<h2 className={s.about__heading}>About Me</h2>
			<div className={s.about__body}>
				<div className={s.about__item}>
					<Image className={s.about__img} src={ProfileImg} alt="Profile" />
				</div>
				<div className={s.about__item}>
					<h3 className={s['about__item-heading']}>Hello I&#39;m Jørgen</h3>
					<p className={s.about__text}>
						I&#39;m a Front-End passionated developer from Norway with an eye for detail and have passion for technology.
					</p>
					<p className={s.about__text}>
						I completed my professional degree in Front-end development at Noroff in 2021, and have since then worked on a fullstack project for my own business as an ecommerce website owner. 
					</p>
					<p className={s.about__text}>
						I like to stay up to date and always learn something new while maintaining the focus on user experience and user interface. 
						I design interactive products today using primarily Liquid, Remix, React.js, Next.js, Typescript, Redux, Git, Sass, Tailwind,
						BEM and Adobe Illustrator / Photoshop / XD / Figma and I am also open to learn other technologies as needed.
						If you would like us to work together, feel free to contact me.
					</p>
					<p className={s.about__text}>
						So far I have acquired powerfull skills for building appealing and
						responsive websites that meets the today&#39;s criteria.
						To see some examples of what I have worked with lately, check out
						some of my projects in the portfolio section.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
