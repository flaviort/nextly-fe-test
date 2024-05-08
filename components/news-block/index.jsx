// libraries
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

// components
import AnimatedArrow from '@/components/utils/animated-arrow'

// hooks
import { limitCharacters } from '@/utils/functions'

// css
import styles from './news-block.module.scss'

export default function NewsBlock({ link, image, date, title, description }) {
    return (
        <Link href={link} className={styles.block}>

            <div className={styles.image}>
                <Image
                    src={image}
                    alt={title}
                    title={title}
                    fill
                    className='cover'
                    placeholder='blur'
                    sizes='
                        (max-width: 768px) 100vw,
                        50vw
                    '
                />
            </div>
            
            <p className={clsx(styles.date, 'uppercase font-small')}>
                {date}
            </p>

            <h3 className={clsx(styles.title, 'font-medium')}>
                <strong>
                    {title}
                </strong>
            </h3>

            <p className={styles.description}>
                {limitCharacters(description, 130)}
            </p>

        
            <AnimatedArrow className={styles.arrow} />

        </Link>
    )
}