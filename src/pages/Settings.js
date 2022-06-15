import React, {useState, useRef} from 'react';
import { useNavigate} from 'react-router-dom';

import '../styles/SettingsStyle.css';
import '../styles/general.css';
import '../styles/queries.css';
import pfpImg from './pfp.png';
import Cookies from 'universal-cookie';


export default function () { 
    const cookies = new Cookies()
    const nameRef = useRef(null)
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [difficulty, setDifficulty] = useState('Gold')
  return (
    <div>
      <div onClick={(e) => {
        navigate('../home')
      }} className="settings-utility-bar container">
        <ion-icon
          class="settings-utility-icon"
          name="chevron-back-outline"
        ></ion-icon>
      </div>

      <div className="settings-home-heading container">
        <img className="settings-user-profile-pfp" src={pfpImg} alt="my nft" />

        <div className="settings-home-greeting">
          <p className="settings-home--header">{cookies.get('name')}</p>
          <p className="settings-home--subtext">FREE</p>
        </div>
      </div>

      <div className="container less-padding">
        <div className="edit-container">
          <div className="line">
            <div>
              <p className="minutes-heading">Display Name</p>
              <p ref={nameRef} contentEditable='true' className="minutes-subtext">{cookies.get('name')}</p>
            </div>
            <button onClick={(e) => {
                console.log(nameRef.current.innerText)
                
                cookies.set('name', nameRef.current.innerText, {path:'/'})

              

            }} className="edit-btn btn">Edit</button>
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
                        <label className='minutes-heading' for="select-where">IPPT Target</label>
                        <select onChange={(e) => { setDifficulty(e.target.value) }} id="select-where" required>
                   
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                  </select>
                        </div>
                        <button onClick={(e)=>{
                            const cookies = new Cookies()
                            cookies.set('difficulty', difficulty, {path:'/'})
                            console.log(difficulty)

                        }}  className="edit-btn btn">Edit</button>

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
        <button onClick={(e) => {
            const cookies = new Cookies()
            cookies.remove('uid')
            navigate('../')

        }} className="submit edit-btn btn">Sign Out</button>
      </div>
    </div>
  );
}