// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './BackToTop.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const BackToTop = () => {
    const { pathname } = useLocation();

    const scroll = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return (
        <button className={styles.topButton} onClick={scroll}>
            <p><FontAwesomeIcon icon={faChevronUp} /></p>
        </button>
    )
}

export default BackToTop