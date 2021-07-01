import React,{useState} from 'react'
import CustomHook from './CustomHook'

const CounterBCustomHook = () => {
    const [count,increment,decrement] = CustomHook()
    return (
        <div>
            <p>count : {count} </p>
            <button type="text" onClick={()=>increment()}>increment</button>
            <button onClick={()=>decrement()}>decrement</button>
            <h1>From compoent B counter</h1>
        </div>
    )
}

export default CounterBCustomHook
