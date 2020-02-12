import React from 'react';

function NavBar()
{
    return(
        <div>
            <ul className="nav-list">
                <a href='/dashboard'>
                    <li className="nav-links">Dashboard</li>
                </a>
                <a href='/messages'>
                    <li className="nav-links">Messages</li>
                </a>
                <a href='/profile'>
                    <li className="nav-links">Profile</li>
                </a>
                <a href='/logout'>
                    <li className="nav-links">Logout</li>
                </a>
            </ul>
        </div>
    );
}

export default NavBar;