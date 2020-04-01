/* styles */
import style from "./index.scss";

const ParagraphModule = ({ content }) => {
  /* This is Reacts recommended way of injecting pure HTML into your application */
  function createMarkup() {
    return { __html: content };
  }

  /* All we do here is to add Markup (HTML) into our app */
  return (
    <div className={style.root}>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default ParagraphModule;
