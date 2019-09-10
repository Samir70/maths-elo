import React from 'react';
import { connect } from 'react-redux';

const Question = ({question}) => {
    return (
        <div>
            <h2>{question}</h2>
            <input classname="answerbox" type="text" name="answerbox" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        question: state.question
    }
}

export default connect(mapStateToProps)(Question);