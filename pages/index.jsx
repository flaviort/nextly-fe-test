// libraries
import clsx from 'clsx'
import { useRef } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Mousewheel, FreeMode } from 'swiper/modules'
import 'swiper/css'

// components
import Layout from '@/layout'
import EventBlock from '@/components/event-block'
import NewsBlock from '@/components/news-block'
import Button from '@/components/button'
import { Counter, AnimatedLine, FillTitle, MagneticButton } from '@/components/utils/animations'

// routes / utils / hooks
import routes from '@/utils/routes'
import { events } from '@/utils/events'
import { news } from '@/utils/news'
import { vh } from '@/utils/functions'

// svgs


// css
import styles from './home.module.scss'

export default function Home() {

	

    return (
		<Layout
			bodyClass='home'
			pageTitle='Allskog'
			pageDescription='Vi er en robust organisasjon med høy kompetanse innen alle skogtjenester du trenger som skogeier.'
		>

			<section className={clsx(styles.news, 'padding-bottom')}>
				<div className='container'>

					<h2 className={clsx(styles.title, 'font-big bold')}>
						<FillTitle text='Nyheter' />
					</h2>

					<Swiper
						modules={[Autoplay, Mousewheel, FreeMode]}
						className={styles.slider}
						spaceBetween={15}
						slidesPerView={1.075}
						loop={false}
						autoplay={{
							delay: 6000,
							disableOnInteraction: false
						}}
						freeMode={true}
						mousewheel={{  
							forceToAxis: true
						}}
						speed={800}
						breakpoints={{
							767: {
								slidesPerView: 2,
								spaceBetween: 20
							},
							992: {
								slidesPerView: 3,
								spaceBetween: 30
							}
						}}
					>

						{news.map((item, i) => (
							<SwiperSlide key={i}>
								<NewsBlock
									image={item.image}
									date={item.date}
									title={item.title}
									description={item.description}
									link={item.link}
								/>
							</SwiperSlide>
						))}
					</Swiper>

					<MagneticButton>
						<Button
							isHollow
							href='#'
							className={styles.button}
						>
							Se alle nyheter
						</Button>
					</MagneticButton>

				</div>
			</section>

			<section className={clsx(styles.events, 'padding-bottom')}>
				<div className='container'>
					
					<h2 className={clsx(styles.title, 'font-big bold')}>
						<FillTitle text='Kommende arrangementer' />
					</h2>

					<div className={styles.blocks}>
						{events.map((item, i) => (
							<EventBlock
								key={i}
								date={item.date}
								title={item.title}
								description={item.description}
								location={item.location}
								completeDate={item.completeDate}
								time={item.time}
								link={item.link}
							/>
						))}
					</div>

					<MagneticButton>
						<Button
							isHollow
							href='#'
							className={styles.button}
						>
							Se alle arrangementer
						</Button>
					</MagneticButton>

				</div>
			</section>

		</Layout>
    )
}