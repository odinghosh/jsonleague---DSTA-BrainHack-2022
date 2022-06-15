import React from 'react'
import { getExercisesByType, getAllExerciseTypes } from '../models/firestoreDAO'
import Cookies from 'universal-cookie';




// creates exercise html object from a specified exercise data
export function createExercise (exerciseName, exerciseAmount) {
    return <a class="exercise-body--item" href="#">
    <div class="flex-down-please">
      <ion-icon
        name="barbell-outline"
        class="exercise-body--icon"
      ></ion-icon>
      <div>
        <p class="exercise-body--heading">{exerciseName}</p>
        <p class="exercise-body--subtext">{exerciseAmount}</p>
      </div>
    </div>
  </a> 
  
  }

  // function gets all the exercises for the desired target for all exercise sub category



  export function getExerciseTypeMetaData(pageName, timeHook){
    var difficulty = 'Gold'

    const cookies = new Cookies()
    var savedDifficulty = cookies.get('difficulty')
    if(savedDifficulty){
      difficulty = savedDifficulty
    }

    getAllExerciseTypes(difficulty).then((response) => {
      console.log(response)
      timeHook(response[pageName].time)
     
    })

  }


  export function getExerciseDataUI(type,pageName, stateHook){
    var difficulty = 'Gold'

    const cookies = new Cookies()
    var savedDifficulty = cookies.get('difficulty')
    if(savedDifficulty){
      difficulty = savedDifficulty
    }


    getExercisesByType(type, difficulty, pageName).then((response)=>{
      console.log(response)
      stateHook(response)
    })
  }

  




