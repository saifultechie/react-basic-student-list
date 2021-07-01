import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "saiful"
        }
        console.log("i am from lifecycle A constructor")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("i am from getderivedstatefroms in lifecycleA ")
        return null
    }

    componentDidMount(){
        console.log("i am from cpmponentDidMount in lifecycle A")
    }

    shouldComponentUpdate(){
        console.log("i am from shouldcomponentupdate A")
        return true
    }
     getSnapshotBeforeUpdate(prevProps,prevState)
     {
        console.log("i am from getsnapshotbeforeupdate in lifecycle A")
        return null
        
     }
     componentDidUpdate()
     {
        console.log("i am from componentdidupdate in lifecycle A")
     }
     changeHandler = ()=>{
         this.setState({
             name:"code evoluation"
         })
     }
    render() {
        console.log("i am from render in lifecycleA")
        return (
            <div>
                <h1>Life cycle A</h1>
                <button onClick={this.changeHandler}>Onchange</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
