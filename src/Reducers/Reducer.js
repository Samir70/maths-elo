const initialState = {
    userRating: 1500,
    question: 'Think of a number',
    answer: '42'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ANSWER_GIVEN" : return {...state, question:'Think of another number'}
        default : return state;
    } 
}

export default reducer;
