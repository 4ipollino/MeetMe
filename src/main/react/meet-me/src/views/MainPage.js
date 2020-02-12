import React from 'react';
import logo from '../logo.svg';

function MainPage()
{
    return(
        <div>
            <h1>Welcome! This is main page</h1>
            <div className="logo-main">
                <img src={logo}/>
            </div>
        </div>
    );
}

export default MainPage;