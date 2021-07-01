import React,{useState} from 'react'
import MouseMove from './MouseMove'

const MouseContainer = () => {
    const [show,setShow] = useState(true)
    return (
        <div>
            <button onClick={()=>setShow(!show)}>toggle</button>
            { show && <MouseMove></MouseMove> }
        </div>
    )
}

export default MouseContainer
