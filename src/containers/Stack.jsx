import StackItem from '@components/StackItem';
import Subtitle from '@components/Subtitle';
import React from 'react';
import styles from '@styles/Stack.module.css';

const Stack = () => {
  return (
    <div className={`${styles.stack} blue-border`}>
      <div className={styles.stack__flex}>
        <Subtitle>STACK</Subtitle>
        <ul className={styles.stack__list}>
          <StackItem icon="git">GIT</StackItem>
          <StackItem icon="html">HTML</StackItem>
          <StackItem icon="css">CSS</StackItem>
          <StackItem icon="js">JAVASCRIPT</StackItem>
          <StackItem icon="react">REACT.JS</StackItem>
          <StackItem icon="python">PYTHON</StackItem>
        </ul>
      </div>
    </div>
  );
};

export default Stack;
