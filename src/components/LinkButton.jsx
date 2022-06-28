import React from 'react';

const LinkButton = React.forwardRef(function Button({ href, onClick, children }, ref) {
  return (
    <a href={href} target="blank" ref={ref} onClick={onClick}>
      <div>
        <p>{children}</p>
      </div>
    </a>
  );
});

export default LinkButton;
