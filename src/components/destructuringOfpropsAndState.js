// import React from 'react'

// function Destructure({name,title}) {
//     return(
//         <div>
//             my first name is {name} and last name is {title}
//         </div>
//     )
    
// }
// export default Destructure;





// //or
// const Destructure = props =>{
//     const{name,title} = props
//     return(
//         <div>
//             my first name is {name} and last name is {title}
//         </div>
//     )
// }






//for class
import React, { Component } from 'react'

 class Destructure extends Component {
  render() {
      const {name,title} = this.props
    return (
      <div> my first name is {name} and last name is {title}</div>
    )
  }
}

export default Destructure