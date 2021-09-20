import axios from 'axios'
import React, { Component } from 'react'
import Clock from './Clock/Clock'
import Date from './Date/Date'
import "./Home.css"

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id : this.props.user_id,
            current_user : {} 
        }
    }
    
    
    componentDidMount(){
        this.getUserById()
        console.log(this.state.user_id)
    }
    
    componentDidUpdate(){
        console.log(this.state.current_user)
    }
    
    async getUserById(){
        let response = await axios.get('http://127.0.0.1:8000/api/auth/user/'+ this.state.user_id +'/')
        this.setState({ current_user: response.data }, ()=>console.log(this.state.current_user))
        
    }
    
    
    render() {
        return (
            <div className="centertext center homebackdrop font">
                <h1>Hello, {this.state.current_user.first_name}</h1><br></br>
                <h4>Current Time:</h4>
                <Clock />
                <h4>Current Date:</h4>
                <Date />
            </div>
        )
    }
}
