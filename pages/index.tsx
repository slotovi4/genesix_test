import Head from 'next/head';
import Link from 'next/link';
import utilStyles from 'styles/utils.module.css';
import { Layout, siteTitle } from 'components';

const Home = () => {
	return (
		<Layout statusCode={null} home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<Link href={`/articles/`}>
					<a>go to articles</a>
				</Link>
			</section>
		</Layout>
	)
}

export default Home;