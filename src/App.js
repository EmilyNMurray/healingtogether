import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import AboutLovedOne from './pages/aboutLovedOne'; // Import the new page
import Navigation from './navbar';
import Dashboard from './pages/dashboard'; // Import the Dashboard component

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about-loved-one" element={<AboutLovedOne />} />
                <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
            </Routes>
        </HashRouter>
    );
}

export default App;