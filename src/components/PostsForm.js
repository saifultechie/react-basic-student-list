import axios from 'axios'
import React, { Component } from 'react'

class PostsForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             job: ""
        }
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeSubmit = (e) =>{
        e.preventDefault()
        axios.post("https://reqres.in/api/users",this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err)

        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={ this.changeSubmit }>
                    <input type="text" name="name" value={this.state.name} onChange={ this.changeHandler }></input>
                    <input type="text" name="job" value={this.state.job} onChange={ this.changeHandler }></input>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default PostsForm
