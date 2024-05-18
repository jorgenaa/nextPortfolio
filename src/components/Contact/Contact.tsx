import Link from 'next/link'
import parse from 'html-react-parser';
import { GrLinkedin} from 'react-icons/gr'
import s from './Contact.module.scss'
import { contactInfo } from './contactInfo';

const Contact = () => {
	return (
		<section id="contact" className={s.contact}>
			<h2 className={s.contact__heading}>Contact Me</h2>
			<div className={s.contact__body}>
				<h3 className={`${s['contact__sub-heading']}`}>This is how you can reach me...</h3>
				<ul className={s.contact__list}>
					{contactInfo.map((info) => {
						return (
							<li key={info.title} className={`${s['contact__list-item']} ${s['contact__list-item--hover']}`}>
								<Link className={`${s.contact__link} ${s['contact__link--hover']}`} href={info.link} target="_blank">
									{info.value === 'Linkedin' 
									? <span className={s['contact__list-text']}><GrLinkedin /></span> 
									: <span className={s['contact__list-text']}>{info.value}</span>
									}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	);
};

export default Contact;
