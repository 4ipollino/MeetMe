import React, {Component} from 'react';
import {RoutedButton} from "grommet";

class HeaderNav extends Component
{
    render() {
        return(
            <div>
                <RoutedButton path="/dashboard" label="Dashboard"/>
                <RoutedButton path='/messages' label="Messages"/>
                <RoutedButton path='/profile' label="Profile"/>
                <RoutedButton path='/logout' label="Logout"/>
            </div>
        );
    }
}

export default HeaderNav;
