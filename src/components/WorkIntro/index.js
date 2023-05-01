import styles from './index.module.scss';

const WorkIntro = ({ title, tags, hero, duration, role, tools, skills, color }) => {

    return (
        <div className={styles.intro}>
            <div className={styles.heroSection}>
                <h1>{title}</h1>
                <p style={{color:`#${color}`}}>{tags}</p>
                <img className={styles.hero} src={hero} />
            </div>
            <div className={styles.details}>
                <hr />
                <div className={styles.row}>
                    <div className={styles.rowTitle}><h4>Duration</h4></div>
                    <div className={styles.rowInfo}><p>{duration}</p></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.rowTitle}><h4>Role</h4></div>
                    <div className={styles.rowInfo}><p>{role}</p></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.rowTitle}><h4>Tools</h4></div>
                    <div className={styles.rowInfo}><p>{tools}</p></div>
                </div>
                <div className={styles.row}>
                    <div className={styles.rowTitle}><h4>Skills</h4></div>
                    <div className={styles.rowInfo}><p>{skills}</p></div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default WorkIntro