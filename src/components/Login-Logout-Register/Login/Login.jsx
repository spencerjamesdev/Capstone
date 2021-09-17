import React, { Component } from 'react';
import axios from 'axios';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: ''
        }   
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    
    handleSubmit = (event) => {
        event.preventDefault();

        const user_data = {
            username: this.state.username,
            password: this.state.password
        };
        this.loginFunction(user_data)
        
    }

    async loginFunction(user_data) {
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', user_data)
        localStorage.setItem('token', response.data.access)
        console.log(response.data.access)
        console.log(this.state.username)
        console.log(this.state.password)
        console.log(localStorage.getItem('token'))
        window.location = '/home';
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label for="username">Username: </label>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/><br></br>
                
                <label for="password">Password: </label>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/><br></br>

                <button type="submit">Login</button>
            </form>
            
        )
    }
}

export default Login;