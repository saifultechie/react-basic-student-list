import React,{useContext} from 'react'
import {CountContext} from '../App'

const ComponentX = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            componnent - x
           <p>count : {countContext.countValue}</p>
           <button onClick={()=>countContext.countDispatch('increment')}>increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>reset</button>     
        </div>
    )
}

export default ComponentX
