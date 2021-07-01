import React, { Component } from 'react'
import axios from 'axios'

class Posts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response)=>{
                this.setState({
                    posts: response.data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>posts</h1>
                { posts.length ? posts.map((post)=>{
                    return <h1 key={post.id}>{post.title}</h1>
                }): "not any posts" }
            </div>
        )
    }
}

export default Posts
