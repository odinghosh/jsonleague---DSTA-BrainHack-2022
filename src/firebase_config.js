// Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";



//import { getAnalytics } from "firebase/analytics";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey ,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
};





const firebaseApp = initializeApp(firebaseConfig)
const firestoreDB = getFirestore(firebaseApp)



export {firebaseApp, firestoreDB}



