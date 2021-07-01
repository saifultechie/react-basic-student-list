import React from 'react'

export const Greet = (props) => {
    return (
        <div>
           <h1>your name is {props.name}</h1>
           <h>{props.children}</h>
           <p>your designation is {props.designation}</p>
        </div>
    )
}

export default Greet
