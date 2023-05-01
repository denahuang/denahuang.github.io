import React, { useState, useEffect } from 'react';

import '../../global.scss';
import styles from './fabcycle.module.scss';

import Authentication from '../../components/Authentication';
import { useUserContext } from '../../firebase/userContext';

import hero from '../../imgs/fabcycle/fabcycle-overview.png';

import WorkIntro from '../../components/WorkIntro';
import WorkButtons from '../../components/WorkButtons';
import Footer from '../../components/Footer';

const Fabcycle = () => {
    const { user, loading, error } = useUserContext();

    // Dark mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 

    const scrollTo = e => {
        e.preventDefault();
        const element = document.getElementById('styleGuide');
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    };
      
    return (
      <div data-theme={theme}>
        {error && <p className="error">{error}</p>}
        {loading ? <></> : <> {user ? 
        <div>
        <div className={styles.container}>
            <WorkButtons />
            <WorkIntro
                title="Revamping FABCYCLE's design system for future branding use while presenting a more memorable impression."
                // tags="BRAND DESIGN, PASSION PROJECT"
                hero={hero}
                duration="July 2022 (2 Weeks)"
                role="Designer"
                tools="Adobe Illustrator, Figma"
                skills="Branding, Logo Design"
                color="113B2E"
                />
            <div className={styles.intro}>
                <div className={styles.content}>
                    <div className={styles.introText}>
                        <h1>FABCYCLE Rebranding</h1>
                        <h4>The Problem</h4>
                        <p>Textile start-up FABCYCLE was looking to create wireframes for their weekly marketing newsletters. It was challenging since FABCYCLE is a start-up and did not yet have an implemented style guide. </p>
                        <h4>The Solution</h4>
                        <p>I decided to complete a mini rebranding case study for FABCYCLE, in hopes of making both the newsletter-template creation and future branding processes more efficient. </p>
                        <button href="" onClick={scrollTo}>View Final Product</button>
                    </div>
                    <div className={styles.introImg}>
                        <img src={require("../../imgs/fabcycle/fabcycle-overview.png")} className={styles.img}  alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.background}>
                <h1>Background</h1>
                <p>FABCYCLE is a Vancouver-based start-up with a mission to divert textile waste from landfills by promoting the sustainable mindset of waste as a resource. They work directly with local apparel manufacturers and divlect any fabric that they cannot use. With an online shop selling these scraps and deadstock, their main marketing strategy is the email newsletters delivered through Klaviyo.</p>
            </div>
            <div className={styles.current}>
                <h1>Current Branding</h1>
                <p>FABCYCLE’s current branding features a smooth ombré of blue, yellow, and pink. However, from a UX perspective, the soft pastel palette would not achieve the accessible contrast ratio of 4.5:1. Here is a quick summary of the current branding: </p>
                <ul>
                    <li>Love the current pastels, but need accessibility!</li>
                    <li>Logo is quite bland; could use a logo symbol or “Wow!” factor</li>
                    <li>Branding is not prominent</li>
                    <li>Needs a style guide!</li>
                </ul>
                <div className={styles.imgCont} >
                    <img src={require("../../imgs/fabcycle/og-1.png")} className={styles.img}  alt="" />
                    <img src={require("../../imgs/fabcycle/og-2.png")} className={styles.img}  alt="" />
                    <img src={require("../../imgs/fabcycle/og-3.png")} className={styles.img}  alt="" />
                    <img src={require("../../imgs/fabcycle/og-4.png")} className={styles.img}  alt="" />
                    <img src={require("../../imgs/fabcycle/og-5.png")} className={styles.img}  alt="" />
                    <img src={require("../../imgs/fabcycle/og-6.png")} className={styles.img}  alt="" />
                    <img src={require("../../imgs/fabcycle/og-7.png")} className={styles.img}  alt="" />
                </div>
            </div>
            <div className={styles.moodboard}>
                <div className={styles.content}>
                    <h1>Moodboard</h1>
                    <img src={require('../../imgs/fabcycle/moodboard.png')} className={styles.img} alt="" />
                </div>
            </div>
            <div className={styles.styleGuide} id="styleGuide">
                <div className={styles.content}>
                    <h1>Style Guide</h1>
                    <img src={require('../../imgs/fabcycle/styleguide.png')} className={styles.img} alt="" />
                </div>
            </div>
            <div className={styles.brandBoard}>
                <div className={styles.content}>
                    <h1>Brand Board</h1>
                    <img src={require('../../imgs/fabcycle/brandboard.png')} className={styles.img} alt="" />
                </div>
            </div>
            <div className={styles.conclusion}>
                <h1>Key Takeaways</h1>
                <div className={styles.container}>
                    <div className={styles.item}>
                    <h4>Pertinence of branding</h4>
                    <p>Branding is pertinent to a business! How will you stand out if your customers can't pick you out from the crowd?</p>
                    </div>
                    <div className={styles.item}>
                    <h4>Start with what you have</h4>
                    <p>You don't always need to start from scratch! FABCYCLE already had a beautiful color scheme; it just needed a little something something to pull everything together.</p>
                    </div>
                    <div className={styles.item}>
                    <h4>Keep it simple</h4>
                    <p>Even if you're a raging maximalist, sometimes keeping it simple is key. Admittedly, my logo can be a little busy (especially at the 100x100 px size).</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div> : <Authentication />} </>}
    </div>
  )
}

export default Fabcycle;
