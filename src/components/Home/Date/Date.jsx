import React, { Component } from 'react';




class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }



    render() {
        return (
            <div>
                {this.state.date.toLocaleDateString(undefined, options)}
            </div>
        )
    }
}

export default Date;