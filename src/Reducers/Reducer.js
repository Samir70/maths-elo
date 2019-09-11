import { UPDATE_USER_ANSWER, USER_IS_CORRECT, USER_IS_WRONG } from './actions'

const initialState = {
    userRating: 1500,
    quAndA: {q: 'Think of a number', a: '42'},
    userAnswer: '',
    wrongAnswers: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_IS_CORRECT : return {
            ...state, 
            quAndA:action.quAndA, 
            userRating:action.userRating,
            userAnswer:'', wrongAnswers:[]}
        case USER_IS_WRONG : return {
            ...state,
            userRating: action.userRating,
            wrongAnswers:[...state.wrongAnswers, action.wrongAnswer],
            userAnswer: ''
        }
        case UPDATE_USER_ANSWER : return {...state, userAnswer:action.payload}
        default : return state;
    } 
}

export default reducer;
