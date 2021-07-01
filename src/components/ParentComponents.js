import React, { Component } from 'react'
import RegComponent from './RegComponent'
import PureComponent from './PureCom.js'
import MemoCom from './MemoFunction'
class ParentComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'saiful'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'saiful'
            })
        },2000)
    }
    render() {
        console.log('parent component')
        return (
            <div>
                <h1>parent component</h1>
                <MemoCom name={this.state.name}></MemoCom>
            </div>
        )
    }
}

export default ParentComponents
