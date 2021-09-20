import axios from 'axios';
import React, { Component } from 'react';
import "./Update.css"


class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            recurrence: '',
            day: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        let updated_reminder = {
            name: this.state.reminder_name,
            description: this.state.reminder_description,
            recurrence: this.state.recurrence,
            day: this.state.start_date
        }

        console.log(updated_reminder)

        const jwt = localStorage.getItem('token')
        axios.post('http://127.0.0.1:8000/api/reminders/', updated_reminder, {headers: {Authorization: 'Bearer ' + jwt}})
        window.location = '/profile'
    }

    handleChange(event){
        event.persist();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="createbackdrop font">
                <form  onSubmit={(event) => this.handleSubmit(event)}>
                    <h3 className='title'>Update Reminder:</h3><br></br>
                    <label className='labels' for="reminder_name">Name: </label>
                    <input className='inputs' type="text" name="reminder_name" onChange={(event) => this.handleChange(event)} value={this.state.reminder_name}/><br></br>
                    
                    <label for="reminder_description">Description: </label>
                    <input type="text" name="reminder_description" onChange={(event) => this.handleChange(event)} value={this.state.reminder_description}/><br></br>

                    <label for="recurrence">Recurrence (Every __ days): </label>
                    <input type="number" min="0" name="recurrence" onChange={(event) => this.handleChange(event)} value={this.state.recurrence}/><br></br>

                    <label for="start_date">Start Date: </label>
                    <input type="date" name="start_date" onChange={(event) => this.handleChange(event)} value={this.state.start_date}/><br></br><br></br>

                    <button type="submit">Update Reminder</button>
                </form>
            </div>
        )
    }
}

export default Update;