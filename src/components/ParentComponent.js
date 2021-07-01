import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "saiful"

        }
        this.greet = this.greet.bind(this)
    }

    greet(child){
        alert(` hello ${this.state.parentName} and from ${child} `)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={ this.greet }></ChildComponent>
            </div>
        )
    }
}
 