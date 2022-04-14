import StackItem from '@components/StackItem';
import Subtitle from '@components/Subtitle';
import React from 'react';

const Stack = () => {
  return (
    <div>
      <Subtitle>STACK</Subtitle>
      <ul>
        <StackItem icon="git">GIT</StackItem>
        <StackItem icon="html">HTML</StackItem>
        <StackItem icon="css">CSS</StackItem>
        <StackItem icon="js">JAVASCRIPT</StackItem>
        <StackItem icon="react">REACT.JS</StackItem>
        <StackItem icon="python">PYTHON</StackItem>
      </ul>
    </div>
  );
};

export default Stack;
