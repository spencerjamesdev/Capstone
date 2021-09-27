import React, { Component } from 'react';
import './App.css';
import NavBar from './Nav Bar/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import TodaysReminders from './Todays Reminders/TodaysReminders';
import Calendar from './Calendar/Calendar';
import jwtDecode from 'jwt-decode'
import axios from 'axios';
import LoginPage from './Login-Logout-Register/LoginPage';
import RegisterForm from './Login-Logout-Register/RegisterForm/RegisterForm';
import moment from 'moment';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        this.getUserToken();
        console.log()
        
    }

    getUserToken() {
        const jwt = localStorage.getItem('token');
    
        console.log(jwt)
        try{
            const user = jwtDecode(jwt);
            console.log(user);
            this.setState({user}, () => console.log(this.state))
        } catch (err) {
            console.log(err)
        }
    }
    
    
    render(){
        const user = this.state.user;
        
        return (
            <div>
                <div>
                    <NavBar user={user}/>
                    
                    <Switch>
                        <Route exact path="/" render={props => {
                            if (!user){
                                return <Redirect to="/login" />;
                            } else {
                                return <Home {...props} user_id={user.user_id} />
                            }
                            }}  />
                        <Route path="/todaysreminders" render={props => {
                            if (!user){
                                return <Redirect to="/login" />;
                            } else {
                                return <TodaysReminders {...props} user={user} />
                            }
                            }}  />
                        <Route path="/calendar" render={props => {
                            if (!user){
                                return <Redirect to="/login" />;
                            } else {
                                return <Calendar {...props} user={user} />
                            }
                            }}  />
                        <Route path="/profile" render={props => {
                            if (!user){
                                return <Redirect to="/login" />;
                            } else {
                                return <Profile {...props} user_id={user.user_id} />
                            }
                            }} 
                        />
                        <Route path="/login" component={LoginPage} />
                        <Route path='/register' component={RegisterForm} />
                    </Switch>
                    
                </div>
            </div>
        )
    }
}

export default App;