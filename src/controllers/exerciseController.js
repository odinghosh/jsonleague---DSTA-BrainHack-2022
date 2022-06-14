import React from 'react'


const exerciseList = [{exerciseName: 'Jumping jacks', exerciseAmount: '3 sets of 10 reps'}]

// creates exercise html object from a specified exercise data
function createExercise (exerciseName, exerciseAmount) {
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
  function getAllExercises(ipptTarget){
    
  }

  

  export {createExercise, exerciseList}



