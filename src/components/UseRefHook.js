import React,{useState,useEffect,useRef} from 'react'

const UseRefHook = () => {
    const [name,setName] = useState("")

    const inputRef = useRef(null)
useEffect(()=>{
    inputRef.current.focus()
},[name])
    return (
        <div>
            <input ref={inputRef} type="text" onChange={()=> setName(inputRef.current.value)}></input>
            <p>name is : {name}</p>
        </div>
    )
}

export default UseRefHook
