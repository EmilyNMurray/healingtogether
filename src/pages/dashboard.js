import React from 'react';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <p className="motivational-quote">"Every step counts!"</p>
            <div className="progress-section">
                <h3>Personalized Care Plan Overview</h3>
                <div className="progress-bar-wrapper">
                    <div className="progress-bar full-bar"></div> {/* Background bar */}
                    <div className="progress-bar progress" style={{ width: '80%' }}></div> {/* Foreground bar */}
                </div>
                <p>Current Milestone: Week 1 - Pain Management</p>
            </div>
            <div className="grid-section">
                <div className="card mental-health">
                    <h3>Mental Health Tips</h3>
                    <ul>
                        <li>Practice 5 minutes of deep breathing.</li>
                        <li>Journal your thoughts today.</li>
                    </ul>
                </div>
                <div className="card physical-care">
                    <h3>Physical Care Steps</h3>
                    <ul>
                        <li>10-minute recovery exercise.</li>
                        <li>Apply a warm compress for 15 minutes.</li>
                    </ul>
                </div>
                <div className="card resources">
                    <h3>Resources Directory</h3>
                    <ul>
                        <li><a href="#">Find a nearby therapist</a></li>
                        <li><a href="#">Explore caregiver support groups</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;