import { NextApiRequest, NextApiResponse } from 'next';
import { data } from './data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const httpMethod = req.method;

	switch (httpMethod) {
		case 'GET':
			res.status(200).json(data);
			break;
		default:
			break;
	}
}