import React, { Component } from 'react'

 class Condition extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          IsLoggedIn:false
       }
     }
  render() {
   
    // if (this.state.IsLoggedIn) {
    //     return<div>welcome purnendu</div>
        
    // } else {
    //     return<div>welcome likun</div>
    // }




    //or
    // let message
    // if (this.state.IsLoggedIn) {
    //     message = <div>hello purnendu</div>
        
    // } else {
    //     message = <div>welcome likun</div>
        
    // }
    // return <div>{message}</div>


    //or
    return this.state.IsLoggedIn?(<div>hello purnendu</div>):(<div>hello likun</div>)
  }
}
export default Condition