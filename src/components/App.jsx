import React, { Component } from 'react';
import './App.css';
import NavBar from './Nav Bar/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Create from './Create/Create';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="container-fluid">
                <NavBar />
                <Switch>
                   <Route path="/home" exact component={Home} />
                   {/* <Route path="/current" component={Current} />
                   <Route path="/calendar" component={Calendar} /> */}
                   <Route path="/create" component={Create} />
                   {/* <Route path="/login" component={Login} /> */}
                </Switch> 
                
            </div>
        )
    }
}

export default App;