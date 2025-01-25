import React, { useState, useEffect } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        //fetch the tasks from the text file
        //https://www.robinwieruch.de/react-hooks-fetch-data/
        //https://www.youtube.com/watch?v=x1XlMWx9riw
        fetch('/tasks.txt')
            .then((response) => response.text())
            .then((data) => {
                const taskArray = data
                    .split('\n') 
                    .filter((line) => line.trim() !== '') 
                    .map((text, index) => ({
                        id: index,
                        text: text.trim(),
                        completed: false,
                    }));
                setTasks(taskArray);
            })
            .catch((error) => console.error('Error loading tasks:', error));
    }, []);

    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="task-list">
            <h2>Recovery Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'task-completed' : ''}>
                        <label>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                            />
                            {task.text}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;