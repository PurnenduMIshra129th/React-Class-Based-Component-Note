import React, { Component } from 'react'

 class RenderPropsUser extends Component {
  render() {
    return (
    //   <div>{this.props.name}</div>
    <div>{this.props.render("true")}</div>
    // <div>{this.props.name("true")}</div>
    )
  }
}
//here name function can be changed with only render

export default RenderPropsUser