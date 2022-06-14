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
            console.error(error.message);
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
            console.error(error.message);
            throw error
        });
    return user
}

