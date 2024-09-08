import React, { useState, useEffect } from 'react';

import '../../global.scss';
import styles from './nyanjump.module.scss';

import Authentication from '../../components/Authentication';
import { useUserContext } from '../../firebase/userContext';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import FlipCard from '../../components/Work/NyanJump/FlipCard';
import WorkIntro from '../../components/WorkIntro';
// import WorkButtons from '../../components/WorkButtons';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';

import hero from '../../imgs/nyanjump/nyanjump.png';

import Navbar from '../../components/Navbar';
import BackToTop from '../../components/BackToTop';


const NyanJump = () => {
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
            <a href="#context" class="active">Context</a>
            <a href="#inspiration">Inspiration</a>
            <a href="#moodboard">Moodboard</a>
            <a href="#elements">Elements</a>
            <a href="#game">Try it out!</a>
            <a href="#takeaways">Takeaways</a>
          </header>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1 className={styles.h1}>Nyan Jump</h1>
            <p className={styles.subtitle}>Developing a Doodle Jump-inspired game featuring the iconic Nyan Cat.</p>
          </div>
          
          <div className={styles.intro}>
            {/* <div className={styles.text}>
              <p>I spent my Winter '23 at Rogers Create Lab in Toronto as a UX designer. Across my 4 months with the team, I worked on multiple B2B innovation consulting projects in industries such as smart cities, asset tracking, healthcare, and AR/VR. This was one of my main projects during my time at Rogers.</p>
                <p>description</p>
            </div> */}
            <div className={styles.img}>
              <img src={require("../../imgs/nyanjump/nyanjump.png")} />
            </div>
          </div>
          
          <section id="context" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Context</p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text3}>In our first-year Introduction to Computer Programming course, we were challenged to develop our own game using the in-course language, p5.js (a JavaScript library).</p>
              <p className={styles.text2}>My take...</p>
              <p className={styles.text3}>I decided on a game that focused on two main aspects: aesthetics and sensation. Here I introduce to you, a Doodle Jump inspired game featuring the iconic Nyan Cat, Nyan Jump!</p>
                <div>
                    <a href="#game" className={styles.button}>Play Nyan Jump now!</a>
                </div>
              
            </div>
          </section>
          <section id="inspiration" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Inspiration</p>
            </div>
            <div className={styles.blockContent}>
                <div>
                    <p className={styles.text2}>Doodle Jump</p>
                    <p className={styles.text3}>Released in 2009, Doodle Jump became a smash hit in many youngsters' devices (especially with the introduction of the iPod Touch). The game features a green alien-like character ("The Doodler") who jumps up a never-ending series of platforms.</p>
                    <img src={require("../../imgs/nyanjump/doodlejump.png")} className={styles.img} alt="" />
                </div>
                <div>
                    <p className={styles.text2}>Nyan Cat</p>
                    <p className={styles.text3}>No, not Nyan Cat the NFT. I'm talking about Nyan Cat, the viral internet meme, who was simply an animated GIF.</p>
                    <img src={require("../../imgs/nyanjump/nyancat.gif")} className={styles.img} alt="" />
                </div>

            </div>
          </section>

          <section id="moodboard" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Moodboard</p>
            </div>
            <div className={styles.blockContent}>
              <img src={require("../../imgs/nyanjump/moodboard.png")} className={styles.img} alt="" />
            </div>
          </section>
          <section id="elements" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Game Elements</p>
            </div>
            <div className={styles.blockContent}>
                <p className={styles.text3}>The two main elements I wanted to focus on were the gravitational aspects of Doodle Jump and the spectrum of colors from Nyan Cat.</p>
                <p className={styles.text2}>Gravity</p>
                <p className={styles.text3}>Developing gravity in games is a fun one, especially for beginners. It's more than just moving up or down by 1 pixel per frame; I mean, it's gravity! Check out the snippet of code I used for the gravity:</p>
                <div className={styles.imgContainer}>
                    <img src={require("../../imgs/nyanjump/gravity.gif")} className={styles.img} alt="" />
                    <img src={require("../../imgs/nyanjump/gravity-code.png")} className={styles.img} alt="" />
                </div>
                <p className={styles.text2}>Rainbow</p>
                <p className={styles.text3}>Of course, when you think of Nyan Cat, you picture rainbows and color. I wanted a variety of hues, but not picked randomly. We were taught a useful function in p5.js, mapping. Check out how I used "map" to color my spectrum of platforms:</p>
                <div className={styles.imgContainer}>
                    <img src={require("../../imgs/nyanjump/color.gif")} className={styles.img} alt="" />
                    <img src={require("../../imgs/nyanjump/color-code.png")} className={styles.img} alt="" />
                </div>
            </div>
          </section>
          <section id="game" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Try it out!</p>
            </div>
            <div className={styles.blockContent}>
                <p className={styles.mobileNote}>Note: Nyan Cat was developed for desktop use!</p>
                <div className={styles.gameContainer}>
                    <iframe title="Nyan Cat Game" src="https://openprocessing.org/sketch/1364096/embed/?plusEmbedHash=MTkwNWQ0YjA4NjlkMWUyNGExODZkZmUyZmNkMjUzODcwYzY4OWFmNzFhNDczNjdhMGY0OTNhMjZmYjZhZDA3Njg4YjkwNTlkMTU5ZTZmNTg0MDI0MWZlY2Y2ODIxNGEyM2NjNmZjMGVlOTQ3YTUxMGY2N2E1MGQyZmQ1NzJhYjVMMHphOS9jblNJd0FJb1NmY2c2Vyt5WW5vYlF6eDd5OVdDZzV5ajQrZDR1TVMrSFJkbG5QWS9qa1BWbm5HNVJSTU9GZ0gzYVJGL2cwbk1VQ0pNVXB5Zz09&plusEmbedTitle=true&plusEmbedFullscreen=true" height="700" width="100%"></iframe>
                </div>
            </div>
          </section>
          <section id="takeaways" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Key Takeaways</p>
            </div>
            <div className={styles.blockContent}>
              <div className={styles.conclusion}>
                <div>
                  <p className={styles.text2}>It's easier than you think ☝️</p>
                  <p className={styles.text3}>Programming is often seen as a difficult skill, but you will come to realize that it's a lot simpler than you may have expected.</p>
                </div>
                <div>
                  <p className={styles.text2}>You can't finish until you get started ⏳</p>
                  <p className={styles.text3}>I was worried about building a whole game with a timeline of 3 weeks. Though procrastination watched me from the back of my mind, I jumped right in and got started. Once I got into it, everything seemed to flow into place.</p>
                </div>
                <div>
                  <p className={styles.text2}>Perfectionism: A flaw or virtue? ☯️</p>
                  <p className={styles.text3}>You can be a perfectionist, but just know your limits! Once I completed the basic game, I was enticed to add more and more details. However, since exam season was soon approaching, I decided to focus more of my energy into my other courses.</p>
                </div>
              </div>
            </div>
          </section>
            
        </div>
        </div>
        <Footer />
        </div> : <Authentication />} </>}
    </div>
  )
}

export default NyanJump;
