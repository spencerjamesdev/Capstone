import React, { Component } from 'react';


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reminder_name: '',
            reminder_description: '',
            recurrence: '',
            start_date: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        let new_user = {
            reminder_name: this.state.reminder_name,
            reminder_description: this.state.reminder_description,
            recurrence: this.state.recurrence,
            start_date: this.state.start_date
        }
    }

    handleChange(event){
        event.persist();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <h3>Create New Reminder:</h3>
                <label for="reminder_name">Reminder Name: </label>
                <input type="text" name="reminder_name" onChange={(event) => this.handleChange(event)} value={this.state.reminder_name}/><br></br>
                
                <label for="reminder_description">Reminder Description: </label>
                <input type="text" name="reminder_description" onChange={(event) => this.handleChange(event)} value={this.state.reminder_description}/><br></br>

                <label for="recurrence">Recurrence: </label>
                <input type="number" min="0" name="recurrence" onChange={(event) => this.handleChange(event)} value={this.state.recurrence}/><br></br>

                <label for="start_date">Start Date: </label>
                <input type="date" name="start_date" onChange={(event) => this.handleChange(event)} value={this.state.start_date}/><br></br>

                <button type="submit">Add Reminder</button>
            </form>
        )
    }
}

export default Create;