import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate(); // React Router hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        navigate('/about-loved-one'); // Redirect to the "About Loved One" page
    };

    return (
        <div className="container">
            <div className="logo">Healing Together</div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <button type="submit" className="button">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;