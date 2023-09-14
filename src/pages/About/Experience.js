import React from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);

const Experience = () => {
    // Thay đổi dữ liệu dưới đây cho phù hợp với công ty và kỹ năng của bạn
    const companies = [
        {
            name: 'TopOnSeek',
            logo: 'https://github-production-user-asset-6210df.s3.amazonaws.com/75024999/267836106-f6c2ca46-f7a8-45ac-a3b1-cd2a026be7ad.png',
        },
        {
            name: 'VNPT IT',
            logo: 'https://github-production-user-asset-6210df.s3.amazonaws.com/75024999/267836360-ded47627-984e-47fe-abd7-754c87ecff4b.png',
        },
    ];

    return (
        <div className={cx('container')}>
            <h1 className={cx('heading')}>
                My <span className={cx('highlight')}>Experience</span>
            </h1>
            <div className={cx('experience-list')}>
                {companies.map((company, index) => (
                    <div key={index} className={cx('experience-item')}>
                        <img
                            src={company.logo}
                            alt={`${company.name} Logo`}
                            className={cx('company-logo')}
                        />
                        <div className={cx('company-name')}>{company.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
