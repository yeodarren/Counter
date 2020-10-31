import {ADD, countActionTypes, countState, DECREMENT, INCREMENT, SUBTRACT} from '../Actions/actionTypes'

const initialState: countState = {
    counter: 0
}

export const counterReducer: (state: countState, action: countActionTypes) => countState = (state=initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {counter: state.counter + 1}
        case DECREMENT:
            return {counter: state.counter - 1}
        case ADD:
            return {counter: state.counter + action.value}
        case SUBTRACT:
            return {counter: state.counter + action.value}
        default:
            return state
    }
}