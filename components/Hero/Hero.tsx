import {Link} from 'react-scroll';
import { FaMousePointer } from 'react-icons/fa'
import s from './Hero.module.scss'

const Hero: React.FC = () => {
   
    return <section className={s.hero}>
            
                <div className={s['hero__left-triangle']} id={s['#left-triangle']}>
                    <h1 className={`${s['hero__heading-1-1']} ${s['hero__heading-1-1--animate']}`}>Front-End Developer</h1>
                </div>
                <div className={s['hero__right-triangle']} id={s['#right-triangle']}>
                    <h1 className={`${s['hero__heading-1-2']} ${s['hero__heading-1-2--animate']}`}>&#38; Designer</h1>
                    <Link 
                        to="portfolio" smooth={true} duration={1000}
                        className={`
                            ${s['hero__btn']} 
                            ${s['hero__btn--blue']} 
                            ${s['hero__btn--hover']} 
                            ${s['hero__btn--animate']}`}
                    >
                        Go to Portfolio <FaMousePointer />
                    </Link>
                </div>
            </section>
}

export default Hero;