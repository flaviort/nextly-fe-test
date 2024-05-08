// libraries
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { useLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// components
import Button from '@/components/button'
import Logo from '@/components/utils/logo'

// routes / utils
import routes from '@/utils/routes'

// svgs
import UxPerson from '@/assets/svg/ux/person.svg'
import UxMagnifier from '@/assets/svg/ux/magnifier.svg'

// css
import styles from './menu.module.scss'
import { MagneticButton } from '../utils/animations'

export default function Menu() {

    // animation ref
    const menuAnimationRef = useRef(null)
    const lenis = useLenis()

    // menu items
	const menuItems = [
		{
			name: 'Home',
			url: routes.home
		},
		{
			name: 'Work',
			url: routes.work
		},
		{
			name: 'About',
			url: routes.about
		},
		{
			name: 'Contact',
			url: routes.contact
		}
	]

    // open / close fs menu
    const [isShown, setIsShown] = useState(false)

	const openCloseFsMenu = () => {
		setIsShown(!isShown)

        if(!isShown) {
            lenis.stop()
        } else {
            lenis.start()
        }
	}

    const router = useRouter()

    const closeFsMenu = (e) => {
        const { pathname } = router
        const hrefParts = e.currentTarget.href.split('/')
        const currentPageName = hrefParts[hrefParts.length - 1]
        const pathnameWithoutSlash = pathname.substring(1)

        if (currentPageName  === pathnameWithoutSlash) {
            if (isShown === true) {
                setIsShown(!isShown)

                if (!isShown) {
                    lenis.stop()
                } else {
                    lenis.start()
                }
            }
        } else {
            setTimeout(() => {
                setIsShown(false)
                if (menuAnimationRef.current) {
                    menuAnimationRef.current.seek(0).pause()
                }
            }, 1000)
        }
	}

    useEffect(() => {
		setIsShown(isShown)

        if (menuAnimationRef.current) {
            if (isShown) {
                menuAnimationRef.current.play()
                document.body.style.overflow = 'hidden'
            } else {
                menuAnimationRef.current.reverse()
                document.body.style.overflow = 'auto'
            }
        }
	}, [isShown])

    // menu animation
    useGSAP(() => {
        const menuAnimation = gsap.timeline({
            paused: true
        })

        menuAnimation.to('#fs-menu', {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'power2.inOut',
            duration: 1
        })
    
        menuAnimation.fromTo('.menuLi', {
            y: 50,
            autoAlpha: 0
        }, {
            y: 0,
            autoAlpha: 1,
            stagger: .05
        }, '-=.7')
        
        // store the animation timeline in the ref
        menuAnimationRef.current = menuAnimation
    })

    return (
        <>
            <div id='top-menu' className={styles.topMenu}>
				<div className='container'>
                    <div className={styles.flex}>

                        <Link href={routes.home} className={styles.logo} onClick={closeFsMenu}>
                            <Logo />
                        </Link>

                        <div className={styles.right}>

                            <div className={styles.search}>
                                <MagneticButton>
                                    <Button href='#' isTransparent>
                                        <span>Søk</span>
                                        <UxMagnifier />
                                    </Button>
                                </MagneticButton>
                            </div>

                            <div className={styles.login}>
                                <MagneticButton>
                                    <Button href='#' isHollow>
                                        <span>Logg inn</span>
                                        <UxPerson />
                                    </Button>
                                </MagneticButton>
                            </div>

                            <MagneticButton>
                                <Button
                                    className={clsx(
                                        styles.openFs,
                                        isShown && styles.active
                                    )}
                                    onClick={openCloseFsMenu}
                                    type='button'
                                >

                                    <span className={styles.text}>
                                        <span>Meny</span>
                                        <span>Lukk</span>
                                    </span>

                                    <div className={styles.icon}>
                                        
                                        <span className={styles.line}></span>
                                        <span className={styles.line}></span>
                                        <span className={styles.line}></span>

                                        <span className={styles.open}>
                                            <span></span>
                                            <span></span>
                                        </span>

                                    </div>

                                </Button>
                            </MagneticButton>

                        </div>

                    </div>
				</div>
			</div>

            <section id='fs-menu' className={styles.fsMenu}>
                <div className={clsx(styles.container, 'container')} data-lenis-prevent>
                    <div className={styles.middle}>
                        <div className='row'>

                            <div className='col-sm-6 col-lg-4'>
                                <ul>

                                    <li className={clsx(styles.featured, 'menuLi')}>
                                        <h2>
                                            <Link href='#' className='hover-underline-white'>
                                                <strong>
                                                    Skogtjenester
                                                </strong>
                                            </Link>
                                        </h2>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Skogbruksplanlegging
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Skogsdrift, hogst og tømmersalg
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Hjelp til tømmeroppgjør
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Skogkultur, planting og pleie
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Frivillig vern av skog
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Reguleringsplan for areal
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            <div className='col-sm-6 col-lg-4'>
                                <ul>

                                    <li className={clsx(styles.featured, 'menuLi')}>
                                        <h2>
                                            <Link href='#' className='hover-underline-white'>
                                                <strong>
                                                    Bli andelseier
                                                </strong>
                                            </Link>
                                        </h2>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Skogeierlag
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Skogforsikring
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Tømmertransport
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Kartlegging av eiendom
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            <div className='col-lg-4'>
                                <ul>

                                    <li className={clsx(styles.featured, 'menuLi')}>
                                        <h2>
                                            <Link href='#' className='hover-underline-white'>
                                                <strong>
                                                    Bærekraft og miljø
                                                </strong>
                                            </Link>
                                        </h2>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Sertifisering av tømmer
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Miljøkrav
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Biologisk mangfold
                                        </Link>
                                    </li>

                                    <li className='menuLi'>
                                        <Link href='#' className='hover-underline'>
                                            Skog og klima
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            <div className='col-sm-6 col-lg-4'>
                                <ul>

                                    <li className={clsx(styles.featured, 'menuLi')}>
                                        <h2>
                                            <Link href='#' className='hover-underline-white'>
                                                <strong>
                                                    Finn din skogbruksleder
                                                </strong>
                                            </Link>
                                        </h2>
                                    </li>

                                    <li className={clsx(styles.featured, 'menuLi')}>
                                        <h2>
                                            <Link href='#' className='hover-underline-white'>
                                                <strong>
                                                    Om Allskog
                                                </strong>
                                            </Link>
                                        </h2>
                                    </li>

                                </ul>
                            </div>

                            <div className='col-sm-6 col-lg-4'>
                                <ul>

                                    <li className={clsx(styles.featured, 'menuLi')}>
                                        <h2>
                                            <Link href='#' className='hover-underline-white'>
                                                <strong>
                                                    Arrangementer
                                                </strong>
                                            </Link>
                                        </h2>
                                    </li>

                                    <li className={clsx(styles.featured, 'menuLi')}>
                                        <h2>
                                            <Link href='#' className='hover-underline-white'>
                                                <strong>
                                                    Aktuelt
                                                </strong>
                                            </Link>
                                        </h2>
                                    </li>

                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}