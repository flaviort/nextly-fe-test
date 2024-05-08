// libraries
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function SEOContainer({ pageTitle, pageDescription }) {

    const router = useRouter()
    const { asPath } = useRouter()

    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
    const urlAddress = `${origin}${asPath}`

    const siteName = 'Allskog'

	const defaultPageTitle = 'Allskog er et samvirke av og for skogeiere'
	const defaultPageDesc = 'Vi er en robust organisasjon med høy kompetanse innen alle skogtjenester du trenger som skogeier.'

	const image = router.basePath + '/img/og-image.jpg'

    return (
        <Head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
			<meta name='format-detection' content='telephone=no' />
			<meta name='author' content='Nextly' />
			<link rel='shortcut icon' href='/favicon.svg' />

            <title>{siteName + ' | ' + (pageTitle ?? defaultPageTitle)}</title>
            <meta name='description' content={(pageDescription ?? defaultPageDesc)} />

            <meta name='Robots' content='all' />

            {/* facebook */}
            <meta property='og:locale' content='no' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={siteName + ' | ' + (pageTitle ?? defaultPageTitle)} />
            <meta property='og:description' content={(pageDescription ?? defaultPageDesc)} />
            <meta property='og:url' content={urlAddress} />
            <meta property='og:site_name' content={siteName} />
            <meta property='og:image' content={image} />

            {/* twitter */}
            <meta name='twitter:title' content={siteName + ' | ' + (pageTitle ?? defaultPageTitle)} />
            <meta name='twitter:description' content={(pageDescription ?? defaultPageDesc)} />
            <meta name='twitter:url' content={urlAddress} />
            <meta name='twitter:image' content={image} />
            <meta name='twitter:card' content='summary_large_image' />

        </Head>
    )
}