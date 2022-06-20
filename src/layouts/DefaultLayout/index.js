import Header from '~/layouts/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Particle from '~/layouts/DefaultLayout/Particle';
import ScrollToTop from './ScrollToTop';
const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Particle />
            <Header />
            <ScrollToTop />
            <div className={cx('container')}>{children}</div>
        </div>
    );
};

export default DefaultLayout;
