import Image from 'next/image'
import Link from 'next/link';
import {FaGithub, FaEye} from 'react-icons/fa';
import s from './Card.module.scss'

interface Props {
    name: string,
    img: any, 
    github: string, 
    website: string
}

const Card: React.FC<Props> = ({name, img, github, website}: Props) => {
//animated
    return (
        <div className={`${s.card} animated`} data-aos="fade-right">
            <div className={s['card__body']}>
                <div className={s['card__imgContainer']}>
                    <h3 className={s['card__title']}>{name}</h3>
                    <Image className={s['card__img']} src={img} alt="" />
                </div>
                {!github ? (
                    <Link href={github} className={`${s.card__btn} ${s['card__btn--blue']} ${s['card__btn--disabled']}`}>
                        <FaGithub className={s.card__icon} />
                        No Github available 
                    </Link>
                ) : (
                    <Link href={github} className={`${s.card__btn} ${s['card__btn--blue']} ${s['card__btn--hover']}`}>
                        <FaGithub className={s.card__icon} />
                        Github
                    </Link>
                )}
               
                {!website ? (
                    <Link href={website} className={`${s.card__btn} ${s['card__btn--pink']} ${s['card__btn--disabled']}`}>
                        <FaEye className={s.card__icon}/>
                        No website available 
                    </Link>
                   ):( 
                    <Link href={website} className={`${s.card__btn} ${s['card__btn--pink']} ${s['card__btn--hover']}`}>
                        <FaEye className={s.card__icon} />
                        Project
                    </Link>
                )}
            </div>
        </div>
        
    )
}

export default Card
