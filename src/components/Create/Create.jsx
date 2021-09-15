import React, { Component } from 'react';


class Create extends React.Component {


    render() {
        return (
            <form action='' method='post'>
                <label for="reminder_name">Reminder Name: </label>
                <input type="text" name="reminder_name" /><br></br>
                
                <label for="reminder_description">Reminder Description: </label>
                <input type="text" name="reminder_description" /><br></br>

                <label for="recurrence">Recurrence: </label>
                <input type="number" min="0" name="recurrence" /><br></br>

                <label for="start_date">Start Date: </label>
                <input type="date" name="start_date" /><br></br>

                <button type="submit">Add Reminder</button>
            </form>
        )
    }
}

export default Create;