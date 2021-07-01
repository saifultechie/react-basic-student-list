import {useState} from 'react'

function CustomHook(val=0){
    const [count,setCount] = useState(val)

    const increment = () => {
        setCount(prevSate=>prevSate+1)
    }

    const decrement = () => {
        setCount(prevSate=>prevSate-1)
    }

    return [count,increment,decrement]
}

export default CustomHook