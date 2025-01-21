import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand href="/" className="navbar-brand">
                <img
                    src={require('./assets/htlogo.png')}
                    alt="Healing Together Logo"
                    className="navbar-logo"
                />
            </Navbar.Brand>
        </Navbar>
    );
}

export default Navigation;