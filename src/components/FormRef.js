import React, { Component } from 'react'

export class FormRef extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: 'javascript'
        }
    }
    changeHandler = (e) =>{
        this.setState({
            title: e.target.value
        })
        console.log(e.target.value)
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="enter name" value={this.state.title} onChange={this.changeHandler}></input>
            </div>
        )
    }
}

export default FormRef
