import React, { useState, useEffect } from 'react';
import styles from'./404.module.scss';


import Authentication from '../components/Authentication';
import { useUserContext } from '../firebase/userContext';

const FourOhFour = () => {
    const { user, loading, error } = useUserContext();

    // Dark mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
      
    return (
        <div data-theme={theme}>
            {error && <p className="error">{error}</p>}
            {loading ? <></> : <> {user ? 
            <div>
            <div className={styles.container}>
                <h1>OOPS</h1>
                <h2>How'd you get here??</h2>
                <p>Click <a href="/">Here</a> to go Home</p>
                <img src={require("../imgs/illustration3.png")} />
            </div>
            </div> : <Authentication />} </>}
        </div>
);
}
  
export default FourOhFour;