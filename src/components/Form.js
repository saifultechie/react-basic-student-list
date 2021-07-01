import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'react'
        }
    }

    usernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    changeHandlerComment= (event)=> {
        this.setState({
            comments: event.target.value
        })
    }

    formSubmit= event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        const {username , comments , topic } = this.state
        return (
           <form onSubmit={this.formSubmit}>
               <div>
                   <label>Username</label>
                   <input type="text" value={username} onChange={this.usernameChange}></input>
               </div>
               <div>
                   <label>Comments</label>
                   <textarea value={comments} onChange={this.changeHandlerComment}></textarea>
               </div>
               <div>
                   <select value={topic}>
                       <option>React</option>
                       <option>Vue</option>
                       <option>Angular</option>
                   </select>
               </div>
               <button type="submit">Submit</button>
           </form>
        ) 
    }
}

export default Form
