import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa'
import s from './Nav.module.scss'
import { navLinks, NavLink } from './navLinks';

const Nav = () => {
    return (
          <>
            <nav className={s.nav}>
                {navLinks.map((link: NavLink) => {
                    return (
                        <ScrollLink 
                            key={link.path}
                            className={`${s['nav__link']} ${s['nav__link--color']} ${s['nav__link--hover']}`} 
                            activeClass={s['nav__link--active']}
                            spy={true} 
                            to={link.path} 
                            smooth={true} 
                            duration={1000}
                        >
                            {link.title} 
                        </ScrollLink>
                    )
                })}
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
