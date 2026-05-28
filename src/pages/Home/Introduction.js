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
        link: 'https://www.fb.com/vangiau.dev',
    },
    {
        icon: (
            <FontAwesomeIcon
                className={cx('socials-icon')}
                icon={faInstagram}
            />
        ),
        link: 'https://www.instagram.com/vangiau.dev/',
    },
    {
        icon: (
            <FontAwesomeIcon className={cx('socials-icon')} icon={faTwitter} />
        ),
        link: 'https://twitter.com/vangiaudev',
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
                        ĐÔI NÉT
                        <span className={cx('highlight')}>VỀ BẢN THÂN TÔI</span>
                    </h1>

                    <div className={cx('introduce')}>
                        <h4>
                            Chào mọi người, tôi là{' '}
                            <span className={cx('highlight')}>Giàu</span>
                            được sinh ra và lớn lên tại{' '}
                            <span className={cx('highlight')}>
                                Huyện Chợ Gạo, Tỉnh Tiền Giang
                            </span>
                            . Vùng đất này, bên bờ sông Tiền hữu ngạn với những cánh đồng lúa xanh mướt, đã nuôi dưỡng ý chí và sự kiên trì trong tôi. Tôi tự hào mang trong mình tinh thần quyết tâm và lòng hướng thượng của người dân quê hương.
                        </h4>
                        <h4>
                            🤷‍♂️ Tôi tốt nghiệp ngành Công nghệ Thông tin của Trường Đại Học Sư Phạm TP.HCM. Sau khi ra trường, tôi bắt đầu hành trình sự nghiệp với vai trò Software Engineer tại một tập đoàn hàng đầu Việt Nam - Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT). Chính tại đây, tôi đã được rèn luyện tư duy logic, khả năng xử lý dữ liệu và xây dựng hệ thống bài bản.
                        </h4>
                        <h4>Khi đang làm việc tại VNPT, tôi vinh dự nhận lệnh và lên đường nhập ngũ, thực hiện nghĩa vụ quân sự thiêng liêng với Tổ quốc. Môi trường quân đội đã rèn luyện cho tôi một bản lĩnh kiên cường, tính kỷ luật cao, tác phong nghiêm túc và khả năng chịu áp lực tuyệt vời.
                        </h4>
                        <h4>Sau khi hoàn thành nghĩa vụ quân sự và xuất ngũ, tôi quyết định thử thách bản thân ở một chương mới và chuyển hướng sang lĩnh vực Logistics. Hiện tại, tôi đang cống hiến với vai trò 
                        <span className={cx('highlight')}>
                                Nhân viên Hậu cần
                        </span> tại Boxme Fulfilment Center – hệ thống hỗ trợ hậu cần thương mại điện tử hàng đầu. Sự kết hợp giữa tư duy logic của một kỹ sư IT và tính kỷ luật của người lính giúp tôi nhanh chóng làm chủ các quy trình vận hành kho bãi, quản lý dữ liệu hàng hóa và tối ưu hóa chuỗi cung ứng một cách hiệu quả nhất. </h4>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('introduce-image')}>
                        <img src={images.myAvatar} alt="Văn Giàu" />
                    </div>
                </div>
            </div>
            <div className={cx('container')}>
                <h2 className={cx('heading')}>GET IN TOUCH</h2>
                <h4 className={cx('heading-sub')}>
                    Tìm tôi và
                    <span className={cx('highlight')}>liên hệ</span> tôi tại đây
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
