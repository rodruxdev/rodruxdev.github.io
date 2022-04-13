import React from 'react';

const StackItem = ({ icon, children }) => {
  return (
    <li>
      <div>{icon}</div>
      <p>{children}</p>
    </li>
  );
};

export default StackItem;
