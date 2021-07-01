import React,{useState,useEffect} from 'react'

const UseEffectHook = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    useEffect(()=>{
        console.log("useEffect run")
        document.title = `count: ${count}`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <h1>Name is :{name}</h1>
            <h1>count: {count} </h1>
            <button onClick={()=>setCount(count+1)}>increment</button>
        </div>
    )
}

export default UseEffectHook
