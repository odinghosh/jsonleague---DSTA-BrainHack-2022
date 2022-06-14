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



/*
export async function queryAuth() {
    return getAuth()
}

export async function register(email, password) {
    const auth = getAuth()

    const user = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log('New User ' + email + ' has registered');
            const user = userCredential.user
            addNewUser(user)
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
            throw error
        });
    return user
}

export async function login(email, password) {
    console.log('Logging in');
    const auth = getAuth()
    const user = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log('User ' + email + ' has logged in');
            return userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
            throw error
        });
    return user
}

async function addNewUser(user) {
    //Add New user to database
    try {
        await setDoc(doc(db, "user_data", user.uid), {
            age: 1,
            height: 1,
            weight: 1,
            name: 'hello',
            ippt_target: null,
            ippt_points: null
        })
        console.log("Sucessfully added new user " + user.uid + " to database")
    } catch (e) {
        console.error("Error adding document: ", e)
    }
}

async function addNewRecord() {

}

async function getData() {

}

*/