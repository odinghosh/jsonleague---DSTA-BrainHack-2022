import React from 'react';
import '../styles/exerciseStyles.css';
import '../styles/general.css';
import ipptImg from './ippt-img.jpg';
import { useNavigate } from 'react-router-dom';

export default function () {
  const navigate = useNavigate();
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
              <span> 50 mins </span>
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
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Arm Circles</p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
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
                <p class="exercise-body--heading">Shoulder Shrugs</p>
                <p class="exercise-body--subtext">3 set of 10 reps</p>
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
                <p class="exercise-body--heading">Wrist Circles</p>
                <p class="exercise-body--subtext">3 sets of 10 reps</p>
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
                <p class="exercise-body--heading">
                  Leg Swings
                  <br />
                  (side-to-side)
                </p>
                <p class="exercise-body--subtext">3 sets of 10 reps</p>
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
                <p class="exercise-body--heading">
                  Leg Swings
                  <br />
                  (forward)
                </p>
                <p class="exercise-body--subtext">3 sets of 10 reps</p>
              </div>
            </div>
          </a>
        </div>

        <h1 class="exercise-body-header exercise-container">
          Exercises <span>(3)</span>
        </h1>

        <div class="exercise-body-menu">
          <a class="exercise-body--item" href="javascript:void(0)">
            <div class="flex-down-please">
              <ion-icon
                name="barbell-outline"
                class="exercise-body--icon"
              ></ion-icon>
              <div>
                <p class="exercise-body--heading">Push Up</p>
                <p class="exercise-body--subtext">Max reps in 60 sec</p>
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
                <p class="exercise-body--heading">Sit Ups</p>
                <p class="exercise-body--subtext">Max reps in 60 sec</p>
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
                <p class="exercise-body--heading">2.4 km Run</p>
                <p class="exercise-body--subtext">Shortest time possible</p>
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
          >
            <p class="exercise-body--heading exercise-done">Finish</p>
          </a>
        </div>
      </div>
    </div>
  );
}
