import React from 'react';

const Reminder = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.reminder.name}</td>
                <td>{props.reminder.description}</td>
                <td>{props.reminder.recurrence}</td>
                <td>{props.reminder.day}</td>
                <td><button>Update</button></td>
                <td><button>Delete</button></td>
            </tr>
        </tbody>
    );
}

export default Reminder;