import Image from 'next/image'
import ProfileImg from '../../assets/img/IMG_4924.jpg';
import s from './About.module.scss'

const About: React.FC = () => {
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
						I&#39;m a Front-End developer from Norway with high focus on user
						experience, user interface and technology.
					</p>
					<p className={s.about__text}>
						I completed my education at Noroff last year, and I am now open for
						real projects where I get the opportunity to contribute my
						skills.
					</p>
					<p className={s.about__text}>
						Today my stack primarily consists of Next.js, Typescript, 
						Redux, Mongodb, Git, Tailwind, Sass, BEM and Adobe Illuastrstor / Photoshop / 
						XD but am also open to learning other technologies as needed. 
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
