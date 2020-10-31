import { ADD, countActionTypes, DECREMENT, INCREMENT, SUBTRACT } from "./actionTypes"

export const increment: () => countActionTypes = () => {
    return {type: INCREMENT}
}

export const decrement: () => countActionTypes = () => {
    return{type: DECREMENT}
}

export const add: (value: number) => countActionTypes = (value) => {
    return{type: ADD, value:value}
}

export const subtract: (value: number) => countActionTypes = (value) => {
    return{type: SUBTRACT, value:value}
}

// export function increment() : countActionTypes {
//     return {type: INCREMENT}
// }
