// libraries
import clsx from 'clsx'

// svg
import UxArrowRight from '@/assets/svg/ux/arrow-right.svg'

// css
import styles from './animated-arrow.module.scss'

export default function AnimatedArrows({ className }) {
    return (
        <div className={clsx(styles.icon, className)}>
            <UxArrowRight />
            <UxArrowRight />
        </div>
    )
}