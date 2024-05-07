// libraries
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

// components
import { MagneticButton } from '@/components/utils/animations'

// hooks
import { limitCharacters } from '@/utils/functions'

// svg
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './news-block.module.scss'

export default function NewsBlock({ link, image, date, title, description }) {
    return (
        <MagneticButton fullWidth>
            <Link href={link} className={styles.block}>

                <div className={styles.image}>
                    <Image
                        src={image}
                        alt={title}
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

            
                <div className={styles.icon}>
                    <UxArrowRight />
                    <UxArrowRight />
                </div>

            </Link>
        </MagneticButton>
    )
}