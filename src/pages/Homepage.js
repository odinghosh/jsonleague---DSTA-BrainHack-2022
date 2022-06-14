import React, { useEffect } from 'react';
import '../styles/HomeStyle.css';
import '../styles/general.css';
import '../styles/queries.css';
import pfp from './pfp.png';
import {
  getUserRecord,
  getExercisesByType,
  getAllExerciseTypes,
  getAllTypesForExercise,
} from '../models/firestoreDAO';
import Cookies from 'universal-cookie';

import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

export default function () {
  const navigate = useNavigate();

  useEffect(() => {
    var uid = cookies.get('uid');
    if (!uid) {
    }
    console.log(uid);
    getUserRecord(uid).then().catch();

    //getExercisesByType("WarmUps", "Gold", "IPPTCircuit").then().catch()
    //getAllExerciseTypes("Gold").then().catch()
    //getAllTypesForExercise("Gold", "Legs").then().catch()
  }, []);

  //checking if a person is authenticated already
  /*
var uid = cookies.get('uid');
if (uid) {
  navigate('../home');
}*/

  return (
    <div>
      <div className="home-home-heading container">
        <div className="home-home-greeting">
          <p className="home-home-subtext">Glad to see you again!</p>
          <p className="home-home-header">Dreaded Scientist</p>
        </div>
        <a>
          <img src={pfp} class="home-user-profile-pfp "></img>
        </a>
      </div>

      <div class="container">
        <div class="home-minutes-worked-out">
          <p class="home-minutes-heading">Minutes worked out</p>
          <p class="home-minutes-subtext">12,532</p>
        </div>
      </div>

      <h1 className="home-home-scroll-header container">
        What are we doing today?
      </h1>

      <div className="home-home-scroll-menu scrollmenu no-scrollbar container">
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../ippt');
          }}
          className="home-home-scroll--item"
          href="#"
        >
          <div className="flex-please">
            <ion-icon
              name="infinite-outline"
              class="home-home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-home-scroll--heading">IPPT Circuit</p>
              <p className="home-home-scroll--subtext">Attempt a full IPPT</p>
            </div>
          </div>
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../pushup');
          }}
          className="home-home-scroll--item"
          href="#"
        >
          <div className="flex-please">
            <ion-icon
              name="barbell-outline"
              class="home-home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-home-scroll--heading">Push Up Training</p>
              <p className="home-home-scroll--subtext">
                Build up strength to hit max push ups
              </p>
            </div>
          </div>
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../situp');
          }}
          className="home-home-scroll--item"
          href="#"
        >
          <div className="flex-please">
            <ion-icon
              name="fitness-outline"
              class="home-home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-home-scroll--heading">Sit Up Training</p>
              <p className="home-home-scroll--subtext">Strengthen your core</p>
            </div>
          </div>
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../running');
          }}
          className="home-home-scroll--item"
          href="#"
        >
          <div className="flex-please">
            <ion-icon
              name="footsteps-outline"
              class="home-home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-home-scroll--heading">Running Training</p>
              <p className="home-home-scroll--subtext">
                Get comfortable running
              </p>
            </div>
          </div>
        </a>
      </div>

      <h1 className="home-home-scroll-header container">Check your Posture</h1>

      <div className="home-home-scroll-menu scrollmenu no-scrollbar container">
        <a className="home-home-scroll--item" href="#">
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate('../pushupPosture');
            }}
            className="flex-please"
          >
            <ion-icon
              name="barbell-outline"
              class="home-home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-home-scroll--heading">Push Ups</p>
              <p className="home-home-scroll--subtext">
                Don't get a "Lower Back" again
              </p>
            </div>
          </div>
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../situpPosture');
          }}
          className="home-home-scroll--item"
          href="#"
        >
          <div className="flex-please">
            <ion-icon
              name="fitness-outline"
              class="home-home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-home-scroll--heading">Sit Ups</p>
              <p className="home-home-scroll--subtext">Nail the form down</p>
            </div>
          </div>
        </a>
      </div>

      <h1 class="home-home-scroll-header container">
        Check your Posture for Weighted Exercises
      </h1>

      <div class="home-home-scroll-menu scrollmenu no-scrollbar container">
        <a class="home-home-scroll--item" href="#">
          <div class="flex-please">
            <ion-icon
              name="barbell-outline"
              class="home-home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-home-scroll--heading">Deadlifts</p>
              <p class="home-home-scroll--subtext">Don't hurt your back</p>
            </div>
          </div>
        </a>

        <a class="home-home-scroll--item" href="#">
          <div class="flex-please">
            <ion-icon
              name="barbell-outline"
              class="home-home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-home-scroll--heading">Bench Press</p>
              <p class="home-home-scroll--subtext">Feel your chest working</p>
            </div>
          </div>
        </a>

        <a class="home-home-scroll--item" href="#">
          <div class="flex-please">
            <ion-icon
              name="footsteps-outline"
              class="home-home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-home-scroll--heading">Squats</p>
              <p class="home-home-scroll--subtext">
                Don't hurt your back and knee
              </p>
            </div>
          </div>
        </a>

        <a class="home-home-scroll--item" href="#">
          <div class="flex-please">
            <ion-icon
              name="barbell-outline"
              class="home-home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-home-scroll--heading">Push Press</p>
              <p class="home-home-scroll--subtext">
                Get the pushing motion right
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
