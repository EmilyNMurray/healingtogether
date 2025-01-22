import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate(); // React Router hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission from refreshing the page
        console.log('Redirecting to dashboard...'); // Debugging log
        navigate('/dashboard'); // Redirect to the Dashboard page
    };

    return (
        <div className="container">
            <div className="logo">Healing Together</div>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="button">Log In</button>
            </form>
        </div>
    );
}

export default Login;