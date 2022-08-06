import React from 'react';
import styles from '@styles/LinkButton.module.css';

const LinkButton = React.forwardRef(function Button({ href, onClick, index, target = '_blank', children }, ref) {
  let boxColor = 'blue-box';
  if (index % 2 === 1) {
    boxColor = 'orange-box';
  }
  if (index === -1) {
    boxColor = 'white-box';
  }
  //TODO Change normal button and blog button
  return (
    <a href={href} target={target} ref={ref} onClick={onClick} className={`${styles['link-button__blog']} ${boxColor}`}>
      {children}
    </a>
  );
});

export default LinkButton;
