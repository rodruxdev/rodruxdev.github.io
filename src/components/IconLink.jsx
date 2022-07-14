import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import styles from '@styles/IconLink.module.css';

const IconLink = React.forwardRef(function Button({ href, onClick, children }, ref) {
  return (
    <div className={styles['icon-link-container']}>
      <a href={href} target="blank" ref={ref} onClick={onClick} className={`${styles['icon-link']}`}>
        <span className={`${styles['icon-link__text']}`}>{children}</span>
        <div className={`${styles['icon-link__icon-container']}`}>
          <BsArrowRight className={`${styles['icon-link__icon']}`} />
        </div>
      </a>
    </div>
  );
});

export default IconLink;
