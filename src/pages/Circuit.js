import React from 'react'
import '../styles/circuitStyles.css'
import '../styles/general.css'
import '../styles/queries.css'
 

export default function(){

    return <div>
   
    <div class="exercise-img"></div>
    <div class="parent-div">
      <img class="exercise-img" src="ippt-img.jpg" alt="peeps warming up" />

      <div class="moving-thing">
        <div class="exercise-heading exercise-container">
          <p class="exercise--header">IPPT Circuit</p>

          <div class="exercise--description">
            <p class="exercise--subtext time">
              Time <br />
              <ion-icon class="icon" name="stopwatch-outline"></ion-icon>
              <span> 50 mins </span>
            </p>
            <p class="exercise--subtext target">
              Target <br />
              <ion-icon class="icon" name="disc-outline"></ion-icon>
              <span> Arms, Core, Legs </span>
            </p>
          </div>
        </div>

  

        <h1 class="exercise-body-header exercise-container">
          Warm-Up <span>(5)</span>
        </h1>

        <div class="exercise-body-menu">
       

          <a class="exercise-body--item" href="#">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Jumping jacks</p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="#">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Arm Circles</p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="#">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Shoulder Shrugs</p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="#">
            <div class="flex-down-please">
              <ion-icon
                name="footsteps-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Leg swings <br />(forward)</p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="#">
            <div class="flex-down-please">
              <ion-icon
                name="footsteps-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">
                  Leg swings <br />(side-to-side)
                </p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
              </div>
            </div>
          </a>
        </div>

       

        <h1 class="exercise-body-header exercise-container">
          Exercises <span>(3)</span>
        </h1>

        <div class="exercise-body-menu">
         

          <a class="exercise-body--item" href="#">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Push Up</p>
                <p class="exercise-body--subtext">x 60</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="#">
            <div class="flex-down-please">
              <ion-icon
                name="fitness-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Sit Up</p>
                <p class="exercise-body--subtext">x 60</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="#">
            <div class="flex-down-please">
              <ion-icon
                name="footsteps-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">2.4 Run</p>
                <p class="exercise-body--subtext">12 mins</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

}