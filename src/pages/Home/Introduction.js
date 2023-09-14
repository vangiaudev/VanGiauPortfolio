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
        link: 'https://twitter.com/vangiau_dev',
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
                                Huyện Chợ Gạo
                            </span>
                            . Và tôi tự hào được gọi Chợ Gạo là ngôi nhà của
                            mình. Tôi đã trải qua nhiều năm ở đây và nơi đây đã
                            đánh dấu hành trình phát triển của một lập trình
                            viên. Huyện Chợ Gạo không giống bất kỳ nơi nào khác.
                            Đây là một nơi nằm bên bờ sông Tiền Giang, với những
                            cánh đồng xanh rộn và con người thân thiện. Tôi đã
                            được sinh ra và lớn lên ở đây, và tôi không thể khỏi
                            cảm ơn cuộc sống tại đây đã giúp tôi trở nên mạnh mẽ
                            và kiên định. Tôi luôn mang trong mình tinh thần của
                            người dân nông thôn Việt Nam - sự kiên trì và lòng
                            hướng về mục tiêu.
                        </h4>
                        <h4>
                            🤷‍♂️ Tôi đã theo đuổi đam mê lập trình từ khi còn trẻ,
                            và dần dần, tôi đã thấy mình tiến gần hơn đến mục
                            tiêu trở thành một lập trình viên chuyên nghiệp. Và
                            tôi đã tốt nghiệp ngành{' '}
                            <span className={cx('highlight')}>
                                Công Nghệ Thông Tin
                            </span>{' '}
                            của Trường Đại Học Sư Phạm TP.HCM. Nhưng điều quan
                            trọng là cuộc hành trình này không chỉ dừng lại ở
                            đó. Tôi đã phấn đấu không ngừng, học hỏi và phát
                            triển bản thân để trở thành một{' '}
                            <span className={cx('highlight')}>
                                Software Engineer
                            </span>
                            tại một tập đoàn hàng đầu Việt Nam - Tập đoàn bưu
                            chính viễn thông Việt Nam (VNPT).
                        </h4>
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
