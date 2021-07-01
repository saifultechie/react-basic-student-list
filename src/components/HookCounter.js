import React,{useState} from 'react'

function HookCounter() {
    const [count,setCount] = useState(0)
   const increment = () =>{
        for(let i=0 ; i<10 ; i++){
            setCount((prevState)=> prevState+1)
        }
    }
    return (
        <div>
            <h1>value: {count} from hook component</h1>
            {/* <button onClick={()=>setCount(count+1)}>Increment value</button> */}
            <button onClick={()=>increment()}>increment value</button>
        </div>
    )
}

export default HookCounter
