import React from 'react';
import './UserProfile.css'; // Same styling file

const UserProfileFunction = ({ name, age, hobby }) => {
  return (
    <div className="user-card">
      <h2>Functional Component</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Hobby:</strong> {hobby}</p>
      </div>
    </div>
  );
};

export default UserProfileFunction;