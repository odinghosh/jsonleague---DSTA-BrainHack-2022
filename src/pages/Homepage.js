import React, { useEffect } from 'react';
import '../styles/HomeStyle.css';
import  '../styles/general.css';
import  '../styles/queries.css';
import pfp from './pfp.png';
import {getUserRecord, getExercisesByType, getAllExerciseTypes, getAllTypesForExercise} from "../models/firestoreDAO";
import Cookies from 'universal-cookie';

import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

export default function () {
  const navigate = useNavigate();

  useEffect(()=>{
    var uid = cookies.get('uid');
    if (!uid) {

    }
    console.log(uid)
    getUserRecord(uid)
        .then()
        .catch()

    //getExercisesByType("WarmUps", "Gold", "IPPTCircuit").then().catch()
    //getAllExerciseTypes("Gold").then().catch()
    //getAllTypesForExercise("Gold", "Legs").then().catch()

  }, [])

  //checking if a person is authenticated already
  /*
var uid = cookies.get('uid');
if (uid) {
  navigate('../home');
}*/

  return (
    <div>
      <div class="home-heading container">
        <div class="home-greeting">
          <p class="home--subtext">Glad to see you again!</p>
          <p class="home--header">Dreaded Scientist</p>
        </div>
        <img src={pfp} class="user-profile-pfp "></img>
      </div>

      <div class="container">
        <div class="minutes-worked-out">
          <p class="minutes-heading">Minutes worked out</p>
          <p class="minutes-subtext">12,532</p>
        </div>
      </div>

      <h1 class="home-scroll-header container">What are we doing today?</h1>

      <div class="home-scroll-menu scrollmenu no-scrollbar container">
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../ippt');
          }}
          class="home-scroll--item"
          href="#"
        >
          <div class="flex-please">
            <ion-icon
              name="infinite-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-scroll--heading">IPPT Circuit</p>
              <p class="home-scroll--subtext">Attempt a full IPPT</p>
            </div>
          </div>
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../pushup');
          }}
          class="home-scroll--item"
          href="#"
        >
          <div class="flex-please">
            <ion-icon
              name="barbell-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-scroll--heading">Push Up Training</p>
              <p class="home-scroll--subtext">
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
          class="home-scroll--item"
          href="#"
        >
          <div class="flex-please">
            <ion-icon
              name="fitness-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-scroll--heading">Sit Up Training</p>
              <p class="home-scroll--subtext">Strengthen your core</p>
            </div>
          </div>
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../running');
          }}
          class="home-scroll--item"
          href="#"
        >
          <div class="flex-please">
            <ion-icon
              name="footsteps-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-scroll--heading">Running Training</p>
              <p class="home-scroll--subtext">Get comfortable running</p>
            </div>
          </div>
        </a>
      </div>

      <h1 class="home-scroll-header container">Check your Posture</h1>

      <div class="home-scroll-menu scrollmenu no-scrollbar container">
        <a class="home-scroll--item" href="#">
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate('../pushupPosture');
            }}
            class="flex-please"
          >
            <ion-icon
              name="barbell-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-scroll--heading">Push Ups</p>
              <p class="home-scroll--subtext">
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
          class="home-scroll--item"
          href="#"
        >
          <div class="flex-please">
            <ion-icon
              name="fitness-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-scroll--heading">Sit Ups</p>
              <p class="home-scroll--subtext">Nail the form down</p>
            </div>
          </div>
        </a>
      </div>

      <h1 class="home-scroll-header container">
        Check your Posture for Weighted Exercises
      </h1>

      <div class="home-scroll-menu scrollmenu no-scrollbar container">
        <a class="home-scroll--item" href="#">
          <div class="flex-please">
            <ion-icon
              name="barbell-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-scroll--heading">Deadlifts</p>
              <p class="home-scroll--subtext">Don't hurt your back</p>
            </div>
          </div>
        </a>

        <a class="home-scroll--item" href="#">
          <div class="flex-please">
            <ion-icon
              name="barbell-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-scroll--heading">Bench Press</p>
              <p class="home-scroll--subtext">Feel your chest working</p>
            </div>
          </div>
        </a>

        <a class="home-scroll--item" href="#">
          <div class="flex-please">
            <ion-icon
              name="footsteps-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-scroll--heading">Squats</p>
              <p class="home-scroll--subtext">Don't hurt your back and knee</p>
            </div>
          </div>
        </a>

        <a class="home-scroll--item" href="#">
          <div class="flex-please">
            <ion-icon
              name="barbell-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p class="home-scroll--heading">Push Press</p>
              <p class="home-scroll--subtext">Get the pushing motion right</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
