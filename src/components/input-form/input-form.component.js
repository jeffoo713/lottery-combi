import React, { useState } from 'react';
import { connect } from 'react-redux';

import { drawNumbersWithExceptions } from '../../redux/numbers/numbers.utils';
import { drawNumbers } from '../../redux/numbers/numbers.actions';

const InputForm = ({ drawNumbers }) => {
  const INITIAL_VALUE = {
    num1: '',
    num2: '',
    num3: '',
    num4: '',
    num5: '',
    num6: '',
  };
  const [numObj, setNumObj] = useState(INITIAL_VALUE);

  const handleChange = event => {
    const { name, value } = event.target;
    setNumObj({ ...numObj, [name]: value });
    console.log(numObj);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const numbersToDraw = drawNumbersWithExceptions(numObj);
    console.log(numbersToDraw);
    drawNumbers(numbersToDraw);

    setNumObj({ ...INITIAL_VALUE });
  };

  return (
    <form className='input-form'>
      <input
        className='input'
        type='number'
        name='num1'
        value={numObj.num1}
        onChange={handleChange}
      />
      <input
        className='input'
        type='number'
        name='num2'
        value={numObj.num2}
        onChange={handleChange}
      />
      <input
        className='input'
        type='number'
        name='num3'
        value={numObj.num3}
        onChange={handleChange}
      />
      <input
        className='input'
        type='number'
        name='num4'
        value={numObj.num4}
        onChange={handleChange}
      />
      <input
        className='input'
        type='number'
        name='num5'
        value={numObj.num5}
        onChange={handleChange}
      />
      <input
        className='input'
        type='number'
        name='num6'
        value={numObj.num6}
        onChange={handleChange}
      />
      <button type='button' onClick={handleSubmit}>
        show me the numbers
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  drawNumbers: numbersToDraw => dispatch(drawNumbers(numbersToDraw)),
});

export default connect(null, mapDispatchToProps)(InputForm);
