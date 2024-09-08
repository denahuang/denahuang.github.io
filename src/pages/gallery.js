import { useState } from 'react';

import '../global.scss';
import styles from './gallery.module.scss';

import Authentication from '../components/Authentication';
import { useUserContext } from '../firebase/userContext';

// import WorkButtons from '../components/WorkButtons';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';

import { galleryImages } from '../data/galleryImages';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  // faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar';

const Gallery = () => {
  const { user, loading, error } = useUserContext();

  // Dark mode
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 

  const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber( galleryImages.length -1 ) 
        : setSlideNumber( slideNumber - 1 )
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === galleryImages.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber + 1)
    }
    
  return (
    <div data-theme={theme}>
      {error && <p className="error">{error}</p>}
      {loading ? <></> : <> {user ? 
        <div className={styles.body}>
          {/* <div className={styles.themeToggle}><ThemeToggle  theme={theme} onClick={() => {toggleTheme(); playToggle()}} /></div> */}
          <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.content}>
              <div className={styles.intro}>
                  <h1>Dena's Gallery</h1>
              </div>
              <div className={styles.gallery}>
          
                {openModal && 
                  <div className={styles.sliderWrap}  >
                    <div className={styles.buttons}>
                      <FontAwesomeIcon icon={faCircleChevronLeft} className={styles.btnPrev} onClick={prevSlide} />
                      <FontAwesomeIcon icon={faCircleChevronRight} className={styles.btnNext} onClick={nextSlide} />
                    </div>

                    <div className={styles.background} onClick={handleCloseModal}>
                    </div>
                    
                    <div className={styles.fullScreenImage}>
                      <img src={galleryImages[slideNumber].img} alt='' />
                    </div>
                  </div>
                }
          
                {/* <br />
                Current slide number:  {slideNumber}
                <br />
                Total Slides: {galleryImages.length}
                <br /><br /> */}
          
                <div className={styles.galleryWrap}>
                  {
                    galleryImages && galleryImages.map((slide, index) => {
                      return(
                        <div 
                          className={styles.single} 
                          key={index}
                          onClick={ () => handleOpenModal(index) }
                        >
                          <img src={slide.img} alt='' />
                        </div>
                      )
                    })
                  }
                </div>
        
                </div>
              </div>
            </div>
            <Footer className={styles.footer} />
          </div> : <Authentication />} </>}
    </div>
  )
}

export default Gallery