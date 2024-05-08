// libraries
import { useEffect, useRef } from 'react'
import gsap, { Elastic, Power4 } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/dist/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// hooks
import { vw } from '@/utils/functions'

// css
import styles from './animations.module.scss'

// fadeIn effect
export function FadeIn({ children }) {

    const image = useRef()

    useGSAP(() => {
        gsap.from(image.current, {
            autoAlpha: 0,
            scrollTrigger: {
                trigger: image.current,
                start: 'top 80%',
                end: 'top 40%',
                scrub: 3
            }
        })

    })

    return (
        <div
            ref={image}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}
        >
            {children}
        </div>
    )
}

// scrolling image effect (used for images inside boxes)
export function ScrollingImage({ children }) {

    const item = useRef()

    let calcSize
    let size

    if (typeof window !== 'undefined' && window.innerWidth > 768) {
        calcSize = 'calc(100% + 7rem)'
        size = '-7rem'
    } else {
        calcSize = 'calc(100% + 3rem)'
        size = '-3rem'
    }

    useGSAP(() => {
        const children = item.current.children

        Array.from(children).forEach(child => {
            child.classList.add('cover')
        })

        gsap.set(children, {
            height: calcSize,
            display: 'block'
        })

        gsap.from(children, {
            y: size,
            scrollTrigger: {
                trigger: item.current,
                scrub: 3,
                end: 'bottom top'
            }
        })
	})

    return (
        <div
            ref={item}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {children}
        </div>
    )
}

// fill title effect
export function FillTitle({ text }) {
    
    const item = useRef(null)

	useGSAP(() => {
		const split = new SplitText(item.current, {
			type: 'lines'
		})

		gsap.to(split.lines, {
			backgroundPositionX: 0,
			ease: 'none',
			scrollTrigger: {
				trigger: split.lines,
				scrub: 3,
				start: 'top 70%',
				end: 'bottom 50%'
			}
		})
	})

    return (
        <span ref={item} className={styles.fillTitle}>
            {text}
        </span>
    )
}

// animated slider
export function AnimatedSlider({ children }) {

    const item = useRef(null)

    useGSAP(() => {

        const slides = item.current.querySelectorAll('.swiper-slide')

        gsap.from(slides, {
            x: vw(75),
            autoAlpha: 0,
            duration: 1,
            stagger: .125,
            scrollTrigger: {
                trigger: item.current,
                start: '0 100%'
            }
        })
    })

    return (
        <div ref={item}>
            {children}
        </div>
    )

}

// animated line effect
export function AnimatedLine({ opacity = 1 }) {
    
    const item = useRef(null)

	useGSAP(() => {
		gsap.to(item.current, {
			scaleX: 1,
			duration: 1,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: item.current,
				scrub: 2,
				start: 'top 95%',
				end: 'bottom 70%'
			}
		})
	})

    return (
        <div
			ref={item}
			className={styles.animatedLine}
			style={{opacity: opacity}}
		></div>
    )
}

// counter animation (numbers only)
export function Counter({ number }) {

    const item = useRef()

    useGSAP(() => {
        gsap.from(item.current, {
            textContent: '0',
            duration: 3,
            ease: 'power2.inOut',
            modifiers: {
                textContent: value => formatNumber(value, 0)
            },
            scrollTrigger: {
                trigger: item.current,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        })

        // format the number in NO standard
        function formatNumber(value) {
            return Math.floor(+value).toLocaleString('nb-NO')
        }
	})

    return (
        <span ref={item}>
            {number}
        </span>
    )
}

// magnetic button
export const MagneticButton = ({ children, fullWidth, strength = 30 }) => {
    
    const buttonRef = useRef(null)

    useEffect(() => {
        const magnetButton = buttonRef.current

        if (magnetButton && window.innerWidth > 540) {
            magnetButton.addEventListener('mousemove', moveMagnet)
            magnetButton.addEventListener('mouseleave', handleMouseLeave)
        }

        function moveMagnet(event) {
            const bounding = magnetButton.getBoundingClientRect()

            gsap.to(magnetButton, {
                x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
                y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
                rotate: '0.001deg',
                ease: Power4.easeOut,
                duration: 1.5
            })
        }

        function handleMouseLeave(event) {
            gsap.to(event.currentTarget, {
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
                duration: 1.5
            })
        }

        // clean up event listeners when the component unmounts
        return () => {
            if (magnetButton) {
                magnetButton.removeEventListener('mousemove', moveMagnet)
                magnetButton.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [strength])

    return (
        <div
            ref={buttonRef}
            style={{
                width: fullWidth ? '100%' : 'fit-content'
            }}
        >
            {children}
        </div>
    )
}