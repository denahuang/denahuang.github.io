import React, { useState, useEffect } from 'react';

import '../../global.scss';
import styles from './rbc.module.scss';

import Authentication from '../../components/Authentication';
import { useUserContext } from '../../firebase/userContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons'

import WorkIntro from '../../components/WorkIntro';
// import WorkButtons from '../../components/WorkButtons';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';

import hero from '../../imgs/rbc/rbc.png';

import Navbar from '../../components/Navbar';
import BackToTop from '../../components/BackToTop';


const Rbc = () => {
    const { user, loading, error } = useUserContext();

    // Dark mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
    
      let sections = document.querySelectorAll('section');
      let navLinks = document.querySelectorAll('header a');
      window.onscroll = () => {
          sections.forEach(sec => {
              let top = window.scrollY;
              let offset = sec.offsetTop - 150;
              let height = sec.offsetHeight;
              let id = sec.getAttribute('id');
              if(top >= offset && top < offset + height) {
                  navLinks.forEach(links => {
                      links.classList.remove('active');
                      document.querySelector('header a[href*=' + id + ']').classList.add('active');
                  });
              };
          });
      };
    
    return (
        <div data-theme={theme}>
        {error && <p className="error">{error}</p>}
        {loading ? <></> : <> {user ? 
        <div className={styles.body}>
            <Navbar/>
            <div className={styles.wrapper}>
                <div className={styles.workNav}>
                    <BackToTop />
                    <header className={styles.sections}>
                    {/* <a href="#context" class="active">Context</a>
                    <a href="#research">Research</a>
                    <a href="#define">Define</a>
                    <a href="#ideation">Ideation</a>
                    <a href="#designs">Designs</a>
                    <a href="#prototype1">Prototype #1</a>
                    <a href="#solution">Solution</a>
                    <a href="#takeaways">Takeaways</a> */}
                    </header>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1 className={styles.h1}>Royal Bank of Canada (RBC)</h1>
                        <p className={styles.subtitle}>Racing against time to promote Distinguished RBC-ers!</p>
                    </div>
                    
                    <div className={styles.intro}>
                        <div className={styles.text}>
                            <p>I spent my Fall '23 at RBC's Technology and Operations Experience team in Toronto as a Communications Analyst and Designer. Across my 4 months with the team, I developed my skills in areas such as corporate communication, copywriting, and brand design.</p>
                            <a href="mailto:d74huang@uwaterloo.ca" target="_blank" rel="noreferrer" className={styles.banner}>
                            <p>The work I’ve done at RBC is under NDA. If you’d like to hear more about my experience, feel free to send me a message!</p>
                            </a>
                        </div>
                        <div className={styles.img}>
                            <img src={require("../../imgs/rbc/rbc.png")} />
                        </div>
                    </div>
                    
                    <section id="context" className={styles.block}>
                        <div className={styles.blockTitle}>
                            <p>Case Study Coming Soon!</p>
                        </div>
                        {/* <div className={styles.blockContent}>
                            <p className={styles.text3}>Rogers 5G Create Lab was approached by a municipal fire department to innovate and optimize their firefighting process by utilizing 5G technology. As the product designer, I conducted UX research to design a hi-fidelity prototype and developed a design guideline in addition. </p>
                            <div>
                            <a href="#solution" className={styles.button}>Jump to Solution!</a>
                            </div>
                            
                        </div> */}
                    </section>
                    
                </div>
            </div>
            <Footer />
        </div> : <Authentication />} </>}
    </div>
  )
}

export default Rbc;
