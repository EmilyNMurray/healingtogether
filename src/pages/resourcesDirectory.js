import React, { useState } from 'react';
import '../styles.css'; 

function ResourcesDirectory() {
    //https://developers.google.com/maps/documentation/javascript/add-google-map
    const [searchQuery, setSearchQuery] = useState('');
    const [mapSrc, setMapSrc] = useState(
        'https://maps.google.com/maps?q=unknown%20location&t=&z=13&ie=UTF8&iwloc=&output=embed'
    );

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            alert('Please enter a valid search term.');
            return;
        }
        const formattedQuery = encodeURIComponent(searchQuery);
        setMapSrc(
            `https://maps.google.com/maps?q=${formattedQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`
        );
    };

    return (
        <div className="resources-directory">
            <h2>Resources Directory</h2>
            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Find a resource (location or type)..."
                    className="search-bar"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="directory-content">
                {/* Map */}
                <div className="map-container">
                    <iframe
                        title="Resource Map"
                        src={mapSrc}
                        width="100%"
                        height="300"
                        style={{ border: '0', borderRadius: '10px' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Medical Professionals List */}
                <div className="professionals-list">
                    <h3>Medical Professionals</h3>
                    <div className="professional-card">
                        <h4>Jane Doe</h4>
                        <p>Occupational Therapist</p>
                        <div className="contact-icons">
                            <a href="tel:+1234567890">
                                <i className="fas fa-phone"></i> Call
                            </a>
                            <a href="mailto:jane.doe@example.com">
                                <i className="fas fa-envelope"></i> Email
                            </a>
                        </div>
                    </div>
                    <div className="professional-card">
                        <h4>John Smith</h4>
                        <p>Physical Therapist</p>
                        <div className="contact-icons">
                            <a href="tel:+9876543210">
                                <i className="fas fa-phone"></i> Call
                            </a>
                            <a href="mailto:john.smith@example.com">
                                <i className="fas fa-envelope"></i> Email
                            </a>
                        </div>
                    </div>
                    <div className="professional-card">
                        <h4>Smith Doe</h4>
                        <p>Caregiver Specialist</p>
                        <div className="contact-icons">
                            <a href="tel:+9876543210">
                                <i className="fas fa-phone"></i> Call
                            </a>
                            <a href="mailto:john.smith@example.com">
                                <i className="fas fa-envelope"></i> Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResourcesDirectory;