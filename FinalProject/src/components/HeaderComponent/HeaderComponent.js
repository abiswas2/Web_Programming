import React from "react";
import { Link } from 'react-router-dom';
import "./HeaderComponent.css";

function HeaderComponent(){
    return (
        <header>
            <div className="logo">
                <img src="./images/gsu-logo.png" alt="logo"></img>
            </div>
            <nav>
                <ul>
                    <li>
                    <Link to="/eventHome">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">Events</Link>
                    </li>
                    <li>
                    <Link to="/event-upload">Event Upload</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;