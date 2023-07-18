import React from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFutbol,
    faGamepad,
    faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons';
import Skill from './Skill';
import Github from './Github';
const cx = classNames.bind(styles);
const About = () => {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>Know Who I'M</h1>
                    <h3>
                        Hi Everyone, I am{' '}
                        <span className={cx('highlight')}>Nguyen Van Giau</span>
                        from <span className={cx('highlight')}>Vietnam</span> I
                        am currently studying at{' '}
                        <span className={cx('highlight')}>
                            Ho Chi Minh City University Of Pedagogy
                        </span>
                    </h3>
                    <h4 className={cx('about-description')}>
                        <span className="highlight">Full Name: </span>
                        Nguyễn Văn Giàu
                        <br />
                        <span className="highlight">Date of Birth: </span>
                        April 6, 2001
                        <br />
                        <span className="highlight">Gender: </span>
                        Male
                        <br />
                        <span className="highlight">Address: </span>
                        Tien Giang, Vietnam
                        <br />
                        <span className="highlight">Email: </span>
                        vangiau.dev@gmail.com
                        <br />
                    </h4>
                    <h3>
                        Apart from coding, some other activities that I love to
                        do!
                    </h3>
                    <div className={cx('hobby')}>
                        <h3>
                            <FontAwesomeIcon icon={faFutbol} /> Playing Football
                        </h3>
                        <h3>
                            <FontAwesomeIcon icon={faUmbrellaBeach} />{' '}
                            Travelling
                        </h3>
                    </div>
                </div>
                <div className={cx('content')}>
                    {/* <div className={cx('about-image')}>
                        <img src={images.aboutMeImage} alt="#" />
                    </div> */}
                </div>
            </div>
            <Skill />
            <Github />
        </>
    );
};

export default About;
