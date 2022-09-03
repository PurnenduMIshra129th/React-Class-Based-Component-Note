import React, { Component } from 'react'

 class RenderProps extends Component {
    //  constructor(props) {
    //    super(props)
     
    //    this.state = {
    //       count:0
    //    }
    //  }
    //  IncrementCount =()=>{
    //      this.setState(PrevState=>{
    //         return {
    //             count:PrevState.count+1
    //         }
    //      })
          
            
         
    //  }
  render() {
    //   const {count}= this.state
    const {count,IncrementCount} =this.props
    return (
    //  <button onClick={this.IncrementCount}>
    //      clicked {count} times
    //  </button>
     <button onClick={IncrementCount}>
         clicked {count} times
     </button>
    )
  }
}

export default RenderProps