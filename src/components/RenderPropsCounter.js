import React, { Component } from 'react'

class RenderPropsCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      IncrementCount =()=>{
          this.setState(PrevState=>{
             return {
                 count:PrevState.count+1
             }
          })
           
             
          
      }
  render() {
    return (
      <div>
          {this.props.render(this.state.count,this.IncrementCount)}
      </div>
    )
  }
}

export default RenderPropsCounter