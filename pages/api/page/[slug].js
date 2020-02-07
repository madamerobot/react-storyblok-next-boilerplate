export default async (req, res) => {
	/* Here we are extracting the slug from the request,
    so that we can later fetch the right data from Storyblok */
	const { query: { slug } } = req;
	try {
		/* To Do: Make actual Storybok call, using 'slug' */
		/* For now we are simply returning a dummy data object */
		const data = { content: `Looking for /${slug}?` };
		res.setHeader('Content-Type', 'application/json');
		res.statusCode = 200;
		res.end(JSON.stringify(data));
	} catch (error) {
		res.setHeader('Content-Type', 'application/json');
		res.statusCode = 500;
		res.end(JSON.stringify(`${error.name}: ${error.message}`));
	}
};
