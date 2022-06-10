import React from 'react'
import trainerImage from './personal-training-loginpage.svg'
import waveImage from './wave.svg'
import './style.css'
import './general.css'
import './queries.css'





export default function() {
    return <div style={{backgroundImage: waveImage }}>
   
    <div class="trainer-img">
      <img src={trainerImage} alt="trainer with friend" />
    </div>
    <div class="login-heading">
      <p class="heading">Create Account</p>
    </div>

    <form class="login-form" name="sign-up" netlify>
      <div class="input-email">
        <input
          id="email"
          type="email"
          placeholder="email"
          name="email"
          required
        />

        <ion-icon
          name="mail-outline"
          class="input-img input-img--email"
        ></ion-icon>
      </div>

      <div class="input-password">
        <input
          id="password"
          type="text"
          placeholder="password"
          name="password"
          required
        />

        <ion-icon
          name="key-outline"
          class="input-img input-img--password"
        ></ion-icon>
      </div>

      <div class="input-confirm-password">
        <input
          id="confirm-password"
          type="text"
          placeholder=" confirm password"
          name="password"
          required
        />

        <ion-icon
          name="key-outline"
          class="input-img input-img--confirm-password"
        ></ion-icon>
      </div>

      <div class="btn-login">
        <a href="#" class="btn btn--login">
          Login<ion-icon
            name="arrow-forward-outline"
            class="btn--img"
          ></ion-icon>
        </a>
      </div>
    </form>

    <p class="login-footer">
      Already have an account?
      <a href="#" class="login-footer--sign-up">Sign In</a>
    </p>
 
    
    
  </div>
}