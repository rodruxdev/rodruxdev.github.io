import React from 'react';
import styles from '@styles/IconLink.module.css';

const IconLink = React.forwardRef(function Button({ href, onClick, children }, ref) {
  return (
    <a href={href} target="blank" ref={ref} onClick={onClick} className={`${styles['icon-link']}`}>
      <span className={`${styles['icon-link__text']}`}>{children}</span>
      <div className={`${styles['icon-link__icon-container']}`}>
        <div className={`${styles['icon-link__icon']}`} />
      </div>
    </a>
  );
});

export default IconLink;
