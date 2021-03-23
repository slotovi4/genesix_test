import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ErrorPage from 'next/error';
import utilStyles from 'styles/utils.module.css'
import styles from './Layout.module.scss';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children, home, withoutImage, title, articles, statusCode }: IProps) => {
	return statusCode ? <ErrorPage statusCode={statusCode} /> : (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						{!withoutImage ? <Image
							priority
							src="/images/profile.jpeg"
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt={title || name}
						/> : null}
						<h1 className={utilStyles.heading2Xl}>{title || name}</h1>
					</>
				) : (
					<>
						{!withoutImage ? <Link href="/">
							<a>
								<Image
									priority
									src="/images/profile.jpeg"
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={title || name}
								/>
							</a>
						</Link> : null}
						<h2 className={utilStyles.headingLg}>
							{title || name}
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href={articles ? '/' : "/articles"}>
						<a>{`← Back to ${articles ? 'home' : 'articles list'}`}</a>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Layout;

interface IProps {
	children: React.ReactNode;
	home: boolean;
	statusCode: number | null;
	articles?: boolean;
	withoutImage?: boolean;
	title?: string;
}