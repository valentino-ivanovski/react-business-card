import React from 'react';
import Businesscard from './Businesscard';
import './App.css';

function test() {
  console.log('test');
}

const App = () => {
  return (
    <div onLoad={test()} className="App">
      <Businesscard />
    </div>
  );
};

export default App;
