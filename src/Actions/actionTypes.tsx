export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export interface countState {
    counter: number
}

export interface resultState {
    results: any[]
}

interface incrementAction {
    type: typeof INCREMENT
}

interface decrementAction {
    type: typeof DECREMENT
}

interface addAction {
    type: typeof ADD
    value: number
}

interface subtractAction {
    type: typeof SUBTRACT
    value: number
}

interface storeResultAction {
    type: typeof STORE_RESULT
    result: number
}

interface deleteResultAction {
    type: typeof DELETE_RESULT
    resultElId: number
}

export type countActionTypes = incrementAction | decrementAction | addAction | subtractAction
export type resultActionTypes = storeResultAction | deleteResultAction