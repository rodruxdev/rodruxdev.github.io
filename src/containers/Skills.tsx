import { useState } from 'react';
import type { ChangeEvent } from 'react';
import SkillsItem from '@components/SkillsItem';
import SkillsSelector, { type SkillIndex } from '@components/SkillsSelector';
import styles from '@styles/Skills.module.css';

const subtitles = ['MY SKILLS', 'MY SOFT SKILLS', 'MY VALUES'] as const;
const classesByIndex: Record<SkillIndex, readonly [string, string, string]> = {
  0: ['', styles.skills__next, styles.skills__next],
  1: [styles.skills__previous, '', styles.skills__next],
  2: [styles.skills__previous, styles.skills__previous, ''],
};

const isSkillIndex = (value: number): value is SkillIndex => value === 0 || value === 1 || value === 2;

export default function Skills() {
  const [index, setIndex] = useState<SkillIndex>(0);
  const classes = classesByIndex[index];

  function handleChangeSkills(event: ChangeEvent<HTMLInputElement>) {
    const nextIndex = Number(event.currentTarget.value);
    if (isSkillIndex(nextIndex)) {
      setIndex(nextIndex);
    }
  }

  return (
    <div className={`${styles.skills} orange-border`}>
      <h3 id="skills-subtitle" aria-live="polite" aria-atomic="true">
        {subtitles[index]}
      </h3>
      <div className={styles['skills__list-container']}>
        <ul id="skills-list-1" className={`${styles.skills__list} ${classes[0]}`} aria-hidden={index !== 0}>
          <SkillsItem>Develop responsive web pages or web apps with a high level of detail in design and user experience.</SkillsItem>
          <SkillsItem>Use APIs to show and change information in features according the business logic using storytelling.</SkillsItem>
          <SkillsItem>Optimize performance to reduce load time and improve user experience.</SkillsItem>
          <SkillsItem>Ensure great accessibility in features for screen-readers and keyboard navigation.</SkillsItem>
          <SkillsItem>Develop reusable and quality code and its technical documentation.</SkillsItem>
        </ul>
        <ul id="skills-list-2" className={`${styles.skills__list} ${classes[1]}`} aria-hidden={index !== 1}>
          <SkillsItem>I look for new points of view and an inclusive work space through effective communication and active listening.</SkillsItem>
          <SkillsItem>I give feedback with honesty and kindness, looking the best way to reach team objectives.</SkillsItem>
          <SkillsItem>I am relentlessly curious in many topics and that makes me look creative and innovative solutions to problems.</SkillsItem>
          <SkillsItem>I am a very organized person and try to reach my objectives fast and effectively.</SkillsItem>
          <SkillsItem>I am in C1 level of English proficiency and I am a Spanish native speaker.</SkillsItem>
        </ul>
        <ul id="skills-list-3" className={`${styles.skills__list} ${classes[2]}`} aria-hidden={index !== 2}>
          <SkillsItem>Don't be afraid to create, jump and you'll figure it out in the fell.</SkillsItem>
          <SkillsItem>Never stop learning and share what you learn.</SkillsItem>
          <SkillsItem>We must take action to revert the climate change, we owe it to nature.</SkillsItem>
          <SkillsItem>It's forbidden to exclude, life is diverse and there's the key to grow.</SkillsItem>
          <SkillsItem>Accept what you can't control and spend time and effort in what you can.</SkillsItem>
          <SkillsItem>Look after those who you love and care about, people and experience are what life's about.</SkillsItem>
        </ul>
      </div>
      <SkillsSelector value={index} onChange={handleChangeSkills} animation={index === 0} />
    </div>
  );
}
