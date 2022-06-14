// Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBaxnPfnVYZKGzgo07O43S3OykoMl1qS-g',
    authDomain: 'jsonleague.firebaseapp.com',
    projectId: 'jsonleague',
    storageBucket: 'jsonleague.appspot.com',
    messagingSenderId: '76946241417',
    appId: '1:76946241417:web:45a254e79c9b80fb645358',
    measurementId: 'G-8WX33FZ0V8',
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

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