/* 🌈 This is the client side 🌈*/

/* dependencies */
import fetch from "isomorphic-unfetch";
import marked from "marked";

/* layout */
import DefaultLayout from "../components/layouts/DefaultLayout";

/* components */
import HeadlineModule from "../components/modules/HeadlineModule";
import ParagraphModule from "../components/modules/ParagraphModule";

/* Helper function to fetch data - do we need this as an extra function? Debatable. 😊 */
function fetchUrl(url) {
  return fetch(url).then(r => r.json());
}

/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */
const SlugPage = ({ data }) => {
  const {
    content: { components }
  } = data;
  console.log(data);
  /* Filtering only data for the Headline module */
  const headlineModuleData = components.find(
    item => item.component === "Headline Module"
  );
  /* Filtering only data for the Paragraph module */
  const paragraphModuleData = components.find(
    item => item.component === "Paragraph Module"
  );
  /* With our dependency 'marked' we are turning Contentfuls
  Markdown into HTML Markup */
  const paragraphModuleDataMarkUp = marked(paragraphModuleData.copy);

  return (
    <DefaultLayout>
      {headlineModuleData ? (
        <HeadlineModule title={headlineModuleData.title} />
      ) : null}
      {paragraphModuleData ? (
        <ParagraphModule content={paragraphModuleDataMarkUp} />
      ) : null}
    </DefaultLayout>
  );
};

/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */
SlugPage.getInitialProps = async ({ query }) => {
  /* {query} is an object we receive within this method from Next,
	so that we can retrieve the slug (e.g. '/welcome') coming with the route */
  const { page } = query;
  /* Calling our internal api endpoint so that we can fetch Storyblok content
	server-side (we are on client-side here) */
  const data = await fetchUrl(`http://localhost:3000/api/page/${page}`);
  /* Returning the data back into SlugPage as props */
  return { data }; /* This is the same as { data: data } */
};

export default SlugPage;
