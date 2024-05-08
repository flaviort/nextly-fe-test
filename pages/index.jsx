// libraries
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Mousewheel, FreeMode } from 'swiper/modules'
import 'swiper/css'

// components
import Layout from '@/layout'
import SearchBox from '@/components/search-box'
import EventBlock from '@/components/event-block'
import NewsBlock from '@/components/news-block'
import Button from '@/components/button'
import AnimatedArrow from '@/components/utils/animated-arrow'
import { Counter, AnimatedLine, ScrollingImage, FillTitle, MagneticButton, AnimatedSlider } from '@/components/utils/animations'

// routes / utils / hooks
import { events } from '@/utils/events'
import { news } from '@/utils/news'

// images
import treeTops from '@/assets/img/tree-tops.jpg'
import people_talking from '@/assets/img/people-talking.jpg'

// css
import styles from './home.module.scss'

export default function Home() {

	const list = [
		{
			name: 'Skogtjenester',
			href: '#'
		}, {
			name: 'Om Allskog',
			href: '#'
		}, {
			name: 'Veiledning',
			href: '#'
		}, {
			name: 'Bærekraft og miljø',
			href: '#'
		}, {
			name: 'Bli andelseier',
			href: '#'
		}, {
			name: 'Arrangementer',
			href: '#'
		}, {
			name: 'Finn skogbruksleder',
			href: '#'
		}, {
			name: 'Aktuelt',
			href: '#'
		}
	]

	const counters = [
		{
			number: 70,
			text: 'skogeierlag'
		}, {
			number: 7600,
			text: 'andelseiere'
		}, {
			number: 1000000,
			text: 'm3 tømmer per år'
		}
	]

	const featuredLinks = [
		{
			title: 'Skal du plante ny skog?',
			description: 'Etter hogst skal det plantes innen tre år. Skal du plante selv denne sesongen, må du bestille planter innen 15. april.',
			link: '#'
		}, {
			title: 'Er skogen moden for hogst? Avtal hogst nå.',
			description: 'Vurderer du å ta ut tømmer fra skogen din? Ta gjerne en prat med en av våre dyktige skogbruksledere. Fra oss i Allskog får du solid veiledning, basert på skogfaglig erfaring og kunnskap.',
			link: '#'
		}
	]

    return (
		<Layout
			bodyClass='home'
			pageTitle='Vi er et samvirke for og for skogeiere'
			pageDescription='Vi er en robust organisasjon med høy kompetanse innen alle skogtjenester du trenger som skogeier.'
		>

			<section className={clsx(styles.banner, 'padding-bottom-small')}>
				<div className='container'>

					<div className={styles.image}>
						<ScrollingImage>
							<Image
								src={people_talking}
								alt='Rangers'
								title='Rangers'
								placeholder='blur'
								className='cover'
								fill
								sizes='100vw'
								priority
							/>
						</ScrollingImage>
					</div>

					<div className={styles.inner}>

						<div className={styles.titleBlock}>

							<h1 className='font-bigger'>
								<strong>
									Allskog er et samvirke av og for skogeiere
								</strong>
							</h1>

							<p>
								Vi er en robust organisasjon med høy kompetanse innen alle skogtjenester du trenger som skogeier.
							</p>

						</div>

						<ul className={styles.list}>
							
							{list.map((item, i) => (
								<li key={i}>

									<AnimatedLine />

									<Link href={item.href}>
										<AnimatedArrow className={styles.arrow} />
										<span>{item.name}</span>
									</Link>

								</li>
							))}

							<li>
								<AnimatedLine />
							</li>

							<li className={styles.last}>
								<AnimatedLine />
							</li>

						</ul>

					</div>

				</div>
			</section>

			<section className={clsx(styles.counters, 'padding-bottom-small')}>
				<div className='container'>
					<div className='row'>
						{counters.map((item, i) => (
							<div className='col-lg-4' key={i}>
								<div className={styles.block}>
									
									<p className='font-bigger'>
										<b>
											<Counter number={item.number} />
										</b>
									</p>

									<h3>
										{item.text}
									</h3>

								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<SearchBox className='padding-bottom-small' />

			<section className={clsx(styles.featuredNews, 'padding-bottom-small')}>
				<div className='container'>
					<div className={styles.inner}>

						<Link href='#' className={styles.image}>
							<ScrollingImage>
								<Image
									src={treeTops}
									alt='Trær stubber'
									title='Trær stubber'
									placeholder='blur'
									className='cover'
									fill
									sizes='
										(max-width: 768px) 100vw,
										60vw
									'
								/>
							</ScrollingImage>
						</Link>

						<Link href='#' className={styles.yellowBlock}>

							<h2 className='font-big'>
								<strong>
									Lyst til å bli andelseier i Allskog?
								</strong>
							</h2>

							<p>
								Hvis du eier skog, kan du melde deg inn i Allskog. Da blir du medeier av skogfellesskapet i Norge.
							</p>

							<AnimatedArrow className={styles.arrow} />

						</Link>
					</div>
				</div>
			</section>

			<section className={clsx(styles.featuredLinks, 'padding-bottom-small')}>
				<div className='container'>
					{featuredLinks.map((item, i) => (
						<EventBlock
							title={item.title}
							description={item.description}
							link={item.link}
							key={i}
						/>
					))}
				</div>
			</section>

			<section className={clsx(styles.news, 'padding-bottom-small')}>
				<div className='container'>

					<h2 className={clsx(styles.title, 'font-big bold')}>
						<FillTitle text='Nyheter' />
					</h2>

					<AnimatedSlider>
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
					</AnimatedSlider>

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

			<section className={clsx(styles.events, 'padding-bottom-small')}>
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