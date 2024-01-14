"use client";

import { Button } from "@components/ui/button";
import { Metadata } from "next";
import { useEffect } from "react";

export const metadata: Metadata = {
	title: "Error",
};

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<>
			<h1 className="h1 my-8 scroll-m-20 font-bold tracking-tight">
				Something went wrong
			</h1>
			<p className="pb-4 leading-7">
				An error occurred while. Please try again later or contact our
				support team for assistance. We apologize for any inconvenience
				this may have caused. If you have any questions or need further
				assistance, please don't hesitate to reach out to our support
				team.
			</p>

			<Button onClick={() => reset()} size="lg" className="w-full">
				Try again
			</Button>
		</>
	);
}