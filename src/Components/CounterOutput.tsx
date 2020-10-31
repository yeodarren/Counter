import React from 'react'

interface CounterOutputProps {
    value: number
}

const CounterOutput: React.FC<CounterOutputProps> = (props) => {
    return (
        <div className='CounterOutput'>
            <h1>Current Counter: {props.value}</h1>
        </div>
    )
}

export default CounterOutput
