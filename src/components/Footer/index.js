import React, { useState, useEffect } from 'react';

import styles from './index.module.scss';

import { NavLink } from 'react-router-dom';
import Resume from '../../assets/DenaHuang_Resume.pdf';

import { useCallback } from 'react';

const Footer = () => {
    let todaysDate = new Date();
    let day = todaysDate.getDay();
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let textToCopy = "dena.huang@uwaterloo.ca";

    // Email reveal
    const [emailOpen, setEmailOpen] = useState(false)
    const toggleEmail = () => {
        setEmailOpen(!emailOpen);
    };
    const escFunction = useCallback((event) => {
        if (event.key === "r" || event.key === "R") {
            toggleEmail();
        }
      }, []);
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    const [showText1, setShowText1] = useState(true)
    const handleMouseEnter1 = e => {
        setShowText1(true)
    }
    const handleMouseLeave1 = e => {
        setShowText1(false)
    }

    return (
        <div className={`${styles.footer}`}>
            <div className={styles.wrapper}>
            <div className={styles.left}>
                <NavLink to="/" className={styles.link} rel="noreferrer">
                <svg className={styles.logo} viewBox="0 0 692 645" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M434.623 145.752C410.913 226.381 295.74 433.312 24.7193 616.005C57.1874 569.494 51.9523 543.966 45.363 511.834C43.5625 503.054 41.6608 493.78 40.3997 483.451C44.0842 406.395 137.347 352.645 180.162 407.043C200.264 423.575 218.921 398.527 206.335 377.617C176.852 328.635 76.0606 338.539 25.2925 435.878C2.92474 360.269 6.44464 344.224 8.92234 332.93C9.15716 331.859 9.38262 330.832 9.5758 329.8C63.1395 247.857 154.327 233.172 227.876 299.992C260.369 334.982 294.383 299.176 252.477 268.392C181.546 216.287 97.6006 198.215 0 298.869C8.22 211.5 46.0089 155.444 55.9535 144.017C139.809 73.1816 248.163 149.275 283.546 193.255C330.752 251.931 366.997 215.305 303.798 154.426C235.586 88.7184 123.318 76.9852 88.5153 91.5355C282.65 -93.1876 444.806 41.9059 434.623 145.752ZM659.177 440.111C657.033 466.7 645.317 488.826 616.56 521.822C629.896 454.802 575.665 353.747 526.913 314.035C513.039 303.509 500.17 297.739 487.946 292.257C470.843 284.588 455 277.484 439.427 258.708C404.235 227.648 454.573 145.875 508.234 145.742C540.944 145.661 634.427 156.824 679.773 273.551C701.451 329.355 686.262 383.532 679.806 406.564C679.093 409.104 678.487 411.266 678.049 413.009C670.383 385.33 643.979 311.491 619.992 296.5C596.434 281.777 584.781 294.825 597.834 316.067C600.412 320.263 604.44 325.963 609.229 332.74C628.685 360.273 660.709 405.591 659.177 440.111ZM503.94 210.163C485.368 234.531 566.218 259.398 556.422 237.535C547.982 218.698 512.263 194.205 503.94 210.163ZM451.805 622.953L451.806 622.953C472.261 616.775 507.595 606.103 511.994 595.878C537.748 536.015 521.792 440.594 445.517 373.707C420.786 355.396 444.007 343.477 459.259 357.686C534.085 427.403 555.288 512.87 529.822 588.938C531.867 587.674 534.057 586.366 536.336 585.006C549.273 577.282 565.092 567.838 573.606 554.717C606.206 504.469 582.867 422.944 517.691 350.723C480.066 312.155 446.796 291.193 420.6 290.838C394.404 290.482 354.384 323.962 363.991 358.292C367.312 370.159 377.914 378.373 391.517 388.912C408.56 402.118 430.314 418.972 448.357 451.235C469.013 488.17 474.872 572.781 439.732 626.753C442.24 625.842 446.523 624.549 451.796 622.956L451.804 622.954L451.805 622.953ZM328.072 371.876L328.072 371.876C319.13 383.1 309.265 395.482 299.497 405.646C279.326 428.054 282.565 447.031 296.991 469.969C300.98 476.312 307.945 482.677 315.533 489.609L315.533 489.61C323.661 497.037 332.502 505.115 339.162 514.517C359.683 543.489 364.798 599.382 295.87 644.624C311.418 643.56 323.449 643.277 333.843 643.033H333.845C355.137 642.533 369.563 642.194 393.295 635.628C428.649 613.246 445.759 543.685 438.881 522.28C423.807 551.18 413.793 553.442 408.829 550.852C395.145 543.716 387.567 523.299 397.471 514.256L398.141 513.644C408.173 504.487 425.611 488.571 426.079 481.097C426.577 473.136 420.01 465.114 413.004 456.555C407.901 450.322 402.565 443.803 399.556 436.817C389.384 456.32 374.746 462.259 365.887 463.277C347.191 465.426 341.906 447.387 347.824 430.852C350.907 422.238 356.396 419.102 360.617 416.691C364.499 414.474 367.309 412.869 366.19 408.179C365.057 403.435 360.378 399.553 355.098 395.173C345.796 387.457 334.627 378.191 337.678 359.93C334.641 363.631 331.421 367.672 328.072 371.876ZM261.423 447.148C217.686 494.251 124.266 575.209 51.1908 622.347C66.8882 628.429 125.898 639.796 212.65 642.281C307.98 645.012 346.88 538.557 278.566 502.927C255.733 491.019 257.774 475.418 260.436 455.067L260.437 455.063L260.437 455.058C260.772 452.497 261.117 449.861 261.423 447.148ZM216.189 570.067C230.96 577.05 258.659 571.038 252.919 541.237C245.743 503.984 195.07 552.023 216.189 570.067Z" fill="url(#paint0_linear_2328_1650)"/>
                    <defs>
                      <linearGradient id="paint0_linear_2328_1650" x1="82.5395" y1="72.0547" x2="600.804" y2="563.444" gradientUnits="userSpaceOnUse">
                      <stop offset="0.1" stop-color="#643277"/>
                      <stop offset="0.35" stop-color="#DB6879"/>
                      <stop offset="0.65" stop-color="#F8A573"/>
                      <stop offset="0.9" stop-color="#F5E060"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </NavLink>
                {/* <p>Last updated June 2024</p> */}
                <p className={styles.inscription}>Made with <span >&lt;&gt;</span>by me</p>
                 {/* <p className={styles.inscription}>Made with 
                <div className={styles.badge}>
                    <span onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>&lt;&gt;</span>
                    
                    {showText1 && <div className={styles.leaflet}>
                        <p>Last updated June 2024</p>
                        <svg className={styles.triangle}viewBox="0 0 174 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M87 44.4371L2.05499 0.5H171.945L87 44.4371Z" fill="#D9D9D9" stroke="black"/>
                        </svg>

                    </div>}
                </div>
                 by me</p> */}
                
            </div>
            <div className={styles.right}>
                <div className={styles.links}>
                    {!emailOpen && <p className={styles.link} target="_blank" rel="noreferrer">Press <span className={styles.key} onMouseDown={toggleEmail}/> to reveal email</p>}
                    {emailOpen && <div className={styles.email}><NavLink to="mailto:dena.huang@uwaterloo.ca" className={`${styles.link}`} >dena.huang@uwaterloo.ca </NavLink><button className={styles.copyIcon} onClick={() => navigator.clipboard.writeText('dena.huang@uwaterloo.ca')}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" />
                        </svg></button></div>}
                    {/* <NavLink to={Resume} target="_blank" rel="noreferrer" className={`${styles.link} `} >Resume</NavLink> */}
                    <NavLink to="https://linkedin.com/in/denahuang" className={styles.link} target="_blank" rel="noreferrer">LinkedIn</NavLink>
                    <NavLink to="https://github.com/denahuang" className={styles.link} target="_blank" rel="noreferrer">GitHub</NavLink>
                    <p className={styles.inscription}>Enjoy the rest of your {weekdays[day]}!</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;