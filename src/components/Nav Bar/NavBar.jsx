import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css"


class NavBar extends Component {

    render() {

        return (
            <nav>
                <div className="navbar">
                    <Link to="/home">
                        <h1 className="navbar-item">Friendly Reminder</h1>
                    </Link>
                    <Link to="/current">
                        <p className="navbar-item">Current</p>
                    </Link>
                    <Link to="/calendar">
                        <p className="navbar-item">Calendar</p>
                    </Link>
                    <Link to="/create">
                        <p className="navbar-item">Create</p>
                    </Link>
                    <Link to="/login">
                        <p className="navbar-item">Login</p>
                    </Link>
                </div>
            
            </nav>
        )
    }
}

export default NavBar;