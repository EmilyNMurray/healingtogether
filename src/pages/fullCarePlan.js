import React, { useState, useEffect } from 'react';
import '../styles.css'; // Ensure consistent styling

function FullCarePlan() {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    // Fetch tasks from the tasks.txt file
    useEffect(() => {
        fetch('/tasks.txt')
            .then((response) => response.text())
            .then((data) => {
                const taskList = data
                    .split('\n')
                    .filter((line) => line.trim() !== '') // Remove empty lines
                    .map((task) => task.trim());
                setTasks(taskList);
            })
            .catch((error) => console.error('Error loading tasks:', error));
    }, []);

    const toggleTaskCompletion = (task) => {
        setCompletedTasks((prev) =>
            prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
        );
    };

    const isTaskCompleted = (task) => completedTasks.includes(task);

    return (
        <div className="full-care-plan">
            <section className="info-section">
                <h2>Knee Surgery Recovery Plan</h2>
                <p>
                    Recovering from knee surgery is a gradual process that requires attention to physical therapy,
                    proper nutrition, and avoiding overexertion. This plan outlines key tasks and milestones for recovery.
                </p>
                <p>
                    Timeline: <br />
                    <strong>Week 1:</strong> Pain management and light mobility exercises.<br />
                    <strong>Weeks 2-4:</strong> Gradual strengthening and increasing range of motion.<br />
                    <strong>Weeks 4-8: Building strength and resuming daily activities.</strong><br />
                    <strong>Week 9 onwards:</strong> Full recovery and return to normal activities.
                </p>
            </section>

            <section className="task-section">
                <h2>Recovery Task List: Week 7</h2>
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <li key={index} className={isTaskCompleted(task) ? 'task-completed' : ''}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isTaskCompleted(task)}
                                    onChange={() => toggleTaskCompletion(task)}
                                />
                                {task}
                            </label>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="video-section">
                <h2>Week 7 - 10 minute workout to recover from knee surgery:</h2>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/YBw9PZOhePs"
                        title="Knee Surgery Recovery Tips"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
        </div>
    );
}

export default FullCarePlan;