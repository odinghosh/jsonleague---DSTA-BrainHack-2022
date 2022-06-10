import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

import trainerImage from './personal-training-loginpage.svg'

import '../styles/style.css'
import '../styles/general.css'
import '../styles/queries.css'





export default function() {

    const [registered, setRegistered] = useState(false);
    const navigate = useNavigate();

    
    return <div>
   
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

      { !registered && <div class="input-confirm-password">
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
      }

      <div class="btn-login">
        <a onClick={() =>{
          if(registered){
          navigate('../home', {replace:true})
          }
        }} href="#" class="btn btn--login">{
        !registered? 'Register':'login'
        }
        
        <ion-icon
            name="arrow-forward-outline"
            class="btn--img"
          ></ion-icon>
        </a>
      </div>
    </form>

    <p class="login-footer">
      Already have an account?
      <a href="#" class="login-footer--sign-up"  onClick={()=> {setRegistered(!registered)}}>Sign In</a>
    </p>
 
    
    
  </div>
}