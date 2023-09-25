import React from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3Alt,
    faHtml5,
    faJs,
    faNodeJs,
    faReact,
    faAngular,
    faMicrosoft,
    faAndroid,
} from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
const Skill = () => {
    return (
        <div className={cx('container')}>
            <h1 className={cx('heading')}>
                Professional <span className={cx('highlight')}>Skillset</span>
            </h1>
            <div className={cx('skills')}>
                <div className={cx('skills-item')}>
                    <FontAwesomeIcon icon={faMicrosoft} />
                </div>
                <div className={cx('skills-item')}>
                    <FontAwesomeIcon icon={faHtml5} />
                </div>
                <div className={cx('skills-item')}>
                    <FontAwesomeIcon icon={faCss3Alt} />
                </div>
                <div className={cx('skills-item')}>
                    <FontAwesomeIcon icon={faJs} />
                </div>
                <div className={cx('skills-item')}>
                    <FontAwesomeIcon icon={faReact} />
                </div>
                <div className={cx('skills-item')}>
                    <FontAwesomeIcon icon={faAngular} />
                </div>
                <div className={cx('skills-item')}>
                    <FontAwesomeIcon icon={faNodeJs} />
                </div>
                <div className={cx('skills-item')}>
                    <FontAwesomeIcon icon={faAndroid} />
                </div>
            </div>
        </div>
    );
};

export default Skill;
