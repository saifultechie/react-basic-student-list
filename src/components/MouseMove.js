import React,{useEffect,useState} from 'react'

const MouseMove = () => {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

const countMove = (e) => {
    setX(e.clientX)
    setY(e.clientY)
}
    useEffect(() => {
      console.log("useEffect run")
      window.addEventListener('mousemove',countMove)
    },[])
    return (
        <div>
            <h1>X- {x} and Y- {y}</h1>
        </div>
    )
}

export default MouseMove
