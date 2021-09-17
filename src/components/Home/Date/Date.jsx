import React, { Component } from 'react';
import moment from 'moment';



class Date extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { date: new Date() };
    }



    render() {
        return (
            <div>
                {moment(new Date()).format("MMM Do YYYY")}
            </div>
        )
    }
}

export default Date;