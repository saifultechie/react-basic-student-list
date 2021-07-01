import React, { Component } from 'react'
import ComponentTwo from './ComponentTwo'

class ComponentOne extends Component {
    render() {
        return (
            <div>
                <ComponentTwo></ComponentTwo>
            </div>
        )
    }
}

export default ComponentOne
