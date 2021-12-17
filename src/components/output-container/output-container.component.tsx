import React from 'react';
import { connect } from 'react-redux';

import OutputNumber from '../output-number/output-number.component';

import './output-container.styles.scss';

interface Props {
  outputNumbers: any; // outputNumbers: any will be fixed
}

const OutputContainer: React.FC<Props> = ({ outputNumbers }) => {
  console.log(outputNumbers);
  return (
    <div className='output-container'>
      {Object.keys(outputNumbers)
        .map(key => outputNumbers[key])
        .map((num, i) => (
          <OutputNumber key={i} number={num} />
        ))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  // state: any will be fixed
  outputNumbers: state.numbers.output,
});

export default connect(mapStateToProps)(OutputContainer);
