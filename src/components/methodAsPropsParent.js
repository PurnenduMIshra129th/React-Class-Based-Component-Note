import React, { Component } from 'react'
import MethodAsPropsChild from './methodAsPropsChild'

export class MethodAsPropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:"purnendu"
      }
      this.message = this.message.bind(this)
    }


    message(){
        alert(`hello${this.state.first}`)
    }



  render() {
    return (
      <div>
         
         <MethodAsPropsChild variableName = {this.message}/>
      </div>
    )
  }
}

export default MethodAsPropsParent