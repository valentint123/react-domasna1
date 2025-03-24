import React from 'react';
import Child from './Child';

const Parent = ({ family }) => {
  return (
    <div className="family-tree">
      <h2>Parent: {family.name}</h2>
      <div className="children-container">
        {family.children.map((child, index) => (
          <Child 
            key={index}
            name={child.name} 
            age={child.age} 
            grandchildren={child.grandchildren} 
          />
        ))}
      </div>
    </div>
  );
};

export default Parent;