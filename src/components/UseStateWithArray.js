import React,{useState} from 'react'

function UseStateWithArray() {
    const [lists,setlists] = useState([])
    const incrementList = () =>{
        setlists([...lists,{
            id:lists.length,
            value: Math.random()
        }])
    }
    return (
        <div>
            <button onClick={incrementList}>Click here to add value in list</button>
            <ul>
                {
                    lists.map(list=>{
                        return <li key={list.id}>{list.value}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default UseStateWithArray
