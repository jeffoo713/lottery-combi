import React, { useState } from 'react';

const INITIAL_VALUE = {
  num1: '',
  num2: '',
  num3: '',
  num4: '',
  num5: '',
  num6: '',
};

const InputForm = () => {
  const [numObj, setNumObj] = useState(INITIAL_VALUE);

  const handleChange = event => {
    event.preventDefault();

    const { name, value } = event.target;
    setNumObj({ ...numObj, [name]: value });
    console.log(numObj);
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
      <input type='submit' />
    </form>
  );
};

export default InputForm;
