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
// import WorkButtons from '../../components/WorkButtons';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';

import Navbar from '../../components/Navbar';
import BackToTop from '../../components/BackToTop';


const MachiMachi = () => {
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
          <a href="#process">Process</a>
          <a href="#discover">Discover</a>
          <a href="#define">Define</a>
          <a href="#ideate">Ideate</a>
          <a href="#prototype">Prototype</a>
          <a href="#validate">Validate</a>
          <a href="#user-interface">User Interface</a>
          <a href="#takeaways">Takeaways</a>
        </header>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1 className={styles.h1}>Machi Machi App Redesign</h1>
          <p className={styles.subtitle}>Bridging the gap between boba-consumers and boba-producers.</p>
        </div>
        
        <div className={styles.intro}>
          <div className={styles.text}>
            <p>My first-ever UX case study!</p>
            {/* <a href="mailto:d74huang@uwaterloo.ca" target="_blank" rel="noreferrer" className={styles.banner}>
              <p>The work I’ve done at Rogers is under NDA. If you’d like to hear more about my experience, feel free to send me a message!</p>
            </a> */}
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
          <p className={styles.text3}>If you didn’t already know, Machi Machi is a bubble tea franchise based out of Taiwan. With their expansion to Canada in recent years, they quickly became a fan-favorite brand. To my surprise, not many customers knew that Machi Machi had an app, or even an online ordering system at all. During my time as a cashier, there were problems within the app that made it difficult for users such as the registration and ordering process.</p>
            <div>
            <a href="#user-interface" className={styles.button}>Jump to Solution!</a>
            </div>
          </div>
          <div className={styles.blockContent}>
            <p className={styles.text1}>The Challenge</p>
            <p className={styles.text2}>How might Machi Machi create a straightforward ordering process, encourage users to discover and order new drinks, and connect with users?</p>
            <p className={styles.text3}>Redesigning Machi Machi's app to satisfy new and existing customers. Bring back the recognized Machi aesthetic and help users leave the app (and store) satisfied!</p>
          </div>
          <div className={styles.blockContent}>
            <p className={styles.text2}>The Current App</p>
            <img src={require('../../imgs/machimachi/current.png')} className={styles.img}  alt="" />
          </div>
          <div className={styles.blockContent}>
              <p className={styles.text1}>After using the app on a frequent part-time basis, I identified four main problems:</p>
              <p className={styles.text2}>01. Incoherent registration process</p>
              <p className={styles.text3}>Currently, the primary registration screen consists of three options: Log In, Create Account, and Connect In-store Account. These options can be quite confusing for the user, as Log In and Connect In-store Account are essentially the same thing.</p>
              <p className={styles.text2}>02. Disrupting order process</p>
              <p className={styles.text3}>As a former cashier at Machi Machi, I received a complaint from a customer that they could not add their wanted item to their order. Upon discovery, it turned out that the customer did not select a required option, as it was hidden by a dropdown menu.</p>
              <p className={styles.text2}>03. Confusing user flow and design</p>
              <p className={styles.text3}>The app consists of five main sections: Home, Rewards, Order, Promos, and More. Within these sections are numerous paths that lead to dead ends or unnecessary information.</p>
              <p className={styles.text2}>04. Inconsistent styling</p>
              <p className={styles.text3}>The app itself is quite bland and off-brand from Machi Machi’s recognized aesthetic.</p>
            </div>
        </section>


        <section id="process"  className={styles.block}>
            <div className={styles.blockTitle}>
              <p>The Process</p>
            </div>
            <div className={styles.blockContent}>
              <img src={require('../../imgs/machimachi/process.png')} className={styles.img}  alt="" />
            </div>
        </section>
        <section id="discover" className={styles.block}>
            <div className={styles.blockTitle}>
              <p>Discover</p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text2}>Empathizing with the User</p>
              <p className={styles.text3}>To understand users’ behaviors and attitudes when making an order through the app, I formed an empathy map to articulate what one says, thinks, does, and feels.</p>
              <img src={require('../../imgs/machimachi/empathy-map.png')} className={styles.img}  alt="" />
            </div>
            <div className={styles.blockContent}>
            <p className={styles.text2}>User Research</p>
              <p className={styles.text1}>To begin, I gathered insights from issues I have received from customers during my time as a barista/cashier, my personal issues encountered on the app, and issues I have discovered alongside my (previous) coworkers. Three main goals:</p>
              <p className={styles.text3}>
                <ol>
                  <li>Make a straightforward ordering process for users</li>
                  <li>Encourage users to discover and navigate menu items easily</li>
                  <li>Revive the renowned Machi Machi aesthetic!</li>
                </ol>
              </p>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text2}>Persona Development</p>
              <p className={styles.text3}>Machi Machi’s consumer base consists of people of various ages, so I decided to develop two personas. Meet Steven and Linda!</p>
              <div className={styles.imgContainer}>
                <img src={require('../../imgs/machimachi/user-persona-1.png')} className={styles.img}  alt="" />
                <img src={require('../../imgs/machimachi/user-persona-2.png')} className={styles.img}  alt="" />
              </div>
            </div>
        </section>

        <section id="define" className={styles.block}>
          <div className={styles.blockTitle}>
            <p>Define</p>
          </div>
          <div className={styles.blockContent}>
            <p className={styles.text2}>Brainstorming Features</p>
            <p className={styles.text1}>With our three goals in mind, I utilized the SCAMPER technique to generate a list of potential design solutions. Here is a quick summary of the main ideas:</p>
            <p className={styles.text3}>
              <ul>
                <li>Ensure it's easy to order</li>
                <li>Remove unnecessary pages and drop down menus</li>
                <li>Create a more coherent registration process</li>
                <li>Help users/customers discover new drinks</li>
              </ul>
            </p>
          </div>
          <div className={styles.blockContent}>
            <p className={styles.text2}>Information Hierarchy</p>
            <p className={styles.text3}>After brainstorming and identifying the necessary features, I created an information hierarchy to help visualize the features and pages for the app. Here's a simple layout of the app:</p>
            <img src={require('../../imgs/machimachi/information-hierarchy.png')} className={styles.img}  alt="" />
          </div>
          <div className={styles.blockContent}>
          <p className={styles.text2}>User Flow</p>
            <p className={styles.text3}>My main goal was to enhance the user experience, so I created a flow that would allow users to flawlessly achieve their objective of purchasing a beverage. The flow contains all of the possible interactions within the app from beginning to end.</p>
            <img src={require('../../imgs/machimachi/user-flow.png')} className={styles.img}  alt="" />
          </div>
        </section>
        <section id="ideate" className={styles.block}>
          <div className={styles.blockTitle}>
            <p>Ideate</p>
          </div>
          <div className={styles.blockContent}>
            <p className={styles.text2}>Wireframes</p>
              <p className={styles.text3}>For my wireframes, I decided to focus on three main areas: straightforward registration process for new and returning users, customizable ordering process, and simple ways to discover rewards/promotions.</p>
              <p className={styles.text1}>01. Registration process for new and returning users</p>
              <img src={require('../../imgs/machimachi/wireframe-1.png')} className={styles.img}  alt="" />
              <p className={styles.text1}>02. Customizable menu</p>
              <img src={require('../../imgs/machimachi/wireframe-2.png')} className={styles.img}  alt="" />
              <p className={styles.text1}>03. Promotion and rewards</p>
              <img src={require('../../imgs/machimachi/wireframe-3.png')} className={styles.img}  alt="" />
            </div>
        </section>
        <section id="prototype" className={styles.block}>
          <div className={styles.blockTitle}>
            <p>Prototype</p>
          </div>
          <div className={styles.blockContent}>
            <p className={styles.text2}>Mid-Fidelity Mockup</p>
            <p className={styles.text3}>I mocked up a simple prototype of the app using Figma. To view, click <a className={styles.inlineLink} href="https://www.figma.com/proto/GQTv0nbZV4brw6kDeZWGUb/Machi-Machi-App-Redesign?node-id=358%3A140&scaling=scale-down&page-id=0%3A1&starting-point-node-id=358%3A140" target="_blank" rel="noreferrer">here</a>. Here are some quick screens of my mid-fidelity prototype:</p>
            <p className={styles.text1}>01. Registration process for new and returning users</p>
            <img src={require('../../imgs/machimachi/mid-fidelity-1.png')} className={styles.img}  alt="" />
            <p className={styles.text1}>02. Customizable menu</p>
            <img src={require('../../imgs/machimachi/mid-fidelity-2.png')} className={styles.img}  alt="" />
            <p className={styles.text1}>03. Promotion and rewards</p>
            <img src={require('../../imgs/machimachi/mid-fidelity-3.png')} className={styles.img}  alt="" />
          </div>
        </section>
        <section id="validate" className={styles.block}>
          <div className={styles.blockTitle}>
            <p>Validate</p>
          </div>
          <div className={styles.blockContent}>
            <p className={styles.text2}>Usability Testing</p>
            <p className={styles.text3}>After completing a prototype for the app, of course I had to test the usability. The app should look good, but it has to work even better!</p>
            <p className={styles.text1}>Tasks I tested for:</p>
            <p className={styles.text3}>
              <ol>
                <li>Straightforward onboarding process</li>
                <li>Ability to navigate through menu and customize order smoothly</li>
                <li>Redeeming rewards and making payments</li>
              </ol>
            </p>
            <div className={styles.imgContainer}>
              <img src={require("../../imgs/machimachi/likes.png")} className={styles.likesImg}  alt="" />
              <img src={require("../../imgs/machimachi/dislikes.png")} className={styles.likesImg}  alt="" />
              <img src={require("../../imgs/machimachi/recommendations.png")} className={styles.likesImg}  alt="" />
            </div>
          </div>
        </section>
        <section id="user-interface" className={styles.block}>
          <div className={styles.blockTitle}>
            <p>User Interface</p>
          </div>
          <div className={styles.blockContent}>
            <p className={styles.text2}>High-Fidelity Prototype</p>
              <p className={styles.text3}>Finally, after hours and hours of iterations, I completed my final prototype. Check it out <a className={styles.inlineLink} href="https://www.figma.com/proto/GQTv0nbZV4brw6kDeZWGUb/Machi-Machi-App-Redesign?node-id=479%3A1388&scaling=scale-down&page-id=0%3A1&starting-point-node-id=479%3A1388&show-proto-sidebar=1" target="_blank" rel="noreferrer">here</a>.</p>
              <p className={styles.text1}>Some major changes made:</p>
              <p className={styles.text3}>
                <ul>
                  <li>Implementing a cohesive design system + UI</li>
                  <li>Forming a more intuitive user flow + information architecture</li>
                </ul>
              </p>
              <iframe width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGQTv0nbZV4brw6kDeZWGUb%2FMachi-Machi-App-Redesign%3Fnode-id%3D479-1388%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D479%253A1388%26show-proto-sidebar%3D1" allowfullscreen></iframe>
            </div>
            <div className={styles.blockContent}>
              <p className={styles.text2}>Style Guide</p>
              <img src={require('../../imgs/machimachi/styleguide.png')} className={styles.img}  alt="" />
            </div>
        </section>

        <section id="takeaways" className={styles.block}>
          <div className={styles.blockTitle}>
            <p>Key Takeaways</p>
          </div>
          <div className={styles.blockContent}>
            <div>
              <p className={styles.text2}>Functionality &gt; Aesthetic ⚙️</p>
              <p className={styles.text3}>Products should look good, but work even better! As much as we love aesthetics as designers, remember to consider the functionality of your product</p>
            </div>
            <div>
              <p className={styles.text2}>Iterate, iterate, iterate 🔁</p>
              <p className={styles.text3}>There are billions of ways to design your product, and the best way to form a final decision is to lay everything out side-by-side.</p>
            </div>
            <div>
              <p className={styles.text2}>No need to reinvent the wheel 🎡</p>
              <p className={styles.text3}>Use available resources! I attempted to create original icons for the app, but quickly came to realize that it isn't an easy task. Why create new ones when there are already amazing icons that exist out there??</p>
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
  
export default MachiMachi;