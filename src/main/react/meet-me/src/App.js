import React from 'react';
import './App.css';
import LoginView from "./components/LoginView";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from "./views/MainPage";
import WelcomePage from "./views/WelcomePage";

function App() {
    return (
        <div>
        <Router>
            <Switch>
                <Route path="/" exact component={WelcomePage}/>
                <Route path="/signin" exact component={LoginView}/>
                <Route path="/dashboard" exact component={MainPage}/>
            </Switch>
        </Router>
        </div>
    );
}

export default App;
