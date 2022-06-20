import './Home.module.scss';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
const socials = [
    {
        icon: (
            <FontAwesomeIcon className={cx('socials-icon')} icon={faFacebook} />
        ),
        link: 'https://www.fb.com/vangiau.recca',
    },
    {
        icon: (
            <FontAwesomeIcon
                className={cx('socials-icon')}
                icon={faInstagram}
            />
        ),
        link: 'https://www.instagram.com/vangiau.recca/',
    },
    {
        icon: (
            <FontAwesomeIcon className={cx('socials-icon')} icon={faTwitter} />
        ),
        link: 'https://twitter.com/vangiau_recca',
    },
    {
        icon: (
            <FontAwesomeIcon className={cx('socials-icon')} icon={faYoutube} />
        ),
        link: 'https://www.youtube.com/channel/UCaxR1aMhRUId7JzXN3unNXQ?view_as=subscriber',
    },
];
const Introduction = () => {
    return (
        <>
            <div className={cx('wrapper', 'bg-night')}>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>
                        LET ME
                        <span className={cx('highlight')}>INTRODUCE</span>
                        MYSELF
                    </h1>

                    <div className={cx('introduce')}>
                        <h4>
                            A passionate FrontEnd Web developer from{' '}
                            <span className={cx('highlight')}>Vietnam</span>
                        </h4>
                        <h4>
                            I fell in love with programming and I have at least
                            learnt something, I think… 🤷‍♂️
                        </h4>
                        <h4>
                            I am fluent in classics like{' '}
                            <span className={cx('highlight')}>
                                C++, Javascript and Java.
                            </span>
                        </h4>
                        <h4>
                            Whenever possible, I also apply my passion for
                            developing products with{' '}
                            <span className={cx('highlight')}>NodeJS</span> and{' '}
                            <span className={cx('highlight')}>
                                Modern Javascript Library and Frameworks
                            </span>
                            like{' '}
                            <span className={cx('highlight')}>ReactJS</span>
                        </h4>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('introduce-image')}>
                        <img src={images.myImage} alt="Văn Giàu" />
                    </div>
                </div>
            </div>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>GET IN TOUCH</h2>
                <h4 className={cx('heading-sub')}>
                    Find me and
                    <span className={cx('highlight')}>contact</span> me here
                </h4>
                <ul className={cx('socials')}>
                    {socials.map((social, index) => (
                        <li key={index} className={cx('socials-item')}>
                            <a href={social.link}>{social.icon}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Introduction;
