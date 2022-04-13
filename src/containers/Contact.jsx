import ContactButton from '@components/ContactButton';
import Subtitle from '@components/Subtitle';
import React from 'react';

const Contact = () => {
  return (
    <div>
      <div>
        <Subtitle>CONTACT ME</Subtitle>
      </div>
      <div>
        <ContactButton icon="linkedin">RODRIGO GOITIA</ContactButton>
        <ContactButton icon="github">@rodruxdev</ContactButton>
        <ContactButton icon="twitter">@rodruxdev</ContactButton>
        <ContactButton icon="instagram">@rodruxdev</ContactButton>
      </div>
    </div>
  );
};

export default Contact;
