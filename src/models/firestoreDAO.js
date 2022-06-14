import {collection, setDoc, doc, serverTimestamp, getDoc, getDocs} from 'firebase/firestore'
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

//async function getExercisesByType(string type(warm up or exercise), string target, string ExerciseType(circuit or pushups or ...))
export async function getExercisesByType(type, target, ExerciseType) {
    try {
        const path = "WorkoutDifficulty/" + target + "/ExerciseTypeList/" + ExerciseType + "/" + type
        const querySnapshot = await getDocs(collection(firestoreDB, path))
        let exercise_data = []
        querySnapshot.forEach((doc) => {
            var jsondata = {}
            jsondata[doc.id] = doc.data()
            exercise_data.push(jsondata)
        })
        console.log(exercise_data)
        return exercise_data
    } catch (e) {
        console.error("Error getting exercise data.")
    }
}