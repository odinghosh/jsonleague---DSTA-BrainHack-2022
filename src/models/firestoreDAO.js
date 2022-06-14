import {setDoc, doc, serverTimestamp, getDoc} from 'firebase/firestore'
import {firestoreDB} from '../firebase_config'
import firebase from 'firebase/app'

export async function addNewUser(user) {
    //Add New user to database
    try {
        const today = serverTimestamp()
        await setDoc(doc(firestoreDB, "user_data", user.uid), {
            date_joined: today
        })
        console.log("Sucessfully added new user " + user.uid + " to database")
    } catch (e) {
        console.error("Error adding new user!: ", e)
        console.error(e.stack)
    }
}

export async function getUserRecord(uid) {
    //Get all of user records and cache it in browser
    try {
        const docRef = doc(firestoreDB, "user_data", uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log("Successfully accquired user data from", uid)
            console.log(docSnap.data())
        }
        else {
            console.warn("No user data!")
        }
    } catch (e) {
        console.error("Error getting user data from " + uid + ". ", e)
        console.error(e.stack)
    }
}

async function addNewRecord() {

}