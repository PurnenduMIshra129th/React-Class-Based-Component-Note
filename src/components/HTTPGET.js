//npm install axios
import React, { Component } from 'react'
import axios from 'axios'

 class HTTPGET extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          posts:[],
          error:[]
       }
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response =>{
             console.log(response)
             this.setState({posts:response.data})
         })
         .catch(error =>{
             console.log(error);
             this.setState({
                 errorMesg:"error Retreiving data"
             })
         })
     }
  render() {
      const {posts,errorMesg} = this.state
    return (
      <div>PostList
          {
              posts.length?
              posts.map(post =><div Key={post.id}>{post.title}</div>):null
                  
          }
          errorMesg?<div>{errorMesg}</div>:null
      </div>
    )
  }
}


export default HTTPGET

//https://jsonplaceholder.typicode.com/
