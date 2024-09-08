import styles from './index.module.scss';
import '../../global.scss';

const Tabs = ({tabs, content, color}) => {

    return (
        // <button className={styles.moreButton} onClick={func}>
        //     <p>{text}</p>
        //     <p className={styles.arrow}><FontAwesomeIcon icon={faChevronRight} /></p>
        // </button>
        <div className={styles.tabs}>
            <input type="radio" className={styles.tabsRadio} name="tabs-example" id="tab1" checked />
            <label for="tab1" className={styles.tabsLabel}>Tab #1</label>
            <div className={styles.tabsContent}>
                CONTENT for Tab #1
            </div>
            <input type="radio" className={styles.tabsRadio} name="tabs-example" id="tab2" />
            <label for="tab2" className={styles.tabsLabel}>Tab #2</label>
            <div className={styles.tabsContent}>
                CONTENT for Tab #2
            </div>
        </div>
    )
}

export default Tabs