import { GiHamburgerMenu } from 'react-icons/gi'; 
import { Link } from 'react-scroll';
//Components
import { Logo } from '../ui';
import {Nav, Navbar} from '../Nav';

//Styles
import s from './Header.module.scss'
import { Dispatch, SetStateAction } from 'react';

interface Props {
    setToggleNavbar: Dispatch<SetStateAction<boolean>>
    toggleNavbar: boolean
    btnRef: any
}

type HandleToggleNavbar = () => void 

const Header: React.FC <Props> = ({setToggleNavbar, toggleNavbar, btnRef}) => {
    const handleToggleNavbar = () => {
        setToggleNavbar(!toggleNavbar)
      }
    return (
        <header className={`${s.header} ${s.sticky}`}>
            <Logo />
            <Nav />
            <button className={s.header__hamburger} onClick={handleToggleNavbar} ref={btnRef}>
                <GiHamburgerMenu style={{color: "white", fontSize: "22px"}} />
            </button>
            {/* <label htmlFor={s['#hamburger-menu']} className={s['nav-label']}><GiHamburgerMenu className={s['nav-hamburger']} /></label>
            <input type="checkbox" id={s['#hamburger-menu']} className={s['nav-input']} /> */}
             <Navbar toggleNavbar={toggleNavbar} />
        </header>
    )
}

export default Header;