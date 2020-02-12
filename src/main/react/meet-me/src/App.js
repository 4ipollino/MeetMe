import React from 'react';
import './App.css';
import LoginView from "./views/LoginView";
import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import MainPage from "./views/MainPage";

function App() {
    return (
        <body>
        <Router>
            <NavBar/>
            <div>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/signin" exact component={LoginView}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                </Switch>
            </div>
        </Router>
        </body>
    );
}

export default App;
