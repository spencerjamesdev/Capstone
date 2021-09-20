import React, { Component } from 'react';
import axios from 'axios';
import ReminderProf from './ReminderProf/ReminderProf';
import "./UserReminders.css"


export default class UserReminders extends Component {
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
            <div className='reminderprofbackdrop right font'>
                <h3>All Reminders</h3>
                <table className="proftablecenter">
                        <tr className="trtableandhead">
                            <th className="trtableandhead">Name</th>
                            <th className="trtableandhead">Description</th>
                            <th className="trtableandhead">Recurrence</th>
                            <th className="trtableandhead">Day</th>
                            {/* <th className="trtableandhead">Update</th> */}
                            <th className="trtableandhead">Delete</th>
                        </tr>
                    {this.state.user_reminders.map(reminder =>
            <ReminderProf key={reminder.id} reminder={reminder} />
            )}
                </table>
            </div>
        )
    }
}