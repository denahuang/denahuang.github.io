import styles from './index.module.scss';
// https://www.youtube.com/watch?v=ad9f-EYtWPo

const ThemeToggle = ({ theme, onClick }) => {

    return (
        <div onClick={onClick} className={`${styles.toggle} ${styles[theme]}`}>
            <div className={styles.notch}>
                {/* <div className={styles.crater} />
                <div className={styles.crater} /> */}
            </div>
            {/* <div>
                <div className={`${styles.shape} ${styles.sm}`} />
                <div className={`${styles.shape} ${styles.sm}`} />
                <div className={`${styles.shape} ${styles.md}`} />
                <div className={`${styles.shape} ${styles.lg}`} />
            </div> */}
        </div>
    )
}

export default ThemeToggle