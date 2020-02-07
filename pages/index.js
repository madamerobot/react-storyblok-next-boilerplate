import DefaultLayout from '../components/layouts/DefaultLayout';

// This route gets hit by default, e.g. your-site.com/
const DefaultPage = () => {
	return (
		<DefaultLayout>
			<h1>Default Page</h1>
			<a href="/halloslug">->Visit a Slug Page</a>
		</DefaultLayout>
	);
};

export default DefaultPage;
