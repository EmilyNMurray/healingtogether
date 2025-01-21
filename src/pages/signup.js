import React from 'react';

function SignUp() {
    return (
        <div className="container">
            <div className="logo">Healing Together</div>
            <h2>Sign Up</h2>
            <form className="signup-form">
                <div>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <button type="submit" className="button">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;