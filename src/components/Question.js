import React from 'react';
import { connect } from 'react-redux';
import { UpdateUserAnswer, UserIsCorrect, UserIsWrong } from '../Reducers/actions'

const Question = ({ quAndA, userAnswer, wrongAnswers, UpdateUserAnswer, UserIsCorrect, UserIsWrong }) => {
    const changeHandler = (e) => {
        UpdateUserAnswer(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (userAnswer === quAndA.a) { 
            UserIsCorrect(2000, {q:'Think of a new number!', a:'41'})
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
                <input classname="answerbox"
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