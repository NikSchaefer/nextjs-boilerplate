import Axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
type ID = {
	id: string;
};

export default function Main({
	params,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(params);
	return (
		<div>
			<p>{}</p>
		</div>
	);
}
export const getStaticProps: GetStaticProps = async (params) => {
	const res: ID[] = (await Axios.get("http://localhost:3000/index.json"))
		.data;
	return {
		props: {
			res,
		},
	};
};

export async function getStaticPaths() {
	const res: ID[] = (await Axios.get("http://localhost:3000/index.json"))
		.data;

	const paths = res.map((data) => {
		const re = {
			data: {
				slug: data.id,
			},
		};
		return re;
	});

	return {
		paths: paths,
		fallback: false,
	};
}
