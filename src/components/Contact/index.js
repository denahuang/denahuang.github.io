import React, { useState } from 'react';

import '../../global.scss';
import styles from './index.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init('user_id');

const Contact = ({ func }) => {

    // Dark mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 

    const [named, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {

        if (named && email && message) {
            const serviceId = 'service_dnauryu';
            const templateId = 'template_x5mfy6b';
            const userId = 'egyNntv--FJREjqq6';
            const templateParams = {
                named,
                email,
                message
            };
    
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
     
             setName('');
             setEmail('');
             setMessage('');
             setEmailSent(true);
         } else {
             alert('Please fill in all fields.');
         }
    }

    return (
        <>
            <div className={styles.overlay} onClick={func}></div>
            <div className={styles.contactContainer} data-theme={theme}>
                <div className={styles.form}>
                    <div className={styles.intro}>
                        <div className={styles.text}>
                            <h1>Let's Connect</h1>
                            <p>I would offer to chat over coffee, but I'm more of a tea girl myself. Let's grab tea and talk!</p>
                        </div>
                        <div className={styles.img}>
                            <img src={require("../../imgs/illustration.gif")} alt="me" />
                        </div>
                    </div>
                    <div className={styles.cont}>
                        <div className={styles.name}>
                            <p>Name*</p>
                            <input type="text" placeholder="" value={named} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className={styles.email}>
                            <p>Email*</p>
                            <input type="email" placeholder="" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                    </div>
                    
                    <div className={styles.message}>
                        <p>Message*</p>
                        <textarea placeholder="" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    
                    <button className={styles.submit} onClick={submit}>Send Message</button>
                    <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
                    {/* <div className={styles.closeBtn} onClick={func}><FontAwesomeIcon icon={faClose} /></div> */}
                </div>
            </div>
        </>
    )
}

export default Contact