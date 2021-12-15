import React from 'react';

import './output-number.styles.scss';

const OutputNumber = ({ number }) => (
  <div className='result-number-block'>
    <h2 className='result-number'>{number}</h2>
  </div>
);

export default OutputNumber;
