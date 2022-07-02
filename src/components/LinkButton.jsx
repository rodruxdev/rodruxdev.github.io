import React from 'react';
import styles from '@styles/LinkButton.module.css';

const LinkButton = React.forwardRef(function Button({ href, onClick, index, children }, ref) {
  let boxColor = 'blue-box';
  if (index % 2 === 1) {
    boxColor = 'orange-box';
  }
  if (index === -1) {
    boxColor = 'white-box';
  }
  return (
    <a href={href} target="blank" ref={ref} onClick={onClick} className={`${styles['link-button']} ${boxColor}`}>
      {children}
    </a>
  );
});

export default LinkButton;
