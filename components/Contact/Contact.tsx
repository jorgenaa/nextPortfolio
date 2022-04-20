import Link from 'next/link'
import { GrLinkedin} from 'react-icons/gr'
import s from './Contact.module.scss'

const Contact: React.FC = () => {
	return (
		<section id="contact" className={s.contact}>
			<h2 className={s.contact__heading}>Contact Me</h2>
			<div className={s.contact__body}>
				<h3 className={`${s['contact__sub-heading']}`}>This is how you can reach me...</h3>
				<ul className={s.contact__list}>
					<li className={`${s['contact__list-item']} ${s['contact__list-item--hover']}`}>
						<Link href="mailto: jorgen.arnes@gmail.com">
							<a className={`${s.contact__link} ${s['contact__link--hover']}`}>
								<span className={s['contact__list-text']}>Email&#58;</span>
								jorgen.arnes@gmail.com
							</a>
						</Link>
					</li>
					<li className={`${s['contact__list-item']} ${s['contact__list-item--hover']}`}>
						<Link href="tel: +4799746968">
							<a className={`${s.contact__link} ${s['contact__link--hover']}`}>
								<span className={`${s['contact__list-text']}`}>Phone&#58;</span>
								(+47)997 46 968
							</a>
						</Link>
					</li>
					<li className={`${s['contact__list-item']} ${s['contact__list-item--hover']}`}>
						<Link href="https://www.linkedin.com/in/jorgen-arnes-70991625">
							<a className={`${s.contact__link} ${s['contact__link--hover']}`}>
								<span className={`${s['contact__list-text']}`}>Linkedin&#58;</span>
								<GrLinkedin />
							</a>
						</Link>
					</li>
					<li className={`${s['contact__list-item']} ${s['contact__list-item--hover']}`}>
						<a className={`${s.contact__link} ${s['contact__link--hover']}`}>
							<span className={s['contact__list-text']}>Address&#58;</span>
							Haakon Tveters vei 51, 0686 Oslo
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Contact;
