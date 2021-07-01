import React, { Component } from 'react'
export default class Welcome extends Component {
    componentWillMount(){
        console.log("component will mount")
    }
    render() {
        console.log("compoent will render")
        return (
            <div>
                <h1> wellcome to {this.props.name} </h1>
            </div>
        )
    }
}

