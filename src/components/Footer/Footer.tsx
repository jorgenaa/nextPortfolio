import Link from 'next/link'
import { FaEnvelope } from 'react-icons/fa'
import { GrLinkedin} from 'react-icons/gr'
import s from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__item}>
                <p>&copy; Copyright 2020</p>
            </div>
            <div className={s.footer__item}>
                <Link className={`${s.footer__link} ${s['footer__link--hover']}`} href="https://www.linkedin.com/in/jorgen-arnes-70991625">
                    <FaEnvelope/>
                    <span style={{paddingLeft: "8px"}}>LinkedIn</span>
                </Link>
                <Link className={`${s.footer__link} ${s['footer__link--hover']}`} href="https://github.com/">
                    <GrLinkedin />
                    <span style={{paddingLeft: "8px"}}>Github</span>
                </Link>   
            </div>
        </footer>
    )
}

export default Footer;