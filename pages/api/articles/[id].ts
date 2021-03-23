import { NextApiRequest, NextApiResponse } from 'next';
import { data } from './data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const httpMethod = req.method;
	const result = data.find(e => e.id === req.query.id);

	switch (httpMethod) {
		case 'GET':
			if (result) {
				res.status(200).json(result);
			} else {
				res.status(404).end('');
			}
			break;
		default:
			break;
	}
}