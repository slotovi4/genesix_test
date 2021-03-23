export const data: IArticle[] = [{
	id: '1',
	title: 'Hello',
	description: 'Lorem ipsum hello',
	image: 'https://avatars.mds.yandex.net/get-zen_doc/1587994/pub_5d7df76035c8d800ad8f0e69_5d82362a8f011100b7d48b09/scale_1200',
},
{
	id: '2',
	title: 'Nice',
	description: 'Lorem ipsum nice',
	image: 'https://avatars.mds.yandex.net/get-zen_doc/1587994/pub_5d7df76035c8d800ad8f0e69_5d82362a8f011100b7d48b09/scale_1200',
},
{
	id: '3',
	title: 'Lor',
	description: 'Lorem ipsum',
	image: 'https://avatars.mds.yandex.net/get-zen_doc/1587994/pub_5d7df76035c8d800ad8f0e69_5d82362a8f011100b7d48b09/scale_1200',
}];

export interface IArticle {
	id: string;
	title: string;
	description: string;
	image: string;
}