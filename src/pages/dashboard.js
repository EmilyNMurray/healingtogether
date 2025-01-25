import React from 'react';
import ProgressBar from '../components/ProgressBar';
import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';

function Dashboard({ tasks, completedTasks, toggleTaskCompletion }) {
    return (
        <div className="dashboard-container">
            <p className="motivational-quote">"Together we can heal faster."</p>
            <ProgressBar 
                width={80} 
                milestone="Week 1 - Pain Management" 
                description="Complete your daily exercises to stay on track!" 
            />
            <TaskList />
            <div className="grid-section">
                {/* Caregiver Support Section */}
                <div className="card mental-health">
                    <h3>Caring for Yourself</h3>
                    <p>
                        Being a caregiver is tough, and it's important to prioritize your own mental health too. 
                        Visit our <Link to="/mental-health">Mental Health Support</Link> page for resources like:
                    </p>
                    <ul>
                        <li>Daily tips for stress management.</li>
                        <li>Guided audio sessions to relax.</li>
                        <li>Join support groups and discussion boards.</li>
                    </ul>
                    <Link to="/mental-health" className="link-button">Explore Mental Health Support</Link>
                </div>

                {/* Full Care Plan Section */}
                <div className="card physical-care">
                    <h3>Full Care Plan</h3>
                    <p>
                        Explore the complete care plan tailored for your loved one. This includes recovery timelines, 
                        detailed task lists, and recommendations for managing pain and improving mobility.
                    </p>
                    <ul>
                        <li>Detailed recovery timelines.</li>
                        <li>Full task lists with tracking features.</li>
                        <li>Suggestions for physical and mental health improvement.</li>
                    </ul>
                    <Link to="/fullcareplan" className="link-button">
                        View Full Care Plan
                    </Link>
                </div>

                {/* Resources Directory Section */}
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