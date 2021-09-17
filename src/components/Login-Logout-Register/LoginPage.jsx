import React, { Component } from 'react';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Register from './Register/Register';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <Login />
                <Logout /><br></br>
                <Register />
            </div>
        )
    }
}
export default LoginPage;