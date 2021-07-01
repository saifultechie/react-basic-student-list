import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1> i am {person.name} . i am {person.age } </h1>
        </div>
    )
}

export default Person
