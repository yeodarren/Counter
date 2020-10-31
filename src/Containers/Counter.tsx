import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, decrement, increment, subtract } from '../Actions/Counter'
import { deleteResults, storeResults } from '../Actions/Results'
import CounterControl from '../Components/CounterControl'
import CounterOutput from '../Components/CounterOutput'


const Counter: React.FC = () => {
    const dispatch = useDispatch()

    const counter = useSelector((state: any) => state.counter)
    const { counter: ctr } = counter

    const result = useSelector((state: any) => state.result)
    const { results } = result

    const onIncrementCounter = () => {
        dispatch(increment())
    }

    const onDecrementCounter = () => {
        dispatch(decrement())
    }

    const onAddCounter = () => {
        dispatch(add(10))
    }

    const onSubtractCounter = () => {
        dispatch(subtract(10))
    }

    const storeResultHandler = (res: number) => {
        dispatch(storeResults(res))
    }

    const deleteResultHandler = (id: number) => {
        dispatch(deleteResults(id))
    }

    return (
        <div>
            <CounterOutput value={ctr} />
            <CounterControl label='Increment' clicked={onIncrementCounter} />
            <CounterControl label='Decrement' clicked={onDecrementCounter} />
            <CounterControl label='Add 10' clicked={onAddCounter} />
            <CounterControl label='Subtract 10' clicked={onSubtractCounter} />
            <button onClick={() => {storeResultHandler(ctr)}}>Store results</button>
            <ul>
                {results.map((res: { id: number; value: number }) => (
                    <li key={res.id} onClick={() => deleteResultHandler(res.id)} >{res.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default Counter
