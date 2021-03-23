import { GetServerSidePropsContext } from 'next';

export const validateResponseData = async <T>(data: Response, res: GetServerSidePropsContext["res"]) => {
	const errorCode = data.ok ? null : data.status;
	let result: T | null = null;

	if (errorCode) {
		res.statusCode = errorCode;
	} else {
		result = await data.json();
	}

	return { result, errorCode };
}