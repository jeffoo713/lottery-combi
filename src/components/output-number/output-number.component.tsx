import React from 'react';

import './output-number.styles.scss';

interface Props {
  number: number;
}

const OutputNumber: React.FC<Props> = ({ number }) => (
  <div className='result-number-block'>
    <h2 className='result-number'>{number}</h2>
  </div>
);

export default OutputNumber;
