import React from 'react'

interface CounterControlProps {
    label: string,
    clicked: () => void
}

const CounterControl: React.FC<CounterControlProps> = (props) => {
    return (
        <div className='CounterControl' onClick={props.clicked}>
            {props.label}
        </div>
    )
}

export default CounterControl
