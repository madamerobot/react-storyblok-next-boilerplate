/* dependencies */
import fetch from 'isomorphic-unfetch';

/* layout */
import DefaultLayout from '../components/layouts/DefaultLayout';

/* Helper function to fetch data */
function fetcher(url) {
	return fetch(url).then((r) => r.json());
}

/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */
const SlugPage = ({ data }) => {
	const { content } = data;
	const titleElement = content.body.find((item) => item.title);
	return (
		<DefaultLayout>
			<h1>{titleElement.title}</h1>
		</DefaultLayout>
	);
};

/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */
SlugPage.getInitialProps = async ({ query }) => {
	/* {query} is an object we receive within this method from Next,
	so that we can retrieve the slug coming with the route */
	const { page } = query;
	/* Calling our internal api endpoint so that we can fetch Storyblok content
	server-side (we are on client-side here) */
	const data = await fetcher(`http://localhost:3000/api/page/${page}`);
	/* Returning the data back into SlugPage as props */
	return { data };
};

export default SlugPage;
