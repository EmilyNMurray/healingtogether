import React, { useState } from 'react';
import '../styles.css'; // Ensure styles are applied

function MentalHealth() {
    const [activeTab, setActiveTab] = useState('Chats'); //state for tabs

    const renderTabContent = () => {
        if (activeTab === 'Chats') {
            return <p>here you will be able to see messages</p>;
        } else if (activeTab === 'Groups') {
            return <p>here you will be able to join trauma recovery or interest-based groups.</p>;
        } else if (activeTab === 'Boards') {
            return <p>here you will be able to start or join discussions with shared stories and advice.</p>;
        }
    };

    return (
        <div className="caregiver-support">
            <section className="tips-section">
                <h2>Caregiver Tips and Techniques</h2>
                <div className="tips-cards">
                    <div className="card">
                        <h3>Daily Tip</h3>
                        <p>Practice active listening today.</p>
                    </div>
                    <div className="card">
                        <h3>Techniques</h3>
                        <div className="technique">
                            <p><strong>Empathy-building exercises:</strong></p>
                            <ul>
                                <li>Practice active listening.</li>
                                <li>Validate feelings without judgment.</li>
                            </ul>
                        </div>
                        <div className="technique">
                            <p><strong>Calming strategies for anxiety episodes:</strong></p>
                            <ul>
                                <li>Guide a 5-minute deep breathing exercise.</li>
                                <li>Help create a safe, quiet environment.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Guided Audio Sessions</h3>
                        <button className="audio-button">Play: 5-Minute Breathing Exercise</button>
                        <button className="audio-button">Play: Mindfulness for Caregivers</button>
                    </div>
                </div>
            </section>

            <section className="community-section">
                <h2>Community Support</h2>
                <div className="tabs">
                    <button
                        className={activeTab === 'Chats' ? 'active-tab' : ''}
                        onClick={() => setActiveTab('Chats')}
                    >
                        Chats
                    </button>
                    <button
                        className={activeTab === 'Groups' ? 'active-tab' : ''}
                        onClick={() => setActiveTab('Groups')}
                    >
                        Groups
                    </button>
                    <button
                        className={activeTab === 'Boards' ? 'active-tab' : ''}
                        onClick={() => setActiveTab('Boards')}
                    >
                        Boards
                    </button>
                </div>
                <div className="tab-content">{renderTabContent()}</div>
            </section>
        </div>
    );
}

export default MentalHealth;