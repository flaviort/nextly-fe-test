// libraries
import clsx from 'clsx'

// css
import styles from './form.module.scss'

export const Input = ({ id, label, type, placeholder, className, required }) => {
    return (
        <div className={clsx(styles.formLine, className)}>

            {label && (
                <label className={clsx(styles.label, 'font-small')} htmlFor={id}>
                    {label}
                </label>
            )}

            <div className={styles.lineWrapper}>
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    required={required}
                    className={styles.input}
                />
            </div>

        </div>
    )
}