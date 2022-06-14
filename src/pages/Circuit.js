import React, { useEffect, useState } from 'react';
import '../styles/exerciseStyles.css';
import '../styles/general.css';
import ipptImg from './ippt-img.jpg';
import { useNavigate } from 'react-router-dom';
import { createExercise, getExerciseDataUI, getExerciseTypeMetaData} from '../controllers/exerciseController';

export default function () {
  const navigate = useNavigate();

  const [warmUpExercises, setWarmUpExercises] = useState([])
  const [normalExercises, setNormalExercises] = useState([])
  const [time, setTime] = useState('')

  
  
  
  
  useEffect(() => {
    getExerciseDataUI('WarmUps', 'IPPTCircuit', setWarmUpExercises);
    getExerciseDataUI('Exercises', 'IPPTCircuit', setNormalExercises);
    getExerciseTypeMetaData('IPPTCircuit', setTime)
    
  } , [])
  return (
    <div class="parent-div">
      <img class="exercise-img" src={ipptImg} alt="people warming up" />

      <div class="moving-thing">
        <div class="exercise-heading exercise-container">
          <div class="utility-bar">
            <ion-icon
              onClick={(e) => {
                e.preventDefault();
                navigate('../home');
              }}
              class="utility-icon"
              name="chevron-back-outline"
            ></ion-icon>

            <ion-icon
              class="utility-icon"
              name="ellipsis-vertical-outline"
            ></ion-icon>
          </div>
          <p class="exercise--header">IPPT Circuit</p>

          <div class="exercise--description">
            <p class="exercise--subtext time">
              Time <br />
              <ion-icon class="icon" name="stopwatch-outline"></ion-icon>
              <span> {time} mins </span>
            </p>
            <p class="exercise--subtext target">
              Target <br />
              <ion-icon class="icon" name="disc-outline"></ion-icon>
              <span> Arms, Core, Legs</span>
            </p>
          </div>
        </div>

        <h1 class="exercise-body-header exercise-container">
          Warm-Up <span>(5)</span>
        </h1>

        <div class="exercise-body-menu">
        {(warmUpExercises).map((e)=>{return createExercise(e.name, e.amount)})}
          
        </div>

        <h1 class="exercise-body-header exercise-container">
          Exercises <span>(3)</span>
        </h1>

        <div class="exercise-body-menu">
        {normalExercises.map(e=>{return createExercise(e.name, e.amount)})}
          
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate('../home');
            }}
            class="exercise-completed-btn"
            href="#"
          >
            <p class="exercise-body--heading exercise-done">Finish</p>
          </a>
        </div>
      </div>
    </div>
  );
}
