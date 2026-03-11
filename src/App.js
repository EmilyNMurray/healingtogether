import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import About from './pages/about';
import AboutLovedOne from './pages/aboutLovedOne';
import Navigation from './navbar';
import Dashboard from './pages/dashboard';
import FullCarePlan from './pages/fullCarePlan';
import MentalHealth from './pages/mentalHealth';
import Onboarding from './pages/onboarding';
import GuidedTourPlaceholder from './pages/guidedTourPlaceholder';
import TrackingMilestones from './pages/trackingMilestones';
import ResourcesDirectory from './pages/resourcesDirectory';

function ProtectedRoute({ element }) {
    const token = localStorage.getItem('token');
    return token ? element : <Navigate to="/login" replace />;
}


function App() {
    //non-function componenet so far
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState({}); 

    useEffect(() => {
        fetch('/tasks.txt')
            .then((response) => response.text())
            .then((data) => {
                const taskList = data
                    .split('\n')
                    .filter((line) => line.trim() !== '') 
                    .map((task) => task.trim());
                setTasks(taskList);
            })
            .catch((error) => console.error('Error loading tasks:', error));
    }, []);

    const toggleTaskCompletion = (task) => {
        setCompletedTasks((prev) => ({
            ...prev,
            [task]: !prev[task], 
        }));
    };

    return (
        <HashRouter>
            <Navigation />
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<About />} />

                {/* Protected routes — must be logged in */}
                <Route path="/about-loved-one" element={<ProtectedRoute element={<AboutLovedOne />} />} />
                <Route path="/onboarding" element={<ProtectedRoute element={<Onboarding />} />} />
                <Route path="/guided-tour" element={<ProtectedRoute element={<GuidedTourPlaceholder />} />} />
                <Route path="/tracking-milestones" element={<ProtectedRoute element={<TrackingMilestones />} />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute element={
                            <Dashboard
                                tasks={tasks}
                                completedTasks={completedTasks}
                                toggleTaskCompletion={toggleTaskCompletion}
                            />
                        } />
                    }
                />
                <Route
                    path="/full-care-plan"
                    element={
                        <ProtectedRoute element={
                            <FullCarePlan
                                tasks={tasks}
                                completedTasks={completedTasks}
                                toggleTaskCompletion={toggleTaskCompletion}
                            />
                        } />
                    }
                />
                <Route path="/mental-health" element={<ProtectedRoute element={<MentalHealth />} />} />
                <Route path="/resources" element={<ProtectedRoute element={<ResourcesDirectory />} />} />
            </Routes>
        </HashRouter>
    );
}

export default App;