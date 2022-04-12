import React from 'react';

const Quote = ({ children }) => {
  return (
    <div className="quote--inclussion-container blue-box">
      <p>{children}</p>
    </div>
  );
};

export default Quote;
