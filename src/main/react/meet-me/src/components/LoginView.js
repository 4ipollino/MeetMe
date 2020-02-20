import React from 'react';

function LoginView()
{
    return(
        <div>
            <div className="login-back">
                <h1>Log In</h1>
                <div className="form-css">
                    <form method="post">
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
                            <div className="flex-center">
                                <a href="/signup">Register</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginView;