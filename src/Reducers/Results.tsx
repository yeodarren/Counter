import { DELETE_RESULT, resultActionTypes, resultState, STORE_RESULT } from "../Actions/actionTypes"

export const resultsReducer: (state: resultState, action: resultActionTypes) => resultState = (state= { results: [] }, action) => {
    switch (action.type) {
        case STORE_RESULT:
            return {results: state.results.concat( { id: new Date(), value: action.result} )}
        case DELETE_RESULT:
            return {results: state.results.filter(result => result.id !== action.resultElId)}
        default:
            return state
    }
}