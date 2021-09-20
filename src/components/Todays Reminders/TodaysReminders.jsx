import React, { Component } from 'react';
import axios from 'axios';
import Reminder from './Reminder/Reminder';
import "./TodaysReminders.css"
import moment from 'moment';


export default class TodaysReminders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_reminders : [],
            todays_reminders : []
        }   
    }
    
    
    componentDidMount(){
        this.getUserReminders();
        console.log(this.state.user_reminders)
        // this.getTodaysReminders();
        // console.log(this.state.todays_reminders)
    }

    async getUserReminders() {
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/reminders/', {headers: {Authorization: 'Bearer ' + jwt}});
        this.setState({ user_reminders : response.data }, ()=>console.log(this.state.user_reminders))
        console.log('hey',  this.state.user_reminders)
        const tdReminders = this.state.user_reminders.filter(reminder => moment(reminder.day).format("MMM Do YYYY") == moment(new Date()).format("MMM Do YYYY"));
        this.setState({ todays_reminders : tdReminders}, ()=>console.log(this.state.todays_reminders))
        console.log('hey');

    }

    // completeReminder(i) {
    //     const index = todays_reminders.indexOf(i)
    //     todays_reminders.splice(index)
    // }


    render() {
        return (
            <div className="trbackdrop center font">
                <h3 className='centertext'>Today's Reminders</h3>
                <table className="trtableandhead tablecenter">
                    <tr className="trtableandhead">
                        <th className="trtableandhead">Name</th>
                        <th className="trtableandhead">Description</th>
                        <th className="trtableandhead">Day</th>
                        <th className="trtableandhead">Completed</th>
                    </tr>
                    {this.state.todays_reminders.map(reminder =>
            <Reminder key={reminder.id} reminder={reminder} />
            )}
                </table>
            </div>
        )
    }
}
