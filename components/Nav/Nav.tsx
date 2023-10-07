/* eslint-disable @next/next/link-passhref */
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa'
import s from './Nav.module.scss'

const Nav: React.FC = () => {

    return (
          <>
            <nav className={s.nav}>
                <ScrollLink 
                    className={`${s['nav__link']} ${s['nav__link--color']} ${s['nav__link--hover']}`} 
                    activeClass={s['nav__link--active']}
                    spy={true} 
                    to="about" 
                    smooth={true} 
                    duration={1000}
                >
                    About 
                </ScrollLink>
                <div className={s.nav__divider}></div>
                <ScrollLink 
                    className={`${s['nav__link']} ${s['nav__link--color']} ${s['nav__link--hover']}`} 
                    activeClass={s['nav__link--active']} 
                    spy={true} 
                    to="skills" 
                    smooth={true} 
                    duration={1000}
                >
                    Skills
                </ScrollLink>
                <div className={s.nav__divider}></div>
                <ScrollLink 
                    className={`${s['nav__link']} ${s['nav__link--color']} ${s['nav__link--hover']}`} 
                    activeClass={s['nav__link--active']} 
                    spy={true} 
                    to="portfolio" 
                    smooth={true} 
                    duration={1000}
                >
                    Portfolio
                </ScrollLink>
                <div className={s.nav__divider}></div>
                <ScrollLink 
                    className={`${s['nav__link']} ${s['nav__link--color']} ${s['nav__link--hover']}`} 
                    activeClass={s['nav__link--active']} 
                    spy={true} 
                    to="contact" 
                    smooth={true} 
                    duration={1000}
                >
                    Contact
                </ScrollLink>
            </nav>
           
            <div className={s['nav__contact-info']}>
                <Link className={s['nav__contact-info__link']} href="mailto: jorgen.arnes@gmail.com">
                    <span className={s['nav__contact-info__icon']}><FaEnvelope style={{fontSize: "22px"}} /></span>
                    <span className={s['nav__contact-info__email']}>jorgen.arnes@gmail.com</span>
                </Link>
            </div>
          
        </>
    )
}

export default Nav;
