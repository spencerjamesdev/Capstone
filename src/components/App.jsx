import React, { Component } from 'react';
import './App.css';
import NavBar from './Nav Bar/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Create from './Create/Create';
import Login from './Login/Login';
import Current from './Current/Current';
import Calendar from './Calendar/Calendar';
import jwtDecode from 'jwt-decode'
import axios from 'axios';


class App extends Component {
    state = { }

    componentDidMount() {
        
        const jwt = localStorage.getItem('token');
    
        console.log(jwt)
        try{
            const user = jwtDecode(jwt);
            this.setState({user}, () => console.log(this.state))
        } catch (err) {
            console.log(err)
        }
        
    }
    render(){
        const user = this.state.user;
        return (
            <div className="container-fluid">
                <NavBar user={user}/>
                <Switch>
                   <Route path="/home" exact component={Home} />
                   <Route path="/current" render={props => {
                        if (!user){
                            return <Redirect to="/login" />;
                        } else {
                            return <Current {...props} user={user} />
                        }
                        }}  />
                   <Route path="/calendar" render={props => {
                        if (!user){
                            return <Redirect to="/login" />;
                        } else {
                            return <Calendar {...props} user={user} />
                        }
                        }}  />
                   <Route path="/create" render={props => {
                        if (!user){
                            return <Redirect to="/login" />;
                        } else {
                            return <Create {...props} user={user} />
                        }
                        }} 
                    />
                   <Route path="/login" component={Login} />
                </Switch>
                
                
            </div>
        )
    }
}

export default App;