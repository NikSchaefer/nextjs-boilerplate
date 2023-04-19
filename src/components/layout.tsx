import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={clsx(
				"flex flex-col",
				"w-screen h-screen bg-[#131129]",
				"justify-center items-center",
				"bg-gradient-to-br from-[#28263d] to-[#2626a7]",
				"text-white"
			)}
		>
			{children}
		</div>
	);
}
