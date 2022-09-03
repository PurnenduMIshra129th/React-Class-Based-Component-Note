// import React, { Component } from 'react'


//  class HigherOrderComponent extends Component {
//      constructor(props) {
//        super(props)
     
//        this.state = {
//           count:0
//        }
//      }
//      IncrementCount=()=>{
//          this.setState(prevState =>{return{
//              count:prevState.count +1
//          }})
//      }
//   render() {
//       const {count} = this.state
//     return (
//       <div>
//           <button onClick={this.IncrementCount}>Clicked {count} Times</button>
//       </div>
//     )
//   }
// }
// export default  HigherOrderComponent

//or

import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderComponentConcept'


 class HigherOrderComponent extends Component {
     
  render() {
      
      const {count,IncrementCount}= this.props
    return (
      <div>
          <button onClick={IncrementCount}> Clicked {count} Times</button>
      </div>
    )
  }
}



export default  UpdatedComponent(HigherOrderComponent)