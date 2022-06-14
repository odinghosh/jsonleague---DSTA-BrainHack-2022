import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/InitialiseStyle.css';
import '../styles/general.css';
import '../styles/queries.css';
import initPageImg from "./init-page-img.svg"
import homepage from "./Homepage";

export default function () {
    const navigate = useNavigate();
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <link rel="stylesheet" href="general.css"/>
            <link rel="stylesheet" href="style.css"/>
            <link rel="stylesheet" href="queries.css"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            <script
                type="module"
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
            ></script>
            <script
                noModule
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
            ></script>

            <script
                src="https://kit.fontawesome.com/ab1de0cb17.js"
                crossOrigin="anonymous"
            ></script>

            <title>Fitness App &dash; Gold is closer than you realise</title>
        </head>
        <body>

        <div className="utility-bar container">
            <ion-icon className="utility-icon" name="chevron-back-outline"></ion-icon>
        </div>

        <div className="has-img">
            <img className="init-page-img" src={initPageImg} alt="help"/>
        </div>

        <div className="home-heading container">
            <div className="home-greeting">
                <p className="home--header">Enter your details</p>
                <p className="home--subtext">So that we can help you out better</p>
            </div>
        </div>

        <form className="submit-form" name="sign-up" netlify>
            <div className="container less-padding">
                <div className="edit-container">
                    <div className="line">
                        <div>
                            <p className="minutes-heading">Display Name</p>
                            <input className="minutes-subtext" placeholder="Barry"/>
                        </div>
                    </div>

                    

                    <div className="line">
                        <div>
                            <p className="minutes-heading">Age</p>
                            <input placeholder="21" className="minutes-subtext"/>
                        </div>
                    </div>

                    <div className="line">
                        <div>
                            <p className="minutes-heading">Height(m)</p>
                            <input placeholder="192" className="minutes-subtext"/>
                        </div>
                    </div>

                    <div className="line">
                        <div>
                            <p className="minutes-heading">Weight(kg)</p>
                            <input placeholder="76" className="minutes-subtext"/>
                        </div>
                    </div>

                    <div className="line">
                        <div>
                        <label for="select-where">IPPT Target</label>
                        <select id="select-where" required>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                  </select>
                        </div>
                    </div>

                    <div className="line">
                        <div>
                            <p className="minutes-heading">IPPT Points</p>
                            <input placeholder="100" className="minutes-subtext"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container less-padding">
                <div className="edit-container">
                    <div className="line">
                        <div>
                            <p className="minutes-heading free">Subscription</p>
                            <p className="minutes-subtext">Free</p>
                        </div>
                        <button className="edit-btn btn pro">Upgrade to Pro</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <button className="submit pro edit-btn btn">Submit</button>
            </div>
        </form>
        </body>
        </html>
    )
}