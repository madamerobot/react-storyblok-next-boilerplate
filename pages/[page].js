import DefaultLayout from '../components/layouts/DefaultLayout';

// This route gets hit when our user appends a slug to
// the url and therefore the page request, e.g. your-site.com/about
const SlugPage = ({ query }) => {
	return (
		<DefaultLayout>
			<h1>Slug Page - you are looking for /{query.page}</h1>
		</DefaultLayout>
	);
};

SlugPage.getInitialProps = ({ query }) => {
	return { query };
};

export default SlugPage;
