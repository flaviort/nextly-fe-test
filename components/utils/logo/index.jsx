// libraries
import clsx from 'clsx'

// css
import styles from './logo.module.scss'

// svg
import LogoCompany from '@/assets/svg/logos/logo.svg'

export default function Logo({ className }) {
    return (
        <div className={clsx(styles.logo, className)}>
            
            <div className={styles.original}>
                <LogoCompany />
            </div>

            <div className={styles.hover}>
                <LogoCompany />
            </div>

        </div>
    )
}