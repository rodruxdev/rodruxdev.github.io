import React from 'react';

const ContactButton = ({ icon, children }) => {
  return (
    <div>
      <a aria-label="Rodrux Instagram">
        <div>{icon}</div>
        {children}
      </a>
    </div>
  );
};

export default ContactButton;
