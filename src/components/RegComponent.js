import React, { Component } from 'react'

class RegComponent extends Component {
    render() {
        console.log('reg component')
        return (
            <div>
                <h1>Reg component {this.props.name}</h1>
            </div>
        )
    }
}

export default RegComponent
