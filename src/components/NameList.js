import React from 'react'
import Person from './Person'

function NameList() {
    const names = ["saiful","jakir","rakib","saiful"]
    const persons = [
        {
            id: 1,
            name: "saiful",
            age: 23
        },
        {
            id: 2,
            name: "rakib",
            age: 24
        },
        {
            id: 3,
            name: "belal",
            age: 24
        }
    ]
    const personList = names.map((person,index) => (
        <h1 key={index}> {index} {person}</h1>
    ) )
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
