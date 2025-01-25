import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; 

function TrackingMilestones() {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/dashboard'); 
    };

    return (
        <div className="container">
            <h2>Step 3: Tracking Milestones and Connecting with Others</h2>
            <p>
                After the Guided Tour a pop up message will appear to tell users "Thank you for completing the onboarding process. You are now ready to start tracking milestones and connecting with others."
            </p>
            <button type="button" className="button" onClick={handleNextStep}>
                Continue
            </button>
        </div>
    );
}

export default TrackingMilestones;