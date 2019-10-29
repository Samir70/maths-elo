export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER';
export const USER_IS_CORRECT = 'USER_IS_CORRECT';
export const USER_IS_WRONG = 'USER_IS_WRONG';
export const TOGGLE_CLASS = 'TOGGLE_CLASS';

export const UpdateUserAnswer = (newAnswer) => {
    return { type: UPDATE_USER_ANSWER, payload: newAnswer}
}

export const UserIsCorrect = (newUserRating, newQuAndA) => {
    return { type:USER_IS_CORRECT, userRating: newUserRating, quAndA: newQuAndA }
}

export const UserIsWrong = (newUserRating, userAnswer, newQuAndARating) => {
    return { type:USER_IS_WRONG, userRating: newUserRating, 
        wrongAnswer:userAnswer, newQuAndARating:newQuAndARating }
}

export const ToggleClass = () => {
    return {type:TOGGLE_CLASS}
}
