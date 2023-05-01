import React, { useState } from 'react';
import styles from './index.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

import name from '../../assets/dena.mp3';

const Values = ({ func }) => {

    // Dark mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 

    function play() {
        new Audio(name).play()
    }

    return (
        <>
            <div className={styles.overlay} onClick={func}></div>
            <div className={styles.valuesContainer} data-theme={theme}>
                <div className={styles.info}>
                    <h1>My Values</h1>
                    <div className={styles.values}>
                        <div className={styles.value}>
                            <div className={styles.valueName}>
                                <h4>Strive to Grow🌱</h4>
                            </div>
                            <div className={styles.valueDescription}>
                                <p>Sure, change is scary, but so is staying the same.  I am always seeking challenges to improve myself, which is why I like to spend my free time exploring new projects, watching video essays, and practicing gratitude. </p>
                            </div>
                        </div>
                        <div className={styles.value}>
                            <div className={styles.valueName}>
                                <h4>Take it Easy🌊</h4>
                            </div>
                            <div className={styles.valueDescription}>
                                <p>We tend to measure success through comparison. Someone else’s win is not your loss; We all have our own timelines. Remember to enjoy the journey and recognize that everyone is just as stupid, scared, and lost as you are. </p>
                            </div>
                        </div>
                        <div className={styles.value}>
                            <div className={styles.valueName}>
                                <h4>Passion is Motivation❤️‍🔥</h4>
                            </div>
                            <div className={styles.valueDescription}>
                                <p>Be fueled by passion. If you don’t enjoy what you’re doing, take action. I’m fortunate to be inspired and surrounded by motivated people who love what they do. Recognize the power that comes from focusing on what excites you.</p>
                            </div>
                        </div>
                        <div className={styles.value}>
                            <div className={styles.valueName}>
                                <h4>Stay Humble⚓</h4>
                            </div>
                            <div className={styles.valueDescription}>
                                <p>It’s easy to get lost in the chase and lose sight of what we truly want in life. Humility keeps you grounded and allows you to appreciate how far you’ve come.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.closeBtn} onClick={func}><FontAwesomeIcon icon={faClose} /></div> */}
            </div>
            
        </>
        
    )
}

export default Values