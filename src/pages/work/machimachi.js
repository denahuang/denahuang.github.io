import React, { useState, useEffect } from 'react';

import '../../global.scss';
import styles from'./machimachi.module.scss';

import Authentication from '../../components/Authentication';
import { useUserContext } from '../../firebase/userContext';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Carousel; Swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import hero from '../../imgs/machimachi/machimachi.png';

import WorkIntro from '../../components/WorkIntro';
import WorkButtons from '../../components/WorkButtons';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';

const MachiMachi = () => {
  const { user, loading, error } = useUserContext();

  // Dark mode
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 

  return (
    <div data-theme={theme}>
      {error && <p className="error">{error}</p>}
      {loading ? <></> : <> {user ? 
      <div>
      <ProgressBar color="2E61AE" /> 
      <div className={styles.container}>
        <WorkButtons />
        <WorkIntro 
          title="Bridging the gap between boba-consumers and boba-producers"
          // tags="UX RESEARCH, UI DESIGN, PASSION PROJECT"
          hero={hero}
          duration="January 2022 - February 2022 (2 months)"
          role="Product Designer"
          tools="Figma, Adobe Illustrator"
          skills="UX/UI Design, User Research, User Testing, Wireframing, Prototyping"
          color="2E61AE"
        />
          <div className={styles.intro}>
              <div className={styles.introImg}>
                  <img src={require('../../imgs/machimachi/machimachi-app-icon.png')} className={styles.img}  alt="" />
              </div>
              <div className={styles.introText}>
                  <h2 className={styles.title}>Machi Machi App Redesign</h2>
                  <h4>The Problem</h4>
                  <p>Machi Machi is a rising fan-favorite bubble tea brand. It's app, however, is not as popular. Let's change that!</p>
                  <h4>The Solution</h4>
                  <p>Redesigning Machi Machi's app to satisfy new and existing customers. Bring back the recognized Machi aesthetic and help users leave the app (and store) satisfied!</p>
                  <a href="https://www.figma.com/proto/GQTv0nbZV4brw6kDeZWGUb/Machi-Machi-App-Redesign?node-id=479%3A1388&scaling=scale-down&page-id=0%3A1&starting-point-node-id=479%3A1388&show-proto-sidebar=1" target="_blank" rel="noreferrer">View Prototype</a>
              </div>
          </div>
          <div className={styles.challenge}>
              <h1>The Challenge</h1>
              <p>How might Machi Machi create a straightforward ordering process, encourage users to discover and order new drinks, and connect with users? </p>
          </div>
          <div className={styles.background}>
              <p className={styles.sectionName}>Background</p>
              <hr className={styles.line} />
              <h2>Introduction</h2>
              <p>If you didn’t already know, Machi Machi is a bubble tea franchise based out of Taiwan. With their expansion to Canada in recent years, they quickly became a fan favorite brand. To my surprise, not many customers knew that Machi Machi had an app, or even an online ordering system at all. During my time as a cashier, there were problems within the app that made it difficult for users such as the registration and ordering process. </p>
              <h2>The Current App</h2>
              {/* <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  autoplay
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  className={styles.currentSection}
              >
                  <SwiperSlide className={styles.slide}><img src={require("../../imgs/machimachi/current-1.png")} className={styles.currentImg}  alt="" /></SwiperSlide>
                  <SwiperSlide className={styles.slide}><img src={require("../../imgs/machimachi/current-2.png")} className={styles.currentImg}  alt="" /></SwiperSlide>
                  <SwiperSlide className={styles.slide}><img src={require("../../imgs/machimachi/current-3.png")} className={styles.currentImg}  alt="" /></SwiperSlide>
                  <SwiperSlide className={styles.slide}><img src={require("../../imgs/machimachi/current-4.png")} className={styles.currentImg}  alt="" /></SwiperSlide>
                  <SwiperSlide className={styles.slide}><img src={require("../../imgs/machimachi/current-5.png")} className={styles.currentImg}  alt="" /></SwiperSlide>
              </Swiper> */}
              <div className={styles.currentSection}>
                  <div className={styles.currentImg}><img src={require("../../imgs/machimachi/current-1.png")} alt="" /></div>
                  <div className={styles.currentImg}><img src={require("../../imgs/machimachi/current-2.png")} alt="" /></div>
                  <div className={styles.currentImg}><img src={require("../../imgs/machimachi/current-3.png")} alt="" /></div>
                  <div className={styles.currentImg}><img src={require("../../imgs/machimachi/current-4.png")} alt="" /></div>
                  <div className={styles.currentImg}><img src={require("../../imgs/machimachi/current-5.png")} alt="" /></div>
              </div>
            <h2>The Problem</h2>
            <div className={styles.problemSection}>
              <p>After using the app on a frequent part-time basis, I identified four main problems:</p>
              <ol className={styles.container}>
                <div className={styles.row}>
                  <div className={styles.problem} xs="12" md="6">
                    <li>Incoherent registration process</li>
                    <p>Currently, the primary registration screen consists of three options: Log In, Create Account, and Connect In-store Account. These options can be quite confusing for the user, as Log In and Connect In-store Account are essentially the same thing. </p>
                  </div>
                  <div className={styles.problem} xs="12" md="6">
                    <li>Disrupting order process</li>
                    <p>As a former cashier at Machi Machi, I received a complaint from a customer that they could not add their wanted item to their order. Upon discovery, it turned out that the customer did not select a required option, as it was hidden by a dropdown menu. </p>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.problem} xs="12" md="6">
                    <li>Confusing user flow and design</li>
                    <p>The app consists of five main sections: Home, Rewards, Order, Promos, and More. Within these sections are numerous paths that lead to dead ends or unnecessary information. </p>
                  </div>
                  <div className={styles.problem} xs="12" md="6">
                    <li>Inconsistent styling</li>
                    <p>The app itself is quite bland and off-brand from Machi Machi’s recognized aesthetic. </p>
                  </div>
                </div>
            </ol>
              
            </div>
            <h2>The Process</h2>
            <img src={require("../../imgs/machimachi/process.png")} className={styles.processImg}  alt="" />
          </div>
          <div className={styles.discover}>
            <p className={styles.sectionName}>Discover</p>
            <hr className={styles.line} />
            <h2>Empathizing with the User</h2>
            <p>To understand users’ behaviors and attitudes when making an order through the app, I formed an empathy map to articulate what one says, thinks, does, and feels. </p>
            <img src={require("../../imgs/machimachi/empathy-map.png")} className={styles.empathyMapImg}  alt="" />

            <h2>User Research</h2>
            <p>To begin, I gathered insights from issues I have received from customers during my time as a barista/cashier, my personal issues encountered on the app, and issues I have discovered alongside my (previous) coworkers.</p>
            <p>Three main goals:</p>
            <ol>
              <li>Make a straightforward ordering process for users</li>
              <li>Encourage users to discover and navigate menu items easily</li>
              <li>Revive the renowned Machi Machi aesthetic!</li>
            </ol>

            <h2>Persona Development</h2>
            <p>Machi Machi’s consumer base consists of people of various ages, so I decided to develop two personas. Meet Steven and Linda!</p>
            <div className={styles.personaSection}>
              <img src={require("../../imgs/machimachi/user-persona-1.png")} className={styles.personaImg}  alt="" />
              <img src={require("../../imgs/machimachi/user-persona-2.png")} className={styles.personaImg}  alt="" />
            </div>
          </div>
          <div className={styles.define}>
            <p className={styles.sectionName}>Define</p>
            <hr className={styles.line} />
            <h2>Brainstorming Features</h2>
            <p>It is finally time to begin brainstorming features for the app. With our three goals in mind, I utilized the SCAMPER technique to generate a list of potential design solutions. Here is a quick summary of the main ideas:</p>
            <ul>
              <li>Ensure it's easy to order</li>
              <li>Remove unnecessary pages and drop down menus</li>
              <li>Create a more coherent registration process</li>
              <li>Help users discover new drinks</li>
            </ul>
            
            <h2>Information Hierarchy</h2>
            <p>After brainstorming and identifying the necessary features, I created an information hierarchy to help visualize the features and pages for the app. Here's a simple layout of the app:</p>
            <img src={require("../../imgs/machimachi/information-hierarchy.png")} className={styles.informationHierarchyImg}  alt="" />

            <h2>User Flow</h2>
            <p>My main goal was to enhance the user experience, so I created a flow that would allow users to flawlessly achieve their objective of purchasing a beverage. The flow contains all of the possible interactions within the app from beginning to end.</p>
            <img src={require("../../imgs/machimachi/user-flow.png")} className={styles.userFlowImg}  alt="" />
          </div>
          <div className={styles.ideate}>
            <p className={styles.sectionName}>Ideate</p>
            <hr className={styles.line} />
            <h2>Wireframes</h2>
            <p>For my wireframes, I decided to focus on three main areas: straightforward registration process for new and returning users, customizable ordering process, and simple ways to discover rewards/promotions.</p>
            <ol className={styles.container}>
              <li>Registration Process for New and Returning Users <br />
                <img src={require("../../imgs/machimachi/wireframe-1.png")} className={styles.wireframeImg}  alt="" />
              </li>
              <li>Customizable Menu <br />
                <img src={require("../../imgs/machimachi/wireframe-2.png")} className={styles.wireframeImg}  alt="" />
              </li>
              <li>Promotions and Rewards <br />
                <img src={require("../../imgs/machimachi/wireframe-3.png")} className={styles.wireframeImg} alt=""  />
              </li>
            </ol>
            
          </div>
          <div className={styles.prototype}>
            <div className={styles.content}>
              <p className={styles.sectionName}>Prototype</p>
              <hr className={styles.line} />
              <h2>Mid-Fidelity Mockup</h2>
              <p>I mocked up a simple prototype of the app using Figma. To view, click <a href="https://www.figma.com/proto/GQTv0nbZV4brw6kDeZWGUb/Machi-Machi-App-Redesign?node-id=358%3A140&scaling=scale-down&page-id=0%3A1&starting-point-node-id=358%3A140" target="_blank" rel="noreferrer">here</a>.<br />Here are some quick screens of my mid-fidelity prototype.</p>
              <ol>
                  <li>Registration Process for New and Returning Users</li>
                  <img src={require("../../imgs/machimachi/mid-fidelity-1.png")} className={styles.midFidelityImg}  alt="" />
                  <li>Customizable Menu</li>
                  <img src={require("../../imgs/machimachi/mid-fidelity-2.png")} className={styles.midFidelityImg}  alt="" />
                  <li>Promotions and Rewards</li>
                  <img src={require("../../imgs/machimachi/mid-fidelity-3.png")} className={styles.midFidelityImg}  alt="" />
              </ol>
            </div>
          </div>
          <div className={styles.validate}>
            <p className={styles.sectionName}>Validate</p>
            <hr className={styles.line} />
            <h2>Usability Testing</h2>
            <p>After completing a prototype for the app, of course I had to test the usability. The app should look good, but it has to work even better!</p>
            <p>Tasks I tested for</p>
            <ol>
              <li>Straightforward onboarding process</li>
              <li>Ability to navigate through menu and customize order smoothly</li>
              <li>Redeeming rewards and making payments</li>
            </ol>
            <div className={styles.likesSection}>
              <img src={require("../../imgs/machimachi/likes.png")} className={styles.likesImg}  alt="" />
              <img src={require("../../imgs/machimachi/dislikes.png")} className={styles.likesImg}  alt="" />
              <img src={require("../../imgs/machimachi/recommendations.png")} className={styles.likesImg}  alt="" />
            </div>
            <h2>Updated Prototype</h2>
            <p>After validating my mid-fidelity prototype, I made a couple feature changes. Check it out <a href="https://www.figma.com/proto/GQTv0nbZV4brw6kDeZWGUb/Machi-Machi-App-Redesign?node-id=479%3A1388&scaling=scale-down&page-id=0%3A1&starting-point-node-id=479%3A1388&show-proto-sidebar=1" target="_blank" rel="noreferrer">here</a>.</p>
            <iframe width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGQTv0nbZV4brw6kDeZWGUb%2FMachi-Machi-App-Redesign%3Fnode-id%3D479-1388%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D479%253A1388%26show-proto-sidebar%3D1" allowfullscreen></iframe>
          </div>
          <div className={styles.ui}>
            <p className={styles.sectionName}>User Interface</p>
            <hr className={styles.line} />
            <h2>Style Guide</h2>
            <img src={require("../../imgs/machimachi/styleguide.png")} className={styles.styleGuide}  alt="" />
            <h2>High-Fidelity Prototype</h2>
            <p>Finally, after hours and hours of iterations, I completed my final prototype. Check it out <a href="https://www.figma.com/proto/GQTv0nbZV4brw6kDeZWGUb/Machi-Machi-App-Redesign?node-id=1570-969&scaling=scale-down&page-id=1570%3A441&starting-point-node-id=1570%3A969" target="_blank" rel="noreferrer">here</a>.</p>
            <p>Some major changes made:</p>
            <ul>
              <li>Implementing a cohesive design system + UI</li>
              <li>Forming a more intuitive user flow + information architecture</li>
            </ul>
            <iframe width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGQTv0nbZV4brw6kDeZWGUb%2FMachi-Machi-App-Redesign%3Fnode-id%3D1570-969%26scaling%3Dscale-down%26page-id%3D1570%253A441%26starting-point-node-id%3D1570%253A969" allowfullscreen></iframe>
          </div>
          <div className={styles.conclusion}>
            <p className={styles.sectionName}>Conclusion</p>
            <hr className={styles.line} />
            <h2>Key Takeaways</h2>
            <div className={styles.container}>
              <div className={styles.item} xs="12" md="4">
                <h4>Functionality {'>'} Aesthetic ⚙️</h4>
                <p>Products should look good, but work even better! As much as we love aesthetics as designers, remember to consider the funtionality of your product</p>
              </div>
              <div className={styles.item} xs="12" md="4">
                <h4>Iterate, iterate, iterate 🔁</h4>
                <p>There are billions of ways to design your product, and the best way to form a final decision is to lay everything out side-by-side.</p>
              </div>
              <div className={styles.item} xs="12" md="4">
                <h4>No need to reinvent the wheel 🎡</h4>
                <p>Use available resources! I attempted to create original icons for the app, but quicly came to realize that it isn't an easy task. Why create new ones when there are already amazing icons that exist out there??</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div> : <Authentication />} </>}

    </div>
  )
}
  
export default MachiMachi;