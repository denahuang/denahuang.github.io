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
import WorkButtons from '../../components/WorkButtons';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';

import hero from '../../imgs/nyanjump/nyanjump.png';

const NyanJump = () => {
    const { user, loading, error } = useUserContext();

    // Dark mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
    
    const scrollTo = e => {
        e.preventDefault();
        const element = document.getElementById('game');
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
        <ProgressBar color="183861" /> 
        <div className={styles.container}>
            <WorkButtons />
            <WorkIntro 
                title="Nyan Jump"
                // tags="UI DESIGN, GAME DEV, SCHOOL PROJECT"
                hero={hero}
                duration="November 2021 - December 2021 (3 weeks)"
                role="Designer, Developer"
                tools="JavaScript, p5.js, OpenProcessing"
                skills="UI Design, Game Development, Web Development, App Development"
                color="183861"
            />
            <div className={styles.intro}>
                <div className={styles.content}>
                    <div className={styles.introText}>
                        <h1>Nyan Jump</h1>
                        <h4>The Problem</h4>
                        <p>In our first-year Introduction to Computer Programming course, we were challenged to develop our own game using the in-course language, p5.js (a JavaScript library).</p>
                        <h4>The Solution</h4>
                        <p>I decided on a game that focused on two main aspects: aesthetics and sensation. Here I introduce to you, a Doodle Jump inspired game featuring the iconic Nyan Cat, Nyan Jump!</p>
                        <button href="" onClick={scrollTo}>Click here to play!</button>
                    </div>
                    <div className={styles.introImg}>
                        <img src={require("../../imgs/nyanjump/nyan-jump-overview.png")} className={styles.img}  alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.inspiration}>
                <h1>Inspiration</h1>
                <div className={styles.container}>
                    <div className={styles.item} xs="12" md="6">
                        <h2>Doodle Jump</h2>
                        <p>Released in 2009, Doodle Jump became a smash hit in many youngsters' devices (especially with the introduction of the iPod Touch). The game features a green alien-like character ("The Doodler") who jumps up a never-ending series of platforms. </p>
                        <div className={styles.imgCont}>
                            <img src={require("../../imgs/nyanjump/doodlejump.png")} className={styles.img} alt="" />
                        </div>
                    </div>
                    <div className={styles.item} xs="12" md="6">
                        <h2>Nyan Cat</h2>
                        <p>No, not Nyan Cat the NFT. I'm talking about Nyan Cat, the viral internet meme, who was simply an animated GIF. </p>
                        <div className={styles.imgCont}>
                            <img src={require("../../imgs/nyanjump/nyanjump.gif")} className={styles.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.moodboard}>
                <div className={styles.content}>
                    <h1>Moodboard</h1>
                    <img src={require("../../imgs/nyanjump/moodboard.png")} className={styles.img} alt="" />
                </div>
            </div>
            <div className={styles.gameElements}>
                <h1>Game Elements</h1>
                <p>The two main elements I wanted to focus on were the gravitational aspects of Doodle Jump and the spectrum of colors from Nyan Cat.</p>
                <div className={styles.container}>
                    <div className={styles.item} xs="12" md="6">
                        <h2>Gravity</h2>
                        <p>Developing gravity in games is a fun one, especially for beginners. It's more than just moving up or down by 1 pixel per frame; I mean, it's gravity! Check out the snippet of code I used for the gravity:</p>
                        <div className={styles.imgCont}>
                            <img src={require("../../imgs/nyanjump/gravity.gif")} className={styles.img} alt="" />
                            <img src={require("../../imgs/nyanjump/gravity-code.png")} className={styles.img} alt="" />
                        </div>
                    </div>
                    <div className={styles.item} xs="12" md="6">
                        <h2>Rainbow</h2>
                        <p>Of course, when you think of Nyan Cat, you picture rainbows and color. I wanted a variety of hues, but not picked randomly. We were taught a useful function in p5.js, mapping. Check out how I used "map" to color my spectrum of platforms:</p>
                        <div className={styles.imgCont}>
                            <img src={require("../../imgs/nyanjump/color.gif")} className={styles.img} alt="" />
                            <img src={require("../../imgs/nyanjump/color-code.png")} className={styles.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.play} id="game">
                <div className={styles.content}>
                    <h1>Try it out!</h1>
                    <p className={styles.mobileNote}>Note: Nyan Cat was developed for desktop use!</p>
                    <div className={styles.gameContainer}>
                        <iframe title="Nyan Cat Game" src="https://openprocessing.org/sketch/1364096/embed/?plusEmbedHash=MTkwNWQ0YjA4NjlkMWUyNGExODZkZmUyZmNkMjUzODcwYzY4OWFmNzFhNDczNjdhMGY0OTNhMjZmYjZhZDA3Njg4YjkwNTlkMTU5ZTZmNTg0MDI0MWZlY2Y2ODIxNGEyM2NjNmZjMGVlOTQ3YTUxMGY2N2E1MGQyZmQ1NzJhYjVMMHphOS9jblNJd0FJb1NmY2c2Vyt5WW5vYlF6eDd5OVdDZzV5ajQrZDR1TVMrSFJkbG5QWS9qa1BWbm5HNVJSTU9GZ0gzYVJGL2cwbk1VQ0pNVXB5Zz09&plusEmbedTitle=true&plusEmbedFullscreen=true" height="700" width="100%"></iframe>
                    </div>
                </div>
            </div>
            <div className={styles.conclusion}>
            <h1>Key Takeaways</h1>
            {/* <Container>
                <Row>
                <Col className={styles.item} xs="12" md="4">
                    <h4>It's easier than you think ☝️</h4>
                    <p>Programming is often seen as a difficult skill, but you will come to realize that it's a lot simpler than you may have expected.</p>
                </Col>
                <Col className={styles.item} xs="12" md="4">
                    <h4>You can't finish until you get started ⏳</h4>
                    <p>I was worried about building a whole game with a timeline of 3 weeks. Though procrastination watched me from the back of my mind, I jumped right in and got started. Once I got into it, everything seemed to flow into place.</p>
                </Col>
                <Col className={styles.item} xs="12" md="4">
                    <h4>Perfectionism: A flaw or virtue? ☯️</h4>
                    <p>You can be a perfectionist, but just know your limits! Once I completed the basic game, I was enticed to add more and more details. However, since exam season was soon approaching, I decided to focus more of my energy into my other courses.</p>
                </Col>
                </Row>
            </Container> */}
            <div className={styles.container}>
                <div className={styles.item} xs="12" md="4">
                    <h4>It's easier than you think ☝️</h4>
                    <p>Programming is often seen as a difficult skill, but you will come to realize that it's a lot simpler than you may have expected.</p>
                </div>
                <div className={styles.item} xs="12" md="4">
                    <h4>You can't finish until you get started ⏳</h4>
                    <p>I was worried about building a whole game with a timeline of 3 weeks. Though procrastination watched me from the back of my mind, I jumped right in and got started. Once I got into it, everything seemed to flow into place.</p>
                </div>
                <div className={styles.item} xs="12" md="4">
                    <h4>Perfectionism: A flaw or virtue? ☯️</h4>
                    <p>You can be a perfectionist, but just know your limits! Once I completed the basic game, I was enticed to add more and more details. However, since exam season was soon approaching, I decided to focus more of my energy into my other courses.</p>
                </div>
                </div>
            </div>
        </div>
        <Footer />
        </div> : <Authentication />} </>}
    </div>
  )
}

export default NyanJump;
