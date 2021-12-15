import React from 'react';

import Title from './components/title/title.component';
import InputContainer from './components/input-container/input-container.component';
import OutputContainer from './components/output-container/output-container.component';

import './App.css';

const App = () => (
  <div>
    <Title />
    <InputContainer />
    <OutputContainer />
  </div>
);

export default App;
