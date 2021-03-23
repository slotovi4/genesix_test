import Head from 'next/head';
import Link from 'next/link';
import utilStyles from 'styles/utils.module.css';
import { GetServerSidePropsContext } from 'next';
import { Layout, siteTitle } from 'components';
import { IArticle, validateResponseData } from 'api';

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
	const data = await fetch(`http://localhost:3000/api/articles/`);
	const { result, errorCode } = await validateResponseData<IProps["allPostsData"]>(data, res);

	return {
		props: { allPostsData: result, statusCode: errorCode },
	}
}

const Home = ({ allPostsData, statusCode }: IProps) => {
	return (
		<Layout home={false} title='Articles list' statusCode={statusCode} withoutImage articles>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<ul className={utilStyles.list}>
					{allPostsData ? allPostsData.map(({ id, description, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/articles/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								{description}
							</small>
						</li>
					)) : null}
				</ul>
			</section>
		</Layout>
	)
}

export default Home;

interface IProps {
	allPostsData: IArticle[] | null;
	statusCode: number | null;
}