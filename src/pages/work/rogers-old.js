import React, { useState, useEffect } from 'react';

import '../../global.scss';
import styles from './rogers.module.scss';

import Authentication from '../../components/Authentication';
import { useUserContext } from '../../firebase/userContext';

import hero from '../../imgs/rogers/rogers.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons'

import { workData } from '../../data/workData';

import WorkIntro from '../../components/WorkIntro';
import WorkButtons from '../../components/WorkButtons';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';

const Rogers = () => {
  const { user, loading, error } = useUserContext();

  // Dark mode
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
    
  return (
    <div data-theme={theme}>
      {error && <p className="error">{error}</p>}
      {loading ? <></> : <> {user ? 
      <div>
      <ProgressBar color="DA291C" />
      <div className={styles.container}>
        <WorkButtons />
        <WorkIntro 
          title="Indoor XYZ Positioning"
          description="Revolutionizing firefighter safety and enhancing indoor navigation using 5G technologies."
          hero={hero}
          timeline="January 2023 - April 2023 (4 months)"
          role="UX Designer"
          // tools="Figma, Mural, JIRA"
          // skills="UX/UI Design, Prototyping, User Research, User Testing, Storytelling"
          team="Rogers 5G Create Lab"
          color="DA291C"
        />
        <div className={styles.nda}>
          <a href="mailto:denahuangg@gmail.com" target="_blank" rel="noreferrer" className={styles.bannerMobile}>
            <div className={styles.icon}><FontAwesomeIcon icon={faUnlock} /></div>
            <p>My work is under NDA. Click here to learn more!</p>
          </a>
          <a href="mailto:denahuangg@gmail.com" target="_blank" rel="noreferrer" className={styles.banner}>
            <div className={styles.icon}><FontAwesomeIcon icon={faUnlock} /></div>
            <p>The work I’ve done at Rogers is under NDA. If you’d like to hear more about my experience, feel free to send me a message!</p>
          </a>
        </div>
        {/* <div className={styles.intro}>
          <div className={styles.introImg}>
              <img src={require('../../imgs/rogers/building.png')} className={styles.img}  alt="" />
          </div>
          <div className={styles.introText}>
              <h2 className={styles.title}>Rogers Communications</h2>
              <p>In Winter 2023, I joined Rogers’ Partnerships and Innovation as a UX Designer on the Rogers 5G Create Lab team.</p>
              <p>The Create Lab crafts 5G innovative solutions to make more possible through a co-creation process with leading industry partners and enterprise customers. We focuse on creating new technical and business solutions in Smart City, Asset Tracking, Industrial IoT, Autonomous Vehicles, VR/AR, and other areas.</p>
          </div>
        </div> */}
        <div className={styles.intro}>
          <div className={styles.introImg}>
              <img src={require('../../imgs/rogers/building.png')} className={styles.img}  alt="" />
          </div>
          <div className={styles.introText}>
              <h2 className={styles.title}>Indoor Positioning During Fire Emergencies</h2>
              <p>In Winter 2023, I joined Rogers’ Partnerships and Innovation as a UX Designer on the Rogers 5G Create Lab team.</p>
              <p>One of our first assigned tasks involved indoor XYZ positioning of firefighters during fires. This project was an ask from a municipality in Eastern Canada. Though located in a less-populated area, this was the perfect place to begin our innovation. With an initial success here, we would be able to bring our solution to larger, densely-populated areas to help solve a problem that has persisted for decades. </p>
          </div>
        </div>
        {/* <div className={styles.underConstruction}>
          <h2>This page is currently under construction! Please check back later:)</h2>
        </div> */}
        <div className={styles.overview}>
          <div className={styles.problem}>
            <h1>The Problem</h1>
            <p>Fire departments currently use a radio-based method to determine crew members' locations. Active indoors fires are some of the most challenging and rapidly changing situations for first-responders. Locating crew members based on self-reporting in these unfamiliar and hazardous environments is prone to inaccuracy.</p>
          </div>
          <div className={styles.solution}>
            <h1>The Solution</h1>
            <p>An indoor tracking application that affords an incident commander a birds-eye-view of their crew in real-time.</p>
          </div>
        </div>
        <div className={styles.painPoints}>
          <h1>Pain Points</h1>
          <ol>
            <li>Unknown Z Axis
              <p>Existing location-tracking technologies are able to pinpoint the X and Y axis. Unfortunately, the Z axis parameter is unknown, making it difficult to late firefighters in a building.</p>
            </li>
            <li>Verbal Radio-based Tracking
              <p>In current fire emergencies, crew locations are reported verbally through walkie-talkies. Self-reporting in these dynamic situations is prone to inaccuracy, and therefore a safety hazard.</p>
            </li>
          </ol>
        </div>
        <div className={styles.handOff}>
          <h1>The Hand-Off</h1>
          <p>This project was handled by previous interns, so the initial user research and low-fidelity and mid-fidelity prototypes had already been completed. The original prototype was a mobile mid-fidelity interface, and a few iterations had already been completed.</p>
          <p style={{ fontStyle: "italic" }}>Goal: Clean up the UI and create a high-fidelity prototype for stakeholders.</p>
          <span>Creating a more intuitive design:</span>
          <ul>
            <li>Update color system</li>
            <li>Remove unnecessary elements
              <ul>
                <li>Floor toggle's close button</li>
                <li>Marker icons from bottom bar</li>
              </ul>
            </li>
            <li>Change select icons for consistency and cleanness</li>
            <li>Background coloring of location??</li>
          </ul>
          <div className={styles.imgs}>
            <img src={require('../../imgs/rogers/lo-fi.png')} className={styles.img}  alt="" />
            <img src={require('../../imgs/rogers/mid-fi.png')} className={styles.img}  alt="" />
          </div>
        </div>
        <div className={styles.userTesting}>
          <h1>User Testing with Fire Chiefs</h1>
          <p style={{ fontStyle: "italic" }}>Million dollar question: Is the product practical in a real-life situation??</p>
          <span>After an intensive hour, we received valuable feedback for our solution:</span>
          <ul>
            <li>Large screen (tablet) preferred over mobile</li>
            <li>Horizontal orientation</li>
            <li>Simple and accessible (one screen, big buttons)</li>
            <li>Focus on XYZ positioning and mapping: Other features like vital markers are not essential</li>
            <li>Value add: Checklist of procedural items required during a fire emergency</li>
          </ul>
          <p>Overall, the fire chiefs were extremely pleased with our solution and looked forward to the final product and in-person testing.</p>
          <img src={require('../../imgs/rogers/hi-fi-mobile.png')} className={styles.img}  alt="" />
        </div>
        <div className={styles.hiFi}>
          <h1>High-Fidelity Prototype</h1>
          <p>A tablet-based experience offering real-time tracking of indoor X, Y, and Z positions. The 3 main elements of our solution: incident reports, live updates, and team supervision.</p>
          <div className={styles.features}>
            <div className={styles.incidentReports}>
              <h2>Incident Reports</h2>
              <div className={styles.content}>
                <div className={styles.info}>
                  <h3>Use Case</h3>
                  <ul>
                    <li>Incident commander (user) can add markers onto the map to indicate a challenge</li>
                    <li>Add notes to specify incident details</li>
                    <li>Summary of all incidents in the building</li>
                  </ul>
                  <h3>Benefit</h3>
                  <ul>
                    <li>Incident commander is aware of current situation inside</li>
                    <li>Real-time updates on changes in the building as they arise</li>
                    <li>Provides a holistic view of incidents in the building</li>
                  </ul>
                </div>
                <div className={styles.video}>
                  <video width="100%" controls muted autoplay  loop>
                    <source src={require("../../imgs/rogers/incident-reports.mp4")} type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
            <div className={styles.liveUpdates}>
              <h2>Live Updates</h2>
              <div className={styles.content}>
                <div className={styles.info}>
                  <h3>Use Case</h3>
                  <ul>
                    <li>Latest updates and situations in the buiding</li>
                    <li>An intuitive color-coded toast message</li>
                  </ul>
                  <h3>Benefit</h3>
                  <ul>
                    <li>Never miss anything that happens throughout the building</li>
                    <li>Straightforward navigation to incidents</li>
                  </ul>
                </div>
                <div className={styles.video}>
                  <video width="100%" controls muted autoplay  loop>
                    <source src={require("../../imgs/rogers/live-updates.mp4")} type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
            <div className={styles.teamSupervision}>
              <h2>Team Supervision</h2>
              <div className={styles.content}>
                <div className={styles.info}>
                  <h3>Use Case</h3>
                  <ul>
                    <li>Locate and track crew members</li>
                    <li>Follow live movement of members</li>
                    <li>Monitor members' vitals (heart rate and oxygen level)</li>
                  </ul>
                  <h3>Benefit</h3>
                  <ul>
                    <li>Monitor crew members' locations and vitals remotely</li>
                    <li>Extra layer of safety</li>
                  </ul>
                </div>
                <div className={styles.video}>
                  <video width="100%" controls muted autoplay  loop>
                    <source src={require("../../imgs/rogers/team-supervision.mp4")} type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.forming}>
          <h1>Forming the High-fidelty Prototype</h1>
          <h2>Design Guidelines</h2>
          <p>To ensure a consistent and cohesive user interface, we established a design guideline. This guideline not only guides us as we design our product, but it ensures that the interface is intuitive, consistent, and appealing. </p>
          <img src={require('../../imgs/rogers/app-structure.png')} className={styles.img}  alt="" />
          <img src={require('../../imgs/rogers/layers.png')} className={styles.img}  alt="" />
          <img src={require('../../imgs/rogers/top-bar.png')} className={styles.img}  alt="" />
          <img src={require('../../imgs/rogers/map.png')} className={styles.img}  alt="" />
          <img src={require('../../imgs/rogers/floor-sheet.png')} className={styles.img}  alt="" />
          <img src={require('../../imgs/rogers/marker-summary.png')} className={styles.img}  alt="" />
          <img src={require('../../imgs/rogers/toast-message.png')} className={styles.img}  alt="" />
        </div>
        <div className={styles.conclusion}>
          <h1>Key Takeaways</h1>
          <div className={styles.container}>
            <div className={styles.item}>
              <h4>Stay organized 🗄️</h4>
              <p>With many previous iterations of the prototype, we found outselves stumped by the number of Figma pages, broken flows, and lost components.</p>
            </div>
            <div className={styles.item}>
              <h4>Intuitive design 💭</h4>
              <p>With design, it's extremely easy to fall into the trap of adding more and more to make a product "better". Oftentimes, the best solution is to make elements intuitive and easy to use!</p>
            </div>
            <div className={styles.item}>
              <h4>Persuading stakeholders 👨‍👩‍👧‍👦</h4>
              <p>Stakeholders often have varying opinions on our design. I quickly learned that it's important to be able to explain and justify our design choices. </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div> : <Authentication />} </>}
    </div>
  )
}

export default Rogers