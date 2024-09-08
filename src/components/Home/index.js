import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';

import Resume from '../../assets/DenaHuang_Resume.pdf';

import Authentication from "../Authentication";
import { useUserContext } from "../../firebase/userContext";

import ThemeToggle from '../ThemeToggle';
import toggle from '../../assets/toggle.mp3';


const Home = ({}) => {
    const { user, loading, error } = useUserContext();

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

    // leaflet
    const [showText1, setShowText1] = useState(false)
    const handleMouseEnter1 = e => {
        setShowText1(true)
    }
    const handleMouseLeave1 = e => {
        setShowText1(false)
    }
    const [showText2, setShowText2] = useState(false)
    const handleMouseEnter2 = e => {
        setShowText2(true)
    }
    const handleMouseLeave2 = e => {
        setShowText2(false)
    }

    return (
            <div className={styles.gridWrapper}>
            <div className={`${styles.box} ${styles.grid1}`}>
                <div className={styles.text}>
                    <h1>Passionate about <br />sustaining humanity in HCI <br />through intuitive experiences</h1>
                    <p>Prev @Rogers, @RBC</p>
                    <p>TO DO: bento box design + animations, </p>
                    <p>maybe change "last updated" to pop up in arrows</p>
                </div>
                <div className={styles.badgeContainer}>
                    <div className={styles.badge}>
                        <img src={require("../../imgs/uwaterloo-logo.png").default} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}></img>
                        {showText1 && <div className={styles.leaflet}>
                            <p>I’m currently a third-year Design and Communications student at the University of Waterloo with a minor in Computer Science!</p>
                            <div className={styles.triangleOut}></div>
                            <div className={styles.triangle}></div>
                        </div>}
                    </div>
                    <div className={styles.badge}>
                        <img src={require("../../imgs/toronto-flag.svg").default} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}/>
                        {showText2 && <div className={`${styles.leaflet} ${styles.leaflet2}`}>
                            <p>I'm a Product Designer based in Toronto, Canada!</p>
                            <div className={styles.triangleOut}></div>
                            <div className={styles.triangle}></div>
                        </div>}
                    </div>
                    {/* {showText && <p className={styles.leaflet}>I’m currently a third-year Design and Communications student at the University of Waterloo with a minor in Computer Science!</p>} */}
                </div>
            </div>
            <NavLink to=""  className={`${styles.box} ${styles.grid2}`}>
                <div className={styles.gridElement}>
                    {/* <p>me!</p> */}
                    {/* <img src={require("../../imgs/dena-new.png")} /> */}
                </div>
            </NavLink>
            <NavLink to=""  className={`${styles.box} ${styles.grid3}`}>
                <div className={styles.gridElement}>
                    <p>Interested? <br />Let's Connect!</p>
                    <p>My Design Process</p>
                </div>
            </NavLink>
            <NavLink to="/work/machimachi"  className={`${styles.box} ${styles.grid4}`}>
                <div className={styles.gridElement}>
                    <p>Bridging the gap between <br />boba-consumers and  boba-producers <span>&#8226; Mobile Design</span></p>
                    {/* <div className={styles.tags}>
                        <div className={styles.tag}>Product Design</div>
                        <div className={styles.tag}>UX Research</div>
                        <div className={styles.tag}>tag</div>
                    </div> */}
                    <div className={styles.image}>
                        <img src={require("../../imgs/machimachi/machimachi.png")} />
                    </div>
                </div>
            </NavLink>
            <NavLink to="/work/rogers"  className={`${styles.box} ${styles.grid5}`}>
                <div className={styles.gridElement}>
                    <p>Leveraging 5G tech for first responders <span>&#8226; Tablet Design</span></p>
                    {/* <div className={styles.tags}>
                        <div className={styles.tag}>Product Design</div>
                        <div className={styles.tag}>UX Research</div>
                        <div className={styles.tag}>tag</div>
                    </div> */}
                    <div className={styles.image}>
                        <img src={require("../../imgs/rogers/rogers.png")} />
                        <div></div>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/work/rbc"  className={`${styles.box} ${styles.grid6}`}>
                <div className={styles.gridElement}>
                    <p>RBC <span>&#8226; Print Design</span></p>
                    <div className={styles.image}>
                        <img src={require("../../imgs/rbc/rbc.png")} />
                    </div>
                </div>
            </NavLink>
            <NavLink to="/gallery"  className={`${styles.box} ${styles.grid7}`}>
                <div className={styles.gridElement}>
                    <p>UI Design Gallery</p>
                </div>
            </NavLink>
            <NavLink to="/"  className={`${styles.box} ${styles.grid8}`}>
                <div className={styles.gridElement}>
                    <p>Dena’s Garden</p>
                </div>
            </NavLink>
            <NavLink to="/"  className={`${styles.box} ${styles.grid9}`}>
                <div className={styles.gridElement}>
                    <p>Other</p>
                    <div className={styles.image}>
                        <img src={require("../../imgs/spark/spark.png")} />
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Home;