import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { counterReducer } from './Reducers/Counter';
import { resultsReducer } from './Reducers/Results';

const middleware=[thunk]

const reducer = combineReducers({
    counter: counterReducer,
    result: resultsReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store