/* styles */
import style from './index.scss';

const HeadlineModule = ({ title }) => {
	return <h1 className={style.root}>{title}</h1>;
};

export default HeadlineModule;
