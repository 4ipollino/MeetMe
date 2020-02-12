import React from 'react';

function NavBar()
{
    return(
        <div>
            <ul className="nav-list">
                <a href='/'>
                    <li className="nav-links">Main</li>
                </a>
                <a href='/dashboard'>
                    <li className="nav-links">Dashboard</li>
                </a>
                <a href='/signin'>
                    <li className="nav-links">Login</li>
                </a>
            </ul>
        </div>
    );
}

export default NavBar;