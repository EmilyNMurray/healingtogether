import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; 

function GuidedTourPlaceholder() {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/tracking-milestones'); 
    };

    return (
        <div className="container">
            <h2>Step 2: Guided Navigation</h2>
            <p>
                This step will include a guided tour of our web application. It will feature pop ups while viewing the website to show users all the features.
            </p>
            <button type="button" className="button" onClick={handleNextStep}>
                Go to Step 3
            </button>
        </div>
    );
}

export default GuidedTourPlaceholder;