import Quote from '@components/Quote';
import React from 'react';

const DecorationQuotes = () => {
  return (
    <div>
      <div>
        <Quote>PASSIONATE ABOUT LEARNING</Quote>
        <div></div>
        <Quote>
          {`"INCLUSSION IS THE KEY TO GROWTH"`}
          <br />
          <span>- Jesse Jackson</span>
        </Quote>
      </div>
    </div>
  );
};

export default DecorationQuotes;
