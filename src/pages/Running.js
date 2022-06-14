import React from 'react';
import '../styles/exerciseStyles.css';
import '../styles/general.css';
import runningImg from './running-img.jpg';
import { useNavigate } from 'react-router-dom';

export default function () {
  const navigate = useNavigate();
  return (
    <div class="parent-div">
      <img class="exercise-img" src={runningImg} alt="girl doing push up" />

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
          <p class="exercise--header">Running Training</p>

          <div class="exercise--description">
            <p class="exercise--subtext time">
              Time <br />
              <ion-icon class="icon" name="stopwatch-outline"></ion-icon>
              <span> 60 min </span>
            </p>
            <p class="exercise--subtext target">
              Target <br />
              <ion-icon class="icon" name="disc-outline"></ion-icon>
              <span> Legs, Core</span>
            </p>
          </div>
        </div>

        <h1 class="exercise-body-header exercise-container">
          Warm-Up <span>(4)</span>
        </h1>

        <div class="exercise-body-menu">
          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="accessibility-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Jumping Jacks</p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="footsteps-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">General Leg Streches</p>
                <p class="exercise-body--subtext">5 min</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="footsteps-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Warm Up Jog</p>
                <p class="exercise-body--subtext">5 min</p>
              </div>
            </div>
          </a>
        </div>

        <h1 class="exercise-body-header exercise-container">
          Exercises <span>(6)</span>
        </h1>

        <div class="exercise-body-menu">
          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Mile Pace</p>
                <p class="exercise-body--subtext">0.5 min</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">5K Pace</p>
                <p class="exercise-body--subtext">4 sets of 0.5 min</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">10K Pace</p>
                <p class="exercise-body--subtext">3 min</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">5K Pace</p>
                <p class="exercise-body--subtext">4 sets of 0.5 min</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Mile Pace</p>
                <p class="exercise-body--subtext">0.5 min</p>
              </div>
            </div>
          </a>

          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Plank with Leg Lifts</p>
                <p class="exercise-body--subtext">3 sets of 0.5 min</p>
              </div>
            </div>
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate('../home');
            }}
            class="exercise-completed-btn"
            href="#"
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
