import type { NextApiRequest, NextApiResponse } from "next";
// eslint-disable-next-line import/no-default-export
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse
): void {
	if (req.method === "POST") {
		// Process Posts Request
	} else {
		res.statusCode = 200;
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify({ name: "Test Api Route" }));
	}
}
