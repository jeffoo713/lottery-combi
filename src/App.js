import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className='title'>
          <h1>LOTTERY COMBINATION</h1>
        </div>
        <div className='input-container'>
          <h2>Except Theses Numbers</h2>
          <form className='form'>
            <input className='input' type='number' name='num1' />
            <input className='input' type='number' name='num2' />
            <input className='input' type='number' name='num3' />
            <input className='input' type='number' name='num4' />
            <input className='input' type='number' name='num5' />
            <input className='input' type='number' name='num6' />
            <input type='submit' />
          </form>
        </div>
        <div className='result-container'>
          <h2 className='result1'>24</h2>
          <h2 className='result1'>33</h2>
          <h2 className='result1'>12</h2>
          <h2 className='result1'>5</h2>
          <h2 className='result1'>29</h2>
          <h2 className='result1'>44</h2>
        </div>
      </div>
    );
  }
}

export default App;
