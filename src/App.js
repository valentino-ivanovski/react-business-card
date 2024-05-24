import React from 'react';
import Businesscard from './Businesscard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='gradient'></div>
        <div className='content'>
          <Businesscard />
        </div>
        <div className='blob'></div>
    </div>
  );
};

export default App;
