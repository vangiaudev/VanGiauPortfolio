import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faBriefcase,
    faCodeFork,
    faHome,
    faStar,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const mainNav = [
    {
        icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faHome} />,
        display: 'Home',
        path: '/',
    },
    {
        icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faUser} />,
        display: 'About',
        path: '/about',
    },
    {
        icon: (
            <FontAwesomeIcon className={cx('menu-icon')} icon={faBriefcase} />
        ),
        display: 'Project',
        path: '/project',
    },
    {
        icon: <FontAwesomeIcon className={cx('menu-icon')} icon={faBook} />,
        display: 'Resume',
        path: '/resume',
    },
];
const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex((e) => e.path === pathname);
    console.log(activeNav + '----' + pathname);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add(cx('shrink'));
            } else {
                headerRef.current.classList.remove(cx('shrink'));
            }
        });
        return () => {
            window.removeEventListener('scroll', null);
        };
    }, []);

    return (
        <div className={cx('wrapper')} ref={headerRef}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img
                            src="https://vangiaurecca.github.io/PersonalBlog/img/logo_name_blog.png"
                            alt="LOGO"
                        />
                    </Link>
                </div>
                <div className={cx('menu-list')}>
                    {mainNav.map((item, index) => {
                        return (
                            <div
                                ref={menuRef}
                                key={index}
                                className={cx(
                                    'menu-item',
                                    `${index === activeNav ? 'active' : ''}`,
                                )}
                            >
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        );
                    })}
                    <a
                        href="https://github.com/vangiaurecca/"
                        target="blank"
                        className={cx('fork-btn')}
                    >
                        <FontAwesomeIcon
                            className={cx('fork-icon')}
                            icon={faCodeFork}
                        />
                        <FontAwesomeIcon
                            className={cx('star-icon')}
                            icon={faStar}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
