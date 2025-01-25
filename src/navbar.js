import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand href="/" className="navbar-brand">
                <img
                    src={require('./assets/htlogo.png')}
                    alt="Healing Together Logo"
                    className="navbar-logo"
                />
                Healing Together
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#dashboard">Dashboard</Nav.Link> {/* Dashboard Link */}
                    <Nav.Link href="#mental-health">Mental Health Support</Nav.Link>
                    <Nav.Link href="#/full-care-plan">Full Care Plan</Nav.Link>
                    <Nav.Link href="#resources">Resources Directory</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;