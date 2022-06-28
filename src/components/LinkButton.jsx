import React from 'react';
import styles from '@styles/LinkButton.module.css';

const LinkButton = React.forwardRef(function Button({ href, onClick, children }, ref) {
  return (
    <a href={href} target="blank" ref={ref} onClick={onClick} className={`${styles['link-button']} white-box`}>
      {children}
    </a>
  );
});

export default LinkButton;
