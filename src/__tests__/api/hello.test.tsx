import hello from "../../pages/api/hello";

describe("/index", () => {
	test("Index Test", () => {
		expect(hello).toBe(hello);
	});
});
