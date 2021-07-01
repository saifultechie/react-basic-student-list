import React,{useReducer} from 'react'
const initialState = {
    value:0,
    value2:10
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'increment' :
            return {
                ...state,
               value: state.value+action.value
            }
        case 'increment2' :
            return {
                ...state,
                value2: state.value2+action.value
            }
        case 'decrement':
            return {
                ...state,
                value: state.value-action.value
             }
        case 'reset':
            return initialState
        default:
            return state
    }
}
const UseReduceHook = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <p>count: {count.value}</p>
            <p>count: {count.value2}</p>
            <button onClick={()=>dispatch({type: 'increment',value:1})}>increment</button>
            <button onClick={()=>dispatch({type: 'decrement',value:1})}>decrement</button>
            <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
            <button onClick={()=>dispatch({type: 'increment',value:5})}>increment Five</button>
            <button onClick={()=>dispatch({type: 'increment2',value:10})}>increment button two</button>
            
        </div>
    )
}

export default UseReduceHook
