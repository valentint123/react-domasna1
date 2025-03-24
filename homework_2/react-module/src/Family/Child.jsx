

import React from 'react';
import Grandchild from './GrandChild';

const Child = ({ name, age, grandchildren }) => {
  return (
    <div className="child">
      <h3>Child: {name} (Age: {age})</h3>
      {grandchildren && grandchildren.length > 0 && (
        <div className="grandchildren-container">
          <h4>Grandchildren:</h4>
          {grandchildren.map((grandchild, index) => (
            <Grandchild
              key={index}
              name={grandchild.name}
              hobby={grandchild.hobby}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Child;