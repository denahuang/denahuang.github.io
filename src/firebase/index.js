import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDHiDqFWsrN-_3m2AglLky54ScHWpQEa3M",
  authDomain: "portfolio-7e2f3.firebaseapp.com",
  projectId: "portfolio-7e2f3",
  storageBucket: "portfolio-7e2f3.appspot.com",
  messagingSenderId: "1094074996950",
  appId: "1:1094074996950:web:01443e8fac00d9ab701177"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });