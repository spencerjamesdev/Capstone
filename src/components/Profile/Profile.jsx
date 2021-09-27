import React, { Component } from 'react';
import axios from 'axios';
import Create from './Create/Create'
import UserReminders from './User Reminders/UserReminders';
import UserInfo from './User Info/UserInfo';
import "./Profile.css";


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
        const current_user = this.state.current_user;
        return (
            <div className="float-container bgprofile">
                
                <div className="float-child">
                    <UserInfo current_user={current_user} />
                </div>
                <div className="float-child">
                    <UserReminders />
                </div>
                <div>
                    <Create />
                </div>
            </div>
        )
    }
}

export default Profile;