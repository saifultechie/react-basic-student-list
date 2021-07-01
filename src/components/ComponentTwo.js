import React, { Component } from 'react'
import ComponentThree from './ComponentThree'
import {UserConsumer} from './UserContext'
class ComponentTwo extends Component {
    render() {
        return (
            <div>
                <ComponentThree></ComponentThree>
                <UserConsumer>
                {
                    (value)=>{
                        return <div>
                            <h1>hello {value} from component two</h1>
                        </div>
                    }
                }
            </UserConsumer>
            </div>
            
        )
    }
}

export default ComponentTwo
