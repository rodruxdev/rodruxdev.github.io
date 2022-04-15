import SkillsItem from '@components/SkillsItem';
import Subtitle from '@components/Subtitle';
import React from 'react';
import styles from '@styles/Skills.module.css';

const Skills = () => {
  return (
    <div className={`${styles.skills} orange-border`}>
      <Subtitle>SKILLS</Subtitle>
      <ul className={styles.skills__list}>
        <SkillsItem>Develop responsive web pages or web apps with a high level of detail in design and user experience.</SkillsItem>
        <SkillsItem>Use APIs to show and change information in features according the business logic and following storytelling.</SkillsItem>
        <SkillsItem>Optimize performance to reduce load time and better user experience.</SkillsItem>
        <SkillsItem>Ensure great accesibility in features for screen-readers and keyboard navigation.</SkillsItem>
        <SkillsItem>Develop resuable and quality code and its thecnical documentation.</SkillsItem>
      </ul>
    </div>
  );
};

export default Skills;
