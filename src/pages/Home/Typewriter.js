import { useTypewriter, Cursor } from 'react-simple-typewriter';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
const Typewriter = () => {
    const { text } = useTypewriter({
        words: ['Software Engineer'],
        loop: 0,
        typeSpeed: 180,
    });

    return (
        <h2 className={cx('type-name')}>
            <span>Là 1 {text}</span>
            <Cursor />
        </h2>
    );
};
export default Typewriter;
