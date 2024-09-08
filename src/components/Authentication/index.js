import React, { useState, useRef } from 'react';
import { useUserContext } from "../../firebase/userContext";

import styles from './index.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import ThemeToggle from "../ThemeToggle";
import toggle from '../../assets/toggle.mp3';

const Authentication = () => {
    // const emailRef = useRef();
    const psdRef = useRef();
    const { signInUser, forgotPassword } = useUserContext();
  
    const onSubmit = (e) => {
      e.preventDefault();
      const email = "d74huang@gmail.com";
      const password = psdRef.current.value;
      if (email && password) signInUser(email, password);
    };
  
    // const forgotPasswordHandler = () => {
    //   const email = emailRef.current.value;
    //   if (email)
    //     forgotPassword(email).then(() => {
    //       emailRef.current.value = "";
    //     });
    // };

    // Dark mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
    
    const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
      localStorage.setItem('theme', theme);
    }

    function playToggle() {
      new Audio(toggle).play()
    }

    // Password toggle
    const [viewOpen, setViewOpen] = useState(false)
    const toggleView = () => {
      setViewOpen(!viewOpen)
      var x = document.getElementById("toggle");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
    const viewIcon = viewOpen ? faEyeSlash : faEye

    return (
      <div data-theme={theme} className={styles.authentication}>
        {/* <div className={styles.themeToggle}><ThemeToggle theme={theme} onClick={() => {toggleTheme(); playToggle()}}/></div> */}
        
        <FontAwesomeIcon icon={faLock} className={styles.icon} />
        <h1>Psst.. What's the password?</h1>
        <form onSubmit={onSubmit}>
          {/* <input placeholder="Email" type="email" ref={emailRef} /> */}
          <div className={styles.inputContainer}>
            <input placeholder="Please:)" type="password" ref={psdRef} id="toggle" />
            <FontAwesomeIcon icon={viewIcon} onClick={toggleView} className={styles.toggle} />
          </div>
          
          <button type="submit">Open Sesame!</button>
          {/* <p onClick={forgotPasswordHandler}>Forgot Password?</p> */}
        </form>
      </div>
    );
  };
  
export default Authentication