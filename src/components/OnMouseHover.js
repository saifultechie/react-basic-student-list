import React, { Component } from 'react'
import withCount from './withCount'
class OnMouseHover extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                 <button onMouseOver={this.props.increment}> clicked {this.props.count} times</button>
            </div>
        )
    }
}

export default withCount(OnMouseHover)
