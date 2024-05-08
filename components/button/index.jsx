// libraries
import Link from 'next/link'
import clsx from 'clsx'

// css
import styles from './button.module.scss'

export default function Button({
    children,
    href,
    type,
    isHollow,
    isCentered,
    isTransparent,
    className,
    ...rest
}) {

    // check if the element is a link or a button based on the presence of href
    const Element = href ? Link : 'button'

    const elementProps = {
        href: href || null,
        type: Element === 'button' ? type : undefined,
        className: clsx(
            styles.button,
            isHollow && styles.isHollow,
            isCentered && styles.isCentered,
            isTransparent && styles.isTransparent,
            className && className
        ),
        ...rest
    }

    return (
        <Element {...elementProps}>
            {children}
        </Element>
    )
}