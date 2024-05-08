// libraries
import clsx from 'clsx'

// components
import { Input } from '@/components/form'
import Button from '@/components/button'

// svg
import UxMagnifier from '@/assets/svg/ux/magnifier.svg'

// css
import styles from './search-box.module.scss'

export default function SearchBox({ className }) {
    return (
        <section className={clsx(styles.searchBox, className)}>
            <div className='container'>
                <div className={styles.box}>

                    <h2 className='font-big'>
                        <strong>
                            Finn din skogbruksleder
                        </strong>
                    </h2>

                    <p className={styles.description}>
                        Søk etter postnummer, region eller fylke
                    </p>

                    <form action='#'>

                        <Input
                            type='text'
                            id='search-box'
                            placeholder='Skriv søkeord'
                            required
                        />

                        <Button type='button' className={styles.button}>
                            <span>Søk</span>
                            <UxMagnifier />
                        </Button>
                    </form>

                </div>
            </div>
        </section>
    )
}