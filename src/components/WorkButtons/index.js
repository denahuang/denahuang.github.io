import styles from './index.module.scss';

import HomeButton from './HomeButton';
import BackToTop from './BackToTop';

const WorkButtons = () => {

    return (
        <div className={styles.container}>
            <BackToTop />
            <HomeButton />
        </div>
    )
}

export default WorkButtons