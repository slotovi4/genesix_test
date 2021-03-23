import Head from 'next/head';
import Image from 'next/image';
import { Layout } from 'components';
import { GetServerSidePropsContext } from 'next';
import { IArticle, validateResponseData } from 'api';

export async function getServerSideProps({ query, res }: GetServerSidePropsContext) {
	const data = await fetch(`http://localhost:3000/api/articles/${query.id}`);
	const { result, errorCode } = await validateResponseData<IProps["postData"]>(data, res);

	return {
		props: { postData: result, statusCode: errorCode },
	}
}

const Article = ({ postData, statusCode }: IProps) => {
	return (
		<Layout home={false} title={postData?.title} statusCode={statusCode} withoutImage>
			{postData ? (
				<>
					<Head>
						<title>{postData.title}</title>
					</Head>
					<br />
					{postData.description}
					<br />
					{postData.image ? <Image src={postData.image} width={120} height={120} /> : null}
				</>
			) : null}
		</Layout>
	)
}

export default Article;

interface IProps {
	postData: IArticle | null;
	statusCode: number | null;
}