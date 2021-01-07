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
			<p>{params[0].id}</p>
			<p>Page</p>
		</div>
	);
}
export const getStaticProps: GetStaticProps = async (params) => {
	const res: ID[] = (await Axios.get("http://localhost:3000/index.json"))
		.data;
	return {
		props: {
			params: res,
		},
	};
};

export async function getStaticPaths() {
	return {
		paths: [{ params: { slug: "1" } }, { params: { slug: "2" } }],
		fallback: false,
	};
}
