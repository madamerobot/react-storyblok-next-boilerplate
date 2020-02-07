export default async (req, res) => {
	/* Here we are extracting the slug from the request,
    so that we know which url our user wants to access */
	const { query: { slug } } = req;
	try {
		// Make actual Storybok call
		const pageData = { content: 'Hallo' };
		res.setHeader('Content-Type', 'application/json');
		res.statusCode = 200;
		res.end(JSON.stringify(pageData));
	} catch (error) {
		res.setHeader('Content-Type', 'application/json');
		res.statusCode = 500;
		res.end(JSON.stringify(`${error.name}: ${error.message}`));
	}
};
