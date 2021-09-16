import React, { Component } from 'react';


export default class Current extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.user   
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.user.user_id}</h1>
            </div>
        )
    }
}
