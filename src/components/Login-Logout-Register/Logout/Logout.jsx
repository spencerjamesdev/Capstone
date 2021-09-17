import React, { Component } from 'react';

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
            <button onClick={()=>this.logoutFunction()}>Logout</button>
        )
    }
}

export default Logout;