import React,{useState} from 'react'

function UseStateWithObject() {
    const [info,setInfo] = useState({
        name: "",
        id: ""
    })
    return (
        <div>
            <form>
                <label>Name:</label>
                <input value={info.name} type="text" onChange={(event)=>setInfo({...info ,name:event.target.value})}></input>
                <label>Id:</label>
                <input value={info.id} type="text" onChange={(event)=>setInfo({...info,id:event.target.value})}></input>
            </form>
            {info.name}
            {info.id}
        </div>
    )
}

export default UseStateWithObject
