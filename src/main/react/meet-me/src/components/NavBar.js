import React from 'react';

function NavBar()
{
    return(
        <div>
            <ul className="nav-list">
                <a href='/dashboard'>
                    <li className="nav-links">Main</li>
                </a>
                <a href='/'>
                    <li className="nav-links">Login</li>
                </a>
            </ul>
        </div>
    );
}

export default NavBar;