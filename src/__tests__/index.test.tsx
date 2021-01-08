import index from "../pages";

describe("/index", () => {
	test("Index Test", () => {
		expect(index).toBe(index);
	});
});
