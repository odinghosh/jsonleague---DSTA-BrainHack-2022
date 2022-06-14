import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/SettingsStyle.css';
import '../styles/general.css';
import '../styles/queries.css';
import pfpImg from "./pfp.png";

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

        <div className="home-heading container">
            <img className="user-profile-pfp" src={pfpImg} alt="my nft"/>

            <div className="home-greeting">
                <p className="home--header">Dread Scientist</p>
                <p className="home--subtext">FREE</p>
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
                        <p className="minutes-subtext" type="password">Dread Scientist</p>
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
        </body>
        </html>
    )
}