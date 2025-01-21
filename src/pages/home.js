import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate(); // React Router hook for navigation

    return (
        <div className="container">
            <div className="logo">Healing Together</div>
            <img
                src={require('../assets/htlogo.png')}
                alt="Healing Together Logo"
                className="home-logo"
            />
            <div className="tagline">Support Made Simple. Recovery Together.</div>
            <div className="buttons-container">
                <button className="button" onClick={() => navigate('/signup')}>
                    Sign Up
                </button>
                <button className="button" onClick={() => navigate('/login')}>
                    Log In
                </button>
            </div>
        </div>
    );
}

export default Home;