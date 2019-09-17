import React from 'react';
import { connect } from 'react-redux';
import { UpdateUserAnswer, UserIsCorrect, UserIsWrong } from '../Reducers/actions';
import GetNewQ from '../NewQs/GetNewQ';
import NewRatings from '../Ratings/Ratings';

const Question = ({ quAndA, userAnswer, userRating, wrongAnswers, UpdateUserAnswer, UserIsCorrect, UserIsWrong }) => {
    const changeHandler = (e) => {
        UpdateUserAnswer(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // allow answer like 1.70 when the required answer is 1.7
        // but take care if questions types are included that need a string as an answer
        if (Number(userAnswer) === Number(quAndA.a)) { 
            const newQ = GetNewQ();
            var newR = NewRatings(userRating, 1500, 1, 1)[0]
            UserIsCorrect(newR, newQ)
        } else {
            newR = NewRatings(userRating, 1500, 0, 1)[0]
            UserIsWrong(newR, userAnswer)
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
        userAnswer: state.userAnswer,
        userRating: state.userRating
    }
}

export default connect(mapStateToProps, { UpdateUserAnswer, UserIsCorrect, UserIsWrong })(Question);