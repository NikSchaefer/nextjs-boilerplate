import Axios from "axios";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";

type Id = {
	id: string;
};
// eslint-disable-next-line import/no-default-export
export default function Main({
	params,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	return (
		<div>
			<p>{params.data}</p>
			<p>Page</p>
		</div>
	);
}
export const getStaticProps: GetStaticProps = async (slug) => {
	const res: Id[] = (
		await Axios.get(
			`http://localhost:3000/slug${String(slug.params.slug)}.json`
		)
	).data;
	return {
		props: {
			params: res,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async function () {
	const res: Id[] = (await Axios.get("http://localhost:3000/index.json"))
		.data;

	const paths = res.map((data) => {
		return { params: { slug: data.id } };
	});
	return {
		// eslint-disable-next-line object-shorthand
		paths: paths,
		fallback: false,
	};
};
