import React from 'react';
import '../Welcome.css';

// Welcome page with links for registration and login
function WelcomePage()
{
    return(
        <div>
            <div className="welcome-body">
                <h1>Welcome!</h1>
                <h2>Try our new service which allows you to manage your time more efficient</h2>

                <div className="buttons-block">
                    <button className="btn-def" onClick={redirectToLogin}>Login</button>
                    <button className="btn-def" onClick={redirectToSignup}>Register</button>
                </div>
            </div>
        </div>
    );

    function redirectToLogin() {
        setTimeout(() => {
            window.location.href = '/signin';
        }, 1000);
    }

    function redirectToSignup() {
        setTimeout(() => {
            window.location.href = '/signup';
        }, 1000);
    }
}

export default WelcomePage;