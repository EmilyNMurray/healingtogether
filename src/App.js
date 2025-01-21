import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup'; // Import the SignUp component
import Navigation from './navbar';

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} /> {/* Sign-up route */}
            </Routes>
        </HashRouter>
    );
}

export default App;