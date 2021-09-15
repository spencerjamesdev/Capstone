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
                <input type="number" name="recurrence" /><br></br>


            </form>
        )
    }
}

export default Create;