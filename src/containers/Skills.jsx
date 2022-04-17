import SkillsItem from '@components/SkillsItem';
import Subtitle from '@components/Subtitle';
import React from 'react';
import styles from '@styles/Skills.module.css';

const initialClasses = ['', `${styles.skills__next}`, `${styles.skills__previous}`];
const subtitles = ['MY SKILLS', 'MY SOFT SKILLS', 'MY PRINCIPLES'];

const Skills = () => {
  const [classes, setClasses] = React.useState(initialClasses);
  const [subtitle, setSubtitle] = React.useState(subtitles[0]);

  const changeList = () => {
    setTimeout(() => {
      const newClasses = [classes[2], classes[0], classes[1]];
      const index = subtitles.findIndex((item) => item === subtitle);
      const newSubtitle = index < subtitles.length - 1 ? subtitles[index + 1] : subtitles[0];
      setSubtitle(newSubtitle);
      setClasses(newClasses);
    }, 25000);
  };

  React.useEffect(() => {
    changeList();
  }, [classes]);

  return (
    <div className={`${styles.skills} orange-border`}>
      <Subtitle>{subtitle}</Subtitle>
      <div className={styles['skills__list-container']}>
        <ul className={`${styles.skills__list} ${classes[0]}`}>
          <SkillsItem>Develop responsive web pages or web apps with a high level of detail in design and user experience.</SkillsItem>
          <SkillsItem>Use APIs to show and change information in features according the business logic using storytelling.</SkillsItem>
          <SkillsItem>Optimize performance to reduce load time and improve user experience.</SkillsItem>
          <SkillsItem>Ensure great accessibility in features for screen-readers and keyboard navigation.</SkillsItem>
          <SkillsItem>Develop reusable and quality code and its technical documentation.</SkillsItem>
        </ul>
        <ul className={`${styles.skills__list} ${classes[1]}`}>
          <SkillsItem>I look for new points of view and an inclusive work space through effective communication and active listening.</SkillsItem>
          <SkillsItem>I give feedback with honesty and kindness, looking the best way to reach team objectives.</SkillsItem>
          <SkillsItem>I am relentlessly curious in many topics and that makes me look creative and innovative solutions to problems.</SkillsItem>
          <SkillsItem>I am a very organized person and try to reach my objectives fast and effectively.</SkillsItem>
          <SkillsItem>I am in C1 level of English proficiency and I am a Spanish native speaker.</SkillsItem>
        </ul>
        <ul className={`${styles.skills__list} ${classes[2]}`}>
          <SkillsItem>{`Don't be afraid to create, jump and you'll figure it out in the fell.`}</SkillsItem>
          <SkillsItem>Never stop learning and share what you learn.</SkillsItem>
          <SkillsItem>We must take action to revert the climate change, we owe it to nature.</SkillsItem>
          <SkillsItem>{`It's forbidden to exclude, life is diverse and there's the key to grow.`}</SkillsItem>
          <SkillsItem>{`Accept what you can't control and spend time and effort in what you can.`}</SkillsItem>
          <SkillsItem>{`Look after those who you love and care about, people and experience are what life's about.`}</SkillsItem>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
