import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

import {firebaseApp} from '../firebase_config'



export async function register(email, password) {
    const auth = getAuth(firebaseApp)
   
 

    const user = await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log('New User ' + email + ' has registered');
            const user = userCredential.user
            //addNewUser(user)
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
   
    const auth = getAuth(firebaseApp)

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

export async function addNewUser(user) {
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