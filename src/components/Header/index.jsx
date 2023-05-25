import React from 'react';
import Head from 'next/head';
import { imageResolver } from '../../../utils/helpers';
import { useRouter } from 'next/router';
import Script from 'next/script';
export default function Header({ data }) {
	const noIndex = !data?.indexThisPage;
	const noFollow = !data?.followThisPage;

	const router = useRouter();
	return (
		<>
			<Script id='google-tag-manager' strategy='afterInteractive'>
				{`
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,'script','dataLayer','GTM-M4PD9MP');
      `}
			</Script>
			<Script
				src='https://www.googletagmanager.com/ns.html?id=GTM-M4PD9MP'
				strategy='afterInteractive'
			/>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<title>{data?.title}</title>
				<meta name='title' content={data?.title !== null && data?.title}></meta>
				<meta
					name='description'
					content={data?.description !== null && data?.description}
				></meta>
				<meta
					name='keywords'
					content={data?.keywords !== null && data?.keywords}
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				></meta>

				<link
					rel='canonical'
					href={`https://nobledentalcares.com${router.asPath}`}
				/>
				<meta
					property='og:title'
					content={data?.ogTitle !== null && data?.ogTitle}
				/>
				<meta
					property='og:description'
					content={data?.ogDescription !== null && data?.ogDescription}
				/>
				<meta
					property='og:image'
					content={`https://admin.nobledentalcares.com${data?.ogUrl}`}
				/>
				<meta
					property='og:url'
					content={`https://nobledentalcares.com${router.asPath}`}
				/>
				<meta
					name='twitter:title'
					content={data?.twitterTitle !== null && data?.twitterTitle}
				/>
				<meta
					name='twitter:description'
					content={
						data?.twitterDescription !== null && data?.twitterDescription
					}
				/>
				<meta
					name='twitter:image'
					content={
						imageResolver(data?.twitterImage !== null && data?.twitterImage)
							.path
					}
				/>
				<meta
					name='twitter:card'
					content={data?.twitterCard !== null && data?.twitterCard}
				/>
				{noFollow && noIndex && <meta name='robots' content='nofollow' />}
				{data?.noIndex && !noFollow && <meta name='robots' content='noindex' />}
				{noFollow && data?.noIndex && (
					<meta name='robots' content='noindex, nofollow' />
				)}
				{!noFollow && noIndex && <meta name='robots' content='index, follow' />}
			</Head>
		</>
	);
}
