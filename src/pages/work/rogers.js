import React, { useState, useEffect } from 'react';

import '../../global.scss';
import styles from './rogers.module.scss';

import Authentication from '../../components/Authentication';
import { useUserContext } from '../../firebase/userContext';

import hero from '../../imgs/rogers/rogers.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons'

import { workData } from '../../data/workData';

import Navbar from '../../components/Navbar';
import BackToTop from '../../components/BackToTop';

import WorkIntro from '../../components/WorkIntro';
// import WorkButtons from '../../components/WorkButtons';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';
import { Nav } from 'react-bootstrap';

// import Tabs from '../../components/Tabs';

const Rogers = () => {
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
            <a href="#research">Research</a>
            <a href="#define">Define</a>
            <a href="#ideation">Ideation</a>
            <a href="#designs">Designs</a>
            <a href="#prototype1">Prototype #1</a>
            <a href="#solution">Solution</a>
            <a href="#takeaways">Takeaways</a>
          </header>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1 className={styles.h1}>Rogers Communications</h1>
            <p className={styles.subtitle}>Revolutionizing firefighter safety and enhancing indoor navigation using 5G technologies.</p>
          </div>
          
          <div className={styles.intro}>
            <div className={styles.text}>
              <p>I spent my Winter '23 at Rogers Create Lab in Toronto as a UX designer. Across my 4 months with the team, I worked on multiple B2B innovation consulting projects in industries such as smart cities, asset tracking, healthcare, and AR/VR. This was one of my main projects during my time at Rogers.</p>
              <a href="mailto:d74huang@uwaterloo.ca" target="_blank" rel="noreferrer" className={styles.banner}>
                <p>The work I’ve done at Rogers is under NDA. If you’d like to hear more about my experience, feel free to send me a message!</p>
              </a>
            </div>
            <div className={styles.img}>
              <img src={require("../../imgs/rogers/sneak-peek.gif")} />
            </div>
          </div>
          
          <section id="context" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Context</p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text3}>Rogers 5G Create Lab was approached by a municipal fire department to innovate and optimize their firefighting process by utilizing 5G technology. As the product designer, I conducted UX research to design a hi-fidelity prototype and developed a design guideline in addition. </p>
              <div>
              <a href="#solution" className={styles.button}>Jump to Solution!</a>
              </div>
              
            </div>
          </section>
          <section id="research" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Initial Research</p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text2}>What the City told us.</p>
              <p className={styles.text3}>To begin, we held a 2-hour introductory session with the fire department to determine opportunities for collaboration. We reviewed their current process and spoke to stakeholders to understand and define their pain points and areas of opportunity. </p>
              <p className={styles.text3}>We found the current firefighter journey is extremely inefficient in terms of location tracking and communication, despite this process being used globally since, well, forever. </p>
              <img src={require('../../imgs/rogers/research.png')} className={styles.img}  alt="" />
            </div>
          </section>
          <section id="define" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Define</p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text1}>What is wrong with the existing procedures?</p>
              <p className={styles.text2}>Firefighter protocols are dated and lack modern technology.</p>
              <p className={styles.text3}>Fire departments currently use a radio-based method to determine crew members' locations. Active indoors fires are some of the most challenging and rapidly changing situations for first-responders. Locating crew members based on self-reporting in these unfamiliar and hazardous environments is prone to inaccuracy. How can we enhance firefighter location accuracy in dynamic indoor fires?</p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text2}>Pain Points</p>
              <div className={styles.contentCard}>
                <div className={styles.textCard}>
                  <p className={styles.text1}>#1 Unknown Z-Axis</p>
                  <div className={styles.card}>Existing location-tracking technologies are able to pinpoint the X and Y axis. Unfortunately, the Z axis parameter is unknown, making it difficult to late firefighters in a building.</div>
                </div>
                <div className={styles.textCard}>
                  <p className={styles.text1}>#2 Verbal Radio-Based Tracking</p>
                  <div className={styles.card}>In current fire emergencies, crew locations are reported verbally through walkie-talkies. Self-reporting in these dynamic situations is prone to inaccuracy, and therefore a safety hazard.</div>
                </div>
              </div>
            </div>
          </section>
          <section id="ideation" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Ideation</p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text1}>Let's do by feeling!</p>
              <p className={styles.text2}>Empathy Map</p>
              <p className={styles.text3}>To synthesize our findings, we created an empathy map to help further understand our client’s needs, behaviors, and motivations. We framed the scenario from the Fire Chief's perspective to help narrow the experience down to a leader ensuring his team has the optimal experience throughout their firefighting process.</p>
              <img src={require('../../imgs/rogers/empathymap.png')} className={styles.img}  alt="" />
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text1}>Problem Statement</p>
              <p className={styles.text2}>How Might We enhance indoor navigation and real-time tracking to optimize firefighters' efficiency during emergencies?</p>
              <p className={styles.text3}>Through several rounds of rapid ideation and HMW’s, we generated a list of potential solutions.</p>
              <img src={require('../../imgs/rogers/ideation.png')} className={styles.img}  alt="" />
            </div>
            {/* <div className={styles.blockContent}>
              <p className={styles.text1}>Despite our passion for innovation, we are still a business.</p>
              <p className={styles.text2}>"The Create Lab's mission is to find opportunities to innovate and monetize 5G technology."</p>
              <p className={styles.text3}>To synthesize our findings, we created an empathy map to help further understand our client’s needs, behaviors, and motivations. We framed the scenario from the Fire Chief's perspective to help narrow the experience down to a leader ensuring his team has the optimal experience throughout their firefighting process.</p>
              <img src={require('../../imgs/rogers/empathymap.png')} className={styles.img}  alt="" />
            </div> */}
          </section>
          <section id="designs" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Designs</p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text1}>Initial Design Exploration</p>
              <p className={styles.text2}>The Hand-Off</p>
              <p className={styles.text3}>Our team previously completed a few iterations of low-fidelity and mid-fidelity prototypes for mobile. After rummaging through all the Figma files and components, we found that there were many broken flows and lost components. </p>
              <div className={styles.imgContainer}>
                <img src={require('../../imgs/rogers/lo-fi.png')} className={styles.img}  alt="" />
                <img src={require('../../imgs/rogers/mid-fi.png')} className={styles.img}  alt="" />
              </div>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text2}>UX Audit and Creating a Design System</p>
              <p className={styles.text3}>We performed a UX audit on the design files and found the design system to be weak and incoherent. We began by re-establishing the design system, focusing on more accessible and intuitive colors and icons. While working through the design system, we noticed that there were overlapping element functions, such as the "close" button of the floor toggler and the icons on the bottom bar. This helped guide our first hi-fidelity mobile prototype. </p>
              <img src={require('../../imgs/rogers/design-system.png')} className={styles.img}  alt="" />
            </div>
          </section>
          <section id="prototype1" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Prototype #1</p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text2}>Hi-Fi Prototype (Mobile)</p>
              <img src={require('../../imgs/rogers/hi-fi-mobile.png')} className={styles.img}  alt="" />
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text1}>We conducted a user testing session with the fire chiefs, focusing on the million-dollar question:</p>
              <p className={styles.text2}>Is this product practical in a real-life situation?</p>
              <p className={styles.text3}>After an intensive hour, we received valuable feedback for our solution:</p>
              <div className={styles.contentCard}>
                <div className={styles.textCard}>
                  <div className={styles.card}>A larger screen is preferred over mobile, with horizontal orientation</div>
                </div>
                <div className={styles.textCard}>
                  <div className={styles.card}>The interface should be simple and accessible (one screen with big buttons)</div>
                </div>
                <div className={styles.textCard}>
                  <div className={styles.card}>Focus on XYZ positioning and mapping; Other features like vital markers are not essential</div>
                </div>
              </div>
              <div className={styles.contentCard}>
                <div className={styles.textCard}>
                  <div className={styles.card}>Value Add: Checklist of procedural items required during a fire emergency</div>
                </div>
              </div>
              <p className={styles.text3}>Overall, the fire chiefs were extremely pleased with our solution and looked forward to the final product and in-person testing!</p>
              
            </div>
          </section>
          <section id="solution" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Solution</p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text1}>After refining our prototype based on our UX findings, we redefined our solution. </p>
              <p className={styles.text2}>A tablet-based experience offering real-time tracking of indoor X, Y, and Z positions.</p>
              <p className={styles.text3}>Here's a sneak peek:</p>
              <img src={require('../../imgs/rogers/rogers.png')} className={styles.img}  alt="" />
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text1}>Three main elements of our solution: </p>
              <div className={styles.contentCard}>
                <div className={styles.textCard}>
                  <div className={styles.card}>#1 Incident Reports</div>
                </div>
                <div className={styles.textCard}>
                  <div className={styles.card}>#2 Live Updates</div>
                </div>
                <div className={styles.textCard}>
                  <div className={styles.card}>#3 Team Supervision</div>
                </div>
              </div>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text2}>#1 Incident Reports</p>
              <p className={styles.text3}>Use case:</p>
              <ul>
                <li>Incident Commander (user) can add markers onto the map to indicate a challenge (with notes, summary)</li>
                <li>Incident commander is aware of the current situation inside</li>
                <li>Real-time updates on changes in the building as they arise</li>
                <li>Provides a holistic view of incidents in the building</li>
              </ul>
              <video width="100%" controls muted autoPlay loop>
                <source src={require("../../imgs/rogers/incident-reports.mp4")} type="video/mp4"/>
              </video>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text2}>#2 Live Updates</p>
              <p className={styles.text3}>Use case:</p>
              <ul>
                <li>Latest updates and situations in the building to ensure we don’t miss anything that happens throughout the building</li>
                <li>Straightforward navigation to incidents</li>
                <li>An intuitive color-coded toast message system</li>
              </ul>
              <video width="100%" controls muted autoPlay loop>
                <source src={require("../../imgs/rogers/live-updates.mp4")} type="video/mp4"/>
              </video>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text2}>#3 Team Supervision</p>
              <p className={styles.text3}>Use case:</p>
              <ul>
                <li>Locate and track crew members</li>
                <li>Follow live movement of members</li>
                <li>Monitor members' vitals (heart rate and oxygen level) remotely</li>
                <li>Extra layer of safety</li>
              </ul>
              <video width="100%" controls muted autoPlay loop>
                <source src={require("../../imgs/rogers/team-supervision.mp4")} type="video/mp4"/>
              </video>
            </div>
              <div className={styles.blockContent}>
                <p className={styles.text2}>Design Guidelines</p>
                <p className={styles.text3}>To ensure a consistent and cohesive user interface, we established a design guideline. This guideline not only guides us as we design our product, but it ensures that the interface is intuitive, consistent, and appealing.</p>
                <img src={require('../../imgs/rogers/app-structure.png')} className={styles.img}  alt="" />
                <img src={require('../../imgs/rogers/layers.png')} className={styles.img}  alt="" />
                <img src={require('../../imgs/rogers/top-bar.png')} className={styles.img}  alt="" />
                <img src={require('../../imgs/rogers/map.png')} className={styles.img}  alt="" />
                <img src={require('../../imgs/rogers/floor-sheet.png')} className={styles.img}  alt="" />
                <img src={require('../../imgs/rogers/marker-summary.png')} className={styles.img}  alt="" />
                <img src={require('../../imgs/rogers/toast-message.png')} className={styles.img}  alt="" />
              </div>
          </section>
          <section id="takeaways" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Key Takeaways</p>
            </div>
            <div className={styles.blockContent}>
              <div className={styles.conclusion}>
                <div>
                  <p className={styles.text2}>Stay organized 🗄️</p>
                  <p className={styles.text3}>With many previous iterations of the prototype, we found outselves stumped by the number of Figma pages, broken flows, and lost components.</p>
                </div>
                <div>
                  <p className={styles.text2}>Intuitive design 💭</p>
                  <p className={styles.text3}>With design, it's extremely easy to fall into the trap of adding more and more to make a product "better". Oftentimes, the best solution is to make elements intuitive and easy to use!</p>
                </div>
                <div>
                  <p className={styles.text2}>Persuading stakeholders 👨‍👩‍👧‍👦</p>
                  <p className={styles.text3}>Stakeholders often have varying opinions on our design. I quickly learned that it's important to be able to explain and justify our design choices. </p>
                </div>
              </div>
            </div>
          </section>
          {/* <div className={styles.nda}>
            <a href="mailto:denahuangg@gmail.com" target="_blank" rel="noreferrer" className={styles.bannerMobile}>
              <div className={styles.icon}><FontAwesomeIcon icon={faUnlock} /></div>
              <p>My work is under NDA. Click here to learn more!</p>
            </a>
            <a href="mailto:denahuangg@gmail.com" target="_blank" rel="noreferrer" className={styles.banner}>
              <div className={styles.icon}><FontAwesomeIcon icon={faUnlock} /></div>
              <p>The work I’ve done at Rogers is under NDA. If you’d like to hear more about my experience, feel free to send me a message!</p>
            </a>
          </div> */}
        </div>
        </div>
        <Footer />
      </div>  : <Authentication />} </>}
    </div>
  )
}

export default Rogers