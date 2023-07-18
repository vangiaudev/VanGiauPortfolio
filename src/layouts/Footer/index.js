import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faGithub,
    faTwitter,
    faInstagramSquare,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('copyright')}>Developed by Nguyen Van Giau</div>
            <div className={cx('copyright-year')}>
                Copyright &#169; {year} VG
            </div>
            <div className={cx('socials')}>
                <a target="blank" href="https://twitter.com/vangiau_dev">
                    <FontAwesomeIcon
                        className={cx('socials-icon')}
                        icon={faTwitter}
                    />
                </a>
                <a target="blank" href="https://github.com/vangiaudev">
                    <FontAwesomeIcon
                        className={cx('socials-icon')}
                        icon={faGithub}
                    />
                </a>
                <a target="blank" href="https://fb.com/vangiau.dev">
                    <FontAwesomeIcon
                        className={cx('socials-icon')}
                        icon={faFacebook}
                    />
                </a>
                <a target="blank" href="https://instagram.com/vangiau.dev">
                    <FontAwesomeIcon
                        className={cx('socials-icon')}
                        icon={faInstagramSquare}
                    />
                </a>
                <a
                    target="blank"
                    href="https://www.youtube.com/channel/UCaxR1aMhRUId7JzXN3unNXQ"
                >
                    <FontAwesomeIcon
                        className={cx('socials-icon')}
                        icon={faYoutube}
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;
