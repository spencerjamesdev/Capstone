import React, { Component } from 'react';
import "./Logout.css"

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    logoutFunction() {
        localStorage.removeItem('token');
        console.log("logout")
        console.log(localStorage.getItem('token'))
        window.location = '/login';
    }

    render() {
        return(
            <span className="spacer">
                <button onClick={()=>this.logoutFunction()}>Logout</button>
            </span>
        )
    }
}

export default Logout;