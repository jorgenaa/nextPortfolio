import { Link } from 'react-scroll';
import s from './Nav.module.scss'

const Navbar = ({toggleNavbar}: {toggleNavbar: boolean}) => {
  return (
    <>
        <div className={!toggleNavbar || !close ? `${s.navbar} ${s['navbar--close']}` : `${s.navbar} ${s['navbar--open']}`}>
            <Link
                className={`${s.navbar__link} ${s['navbar__link--color']} ${s['navbar__link--hover']}`}
                to="about" activeClass={s['nav__link--active']} spy={true} smooth={true} duration={1000}
            >
                About
            </Link>
            <div className={s.nav__divider}></div>
            <Link
                className={`${s.navbar__link} ${s['navbar__link--color']} ${s['navbar__link--hover']}`}
                to="skills" activeClass={s['nav__link--active']} spy={true} smooth={true} duration={1000}
            >
                Skills
            </Link>
            <div className={s.nav__divider}></div>
            <Link
                className={`${s.navbar__link} ${s['navbar__link--color']} ${s['navbar__link--hover']}`}
                to="portfolio" activeClass={s['nav__link--active']} spy={true} smooth={true} duration={1000}
            >
                Portfolio
            </Link>
            <div className={s.nav__divider}></div>
            <Link 
                className={`${s.navbar__link} ${s['navbar__link--color']} ${s['navbar__link--hover']}`}
                to="contact" activeClass={s['nav__link--active']} spy={true} smooth={true} duration={1000}
            >
                Contact
            </Link>
        </div>
    </>
  )
}

export default Navbar