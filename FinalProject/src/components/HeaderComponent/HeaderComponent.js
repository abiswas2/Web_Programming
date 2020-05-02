import React from "react";
import { Link } from 'react-router-dom';
import "./HeaderComponent.css";

function HeaderComponent(){
    return (
        <header>
            <div className="logo">
                <img src="./images/gsu-logo.png" alt="logo"></img>
            </div>
            <nav className="header-mav">
                <ul>
                    <li id="home">
                        <Link to="/">Home</Link>
                    </li>
                    <li id="events">
                        <Link to="/events">Events</Link>
                    </li>
                    <li id="checkin">
                        <Link to="/event-check-in">Event Check In</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;