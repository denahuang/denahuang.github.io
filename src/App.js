import React, { useState, useEffect } from 'react';

import './global.scss';
// import './App.module.scss';
import styles from './App.module.scss';

// import 'react-bootstrap/dist/css/bootstrap.min.css';

import Authentication from "./components/Authentication";
import { useUserContext } from "./firebase/userContext";

import Button from './components/Button';

import { workData } from './data/workData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from './components/ThemeToggle';

import About from './components/About'
import Values from './components/Values';
import Contact from './components/Contact'
import Footer from './components/Footer';

import toggle from './assets/toggle.mp3';
import open from './assets/click.mp3';
import Resume from './assets/DenaHuang_Resume.pdf';

import Marquee from './components/Marquee';


function App() {
  const { user, loading, error } = useUserContext();
  
  // Dark mode
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
      localStorage.setItem('theme', theme);
  }

  // About pop up
  const [aboutOpen, setAboutOpen] = useState(false)
  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
    new Audio(open).play()
  };

  // Values pop up
  const [valuesOpen, setValuesOpen] = useState(false)
  const toggleValues = () => {
    setValuesOpen(!valuesOpen);
    new Audio(open).play()
  };

  // Contact pop up
  const [contactOpen, setContactOpen] = useState(false)
  const toggleContact = () => {
    setContactOpen(!contactOpen);
    new Audio(open).play()
  };

  // Prevent scroll when pop up is open
  useEffect(() => {
    if (aboutOpen || contactOpen || valuesOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }, [aboutOpen, contactOpen, valuesOpen])

  function playToggle() {
    new Audio(toggle).play()
  }
  
  function playOpen() {
    new Audio(open).play()
  }

  return (
    <div data-theme={theme}>
      {error && <p className="error">{error}</p>}
      {loading ? <></> : <> {user ? 
      <div>
      <Marquee className={styles.marquee} />
      <div className={styles.index}>
        <header className={styles.header}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <div className={styles.title}>
                {/* <h1>Hi there👋 <br />I'm Dena!</h1> */}
                <div>
                  <h2>Hi there👋</h2>
                  <h1>I'm Dena!</h1>
                </div>
                <ThemeToggle theme={theme} onClick={() => {toggleTheme(); playToggle()}} />
                {/* https://i.pinimg.com/474x/16/24/8f/16248f2cd863cddfe411d26120ad2d9f.jpg */}
              </div>
              <p>I'm a <span style={{ fontWeight:600}}>Product Designer</span> passionate about creating intuitive experiences that inspire and empower.</p>
              <p>Currently @Rogers Communications</p>
              {/* <p>Currently @Rogers Communications<br />Previously @Real Adulting 101, @NVISION</p> */}
            </div>
            <div className={styles.more}>
              <div className={styles.links}>
                {/* <a href="https://linkedin.com/in/denahuang" target="_blank" rel="noreferrer">LinkedIn</a> */}
                <a href="/gallery">Gallery</a>
                <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
              </div>
              <div className={styles.buttons}>
                <Button text="Learn more about me🌙" func={toggleAbout} />
                <Button text="Discover my values✨" func={toggleValues} />
                <Button text="Get in touch💫" func={toggleContact} />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.workContainer}>
          {workData.map((work, index) => {
            if (work.selected) {
              return (
                <div className={`${styles.work} work`}>
                  <a href={work.link} >
                    <div className={styles.imgContainer}><img src={work.img} alt="" /></div>
                    <p>{work.title}</p>
                    <p className={`${styles.tags} ${work.color}`}>{work.tags}</p>
                  </a>
                </div>
              )
            }
          })}
        </div>

        {aboutOpen && <About func={toggleAbout} /> }
        {valuesOpen && <Values func={toggleValues} /> }
        {contactOpen && <Contact func={toggleContact} /> }  
      </div>
      <Footer />
      </div> : <Authentication />} </>}
      
    </div>
  );
}

export default App;
