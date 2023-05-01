import styles from './index.module.scss';
import '../../global.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Button = ({text, func}) => {

    return (
        <button className={styles.moreButton} onClick={func}>
            <p>{text}</p>
            <p className={styles.arrow}><FontAwesomeIcon icon={faChevronRight} /></p>
        </button>
    )
}

export default Button