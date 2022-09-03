// import React, { Component } from 'react'

//  class Counter extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//     count:0
//   }
  
// }
// Increase(){
//     // this.state.count = this.state.count+1;
//     //never modify the state using this method because in ui it does not change it is only used inside of constucter and out of constructer setstate is used
//     this.setState({
//         count:this.state.count+1
//     },()=>{console.log('callback Value',this.state.count);})

//     // here this log acts as sychrounous function call before the set state method is called
//     console.log(this.state.count);


// //     this.setState((prevState)=>({
// //         count:prevState.count+1
// //     }))
// //     console.log(this.state.count);
// //   }
// //   IncrementFive(){
// //       this.Increase
// //       this.Increase
// //       this.Increase
// //       this.Increase
// //       this.Increase
// //   }

//   render() {
//     return (
//       <div>
//           <div>count:{this.state.count}</div>
//           <button onClick={()=>this.Increse()}>increment</button>
//       </div>
//     )
//   }
// }
 

// export default Counter

// // rce snippet for class