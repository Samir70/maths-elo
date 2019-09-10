import React from 'react';

import Question from './components/Question';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="header" >
        <a href="#">Pick topics</a>
        <h1>Maths R&R -- rate and review your maths</h1>
        <p className="user-rating" >User Rating</p>
      </div>
      <Question  />
    </div>
  );
}

export default App;
