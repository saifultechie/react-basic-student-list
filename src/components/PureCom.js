import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('pure component')
        return (
            <div>
                <h1>pure component {this.props.name}</h1>
            </div>
        )
    }
}

export default PureComp
