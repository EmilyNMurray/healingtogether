import React from 'react';
import '../styles.css'; 


//defining a FUNCTIONAL COMPONENT called "Progress Bar"
    //we can define "props" which are inputs for react functional component
        //width: percentage width of the progress bar
        //milestone: milestone text displayed below the bar
        //description: optional additional description displayed below the milestone
            //was in use in previous version - maybe useful in future
function ProgressBar({ width, milestone, description }) {
    return (
        <div className="progress-section">
            <h3>Personalized Care Plan Progress</h3>
            <div className="progress-bar-wrapper">
                <div className="progress-bar full-bar"></div> {/* background bar */}
                <div className="progress-bar progress" style={{ width: `${width}%` }}></div> {/* foreground bar */}
            </div>
            <p>{milestone}</p>
            {description && <p>{description}</p>} {/* optional description */}
        </div>
    );
}

export default ProgressBar;