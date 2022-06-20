import React from 'react';
import './Project.module.scss';
import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import { projects } from '~/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Project = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('heading')}>
                <h1>
                    My Recent <span className={cx('highlight')}>Works</span>
                </h1>
                <h3>Here are a few projects I've worked on recently</h3>
            </div>
            <div className={cx('projects')}>
                {projects.map((project, index) => (
                    <div key={index} className={cx('projects-item')}>
                        <img src={project.image} alt="#" />
                        <div className={cx('projects-content')}>
                            <div className={cx('projects-description')}>
                                <h3 className={cx('title')}>{project.name}</h3>
                                <h4 className={cx('subtitle')}>
                                    {project.description}
                                </h4>
                            </div>
                            <div className={cx('projects-actions')}>
                                <a href={project.source} target="blank">
                                    <FontAwesomeIcon
                                        className={cx('icon-btn')}
                                        icon={faCode}
                                    />
                                    View Code
                                </a>
                                <a href={project.link} target="blank">
                                    <FontAwesomeIcon
                                        className={cx('icon-btn')}
                                        icon={faServer}
                                    />
                                    View Live
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
