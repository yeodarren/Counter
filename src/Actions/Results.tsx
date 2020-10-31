import { DELETE_RESULT, resultActionTypes, STORE_RESULT } from "./actionTypes"

export const storeResults: (res: number) => resultActionTypes = (res) => {
    return{type: STORE_RESULT, result: res}
}

export const deleteResults: (resElId: number) => resultActionTypes = (resElId) => {
    return{type: DELETE_RESULT, resultElId: resElId}
}