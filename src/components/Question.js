import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { UpdateUserAnswer, UserIsCorrect, UserIsWrong } from '../Reducers/actions';
import GetNewQ from '../NewQs/GetNewQ';
import NewRatings from '../Ratings/Ratings';

const Question = ({ 
            quAndA, userAnswer, userRating, wrongAnswers, 
            UpdateUserAnswer, UserIsCorrect, UserIsWrong }) => {
    const changeHandler = (e) => {
        UpdateUserAnswer(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // allow answer like 1.70 when the required answer is 1.7
        // converting to Number will do this
        // but take care if questions types are included that need a string as an answer
        switch (quAndA.answerFormat) {
            case 'string' : {
                var userIsCorrect = userAnswer.toLowerCase() === quAndA.a.toLowerCase(); 
                break
            }
            default: userIsCorrect = Number(userAnswer) === Number(quAndA.a)
        }
        if (userIsCorrect) { 
            const newQ = GetNewQ('', '');
            var [newUserRating, newQuAndARating] = NewRatings(userRating, quAndA.QRating||1500, 1, 1);
            //console.log('QType, QRating, old, new:', quAndA.QType, quAndA.QRating, newQuAndARating);
            const toGet = {qType : newQ.QType};
            axios.get('/qratings/get1rating', {params:toGet})
            .then(res => {
                console.log(res.data);
                newQ.QRating = res.data.rating;
                UserIsCorrect(newUserRating, newQ);
            })
            .catch(err => console.log(err))
        } else {
            [newUserRating, newQuAndARating] = NewRatings(userRating, 1500, 0, 1);
            //console.log('QType, QRating, old, new:', quAndA.QType, quAndA.QRating, newQuAndARating);
            UserIsWrong(newUserRating, userAnswer, newQuAndARating)
        }
        const toPost = {
            category: quAndA.QType,
            ratingValue: newQuAndARating
        }
        axios.post('/qratings/new-data', toPost)
          .then(res => console.log(res))
          .catch(err => console.log(err));
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
            <p>the question has a rating of {quAndA.QRating}</p>
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