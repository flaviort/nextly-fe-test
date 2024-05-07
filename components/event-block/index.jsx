// libraries
import clsx from 'clsx'
import Link from 'next/link'

// components
import { MagneticButton } from '@/components/utils/animations'

// svg
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'
import UxPin from '@/assets/svg/ux/pin.svg'
import UxCalendar from '@/assets/svg/ux/calendar.svg'
import UxClock from '@/assets/svg/ux/clock.svg'

// css
import styles from './event-block.module.scss'

export default function EventBlock({ link, date, title, description, location, completeDate, time }) {
    return (
        <MagneticButton fullWidth>
            <Link href={link} className={styles.block}>
                
                <div className={styles.left}>

                    <p className={styles.date}>
                        {date}
                    </p>

                    <p className={clsx(styles.title, 'font-medium')}>
                        <strong>
                            {title}
                        </strong>
                    </p>

                </div>

                <div className={styles.right}>

                    <p className={styles.description}>
                        {description}
                    </p>

                    <ul className={styles.items}>

                        <li>
                            <UxPin />
                            <p>
                                {location}
                            </p>
                        </li>

                        <li>
                            <UxCalendar />
                            <p>
                                {completeDate}
                            </p>
                        </li>

                        <li>
                            <UxClock />
                            <p>
                                {time}
                            </p>
                        </li>

                    </ul>

                </div>

                <div className={styles.last}>
                    <div className={styles.icon}>
                        <UxArrowRight />
                        <UxArrowRight />
                    </div>
                </div>

            </Link>
        </MagneticButton>
    )
}