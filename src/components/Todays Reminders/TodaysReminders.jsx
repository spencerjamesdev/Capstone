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

    async getUserReminders(){
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/reminders/', {headers: {Authorization: 'Bearer ' + jwt}});
        this.setState({ user_reminders : response.data }, ()=>console.log(this.state.user_reminders))

    }


    render() {
        return (
            <div className="trbackdrop center font">
                <table className="trtableandhead tablecenter">
                    <tr className="trtableandhead">
                        <th className="trtableandhead">Name</th>
                        <th className="trtableandhead">Description</th>
                        <th className="trtableandhead">Day</th>
                        <th className="trtableandhead">Completed</th>
                    </tr>
                    {this.state.user_reminders.map(reminder =>
            <Reminder key={reminder.id} reminder={reminder} />
            )}
                </table>
            </div>
        )
    }
}
