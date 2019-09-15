import React from 'react';
import { connect } from 'react-redux';
import { UpdateUserAnswer, UserIsCorrect, UserIsWrong } from '../Reducers/actions';
import GetNewQ from '../NewQs/GetNewQ';

const Question = ({ quAndA, userAnswer, wrongAnswers, UpdateUserAnswer, UserIsCorrect, UserIsWrong }) => {
    const changeHandler = (e) => {
        // make sure 1.70 is treate as 1.7
        
        UpdateUserAnswer(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (userAnswer === quAndA.a) { 
            const newQ = GetNewQ();
            UserIsCorrect(2000, newQ)
        } else {
            UserIsWrong(1000, userAnswer)
        }
    }

    const wrongAnswerList = wrongAnswers.map((x, i) => 
        <p key={i}>{x} was wrong</p>)

    return (
        <div>
            <h2>{quAndA.q}</h2>
            <form onSubmit={submitHandler}>
                <input className="answerbox"
                    type="text"
                    name="answerbox"
                    value={userAnswer}
                    onChange={changeHandler} />
            </form>
            {wrongAnswerList}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        quAndA: state.quAndA,
        wrongAnswers: state.wrongAnswers,
        userAnswer: state.userAnswer
    }
}

export default connect(mapStateToProps, { UpdateUserAnswer, UserIsCorrect, UserIsWrong })(Question);