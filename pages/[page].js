import DefaultLayout from '../components/layouts/DefaultLayout';

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
