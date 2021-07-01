import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    componentDidMount(){
        document.title = `count ${this.state.count}`
    }
    
    componentDidUpdate(){
        document.title = `count ${this.state.count}`
    }
    render() {
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>increment count</button>
            </div>
        )
    }
}

export default ClassCounterTwo
