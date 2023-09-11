import React from 'react';
import { FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNode } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import styles from '@styles/StackItem.module.css';

const icons = {
  git: <FaGitAlt className={styles.stack__icon} />,
  html: <FaHtml5 className={styles.stack__icon} />,
  css: <FaCss3Alt className={styles.stack__icon} />,
  js: <FaJs className={styles.stack__icon} />,
  ts: <BiLogoTypescript className={styles.stack__icon} />,
  python: <FaPython className={styles.stack__icon} />,
  react: <FaReact className={styles.stack__icon} />,
  next: <SiNextdotjs className={styles.stack__icon} />,
  node: <FaNode className={styles.stack__icon} />,
};

const StackItem = ({ icon, children }) => {
  return (
    <li className={styles.stack}>
      {icons[icon]}
      <p className={styles.stack__text}>{children}</p>
    </li>
  );
};

export default StackItem;
