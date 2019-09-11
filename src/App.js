import React from 'react';
import { connect } from 'react-redux';

import Question from './components/Question';
import './App.css';

const App = ({userRating}) => {
  return (
    <div className="App">
      <div className="header" >
        <button>Pick topics</button>
        <h1>Maths R&R -- rate and review your maths</h1>
        <p className="user-rating" >User Rating:<br /> {userRating}</p>
      </div>
      <Question  />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userRating: state.userRating
  }
}

export default connect(mapStateToProps)(App);
