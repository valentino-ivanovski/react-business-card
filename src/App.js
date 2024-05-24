import React from 'react';
import Businesscard from './Businesscard';
import './App.css';

function test() {
  console.log('test');
}

const App = () => {
  return (
    <div onLoad={test()} className="App">
      <div className='animated-bg'>
        <Businesscard />
      </div>
    </div>
  );
};

export default App;
