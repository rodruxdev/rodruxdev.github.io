import React from 'react';
import styles from '@styles/SkillsSelector.module.css';

const SkillsSelector = ({ handleChange, animation }) => {
  return (
    <div className={styles['skills-selector']} onChange={handleChange}>
      <label htmlFor="list-1" className={styles['skills-selector__label']} aria-label="See my skylls">
        <input className={styles['skills-selector__input']} id="list-1" type="radio" name="skills" value="0" defaultChecked />
      </label>
      <label htmlFor="list-2" className={`${styles['skills-selector__label']} ${animation && styles['skills-selector__label--pulse']}`} aria-label="See my soft skylls">
        <input className={styles['skills-selector__input']} id="list-2" type="radio" name="skills" value="1" />
      </label>
      <label htmlFor="list-3" className={styles['skills-selector__label']} aria-label="See my values">
        <input className={styles['skills-selector__input']} id="list-3" type="radio" name="skills" value="2" />
      </label>
    </div>
  );
};

export default SkillsSelector;
