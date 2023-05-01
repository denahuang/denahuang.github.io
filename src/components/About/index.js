import React, { useState } from 'react';
import styles from './index.module.scss';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

import name from '../../assets/dena.mp3';

const About = ({ func }) => {

    // Dark mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 

    function play() {
        new Audio(name).play()
    }

    return (
        <>
            <div className={styles.overlay} onClick={func}></div>
            <div className={styles.aboutContainer} data-theme={theme}>
                <Row className={styles.info}>
                    <Col className={styles.text} xs="12" md="6">
                        <div className={styles.intro}>
                            <p>Nice to meet you!</p>
                            <h3>My name's Dena.</h3>
                        </div>
                        
                        <div className={styles.name}>
                            <button onClick={play} className={styles.nameBtn}><FontAwesomeIcon icon={faVolumeHigh} /></button>
                            <div>
                                <h1>Dena</h1>
                                <p>[dee-nah]</p>
                            </div>
                        </div>
                        {/* <div className={styles.education}>
                            <p>Arts and Business @ University of Waterloo <br />
                            + Majoring in Design and Communications <br />
                            + Minoring in Computer Science</p>
                        </div> */}
                        <div className={styles.about}>
                            {/* <p>A bit about me</p>
                            <h3>Designer, Developer, and Communication Scholar</h3> */}
                            <p>I grew up observing the world around me, absorbed by the functions of design and technology in people’s everyday lives. Fascinated by the logic and problem-solving aspects of technology while craving the freedom and creativity of design, there’s nothing I love more than working on products end to end, from ideation to development. </p>
                            <p>I am a <span style={{ fontWeight:600}}>Design and Communications</span> student at the University of Waterloo with a minor in <span style={{ fontWeight:600}}>Computer Science</span>. My mix of disciplines motivates me to create holistic designs that account for wider systems. I use my Communications background as a foundation to deliver intuitive, human-centered experiences that empower users through designs that look good but work even better. </p>
                            {/* <p>As a Communications student, I tend to face raised eyebrows at the mention of my major. Perhaps due to the preconceived notions of Communications being a vague and impractical field of study merely about superficial skills like public speaking, I, too, was hesitant to declare my focus of study in the humanities. I use my Communications background as a foundation to tackle my work through the holistic approach. My mix of disciplines has given me insights on how to create holistic designs that account for wider systems.</p> */}
                        </div>
                    </Col>
                    <Col className={styles.imgContainer} xs="12" md="6">
                        {/* <img src={require("../../imgs/dena-holding-cat.jpg")} className={styles.img} alt="me" /> */}
                        <img src={require("../../imgs/dena.jpg")} className={styles.img} alt="me" />
                    </Col>
                </Row>
                {/* <div className={styles.closeBtn} onClick={func}><FontAwesomeIcon icon={faClose} /></div> */}
            </div>
            
        </>
        
    )
}

export default About