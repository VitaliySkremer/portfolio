import Head from "next/head";

interface IMetaProps {
	title: string;
	description: string;
}

export default function Meta({title, description}: IMetaProps){
	return (
		<Head>
			<title>{title}</title>
			<meta
				name='description'
				content={description}
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)
}