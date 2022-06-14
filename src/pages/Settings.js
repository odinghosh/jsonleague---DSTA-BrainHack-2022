import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/SettingsStyle.css';
import '../styles/general.css';
import '../styles/queries.css';
import pfpImg from './pfp.png';

export default function () {
  const navigate = useNavigate();
  return (
    <div>
      <div className="settings-utility-bar container">
        <ion-icon
          class="settings-utility-icon"
          name="chevron-back-outline"
        ></ion-icon>
      </div>

      <div className="settings-home-heading container">
        <img className="settings-user-profile-pfp" src={pfpImg} alt="my nft" />

        <div className="settings-home-greeting">
          <p className="settings-home--header">Dread Scientist</p>
          <p className="settings-home--subtext">FREE</p>
        </div>
      </div>

      <div className="container less-padding">
        <div className="edit-container">
          <div className="line">
            <div>
              <p className="minutes-heading">Display Name</p>
              <p className="minutes-subtext">Dread Scientist</p>
            </div>
            <button className="edit-btn btn">Edit</button>
          </div>

          <form className="line">
            <div>
              <p className="minutes-heading">Email</p>
              <p contentEditable="false" className="minutes-subtext">
                contact@gmail.com
              </p>
            </div>
            <button className="edit-btn btn">Edit</button>
          </form>

          <div className="line">
            <div>
              <p className="minutes-heading">Password</p>
              <p className="minutes-subtext" type="password">
                Dread Scientist
              </p>
            </div>
            <button className="edit-btn btn">Edit</button>
          </div>

          <div className="line">
            <div>
              <p className="minutes-heading">Age</p>
              <p className="minutes-subtext">22</p>
            </div>
            <button className="edit-btn btn">Edit</button>
          </div>

          <div className="line">
            <div>
              <p className="minutes-heading">Height(m)</p>
              <p className="minutes-subtext">1.72</p>
            </div>
            <button className="edit-btn btn">Edit</button>
          </div>

          <div className="line">
            <div>
              <p className="minutes-heading">Weight(kg)</p>
              <p className="minutes-subtext">contact@gmail.com</p>
            </div>
            <button className="edit-btn btn">Edit</button>
          </div>

          <div className="line">
            <div>
              <p className="minutes-heading">IPPT Target</p>
              <p className="minutes-subtext">Gold</p>
            </div>
            <button className="edit-btn btn">Edit</button>
          </div>

          <div className="line">
            <div>
              <p className="minutes-heading">IPPT Points</p>
              <p className="minutes-subtext">85</p>
            </div>
            <button className="edit-btn btn">Edit</button>
          </div>
        </div>
      </div>

      <div className="container less-padding">
        <div className="edit-container">
          <div className="line">
            <div>
              <p className="minutes-heading">Subscription</p>
              <p className="minutes-subtext">Free</p>
            </div>
            <button className="edit-btn btn pro">Upgrade to Pro</button>
          </div>
        </div>
      </div>

      <div className="container">
        <button className="submit edit-btn btn">Sign Out</button>
      </div>
    </div>
  );
}