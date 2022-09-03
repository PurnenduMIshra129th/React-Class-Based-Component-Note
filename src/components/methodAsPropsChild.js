import React from 'react'

 function MethodAsPropsChild(props) {
  return (
    <div>
        <button onClick={props.variableName}>child button</button>
    </div>
  )
}
export default MethodAsPropsChild





// import React, { Component } from 'react'

//  class MethodAsPropsChild extends Component {
//   render() {
//     return (
//       <div>
//           <button >i am child button</button>
//       </div>
//     )
//   }
// }

// export default MethodAsPropsChild