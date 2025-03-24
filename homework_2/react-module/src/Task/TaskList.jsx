import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ items }) => {
    return (
        <div className="task-list-container">
            <h2>Task List</h2>
            <ul className="task-list">
                {items.map((item, index) => (
                    <TaskItem 
                        key={index}
                        name={item.name} 
                        priority={item.priority} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;