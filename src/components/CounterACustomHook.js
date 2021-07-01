import React,{useState} from 'react'
import CustomHook from './CustomHook'
const CounterACustomHook = () => {
    const [count,increment,decrement] = CustomHook(10)

    return (
        <div>
            <p>count : {count} </p>
            <button type="text" onClick={()=>increment()}>increment</button>
            <button onClick={()=>decrement()}>decrement</button>
            <h1>From compoent A counter</h1>
        </div>
    )
}

export default CounterACustomHook
