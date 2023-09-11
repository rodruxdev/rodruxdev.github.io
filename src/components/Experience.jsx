import styles from '@styles/Experience.module.css';
import React from 'react';

const Experience = () => {
  return (
    <div className={styles.experience__container}>
      <div className={`${styles.experience__decoration} blue-border`}></div>
      <div className={`${styles.experience__box} orange-border`}>
        <div className={styles['experience--first']}>
          <h4>Fullstack Developer - Ultra</h4>
          <p>Jan 2023 - Present</p>
          <ul className={styles.experience__list}>
            <li>
              <p>Developed and maintained various features of the CRM, using React.js and PHP.</p>
            </li>
            <li>
              <p>{"Development of a new automation tool for clients' file validation."}</p>
            </li>
            <li>
              <p>Maintenance and development of internal data extraction systems, designed to facilitate data analysis.</p>
            </li>
            <li>
              <p>Ultra is a bolivian startup that facilitate the acquisition of multiple products in flexible and affordable installments, with 100% digital approval in minutes.</p>
            </li>
          </ul>
        </div>
        <div>
          <h4>Frontend Developer - Freelance</h4>
          <p>Mar 2022 - Jan 2023</p>
          <ul className={styles.experience__list}>
            <li>
              <p>Designed and developed a dynamic website, using React.js and Next.js, for the hotel promotion, booking, and guest check-in registration processes.</p>
            </li>
            <li>
              <p>{"Introduced a dedicated section to showcase the hotel's exhibition pieces using QR codes."}</p>
            </li>
            <li>
              <p>Implemented multi-language support, extending its reach and appeal to international guests.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
