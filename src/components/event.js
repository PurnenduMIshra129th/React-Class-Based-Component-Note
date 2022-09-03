// import React from 'react'

// function Event() {
//     function display() {
//         return console.log("hello");
//     }
//   return (
//     <div>
//         <button onClick={display}>
//             click
//         </button>
//     </div>
//   )
// }

// export default Event



//or
import React, { Component } from 'react'

 class Event extends Component {
     display(){
         console.log("hello");
     }
  render() {
    return (
      <div><button onClick={this.display}>
          click</button></div>
    )
  }
}

export default Event