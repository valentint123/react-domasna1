import "./UserProfile.css";
import React from "react";

class UserProfileClass extends React.Component {
  render() {
    const { name, age, hobby } = this.props;

    return (
      <div className="user-card">
        <h2>Class-based Component</h2>
        <div className="user-info">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Age:</strong> {age}
          </p>
          <p>
            <strong>Hobby:</strong> {hobby}
          </p>
        </div>
      </div>
    );
  }
}

export default UserProfileClass;
