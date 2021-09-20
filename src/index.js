import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';


    const jwt = localStorage.getItem('token');

    console.log(jwt)
    try{
        const user = jwtDecode(jwt);
        console.log(user);
        this.setState({user}, () => console.log(this.state))
    } catch (err) {
        console.log(err)
    }


ReactDOM.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>, 
    document.getElementById('root')
);