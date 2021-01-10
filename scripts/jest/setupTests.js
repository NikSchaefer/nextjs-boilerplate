// eslint-disable-next-line jest/require-top-level-describe
afterEach(() => {
	window.localStorage.clear();

	// Object.keys(parse(document.cookie)).forEach((key) => {
	// 	document.cookie = serialize(key, "", {
	// 		maxAge: -1,
	// 	});
	// });
});
