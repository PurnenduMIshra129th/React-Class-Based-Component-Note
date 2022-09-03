import React, { Component } from 'react'
import UserContext from './ContexrUser'
import ContextF from './ContextF'

 class ContextE extends Component {
  render() {
    return (
      <div>
          Component E context {this.context}
          <ContextF/>
          </div>
    )
  }
}
ContextE.contextType = UserContext

export default ContextE