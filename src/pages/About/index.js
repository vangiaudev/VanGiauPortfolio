import React from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import Skill from './Skill';
import Github from './Github';
import Experience from './Experience';

const cx = classNames.bind(styles);
const About = () => {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <h1 className={cx('heading')}>Ước mơ từ bé</h1>
                    <h3>
                        Niềm đam mê máy tính đã đồng hành cùng tôi trong suốt
                        những năm tháng cấp 3. Sự hứng thú với môn học Pascal
                        lại càng thôi thúc ước mơ trở thành 1 lập trình viên
                        chuyên nghiệp của tôi. Những thách thức, sự thú vị và
                        cảm giác thỏa mãn khi có thể giải quyết tốt một vấn đề
                        bằng chính logic của bản thân là một trong những lý do
                        tôi ngày càng yêu thích con đường này.
                    </h3>
                    <h4 className={cx('about-description')}>
                        <span className="highlight">Họ tên đầy đủ: </span>
                        Nguyễn Văn Giàu
                        <br />
                        <span className="highlight">Sinh ngày: </span>
                        6 Tháng 4 Năm 2001
                        <br />
                        <span className="highlight">Giới tính: </span>
                        Nam
                        <br />
                        <span className="highlight">Email: </span>
                        vangiau.dev@gmail.com
                        <br />
                    </h4>
                    <h3>
                        Ngoài việc viết code ra, tôi còn tham gia một số hoạt
                        động yêu thích!
                    </h3>
                    <div className={cx('hobby')}>
                        <h3>
                            <FontAwesomeIcon icon={faFutbol} /> Đá bóng
                        </h3>
                        <h3>
                            <FontAwesomeIcon icon={faUmbrellaBeach} /> Du lịch
                            cùng bạn bè
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
            <Experience />
            <Github />
        </>
    );
};

export default About;
