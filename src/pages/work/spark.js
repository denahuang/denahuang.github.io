import React, { useState } from 'react';

import '../../global.scss';
import styles from './spark.module.scss';

import Authentication from '../../components/Authentication';
import { useUserContext } from '../../firebase/userContext';

import hero from '../../imgs/spark/spark.png';

import WorkIntro from '../../components/WorkIntro';
import WorkButtons from '../../components/WorkButtons';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';

const Spark = () => {
    const { user, loading, error } = useUserContext();

  // Dark mode
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
    
  return (
    <div data-theme={theme}>
        {error && <p className="error">{error}</p>}
        {loading ? <></> : <> {user ? 
        <div>
        <ProgressBar color="4A1EB9" /> 
        <div className={styles.container}>
            <WorkButtons />
            <WorkIntro 
            title="Unleashing your inner child, one swipe at a time"
            // tags="PRODUCT DESIGN, DESIGNATHON"
            hero={hero}
            duration="March 2023 (36 hours)"
            role="Product Designer (Team of 2)"
            tools="Figma, FigJam"
            skills="Product Design, UX/UI Design, User Research"
            color="4A1EB9"
            />
            <div className={styles.challenge}>
                <h1>The Challenge</h1>
                <p>How might we design an experience that sparks curiosity, self-reflection, and experimentation to enhance learning and discovery?</p>
            </div>
            <div className={styles.constraints}>
                <p className={styles.sectionName}>Preface</p>
                <hr className={styles.line} />
                <h2>Constraints</h2>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <h4>Design-Marathon: A marathon indeed. ☝️</h4>
                        <p> With less than 36 hours to perform the design process, this was an exciting experience to see not only how quickly I could work, but how strategically I could optimize the process to create a fruitful product.</p>
                    </div>
                    <div className={styles.item}>
                        <h4>The first of many ⏳</h4>
                        <p>This was the first designathon for both myself and my partner. We weren't too sure what to expect, but nonetheless, we produced a worthwhile product and had fun while doing so!</p>
                    </div>
                </div>
            </div>
            <div className={styles.define}>
                <p className={styles.sectionName}>Define</p>
                <hr className={styles.line} />
                <h2>Initial Design Workshop and Research</h2>
                <p>With an broad open-ended challange statement, our team chose to first define our target users along with the key areas we wanted to design for.</p>
                <div className={styles.empathy}>
                    <div className={styles.textContainer}>
                        <p>Because this was our first designathon, we wanted to make something more personal. We decided to design for students entering the workforce, like ourselves, who felt held back by our education and career.</p>
                    </div>
                    <div className={styles.imgContainer}><img src={require("../../imgs/spark/empathy-map.png")} alt="" /></div>
                </div>
                <div className={styles.target}>
                    <div className={styles.textContainer}>
                        <p>Our target market: Young adults who want to explore new hobbies.</p>
                        <ul>
                            <li>Feel stuck in their 9-to-5's</li>
                            <li>Don't know where to start</li>
                            <li>Afraid of doing things alone</li>
                        </ul>
                    </div>
                    <div className={styles.imgContainer}><img src={require("../../imgs/spark/define.png")} alt="" /></div>
                </div>
                <div className={styles.persona}>
                    <h2>Meet Anna!</h2>
                    <div className={styles.imgContainer}><img src={require("../../imgs/spark/persona1.png")} alt="" /></div>
                    <div className={styles.imgContainer}><img src={require("../../imgs/spark/persona2.png")} alt="" /></div>
                </div>
            </div>
            <div className={styles.ideation}>
                <p className={styles.sectionName}>Ideation</p>
                <hr className={styles.line} />
                <h2>Brainstorming Features</h2>
                <p>We began out ideation phase by brainstorming features and categorizing them into three verticals: must-have's, nice-to-have's, and due-diligence's.</p>
                <span>The goals of our features:</span>
                <ul>
                    <li>Create a safe and fun space for self-discovery</li>
                    <li>Deepen introspection and self-reflection</li>
                    <li>Be intuitive and familiar to our users</li>
                </ul>
                <div className={styles.imgContainer}><img src={require("../../imgs/spark/ideate.png")} alt="" /></div>
                <h2>User Flow</h2>
                <p>We established an intuitive user flow to prepare for our prototype building. Since we wanted to emphasize our swiping feature, we decided to have it as the initial screen that users see when first opening the app. </p>
                <div className={styles.imgContainer}><img src={require("../../imgs/spark/user-flow.png")} alt="" /></div>
            </div>
            <div className={styles.prototype}>
                <p className={styles.sectionName}>Prototype</p>
                <hr className={styles.line} />
                <h2>Brand Identity</h2>
                <div className={styles.brandIdentity}>
                    <div className={styles.brand1}>
                        <div className={styles.imgContainer}><img src={require("../../imgs/spark/logo.png")} alt="" /></div>
                        <div className={styles.imgContainer}><img src={require("../../imgs/spark/iconography.png")} alt="" /></div>
                        <div className={styles.imgContainer}><img src={require("../../imgs/spark/color-palette.png")} alt="" /></div>
                    </div>
                    <div className={styles.brand2}>
                        <div className={styles.imgContainer}><img src={require("../../imgs/spark/typography.png")} alt="" /></div>
                    </div>
                </div>
                
                <h2>Our Final Product</h2>
                <p>After a hectic 36 hours, we finished our high-fidelity prototype! Try it out below or using the link <a href="https://www.figma.com/proto/SZO8W8FWhZ1LGF2aViOAIN/UXL-Designathon-2023?node-id=104-10678&scaling=scale-down&page-id=22%3A13447&starting-point-node-id=104%3A10678" target="_blank" rel="noreferrer">here</a>.</p>
                {/* <div className={styles.imgContainer}><img src={require("../../imgs/spark/ideate.png")} alt="" /></div> */}
                <iframe width="100%" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FSZO8W8FWhZ1LGF2aViOAIN%2FUXL-Designathon-2023%3Fnode-id%3D104-10678%26scaling%3Dscale-down%26page-id%3D22%253A13447%26starting-point-node-id%3D104%253A10678" allowfullscreen></iframe>
            </div>
            <div className={styles.conclusion}>
                <p className={styles.sectionName}>Conclusion</p>
                <hr className={styles.line} />
                <h1>Key Takeaways</h1>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <h4>Divide and conquer ☝️</h4>
                        <p>The beauty of having a team is being able to rely on each other. Optimize work production by working to your strengths!</p>
                    </div>
                    <div className={styles.item}>
                        <h4>Sacrifice is inevitable ⏳</h4>
                        <p>As participants, we were provided with informative workshops and mentors while working through our challenge. Though my partner and I wanted to attend all the workshops, we were unable to because we wanted to perfect our product. </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div> : <Authentication />} </>}
    </div>
  )
}

export default Spark