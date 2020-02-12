import React from 'react';

function LoginView()
{
    function Login() {

    }

    return(
        <div>
            <h1>Login form</h1>
            <div className="form-css">
                <form method="post" action="/login">
                    <div className="form-row">
                        <label className="form-label">Email</label>
                        <input type="text" name="username" id="username" className="text-input"/>
                    </div>
                    <div className="form-row">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" id="password" className="text-input"/>
                    </div>
                    <div className="form-row">
                        <button type="submit" name="submit" className="btn-def">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginView;