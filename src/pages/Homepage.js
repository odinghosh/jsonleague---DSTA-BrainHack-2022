import React from 'react';
import '../styles/HomeStyle.css';
import '../styles/general.css';
import '../styles/queries.css';
import { useNavigate } from 'react-router-dom';

export default function () {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home-heading container">
        <div className="home-greeting">
          <p className="home--header">Hi Lorem,</p>
          <p className="home--subtext">Glad to see you again!</p>
        </div>
        <div className="days-worked-out">
          <svg height="120" width="120" className="days-worked-out-circle">
            <circle cx="60" cy="60" r="60" fill="#FFF0F2" />
          </svg>
          <div>
            <i className="fa-solid fa-8 number-icon"></i>
          </div>
          <p className="days-worked-out--text">Days worked out</p>
        </div>
      </div>

      <h1 className="home-scroll-header container">What are we doing today?</h1>

      <div className="home-scroll-menu scrollmenu no-scrollbar container">
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../ippt');
          }}
          className="home-scroll--item"
          href="#"
        >
          <div className="flex-please">
            <ion-icon
              name="infinite-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-scroll--heading">IPPT Circuit</p>
              <p className="home-scroll--subtext">Attempt a full IPPT</p>
            </div>
          </div>
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../pushup');
          }}
          className="home-scroll--item"
          href="#"
        >
          <div className="flex-please">
            <ion-icon
              name="barbell-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-scroll--heading">Push Up Training</p>
              <p className="home-scroll--subtext">
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
          className="home-scroll--item"
          href="#"
        >
          <div className="flex-please">
            <ion-icon
              name="fitness-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-scroll--heading">Sit Up Training</p>
              <p className="home-scroll--subtext">Strengthen your core</p>
            </div>
          </div>
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            navigate('../running');
          }}
          className="home-scroll--item"
          href="#"
        >
          <div className="flex-please">
            <ion-icon
              name="footsteps-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-scroll--heading">Running Training</p>
              <p className="home-scroll--subtext">Get comfortable running</p>
            </div>
          </div>
        </a>
      </div>

      <h1 className="home-scroll-header container">Check your Posture</h1>

      <div className="home-scroll-menu scrollmenu no-scrollbar container">
        <a className="home-scroll--item" href="#">
          <div
            onClick={(e) => {
              e.preventDefault();
              navigate('../pushupPosture');
            }}
            className="flex-please"
          >
            <ion-icon
              name="barbell-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-scroll--heading">Push Ups</p>
              <p className="home-scroll--subtext">
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
          className="home-scroll--item"
          href="#"
        >
          <div className="flex-please">
            <ion-icon
              name="fitness-outline"
              class="home-scroll--icon"
            ></ion-icon>
            <div>
              <p className="home-scroll--heading">Sit Ups</p>
              <p className="home-scroll--subtext">Nail the form down</p>
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
