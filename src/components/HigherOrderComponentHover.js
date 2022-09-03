import React, { Component } from 'react'

 class HigherOrderComponentHover extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      IncrementCount=()=>{
          this.setState(prevState =>{return{
              count:prevState.count +1
          }})
      }
  render() {
      const {count} = this.state
    return (
      <div>
          <h2 onMouseOver={this.IncrementCount}>
              Hovered {count} times
          </h2>
      </div>
    )
  }
}

export default HigherOrderComponentHover