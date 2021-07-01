import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "saiful"
        }
        console.log("i am from lifecycle B constructor")
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("i am from getderivedstatefroms in lifecycleB ")
        return null
    }

    shouldComponentUpdate(){
        console.log("i am from shouldcomponentupdate B")
        return true
    }
     getSnapshotBeforeUpdate(prevProps,prevState)
     {
        console.log("i am from getsnapshotbeforeupdate in lifecycle B")
        return null
        
     }
     componentDidUpdate()
     {
        console.log("i am from componentdidupdate in lifecycle B")
     }
    
    componentDidMount(){
        console.log("i am from cpmponentDidMount in lifecycle B")
    }
    render() {
        console.log("i am from render in lifecycleB")
        return (
            <div>
                <h1>Life cycle B</h1>
            </div>
        )
    }
}

export default LifeCycleB
