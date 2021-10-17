import React from 'react';

import Title from './components/title/title.component';
import InputContainer from './components/input-container/input-container.component';
import InputForm from './components/input-form/input-form.component';
import OutputContainer from './components/output-container/output-container.component';
import OutputNumber from './components/output-number/output-number.component';

import './App.css';

const App = () => (
  <div className='main'>
    <Title />
    <InputContainer>
      <h2>Except Theses Numbers</h2>
      <InputForm />
    </InputContainer>
    <OutputContainer>
      {[11, 4, 27, 42, 15, 30].map((num, i) => (
        <OutputNumber key={i} number={num} />
      ))}
    </OutputContainer>
  </div>
);

export default App;
