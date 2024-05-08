// libraries
import Link from 'next/link'

// components
import Logo from '@/components/utils/logo'
import { MagneticButton } from '@/components/utils/animations'

// routes / utils
import routes from '@/utils/routes'
import { phone, email } from '@/utils/functions'

// svgs
import SocialFacebook from '@/assets/svg/social/facebook.svg'
import SocialYoutube from '@/assets/svg/social/youtube.svg'

// css
import styles from './footer.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				
				<Link href={routes.home} className={styles.logo}>
					<Logo />
				</Link>

				<div className={styles.blocks}>

					<div>

						<h3 className='font-medium'>
							<b>
								Adresse
							</b>
						</h3>

						<p>
							Ingvald Ystgaards vei 13A,<br />
							7047 Trondheim
						</p>

					</div>

					<div>

						<h3 className='font-medium'>
							<b>
								Kontakt
							</b>
						</h3>

						<p>
							Telefon: <Link className='hover-underline' href={phone(routes.phone)}>{routes.phone}</Link><br />
							<Link href={email(routes.email)} className='hover-underline'>{routes.email}</Link><br />
							<Link href='#' target='_blank' className='hover-underline'>Veibeskrivelse</Link>
						</p>

					</div>

					<div>

						<h3 className='font-medium'>
							<b>
								Følg oss
							</b>
						</h3>

						<ul className={styles.social}>

							<li>
								<MagneticButton>
									<Link href={routes.facebook} target='_blank'>
										<SocialFacebook />
										<span>
											Facebook
										</span>
									</Link>
								</MagneticButton>
							</li>

							<li>
								<MagneticButton>
									<Link href={routes.youtube} target='_blank'>
										<SocialYoutube />
										<span>
											YouTube
										</span>
									</Link>
								</MagneticButton>
							</li>

						</ul>

					</div>

				</div>

				<p className={styles.copyright}>
					<Link href='#' className='hover-underline-white'>Personvern</Link> © {new Date().getFullYear()} Allskog SA
				</p>

			</div>
		</footer>
	)
}