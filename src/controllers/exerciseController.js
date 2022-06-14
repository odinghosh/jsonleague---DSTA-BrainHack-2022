import React from 'react'
import { getExercisesByType } from '../models/firestoreDAO'




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
  export async function getAllExerciseTypes(difficulty){
    return await getAllExerciseTypes(difficulty)
  }


  export function getExerciseDataUI(type,pageName, stateHook){
    getExercisesByType(type, 'Gold', pageName).then((response)=>{
      console.log(response)
      stateHook(response)
    })
  }

  




