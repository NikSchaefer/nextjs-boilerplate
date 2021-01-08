import index from "../pages/index";

describe("/index", () => {
	test("Index Test", () => {
		expect(index).toBe(index);
	});
});
