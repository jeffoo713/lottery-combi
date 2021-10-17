import React from 'react';

import InputForm from '../input-form/input-form.component';

import './input-container.styles.scss';

const InputContainer = () => (
  <div className='input-container'>
    <h2 className='input-container_title'>Except These Numbers</h2>
    <InputForm />
  </div>
);

export default InputContainer;
