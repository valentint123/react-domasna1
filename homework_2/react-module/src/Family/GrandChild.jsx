import React from 'react';

const Grandchild = ({ name, hobby }) => {
  return (
    <div className="grandchild">
      <p>• {name} - Loves {hobby}</p>
    </div>
  );
};

export default Grandchild;