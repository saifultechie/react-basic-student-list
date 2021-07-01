import React,{useContext} from 'react'
import {UserContext,ProfileContext} from '../App'

const ComponentC = () => {
    const username = useContext(UserContext)
    const profile = useContext(ProfileContext)
    return (
        <div>
            <h1>component C</h1>
            <h2>{username} and {profile}</h2>
        </div>
    )
}

export default ComponentC
