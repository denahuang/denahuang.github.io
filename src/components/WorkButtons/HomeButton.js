import styles from './HomeButton.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const HomeButton = () => {

    return (
        <a href="/">
            <button className={styles.homeButton}><p><FontAwesomeIcon icon={faHome} className={styles.icon}/></p></button>
        </a>
    )
}

export default HomeButton