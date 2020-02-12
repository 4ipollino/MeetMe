import React from 'react';
import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function MainPage()
{
    return(
        <div>
            <NavBar/>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard}>
                </Route>
            </Switch>
        </div>
    );
}

export default MainPage;