// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';

const BackToTop = () => {
    const { pathname } = useLocation();

    const scroll = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return (
        <button className={styles.backToTop} onClick={scroll}>
            <p>Back to top</p>
        </button>
    )
}

export default BackToTop