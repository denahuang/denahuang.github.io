import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';

import Resume from '../../assets/DenaHuang_Resume.pdf';

import ThemeToggle from '../ThemeToggle';
import toggle from '../../assets/toggle.mp3';



const Navbar = ({}) => {

    const [hidden, setHidden] = useState(true);

    // Dark mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
    
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', theme);
    }

    function playToggle() {
        new Audio(toggle).play()
    }

    
    return (
        <div className={styles.navbar}>
            {/* <ThemeToggle theme={theme} onClick={() => {toggleTheme(); playToggle()}} /> */}
            <div className={styles.name}>
                <NavLink to="/">
                    <p>Dena Huang</p>
                </NavLink>
            </div>
            <div className={styles.links}>
                {/* <NavLink to="/" className={`${styles.item}`}>
                    <p>Work</p>
                </NavLink> */}
                <NavLink to="/about" className={`${styles.item}`}>
                    <p>About</p>
                </NavLink>
                <NavLink to={Resume} target="_blank" rel="noreferrer" className={`${styles.item}`}>
                    <p>Resume</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;