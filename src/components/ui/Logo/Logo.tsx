
import Image from 'next/image'
import {animateScroll as scroll} from 'react-scroll';
import LogoIcon from '../../../../public/assets/logo/logo-aqua-2.png';
import s from './Logo.module.scss'

const Logo:React.FC = () => {
    const logo:any = LogoIcon
    return (
        <div className={s.logo} onClick={()=> scroll.scrollToTop()}>
            <Image
                className={s.logo__item}
                src={logo}
                alt="logo"
            /> 
        </div>
        
    )
}

export default Logo;