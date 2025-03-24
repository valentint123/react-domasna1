
import './App.css'
import TaskList from './Task/TaskList'
import React from 'react';
import UserProfileClass from './UserProfile/UserProfileClass';
import UserProfileFunction from './UserProfile/UserProfileFunction';
import Parent from './Family/Parent';
function App() {
    const userData = {
      name: "John Doe",
      age: 28,
      hobby: "Hunting"
    };
    const tasks = [
        { name: "Learn React", priority: "High" },
        { name: "Do Groceries", priority: "Low" },
        { name: "Exercise", priority: "High" },
        { name: "Read a Book", priority: "Medium" },
    ];
    const family = {
        name: "John (Parent)",
        children: [
          {
            name: "Alex (Child)",
            age: 30,
            grandchildren: [
              { name: "Liam (Grandchild)", hobby: "Playing Soccer" },
              { name: "Sophia (Grandchild)", hobby: "Drawing" },
            ],
          },
          {
            name: "Emma (Child)",
            age: 28,
            grandchildren: [{ name: "Noah (Grandchild)", hobby: "Reading" }],
          },
        ],
      };
  
    return (
    //   <div className="App">
    //     <h1>User Profile Comparison</h1>
    //     <div className="components-container">
    //       <UserProfileClass 
    //         name={userData.name} 
    //         age={userData.age} 
    //         hobby={userData.hobby} 
    //       />
    //       <UserProfileFunction 
    //         name={userData.name} 
    //         age={userData.age} 
    //         hobby={userData.hobby} 
    //       />
          
    //     </div>
       
        
    //   </div>
    // <div className="App">
    //         <h1>My Task Manager</h1>
    //         <TaskList items={tasks} />
    //     </div>
    <div className="app">
      <h1>Family Tree</h1>
      <Parent family={family} />
    </div>
      
    );
  }
  
  export default App;