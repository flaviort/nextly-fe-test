// libraries
import clsx from 'clsx'
import Link from 'next/link'

// components
import AnimatedArrow from '@/components/utils/animated-arrow'

// svg
import UxPin from '@/assets/svg/ux/pin.svg'
import UxCalendar from '@/assets/svg/ux/calendar.svg'
import UxClock from '@/assets/svg/ux/clock.svg'

// css
import styles from './event-block.module.scss'

export default function EventBlock({ className, link, date, title, description, location, completeDate, time }) {
    return (
        <Link href={link} className={clsx(styles.block, className)}>
            
            <div className={styles.left}>

                {date && (
                    <p className={styles.date}>
                        {date}
                    </p>
                )}

                {title && (
                    <h3 className={clsx(styles.title, 'font-medium')}>
                        <strong>
                            {title}
                        </strong>
                    </h3>
                )}

            </div>

            <div className={styles.right}>

                {description && (
                    <p className={styles.description}>
                        {description}
                    </p>
                )}

                {location || completeDate || time ? (
                    <ul className={styles.items}>

                        {location && (
                            <li>
                                <UxPin />
                                <p>
                                    {location}
                                </p>
                            </li>
                        )}

                        {completeDate && (
                            <li>
                                <UxCalendar />
                                <p>
                                    {completeDate}
                                </p>
                            </li>
                        )}

                        {time && (
                            <li>
                                <UxClock />
                                <p>
                                    {time}
                                </p>
                            </li>
                        )}

                    </ul>
                ) : (
                    null
                )}

            </div>

            <div className={styles.last}>
                <AnimatedArrow className={styles.arrow} />
            </div>

        </Link>
    )
}