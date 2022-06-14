import {collection, setDoc, doc, serverTimestamp, getDoc, getDocs, query, where} from 'firebase/firestore'
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
        const docSnap = await getDoc(doc(firestoreDB, "user_data", uid))
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

export async function addNewRecord() {

}

//async function getExercisesByType(string type(warm up or exercise), string target, string ExerciseType(circuit or pushups or ...))
export async function getExercisesByType(type, difficulty, ExerciseType) {
    try {
        const path = "WorkoutDifficulty/" + difficulty + "/ExerciseTypeList"
        const workout_path = path + "/" + ExerciseType + "/" + type
        const querySnapshot = await getDocs(collection(firestoreDB, workout_path))
        const docSnapshot = await getDoc(doc(firestoreDB, path, ExerciseType))

        let exercise_workouts = []
        querySnapshot.forEach((doc) => {
            
            var jsondata = {...doc.data(), name:doc.id}
            exercise_workouts.push(jsondata)
        })

        let exercise_data = {}
        exercise_data["workouts"] = exercise_workouts
        exercise_data["time"] = docSnapshot.get("time")
        exercise_data["target"] = docSnapshot.get("target")
     
        return exercise_workouts
    } catch (e) {
        console.error("Error getting exercise data.", e.stack)
    }
}

//list json  getAll exerciseTypes(string target)
//list json getAllTypesForExercise(string target, string ExerciseTarget)
export async function getAllExerciseTypes(difficulty) {
    try {
        const querySnapshot = await getDocs(collection(firestoreDB, "WorkoutDifficulty/" + difficulty + "/ExerciseTypeList"))
        let exercise_data = []
        querySnapshot.forEach(doc => {
        
            var jsondata = {...doc.data(), name:doc.id}
            exercise_data.push(jsondata)
        })
        //console.log(exercise_data)
        return exercise_data

    } catch (e) {
        console.error("Error getting all exercise data for "+ difficulty + ".", e.stack)
    }
}

export async function getAllTypesForExercise(difficulty, target) {
    try {
        const q = query(collection(firestoreDB, "WorkoutDifficulty/" + difficulty + "/ExerciseTypeList"),
            where("target", "array-contains", target))
        const querySnapshot = await getDocs(q)
        let exercise_data = []
        querySnapshot.forEach(doc => {
            let jsondata = {}
            jsondata[doc.id] = doc.data()
            exercise_data.push(jsondata)
        })
        console.log(exercise_data)
        return exercise_data
    } catch (e) {
        console.error("Error getting all " + target + " exercise data for "+ difficulty + ".", e.stack)
    }
}