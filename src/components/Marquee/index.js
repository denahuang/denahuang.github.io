import React, { useState, useEffect } from 'react';

import styles from './index.module.scss';

const Marquee = () => {
    const text = "Currently open to 2024 internships!"

    return (
        <a className={`${styles.marquee}`} href="mailto:d74huang@uwaterloo.ca" target="_blank" rel="noreferrer">
            <div className={styles.content}>
                <p>{text}</p>
                <p>{text}</p>
            </div>
            <div className={styles.content} aria-hidden="true">
                <p>{text}</p>
                <p>{text}</p>
            </div>
        </a>
    )
}

export default Marquee;
