/* styles */
import style from "./index.scss";

const ParagraphModule = ({ content }) => {
  function createMarkup() {
    return { __html: content };
  }
  return (
    <div className={style.root}>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default ParagraphModule;
