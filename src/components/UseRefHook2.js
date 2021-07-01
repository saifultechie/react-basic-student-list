import React,{useState,useEffect,useRef} from 'react'

const UseRefHook2 = () => {
    const [timer,setTimer] = useState(0)
    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current = setInterval(()=>{
            setTimer(prevState=>prevState+1)
        },1000)
        //componentwillunmount feature
        return () => {
            clearInterval(inputRef.current)
        }

    },[])
    return (
        <div>
            <h1>timer: {timer}</h1>
            <button onClick={()=>clearInterval(inputRef.current)}>push timer</button>
        </div>
    )
}

export default UseRefHook2
