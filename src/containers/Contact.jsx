import ContactButton from '@components/ContactButton';
import Subtitle from '@components/Subtitle';
import Link from 'next/link';
import React from 'react';
import styles from '@styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={`${styles.contact__title} orange-box`}>
        <Subtitle>CONTACT ME</Subtitle>
      </div>
      <div className={`${styles.contact__links} blue-box`}>
        <Link href="https://www.linkedin.com/in/rodrigo-goitia/" passHref>
          <ContactButton social="linkedin">Rodrigo Goitia</ContactButton>
        </Link>
        <Link href="https://github.com/rodruxdev" passHref>
          <ContactButton ContactButton Button social="github">
            @rodruxdev
          </ContactButton>
        </Link>
        <Link href="https://twitter.com/rodruxdev" passHref>
          <ContactButton social="twitter">@rodruxdev</ContactButton>
        </Link>
        <Link href="https://www.instagram.com/rodruxdev" passHref>
          <ContactButton social="instagram">@rodruxdev</ContactButton>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
