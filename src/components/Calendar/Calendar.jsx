import React, { Component } from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './Calendar.css'
import axios from 'axios';
import moment from 'moment';
import "./Calendar.css"

export default class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_reminders : [],
            user_reminder_dates : []
        }
        
        
    }
    
    componentDidMount(){
        this.getUserReminderDates();
    }
    //const values: Date[] = this.state.user_reminder_dates;
    
    async getUserReminderDates(){
        const jwt = localStorage.getItem('token');
        let response = await axios.get('http://127.0.0.1:8000/api/reminders/', {headers: {Authorization: 'Bearer ' + jwt}});
        this.setState({ user_reminders : response.data }, ()=>console.log(this.state.user_reminders))
        
        const user_dates = this.state.user_reminders.map(reminder => moment(reminder.day).format('l'))
        this.setState({ user_reminder_dates : user_dates }, ()=>console.log(this.state.user_reminder_dates))
        
    }
    
    render() {
        
        return (
            <div className='calendarbackdrop center'>
                <CalendarComponent className='calendarcenter' id='calendar' isMultiSelection={true} values={this.state.user_reminder_dates} />
            </div>
        )
    }
}
