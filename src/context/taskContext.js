import React, { createContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    // Load tasks from tasks.txt and completedTasks from localStorage
    useEffect(() => {
        fetch('/tasks.txt')
            .then((response) => response.text())
            .then((data) => {
                const taskList = data.split('\n').map((task) => task.trim()).filter(Boolean);
                setTasks(taskList);
            });

        const savedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
        setCompletedTasks(savedCompletedTasks);
    }, []);

    // Save completed tasks to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }, [completedTasks]);

    const toggleTaskCompletion = (taskIndex) => {
        const updatedCompletedTasks = completedTasks.includes(taskIndex)
            ? completedTasks.filter((index) => index !== taskIndex)
            : [...completedTasks, taskIndex];
        setCompletedTasks(updatedCompletedTasks);
    };

    return (
        <TaskContext.Provider value={{ tasks, completedTasks, toggleTaskCompletion }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;