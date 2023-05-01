import React, { useState, useEffect } from 'react';

import styles from './index.module.scss';

import Resume from '../../assets/DenaHuang_Resume.pdf';

const Footer = () => {


    return (
        <div className={`${styles.footer}`}>
            <div className={styles.content}>
                <hr />
                <div className={styles.text}>
                    <div className={styles.links}>
                        <a href="mailto:d74huang@uwaterloo.ca" className={styles.link} target="_blank" rel="noreferrer"><p>Contact</p></a>
                        <a href={Resume} className={styles.link} target="_blank" rel="noreferrer"><p>Resume</p></a>
                        <a href="https://linkedin.com/in/denahuang" className={styles.link} target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
                        <a href="https://github.com/denahuang" className={styles.link} target="_blank" rel="noreferrer"><p>GitHub</p></a>
                    </div>
                    <div className={styles.sign}>
                        <h4>Dena Huang</h4>
                        <p>Last updated April 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;