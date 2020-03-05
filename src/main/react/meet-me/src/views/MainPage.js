import React from 'react';
import Dashboard from "../components/Dashboard";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeaderNav from "../components/HeaderNav";

function MainPage()
{
    return(
        <div>
            <HeaderNav/>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard}/>
            </Switch>
        </div>
    );
}

export default MainPage;