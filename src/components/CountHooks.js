import React,{useState,useEffect} from 'react'

export default function CountHooks() {
    const [count,setCount] = useState(100)
    const [age,setAge] = useState(43)
    useEffect(()=>{
        console.log('count is updated')
    },[age])
    return (
        <div>
            <h1>Count value: {count}</h1>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>setCount((prev)=> prev-1)}>Decrement</button>
            <div>
                <h1>Age is : {age} </h1>
                <button onClick={()=>setAge(age+1)}>Increment Age</button>
            </div>
        </div>
    )
}
