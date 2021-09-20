import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css"



class NavBar extends Component {

    render() {

        return (
            <nav>
                <div className="navbar">
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <h1 className="navbar-item" >Friendly Reminder</h1>
                    </Link>
                    <Link to="/todaysreminders">
                        <p className="navbar-item">Today's Reminders</p>
                    </Link>
                    <Link to="/calendar">
                        <p className="navbar-item">Calendar</p>
                    </Link>
                    <Link to="/profile">
                        <p className="navbar-item">Profile</p>
                    </Link>
                    <Link to="/login">
                        <p className="navbar-item">Login/Logout</p>
                    </Link>
                </div>
            
            </nav>
        )
    }
}

export default NavBar;