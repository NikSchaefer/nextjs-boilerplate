import { Metadata } from "next";

export const metadata: Metadata = {
	title: "404",
};

export default function NotFound(): JSX.Element {
	return (
		<div className="relative flex h-screen flex-col items-center justify-center gap-16 overflow-hidden p-8 sm:flex-row">
			<div className="max-w-lg">
				<h1 className="h2 mb-4 font-medium">
					This page doesn't exist{" "}
				</h1>
				<p className="h4 mb-4">
					Check that you have the right link. If you do, the page
					you're looking for may have been moved or deleted.
				</p>
			</div>
		</div>
	);
}
