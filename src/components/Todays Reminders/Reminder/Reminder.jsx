import React from 'react';
import moment from 'moment';
import "./Reminder.css"

const Reminder = (props) => {
    return (
            <tr className="trandtd">
                <td className="trandtd">{props.reminder.name}</td>
                <td className="trandtd">{props.reminder.description}</td>
                <td className="trandtd">{moment(props.reminder.day).format("MMM Do YYYY")}</td>
                <td className="trandtd"><input type="checkbox"></input></td>
            </tr>
    );
}

export default Reminder;