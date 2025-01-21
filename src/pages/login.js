import React from 'react';

function Login() {
    return (
        <div className="container">
            <div className="logo">Healing Together</div>
            <h2>Log In</h2>
            <form className="login-form">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="button">Log In</button>
            </form>
        </div>
    );
}

export default Login;