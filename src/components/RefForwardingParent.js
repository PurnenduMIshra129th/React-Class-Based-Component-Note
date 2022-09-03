import React, { Component } from 'react'
import RefForwarding from './RefForwarding'

 class RefForwardingParent extends Component {
     constructor(props) {
       super(props)
     this.inputRef = React.createRef()
     }
     clickHandler(){
         this.inputRef.current.focus()
     }
  render() {
    return (
      <div>
          <RefForwarding ref ={this.inputRef}/>
          <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default RefForwardingParent