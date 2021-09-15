import React, { Component } from 'react'
import Clock from './Clock/Clock'
import Date from './Date/Date'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Current Time:</h3>
                <Clock />
                <h3>Current Date:</h3>
                <Date />
            </div>
        )
    }
}
