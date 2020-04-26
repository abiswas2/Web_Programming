import React from "react";
import { Link } from 'react-router-dom';
import "./HeaderComponent.css";

function HeaderComponent(){
    return (
        <header>
            <nav>
                <ul>
                    <li>
                    <Link to="/home">Home</Link>
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