import React, { Component } from 'react'
import {UserConsumer} from './UserContext'
class ComponentThree extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (value)=>{
                        return <div>
                            <h1>hello {value} from component three</h1>
                        </div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentThree
