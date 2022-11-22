import GitHubCalendar from 'react-github-calendar';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
const cx = classNames.bind(styles);
function Github() {
    const colorTheme = {
        level4: '#8400b8',
        level3: '#b22ff4',
        level2: '#b265f6',
        level1: '#c084f5',
        level0: '#ecd9fc',
    };
    return (
        <div className={cx('container')}>
            <h1 className={cx('heading')}>
                Days I <span className={cx('highlight')}>Code</span>
            </h1>
            <div className={cx('github-calendar')}>
                <GitHubCalendar
                    username="vangiaudev"
                    blockSize={16}
                    blockMargin={8}
                    theme={colorTheme}
                    fontSize={16}
                    showWeekdayLabels={true}
                />
            </div>
        </div>
    );
}

export default Github;
