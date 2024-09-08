import React, { useState, useEffect } from 'react';

import './global.scss';
// import './App.module.scss';
import styles from './App.module.scss';

// import 'react-bootstrap/dist/css/bootstrap.min.css';

import Authentication from "./components/Authentication";
import { useUserContext } from "./firebase/userContext";

// import Button from './components/Button';

// import { workData } from './data/workData';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from './components/ThemeToggle';

// import About from './components/About'
// import Values from './components/Values';
// import Contact from './components/Contact'
// import Footer from './components/Footer';

import toggle from './assets/toggle.mp3';
import open from './assets/click.mp3';
// import Resume from './assets/DenaHuang_Resume.pdf';

// import Marquee from './components/Marquee';

import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  const { user, loading, error } = useUserContext();
  
  // Dark mode
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
      localStorage.setItem('theme', theme);
  }

  const [showText1, setShowText1] = useState(false)
  const handleMouseEnter1 = e => {
      setShowText1(true)
  }
  const handleMouseLeave1 = e => {
      setShowText1(false)
  }

  

  return (
    <div data-theme={theme}>
      {error && <p className="error">{error}</p>}
      {loading ? <></> : <> {user ? 
        <div className={styles.body}>
          {/* <div className={styles.themeToggle}><ThemeToggle  theme={theme} onClick={() => {toggleTheme(); playToggle()}} /></div> */}
          <Navbar />
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.hero}>
                <div className={styles.logo}>
                  <svg viewBox="0 0 692 645" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                <div className={styles.text}>
                  <div className={styles.row}>
                    <p>Designer.</p>
                    <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H9.28421C14.4117 0 18.5684 4.15668 18.5684 9.28421V18.5684H9.28421C4.15668 18.5684 0 14.4117 0 9.28421V0Z" fill="#68CBC8"/>
                    <path d="M42 23.4316H32.7158C27.5883 23.4316 23.4316 27.5883 23.4316 32.7158V42H32.7158C37.8433 42 42 37.8433 42 32.7158V23.4316Z" fill="#68CBC8"/>
                    <path d="M30.2842 0H42V11.7158C42 16.8432 37.8432 21 32.7158 21H21C29.3119 20.2928 31.4637 13.7053 31.5 10.5C23.1881 11.2072 21.0363 17.7947 21 21V9.28421C21 4.15683 25.1568 0 30.2842 0Z" fill="#68CBC8"/>
                    <path d="M11.7158 21H0V32.7158C0 37.8433 4.15668 42 9.28421 42H21C12.6884 41.2926 10.5368 34.7053 10.5 31.5C18.8116 32.2074 20.9632 38.7947 21 42V30.2842C21 25.1567 16.8433 21 11.7158 21Z" fill="#68CBC8"/>
                    </svg>
                    <p>Cultivator.</p>
                  </div>
                  <div className={styles.row}>
                    <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9903 19.2117C37.0763 6.47664 29.0333 -4.24753 20.9903 1.67355C12.9474 -4.24753 4.90441 6.47664 20.9903 19.2117Z" fill="#E2EBBE"/>
                    <path d="M19.2117 21.0018C6.47664 4.9159 -4.24753 12.9589 1.67355 21.0018C-4.24753 29.0448 6.47664 37.0878 19.2117 21.0018Z" fill="#E2EBBE"/>
                    <path d="M20.9903 22.7883C37.0763 35.5234 29.0333 46.2475 20.9903 40.3265C12.9474 46.2475 4.90441 35.5234 20.9903 22.7883Z" fill="#E2EBBE"/>
                    <path d="M22.7883 21.0018C35.5234 4.9159 46.2475 12.9589 40.3265 21.0018C46.2475 29.0448 35.5234 37.0878 22.7883 21.0018Z" fill="#E2EBBE"/>
                    </svg>
                    <p>Researcher.</p>
                    <p>Empath.</p>
                  </div>
                  <div className={styles.row}>
                    <p>Storyteller.</p>
                    <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.7076 11.5251C25.8765 7.75726 26.8738 0.221636 21.0005 0C15.1271 0.221636 16.1245 7.75726 19.2934 11.5251C21.1113 14.1847 20.8388 17.5487 21.0005 20.9446C21.1622 17.5487 20.8897 14.1847 22.7076 11.5251Z" fill="#F5E060"/>
                      <path d="M15.5077 13.0933C15.0842 8.1883 10.461 2.15458 6.15115 6.15094C2.15478 10.4607 8.18851 15.084 13.0935 15.5075C16.2596 16.1027 18.4456 18.6741 20.9612 20.961C18.6743 18.4454 16.1029 16.2594 15.5077 13.0933Z" fill="#F5E060"/>
                      <path d="M28.908 15.5073C33.813 15.0838 39.8467 10.4605 35.8504 6.15072C31.5406 2.15435 26.9173 8.18808 26.4938 13.093C25.8986 16.2592 23.3272 18.4452 21.0403 20.9608C23.5559 18.6739 25.7419 16.1024 28.908 15.5073Z" fill="#F5E060"/>
                      <path d="M30.4749 22.7072C34.2427 25.876 41.7784 26.8734 42 21C41.7784 15.1267 34.2427 16.1241 30.4749 19.2929C27.8153 21.1109 24.4513 20.8383 21.0554 21C24.4513 21.1618 27.8153 20.8892 30.4749 22.7072Z" fill="#F5E060"/>
                      <path d="M22.7076 30.4749C25.8765 34.2427 26.8738 41.7784 21.0005 42C15.1271 41.7784 16.1245 34.2427 19.2934 30.4749C21.1113 27.8153 20.8388 24.4513 21.0005 21.0554C21.1622 24.4513 20.8897 27.8153 22.7076 30.4749Z" fill="#F5E060"/>
                      <path d="M28.908 26.4927C33.813 26.9162 39.8467 31.5395 35.8504 35.8493C31.5406 39.8456 26.9173 33.8119 26.4938 28.907C25.8986 25.7408 23.3272 23.5548 21.0403 21.0392C23.5559 23.3261 25.7419 25.8975 28.908 26.4927Z" fill="#F5E060"/>
                      <path d="M15.5077 28.9067C15.0842 33.8117 10.461 39.8454 6.15115 35.8491C2.15478 31.5393 8.18851 26.916 13.0935 26.4925C16.2596 25.8973 18.4456 23.3259 20.9612 21.039C18.6743 23.5546 16.1029 25.7406 15.5077 28.9067Z" fill="#F5E060"/>
                      <path d="M11.5251 22.7072C7.75726 25.876 0.221636 26.8734 0 21C0.221636 15.1267 7.75726 16.1241 11.5251 19.2929C14.1847 21.1109 17.5487 20.8383 20.9446 21C17.5487 21.1618 14.1847 20.8892 11.5251 22.7072Z" fill="#F5E060"/>
                      <path d="M23.0501 20.9446C23.0501 22.1074 22.1074 23.0501 20.9446 23.0501C19.7817 23.0501 18.839 22.1074 18.839 20.9446C18.839 19.7817 19.7817 18.839 20.9446 18.839C22.1074 18.839 23.0501 19.7817 23.0501 20.9446Z" fill="#F5E060"/>
                      </svg>
                    <p>Artist.</p>
                    <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.6082 0H0V10.6082C0 16.3475 4.65255 21 10.3918 21H13.1599C9.49134 19.3958 6.92783 15.7344 6.92783 11.4742V6.92783H11.4742C15.7344 6.92783 19.3958 9.49134 21 13.1599V10.3918C21 4.65255 16.3475 0 10.6082 0Z" fill="#F8A573"/>
                      <path d="M10.6082 42H0V31.3918C0 25.6525 4.65255 21 10.3918 21H13.1599C9.49134 22.6042 6.92783 26.2656 6.92783 30.5258V35.0722H11.4742C15.7344 35.0722 19.3958 32.5087 21 28.8401V31.6082C21 37.3475 16.3475 42 10.6082 42Z" fill="#F8A573"/>
                      <path d="M31.3918 0H42V10.6082C42 16.3475 37.3475 21 31.6082 21H28.8401C32.5087 19.3958 35.0722 15.7344 35.0722 11.4742V6.92783H30.5258C26.2656 6.92783 22.6042 9.49134 21 13.1599V10.3918C21 4.65255 25.6525 0 31.3918 0Z" fill="#F8A573"/>
                      <path d="M31.3918 42H42V31.3918C42 25.6525 37.3475 21 31.6082 21H28.8401C32.5087 22.6042 35.0722 26.2656 35.0722 30.5258V35.0722H30.5258C26.2656 35.0722 22.6042 32.5087 21 28.8401V31.6082C21 37.3475 25.6525 42 31.3918 42Z" fill="#F8A573"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2371 11.4742H11.4742V16.2371C11.4742 18.8676 13.607 21 16.2371 21C13.607 21 11.4742 23.1324 11.4742 25.7629V30.5258H16.2371C18.8672 30.5258 21 28.3934 21 25.7629C21 28.3934 23.1328 30.5258 25.7629 30.5258H30.5258V25.7629C30.5258 23.1324 28.393 21 25.7629 21C28.393 21 30.5258 18.8676 30.5258 16.2371V11.4742H25.7629C23.1328 11.4742 21 13.6066 21 16.2371C21 13.6066 18.8672 11.4742 16.2371 11.4742ZM21 24.8969C23.1514 24.8969 24.8969 23.1523 24.8969 21C24.8969 18.8477 23.1514 17.1031 21 17.1031C18.8486 17.1031 17.1031 18.8477 17.1031 21C17.1031 23.1523 18.8486 24.8969 21 24.8969Z" fill="#F8A573"/>
                      </svg>
                  </div>
                  <div className={styles.row}>
                    <svg viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.9992 0C24.4914 0 23.4883 1.67188 21.8164 1.50404C20.1445 1.67188 19.1414 0 16.6335 0C12.621 0.334377 14.7945 16.3852 21.8164 19.8948C28.8383 16.3852 31.0118 0.334377 26.9992 0Z" fill="#DB6879"/>
                      <path d="M43.5789 19.7698C42.7941 17.388 40.8923 16.9584 40.5284 15.318C39.8458 13.7826 41.1198 12.3067 40.3349 9.92482C38.7616 6.2185 24.1973 13.3059 23.0615 21.0735C28.5924 26.6443 44.5171 23.6854 43.5789 19.7698Z" fill="#DB6879"/>
                      <path d="M0.0397527 19.7698C0.824588 17.388 2.72642 16.9584 3.09024 15.318C3.77287 13.7826 2.4989 12.3067 3.28374 9.92482C4.85705 6.2185 19.4214 13.3059 20.5572 21.0735C15.0263 26.6443 -0.898403 23.6854 0.0397527 19.7698Z" fill="#DB6879"/>
                      <path d="M13.1933 41.7827C11.1856 40.28 11.3843 38.3404 9.94519 37.4729C8.70726 36.3368 6.90235 37.0742 4.8946 35.5715C1.88257 32.8994 13.2404 21.3516 20.9651 22.7495C24.4838 29.7668 16.6061 43.9193 13.1933 41.7827Z" fill="#DB6879"/>
                      <path d="M30.3235 41.7827C32.3313 40.28 32.1325 38.3404 33.5716 37.4729C34.8095 36.3368 36.6144 37.0742 38.6222 35.5715C41.6342 32.8994 30.2764 21.3516 22.5517 22.7495C19.033 29.7668 26.9107 43.9193 30.3235 41.7827Z" fill="#DB6879"/>
                      </svg>
                    <p>Innovator.</p>
                    <svg viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.8015 21.9107C33.4618 15.9349 27.7948 4.70542 23.0492 0C16.7191 5.03636 15.4011 10.4942 15.6431 12.8334C20.8647 14.1788 23.5813 19.8057 23.8015 21.9107Z" fill="#643277"/>
                      <path d="M24.882 23.4347C33.8317 30.43 42.4061 21.227 45.1785 15.1463C38.2626 10.9502 32.6859 11.6025 30.575 12.639C31.1198 18.0036 26.7807 22.4997 24.882 23.4347Z" fill="#643277"/>
                      <path d="M23.4207 24.8164C19.5146 35.4829 30.9076 40.8137 37.546 41.583C39.4134 33.7123 37.0788 28.606 35.4436 26.9159C30.5061 29.0831 24.8941 26.3358 23.4207 24.8164Z" fill="#643277"/>
                      <path d="M21.9718 24.0351C10.6593 23.006 8.44043 35.3872 9.40569 42C17.4919 41.7787 21.8253 38.2083 23.0376 36.1933C19.6725 31.98 20.8828 25.8499 21.9718 24.0351Z" fill="#643277"/>
                      <path d="M21.7863 22.1974C18.9041 11.2099 6.5068 13.337 0.617188 16.495C3.57717 24.0232 8.4091 26.883 10.7165 27.3371C13.5331 22.7391 19.7092 21.791 21.7863 22.1974Z" fill="#643277"/>
                      </svg>
                    <p>Observer.</p>
                  </div>
                </div>
                
              </div>
              <div className={styles.intro}>
                <div className={`${styles.box} ${styles.box1}`}>
                  <p className={styles.title}>Previously UX Designer <br /> @ Rogers Communications</p>
                  <p className={styles.para}>B2B co-creation with leading industry partners in the 5G Innovation Lab.</p>
                  <svg viewBox="0 0 515 515" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M424.629 453.419C405.793 459.567 379.052 465.813 345.578 465.813C256.085 465.813 151.27 395.253 100.424 275.311C83.8327 296.976 70.9504 332.891 70.9504 369.684C70.9504 444.83 141.315 515 257.939 515C329.377 515 386.177 486.21 424.629 453.419ZM61.5814 424.629C55.433 405.793 49.187 379.052 49.187 345.578C49.187 256.085 119.747 151.172 239.689 100.424C218.023 83.8327 182.109 70.8528 145.219 70.8528C70.072 70.8528 0 141.218 0 257.842C0 329.377 28.79 386.177 61.5814 424.629ZM90.3714 61.5814C109.207 55.433 135.948 49.187 169.422 49.187C258.915 49.187 363.828 119.747 414.576 239.689C431.167 218.023 444.05 182.109 444.05 145.219C444.147 70.072 373.782 0 257.158 0C185.623 0 128.823 28.79 90.3714 61.5814ZM453.419 90.3714C486.21 128.726 515 185.623 515 257.158C515 373.782 444.928 444.147 369.781 444.147C332.891 444.147 296.976 431.167 275.311 414.576C395.253 363.73 465.813 258.818 465.813 169.422C465.813 135.948 459.567 109.207 453.419 90.3714Z" fill="white"/>
                    </svg>
                </div>
                <video width="auto"  muted autoPlay loop >
                  <source src={require("./imgs/memoji.MOV")} type="video/mp4"/>
                </video>
                <div className={styles.badge}>
                    <img src={require("./imgs/uwaterloo-logo.png")} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}></img>
                    {showText1 && <div className={styles.leaflet}>
                        <p>I’m currently a third-year Design and Communications student at the University of Waterloo with a minor in Computer Science!</p>
                        {/* <div className={styles.triangleOut}></div>
                        <div className={styles.triangle}></div> */}
                        <svg className={styles.triangle}viewBox="0 0 174 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M87 44.4371L2.05499 0.5H171.945L87 44.4371Z" fill="#D9D9D9" stroke="black"/>
                        </svg>

                    </div>}
                </div>
                
                <div className={`${styles.box} ${styles.box2}`}>
                  <p className={styles.title}>Passionate about sustaining humanity in HCI through intuitive experiences</p>
                  {/* <p className={styles.para}></p> */}
                </div>
                <div className={`${styles.box} ${styles.box3}`}>
                  <p className={styles.title}>4+ Internships</p>
                  <p className={styles.para}>@ RBC, Rogers, and more!</p>
                </div>
                <div className={`${styles.box} ${styles.box4}`}>
                  <p className={styles.title}>Currently Web & Brand Designer @ FTT</p>
                  <p className={styles.para}>Owning the brand direction and development of research collective website. </p>
                  <img src={require("./imgs/ftt.png")} />
                </div>
              </div>

              <div className={styles.work} id="work">
                <NavLink to="/work/rogers" className={`${styles.box} ${styles.box1}`}>
                  <p className={styles.title}>Leveraging 5G tech to redefine first-responders’ experience</p>
                  <div className={styles.tags}>
                    <div className={styles.tag}><p>Internship</p></div>
                    <div className={styles.tag}><p>Tablet Design</p></div>
                    <div className={styles.tag}><p>B2B Innovation Consulting</p></div>
                  </div>

                </NavLink>
                <div className={styles.row}>
                <NavLink to="/work/rbc" className={`${styles.box} ${styles.box2}`}>
                  <p className={styles.title}>Racing against time to promote Distinguished RBC-ers</p>
                  <div className={styles.tags}>
                    <div className={styles.tag}><p>Internship</p></div>
                    <div className={styles.tag}><p>Tablet Design</p></div>
                    <div className={styles.tag}><p>B2B Innovation Consulting</p></div>
                  </div>
                </NavLink>
                <NavLink to="/work/machimachi" className={`${styles.box} ${styles.box3}`}>
                  <p className={styles.title}>Bridging the gap between boba-consumers and boba-producers</p>
                  <div className={styles.tags}>
                    <div className={styles.tag}><p>Internship</p></div>
                    <div className={styles.tag}><p>Tablet Design</p></div>
                    <div className={styles.tag}><p>B2B Innovation Consulting</p></div>
                  </div>
                </NavLink>
                </div>
                <div className={styles.row}>
                <NavLink to="/work/nyanjump" className={`${styles.box} ${styles.box4}`}>
                  <p className={styles.title}>Developing a Doodle Jump-inspired game <br />featuring the iconic Nyan Cat</p>
                  <div className={styles.tags}>
                    <div className={styles.tag}><p>Internship</p></div>
                    <div className={styles.tag}><p>Tablet Design</p></div>
                    <div className={styles.tag}><p>B2B Innovation Consulting</p></div>
                  </div>
                </NavLink>
                <NavLink to="/gallery" className={`${styles.box} ${styles.box5}`}>
                  <p className={styles.title}>Dena's Garden</p>
                  <div className={styles.tags}>
                    <div className={styles.tag}><p>Design</p></div>
                    <div className={styles.tag}><p>& then some</p></div>
                  </div>
                </NavLink>
                </div>
              </div>
            </div>
            
            
          </div>
          <Footer className={styles.footer} />
        </div>
       : <Authentication />} </>}
      
    </div>
  );
}

export default App;
