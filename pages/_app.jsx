// libraries
import { useEffect } from 'react'

// components
import CustomScrollbar from '@/components/utils/custom-scrollbar'
import SmoothScrolling from '@/components/utils/smooth-scrolling'
import Menu from '@/components/menu'

// css
import '@/assets/css/bootstrap-grid.css'
import '@/assets/css/normalize.min.css'
import '@/assets/scss/main.scss'

// fonts
import { Albert_Sans } from 'next/font/google'
 
export const albert_sans = Albert_Sans({
	weight: ['500', '700'],
	style: ['normal'],
	subsets: ['latin-ext'],
	variable: '--font-albert-sans'
})

export default function App({ Component, pageProps, router }) {

	useEffect(() => {
		const message = 'Mesterlig laget av Nextly 🔗 www.nextly.team'
		const style = 'color: #f8f8f8; font-size: 12px; font-weight: bold; background-color: #0d0e13; padding: 8px'
		console.log(`%c${message}`, style)
	}, [])

	return (
		<div className={albert_sans.className}>

			<a href='#main' className='skip-content'>
				Gå til hovedinnhold
			</a>

			<Menu />

			<SmoothScrolling>

				<CustomScrollbar />

				<main id='main' data-scroll-container>

					<Component key={router.route} {...pageProps} />

				</main>

			</SmoothScrolling>

		</div>
	)
}