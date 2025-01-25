import React, { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import AboutLovedOne from './pages/aboutLovedOne';
import Navigation from './navbar';
import Dashboard from './pages/dashboard';
import FullCarePlan from './pages/fullCarePlan';
import MentalHealth from './pages/mentalHealth';
import Onboarding from './pages/onboarding'; 
import GuidedTourPlaceholder from './pages/guidedTourPlaceholder'; 
import TrackingMilestones from './pages/trackingMilestones';
import ResourcesDirectory from './pages/resourcesDirectory';


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
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about-loved-one" element={<AboutLovedOne />} />
                <Route path="/onboarding" element={<Onboarding />} /> 
                <Route path="/guided-tour" element={<GuidedTourPlaceholder />} />
                <Route path="/tracking-milestones" element={<TrackingMilestones />} />
                <Route
                    path="/dashboard"
                    element={
                        <Dashboard
                            tasks={tasks}
                            completedTasks={completedTasks}
                            toggleTaskCompletion={toggleTaskCompletion}
                        />
                    }
                />
                <Route
                    path="/full-care-plan"
                    element={
                        <FullCarePlan
                            tasks={tasks}
                            completedTasks={completedTasks}
                            toggleTaskCompletion={toggleTaskCompletion}
                        />
                    }
                />
                <Route path="/mental-health" element={<MentalHealth />} /> 
                <Route path="/resources" element={<ResourcesDirectory />} />
            </Routes>
        </HashRouter>
    );
}

export default App;