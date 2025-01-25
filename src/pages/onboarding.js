import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Ensure styles are applied

function Onboarding() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/about-loved-one');
    };

    return (
        <div className="onboarding-container">
            <h2>Welcome to Healing Together!</h2>
            <p>Let us guide you through the steps to get started:</p>
            <div className="onboarding-steps">
                <div className="onboarding-step">
                    <h3>Step 1</h3>
                    <p>Tell us about your loved one's accident and/or trauma.</p>
                </div>
                <div className="onboarding-step">
                    <h3>Step 2</h3>
                    <p>Learn how to support mental and physical care and their recovery needs.</p>
                </div>
                <div className="onboarding-step">
                    <h3>Step 3</h3>
                    <p>Track milestones and connect with others.</p>
                </div>
            </div>
            <button type="button" className="button" onClick={handleGetStarted}>
                Get Started Now
            </button>
        </div>
    );
}

export default Onboarding;