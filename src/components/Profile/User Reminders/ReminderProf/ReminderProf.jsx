import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import "./ReminderProf.css"

class ReminderProf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            reminder : this.props.reminder 
        }
    }
    delete_reminder() {
        const reminder_id = this.state.reminder.id;
        axios.delete('http://127.0.0.1:8000/api/reminders/reminder/' + reminder_id + '/');
        window.location = '/profile'
    }
    
    update_reminder() {
        window.location ='/update'
    }

    render() {
        return (
                <tr className="trandtd">
                    <td className="trandtd">{this.state.reminder.name}</td>
                    <td className="trandtd">{this.state.reminder.description}</td>
                    <td className="trandtd">Every {this.state.reminder.recurrence} day(s)</td>
                    <td className="trandtd">{moment(this.state.reminder.day).format("MMM Do YYYY")}</td>
                    {/* <td className="trandtd"><button onClick={()=>this.update_reminder()}>Update</button></td> */}
                    <td className="trandtd"><button onClick={()=>this.delete_reminder()}>Delete</button></td>
                </tr>
        );
    }
}

export default ReminderProf;