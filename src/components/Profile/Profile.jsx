import React, { Component } from 'react';
import axios from 'axios';
import Create from './Create/Create'
import UserReminders from './User Reminders/UserReminders';



class Profile extends React.Component {
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


    async getUserById(){
        let response = await axios.get('http://127.0.0.1:8000/api/auth/user/'+ this.state.user_id +'/')
        this.setState({ current_user: response.data }, ()=>console.log(this.state.current_user))
        
    }
    render() {
        return (
            <div>
                <h3>User Info:</h3>
                <h5>First Name:  {this.state.current_user.first_name}</h5>
                <h5>Last Name:  {this.state.current_user.last_name}</h5>
                <h5>Username:  {this.state.current_user.username}</h5>
                <h5>email:  {this.state.current_user.email}</h5>
                <UserReminders />
                <Create />

            </div>
        )
    }
}

export default Profile;