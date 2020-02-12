import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginView from "./views/LoginView";
import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";

function App() {
    return (
        <body>
        <Router>
            <NavBar/>
            <div>
                <Switch>
                    <Route path="/dashboard" exact component={Dashboard}/>
                    <Route path="/" exact component={LoginView}/>
                </Switch>
            </div>
        </Router>
        </body>
    );
}

export default App;
