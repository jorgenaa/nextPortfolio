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
                <Link href="https://www.linkedin.com/in/jorgen-arnes-70991625">
                    <a className={`${s.footer__link} ${s['footer__link--hover']}`}>
                        <FaEnvelope/>
                        <span style={{paddingLeft: "8px"}}>LinkedIn</span>
                    </a>
                </Link>
                <Link href="https://github.com/">
                    <a className={`${s.footer__link} ${s['footer__link--hover']}`} >
                        <GrLinkedin />
                        <span style={{paddingLeft: "8px"}}>Github</span>
                    </a>
                </Link>   
            </div>
        </footer>
    )
}

export default Footer;