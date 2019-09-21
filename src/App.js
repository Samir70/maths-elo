import React from 'react';
import { connect } from 'react-redux';

import Question from './components/Question';
import ClassRoom from './components/ClassRoom';
import { ToggleClass } from './Reducers/actions';
import './App.css';

const App = ({userRating, currentQType, showClassRoom, ToggleClass}) => {
  const giveme5btn = <button 
    className='toggleClass-btn'
    onClick={ToggleClass} >Give me 5 in the class room</button>
  const giveMeTestsbtn = <button 
    className='toggleClass-btn'
    onClick={ToggleClass} >Take me back to the test room</button>
  return (
    <div className="App">
      <div className="header" >
        {showClassRoom ? giveMeTestsbtn : giveme5btn }
        <h1>Maths R&R -- rate and review your maths</h1>
        <p className="user-rating" >User Rating:<br /> {userRating}</p>
      </div>
      {showClassRoom ? <ClassRoom QType={currentQType} /> : <Question  />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userRating: state.userRating,
    currentQType: state.quAndA.QType,
    showClassRoom: state.showClassRoom
  }
}


export default connect(mapStateToProps, {ToggleClass})(App);
