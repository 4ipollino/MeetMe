import React from 'react';

function LoginView()
{
    function Login() {

    }

    return(
        <div>
            <h1>Login form</h1>
            <div className="form-css">
                <form>
                    <div className="form-row">
                        <label className="form-label">Email</label>
                        <input type="text" className="text-input"/>
                    </div>
                    <div className="form-row">
                        <label className="form-label">Password</label>
                        <input type="password" className="text-input"/>
                    </div>
                    <div className="form-row">
                        <input type="button" onClick={Login} className="btn-def" value="Login"/>
                    </div>
                </form></div>
        </div>
    );
}

export default LoginView;