/* styles */
import style from './index.scss';

const ParagraphModule = ({ copy }) => {
	return (
		<div className={style.root}>
			<p>{copy}</p>
		</div>
	);
};

export default ParagraphModule;
