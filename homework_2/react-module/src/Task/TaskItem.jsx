import React from 'react';
import './TaskList.css';

const TaskItem = ({ name, priority }) => {
    
    const getPriorityColor = () => {
        switch(priority.toLowerCase()) {
            case 'high': return 'red';
            case 'medium': return 'orange';
            case 'low': return 'green';
            default: return 'gray';
        }
    };

    return (
        <li className="task-item">
            <span className="task-name">{name}</span>
            <span 
                className="task-priority"
                style={{ color: getPriorityColor() }}
            >
                {priority}
            </span>
        </li>
    );
};

export default TaskItem;