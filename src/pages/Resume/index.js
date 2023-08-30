import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Resume.module.scss';
import SinglePagePDFViewer from './PDFViewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Resume = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('download-btn')}>
                <a href={images.myCV} target="blank" download>
                    <FontAwesomeIcon icon={faDownload} />
                    &nbsp;Download CV
                </a>
            </div>
            <div className={cx('resume')}>
                <SinglePagePDFViewer
                    className={cx('heading')}
                    pdf={images.myCV}
                />
            </div>
        </div>
    );
};

export default Resume;
