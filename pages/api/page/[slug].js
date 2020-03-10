/* 🌈 Welcome to the server side, where all the fun happens! 🌈 */

/* dependencies */
const StoryblokClient = require('storyblok-js-client');

/* Initiating Storyblok client, so that we are 
connected to our Storyblok account and space.
Please replace this accessToken with your own one.*/
const Storyblok = new StoryblokClient({
	accessToken: 'CMevxMzNABuUQdQdNNiWpQtt',
	cache: {
		clear: 'auto',
		type: 'memory'
	}
});

export default async (req, res) => {
	/* 
	Here we are extracting the slug from the request,
	so that we can later fetch the right data from Storyblok
	*/

	/* 
	The assignment below is the same as:
	const slug = req.query.slug
	I am using an ES6 feature called Object Destructuring,
	you can read up about it here: https://wesbos.com/destructuring-objects/
	*/

	const { query: { slug } } = req;

	/* We are making a request to Storybloks API, using
    the Storyblok Client that we've set up before */
	Storyblok.get(`cdn/stories/${slug}`, {})
		.then((response) => {
			const { data: { story: { content } } } = response; /* Same as: const content = data.story.content */
			const data = { content };
			res.setHeader('Content-Type', 'application/json');
			res.statusCode = 200;
			res.end(JSON.stringify(data));
		})
		.catch((error) => {
			console.log(error);
			res.setHeader('Content-Type', 'application/json');
			res.statusCode = 500;
			res.end(JSON.stringify(`${error.name}: ${error.message}`));
		});
};
