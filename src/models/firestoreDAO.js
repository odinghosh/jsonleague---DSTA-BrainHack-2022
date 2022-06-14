import {setDoc, doc} from 'firebase/firestore'
import {firestoreDB} from '../firebase_config'
export async function addNewUser(user) {
    //Add New user to database
    try {
        await setDoc(doc(firestoreDB, "user_data", user.uid), {
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