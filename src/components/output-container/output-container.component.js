import React from 'react';
import { connect } from 'react-redux';

import './output-container.styles.scss';

const OutputContainer = ({ outputNumbers }) => {
  console.log(outputNumbers);
  return (
    <div className='output-container'>
      {Object.keys(outputNumbers)
        .map(key => outputNumbers[key])
        .map((num, i) => (
          <div key={i}>{num}</div>
        ))}
    </div>
  );
};

const mapStateToProps = state => ({ outputNumbers: state.numbers.output });

export default connect(mapStateToProps)(OutputContainer);
