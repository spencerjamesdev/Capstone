import React, { Component } from 'react';
import axios from 'axios';
import Reminder from './Reminder/Reminder';
import "./TodaysReminders.css"


export default class TodaysReminders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_reminders : []
        }   
    }
    


    componentDidMount() {
        this.getUserReminders();
        console.log(this.state)
        
    }

    componentDidUpdate() {
        
        //console.log(response.data);
    }

    async getUserReminders(){
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/reminders/', {headers: {Authorization: 'Bearer ' + jwt}});
        this.setState({ user_reminders : response.data }, ()=>console.log(this.state.user_reminders))
    }

    // mapReminders() {
    //     return this.state.user_reminders.map(reminder =>
    //         <Reminder key={reminder.id} reminder={reminder} />
    //         )
    // }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Recurrence</th>
                            <th>Day</th>
                        </tr>
                    </thead>
                    {this.state.user_reminders.map(reminder =>
            <Reminder key={reminder.id} reminder={reminder} />
            )}
                </table>
            </div>
        )
    }
}
