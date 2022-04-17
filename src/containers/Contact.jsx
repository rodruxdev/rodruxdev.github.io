import ContactButton from '@components/ContactButton';
import Subtitle from '@components/Subtitle';
import React from 'react';
import styles from '@styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={`${styles.contact__title} orange-box`}>
        <Subtitle>CONTACT ME</Subtitle>
      </div>
      <div className={`${styles.contact__links} blue-box`}>
        {/* TODO: Add Link to each button */}
        <ContactButton icon="linkedin">Rodrigo Goitia</ContactButton>
        <ContactButton icon="github">@rodruxdev</ContactButton>
        <ContactButton icon="twitter">@rodruxdev</ContactButton>
        <ContactButton icon="instagram">@rodruxdev</ContactButton>
      </div>
    </div>
  );
};

export default Contact;
