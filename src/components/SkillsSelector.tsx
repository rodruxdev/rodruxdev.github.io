import type { ChangeEvent } from 'react';
import styles from '@styles/SkillsSelector.module.css';

export type SkillIndex = 0 | 1 | 2;

interface Props {
  value: SkillIndex;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  animation: boolean;
}

export default function SkillsSelector({ value, onChange, animation }: Props) {
  return (
    <div className={styles['skills-selector']}>
      <label htmlFor="list-1" className={styles['skills-selector__label']}>
        <input
          className={styles['skills-selector__input']}
          id="list-1"
          type="radio"
          name="skills"
          value="0"
          checked={value === 0}
          onChange={onChange}
          aria-label="See my skills"
          aria-controls="skills-list-1"
        />
      </label>
      <label htmlFor="list-2" className={`${styles['skills-selector__label']} ${animation ? styles['skills-selector__label--pulse'] : ''}`}>
        <input
          className={styles['skills-selector__input']}
          id="list-2"
          type="radio"
          name="skills"
          value="1"
          checked={value === 1}
          onChange={onChange}
          aria-label="See my soft skills"
          aria-controls="skills-list-2"
        />
      </label>
      <label htmlFor="list-3" className={styles['skills-selector__label']}>
        <input
          className={styles['skills-selector__input']}
          id="list-3"
          type="radio"
          name="skills"
          value="2"
          checked={value === 2}
          onChange={onChange}
          aria-label="See my values"
          aria-controls="skills-list-3"
        />
      </label>
    </div>
  );
}
