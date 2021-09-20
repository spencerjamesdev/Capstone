import React, { Component } from 'react';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Register from './Register/Register';
import "./LoginPage.css"

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="loginbackdrop loginpagecenter font">
                <Login  />
                <Logout />
                <Register />
            </div>
        )
    }
}
export default LoginPage;