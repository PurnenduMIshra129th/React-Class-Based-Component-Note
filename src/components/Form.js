// import React, { Component } from 'react'

// class Form extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          username:''
//       }
//     }
//     handle =(event)=>{
//         this.setState({
//             username:event.target.value
//         })

//     }
//     handleSubmit = event =>{
//         alert(`${this.state.username}`)
//         event.preventDefault
//     }
//   render() {
//     return (
//      <form onSubmit={this.handleSubmit()}>
//          <div>
//              <label>user name</label>
//              <input type = 'text' value={this.state.username} onChange ={
//                  this.handle
//              }/>
//          </div>
//          <button type='submit'>submit</button>
//      </form>
//     )
//   }
// }

// export default Form