import React, { Component } from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    registerFunction() {
        window.location = '/register';
    }

    

    render() {
        return(
            <button onClick={()=>this.registerFunction()}>Register New User</button>
        )
    }
}

export default Register;